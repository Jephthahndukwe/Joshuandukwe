import { brand, schedule } from "./content";
import { formatEvent, nextSessionStart } from "./schedule";

type SearchParams = Record<string, string | string[] | undefined>;

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

/** Read the `wj_*` params WebinarJam (or /api/register) appends to the thank-you URL. */
export function eventFromSearchParams(sp: SearchParams) {
  const ts = Number(first(sp.wj_event_ts));
  const timeZone = first(sp.wj_event_tz) || schedule.timeZone;
  const startMs = Number.isFinite(ts) && ts > 0 ? ts * 1000 : nextSessionStart();
  const computed = formatEvent(startMs, timeZone);
  const room = first(sp.wj_lead_unique_link_live_room);
  return {
    // Only trust WebinarJam links, so the page can't be used to bounce people elsewhere.
    roomUrl: /^https:\/\/([a-z0-9-]+\.)*webinarjam\.com\//i.test(room) ? room : brand.liveRoomUrl,
    roomPassword: first(sp.wj_room_password),
    date: first(sp.wj_next_event_date) || computed.date,
    time: first(sp.wj_next_event_time) || computed.time,
    tzLabel: first(sp.wj_next_event_timezone) || computed.tzLabel,
  };
}

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
