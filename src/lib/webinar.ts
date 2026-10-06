import { formatEvent } from "./schedule";

/** Build the /confirm URL in the same shape WebinarJam uses, so either source works. */
export function confirmQuery(e: { roomUrl: string; roomPassword?: string; startMs: number; timeZone: string }) {
  const f = formatEvent(e.startMs, e.timeZone);
  return new URLSearchParams({
    wj_room_password: e.roomPassword ?? "",
    wj_lead_unique_link_live_room: e.roomUrl,
    wj_event_ts: String(Math.floor(e.startMs / 1000)),
    wj_event_tz: e.timeZone,
    wj_next_event_date: f.date,
    wj_next_event_time: f.time,
    wj_next_event_timezone: f.tzLabel,
  }).toString();
}
