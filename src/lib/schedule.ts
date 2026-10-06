import { schedule } from "./content";

function tzOffsetMs(instant: number, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(instant));
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return asUtc - (instant - (instant % 1000));
}

/** Convert a wall-clock time in `timeZone` to a UTC epoch (ms). */
export function zonedTimeToUtc(y: number, m: number, d: number, h: number, min: number, timeZone: string): number {
  const guess = Date.UTC(y, m, d, h, min);
  const first = guess - tzOffsetMs(guess, timeZone);
  return guess - tzOffsetMs(first, timeZone);
}

/** Next session start (ms). A session stays "current" until 15 minutes after it starts. */
export function nextSessionStart(now = Date.now()): number {
  const graceMs = 15 * 60 * 1000;
  for (let i = 0; i < 8; i++) {
    const day = new Date(now + i * 86_400_000);
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: schedule.timeZone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
    }).formatToParts(day);
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    if (weekday !== schedule.weekday) continue;
    const start = zonedTimeToUtc(Number(get("year")), Number(get("month")) - 1, Number(get("day")), schedule.hour, schedule.minute, schedule.timeZone);
    if (start + graceMs > now) return start;
  }
  // Should be unreachable, but fall back to one week out.
  return now + 7 * 86_400_000;
}

export function formatEvent(startMs: number, timeZone: string) {
  const d = new Date(startMs);
  const date = new Intl.DateTimeFormat("en-GB", { timeZone, weekday: "long", day: "2-digit", month: "long", year: "numeric" }).format(d);
  const time = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "numeric", minute: "2-digit", hour12: true }).format(d).toUpperCase();
  const offsetMin = Math.round(tzOffsetMs(startMs, timeZone) / 60000);
  const sign = offsetMin >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMin);
  const city = timeZone.split("/").pop()?.replace(/_/g, " ") ?? timeZone;
  const tzLabel = `(GMT ${sign}${Math.floor(abs / 60)}:${String(abs % 60).padStart(2, "0")}) ${city}`;
  return { date, time, tzLabel };
}
