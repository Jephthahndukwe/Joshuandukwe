"use client";

import { useEffect, useState } from "react";
import { confirm, schedule } from "@/lib/content";
import { nextSessionStart } from "@/lib/schedule";

const pad = (n: number) => String(n).padStart(2, "0");

/** Per-visitor deadline stored in localStorage; restarts when it runs out. Returns ms left (null before mount). */
function useEvergreen(minutes: number, storageKey: string) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const span = minutes * 60_000;
    let deadline = 0;
    try {
      deadline = Number(localStorage.getItem(storageKey)) || 0;
    } catch {}
    const tick = () => {
      const now = Date.now();
      // Restart when expired, or when a saved deadline is longer than the current setting.
      if (deadline <= now || deadline > now + span) {
        deadline = now + span;
        try {
          localStorage.setItem(storageKey, String(deadline));
        } catch {}
      }
      setLeft(deadline - now);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [minutes, storageKey]);

  if (left === null) return null;
  const s = Math.max(0, Math.floor(left / 1000));
  return { hours: Math.floor(s / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
}

function Box({ children }: { children: React.ReactNode }) {
  return <span className="grid h-10 min-w-10 place-items-center rounded bg-navy px-2 font-sans text-lg font-bold tabular-nums text-white">{children}</span>;
}

/** Current time, ticking every second. Null until mounted so server and client markup match. */
function useNow() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Clock({ ms }: { ms: number | null }) {
  const s = ms === null ? 0 : Math.max(0, Math.floor(ms / 1000));
  const vals = ms === null ? ["--", "--", "--"] : [pad(Math.floor(s / 3600)), pad(Math.floor((s % 3600) / 60)), pad(s % 60)];
  return (
    <div className="flex items-center gap-1.5" role="timer" aria-label="Time until the live training starts">
      <Box>{vals[0]}</Box><span className="font-bold text-current">:</span>
      <Box>{vals[1]}</Box><span className="font-bold text-current">:</span>
      <Box>{vals[2]}</Box>
    </div>
  );
}

// Viewer's own time zone, 12-hour clock to match WebinarJam ("9:15 PM").
const timeFmt = (ms: number) =>
  new Intl.DateTimeFormat("en-GB", { hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(ms)).toUpperCase();
const dateFmt = (ms: number) =>
  new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }).format(new Date(ms));

/** Counts down to the next Just-In-Time session, then rolls on to the one after. */
export function NextSessionCountdown() {
  const now = useNow();
  return <Clock ms={now === null ? null : nextSessionStart(now) - now} />;
}

/** "Starts at 9:15 PM", in the viewer's own time zone. */
export function NextSessionTime({ prefix = "Starts at" }: { prefix?: string }) {
  const now = useNow();
  return <>{now === null ? "Starting soon" : `${prefix} ${timeFmt(nextSessionStart(now))}`}</>;
}

/**
 * Success page: the reserved slot and a countdown to it. Uses the session WebinarJam passed;
 * without one, falls back to the next Just-In-Time session in the viewer's time zone.
 */
export function ReservedSession({ startMs, date, time, tzLabel }: { startMs: number | null; date: string; time: string; tzLabel: string }) {
  const now = useNow();
  const [fallback, setFallback] = useState<number | null>(null);
  useEffect(() => setFallback(nextSessionStart()), []);
  const target = startMs ?? fallback;

  // WebinarJam's own labels when present; otherwise format in the viewer's time zone once mounted.
  let slot = time && date ? `${time}, ${date}` : "";
  if (!slot && target !== null && now !== null) slot = `${timeFmt(target)}, ${dateFmt(target)}`;
  const left = now === null || target === null ? null : target - now;

  return (
    <>
      <p className="mt-5 font-sans text-base text-soft">
        {confirm.reservedLabel} <strong className="text-body">{slot || "…"}</strong>
      </p>
      {tzLabel && <p className="mt-1 font-sans text-xs text-soft">{tzLabel}</p>}
      <div className="mt-4 flex justify-center text-body">
        {left !== null && left <= -schedule.durationMinutes * 60_000 ? (
          <p className="font-sans font-semibold text-soft">This session has ended</p>
        ) : left !== null && left <= 0 ? (
          <p className="font-sans font-bold text-cta-dark">● We’re live now. Click the button below to join.</p>
        ) : (
          <Clock ms={left} />
        )}
      </div>
    </>
  );
}

/** Large Hours / Minutes / Seconds tiles for the offer page. */
export function OfferCountdown({ minutes }: { minutes: number }) {
  const t = useEvergreen(minutes, "offer_deadline");
  const tiles = [
    { label: "Hours", value: t?.hours },
    { label: "Minutes", value: t?.minutes },
    { label: "Seconds", value: t?.seconds },
  ];

  return (
    <div className="flex justify-center gap-3" role="timer" aria-label="Time left on this offer">
      {tiles.map((tile) => (
        <div key={tile.label} className="flex w-20 flex-col items-center rounded-xl bg-cta px-2 py-3 shadow-lg shadow-cta/30 sm:w-24">
          <span className="font-sans text-3xl font-extrabold tabular-nums text-white sm:text-4xl">{tile.value === undefined ? "--" : pad(tile.value)}</span>
          <span className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-white/85">{tile.label}</span>
        </div>
      ))}
    </div>
  );
}
