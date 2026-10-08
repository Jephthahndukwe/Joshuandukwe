import { schedule } from "./content";

/** Start of the next Just-In-Time session (ms). Quarter-hour slots line up across time zones. */
export function nextSessionStart(now = Date.now()): number {
  const step = schedule.intervalMinutes * 60_000;
  return Math.floor(now / step) * step + step;
}
