import { schedule } from "./content";
import { formatEvent, nextSessionStart } from "./schedule";

type SearchParams = Record<string, string | string[] | undefined>;

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

/** Read the `wj_*` params WebinarJam appends to the thank-you URL. */
export function eventFromSearchParams(sp: SearchParams) {
  const ts = Number(first(sp.wj_event_ts));
  const timeZone = first(sp.wj_event_tz) || schedule.timeZone;
  const startMs = Number.isFinite(ts) && ts > 0 ? ts * 1000 : nextSessionStart();
  const computed = formatEvent(startMs, timeZone);
  return {
    date: first(sp.wj_next_event_date) || computed.date,
    time: first(sp.wj_next_event_time) || computed.time,
    tzLabel: first(sp.wj_next_event_timezone) || computed.tzLabel,
  };
}
