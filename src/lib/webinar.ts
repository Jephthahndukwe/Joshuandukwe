type SearchParams = Record<string, string | string[] | undefined>;

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

/** Read the session WebinarJam passes to the thank-you page via its `wj_*` params. */
export function eventFromSearchParams(sp: SearchParams) {
  const ts = Number(first(sp.wj_event_ts));
  return {
    startMs: Number.isFinite(ts) && ts > 0 ? ts * 1000 : null,
    date: first(sp.wj_next_event_date),
    time: first(sp.wj_next_event_time),
    tzLabel: first(sp.wj_next_event_timezone),
  };
}
