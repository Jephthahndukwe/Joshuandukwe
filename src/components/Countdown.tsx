"use client";

import { useEffect, useState } from "react";

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

/** Compact HH:MM:SS countdown for the sticky bar and CTA blocks. */
export function EvergreenCountdown({ minutes }: { minutes: number }) {
  const t = useEvergreen(minutes, "urgency_deadline");
  const vals = t ? [pad(t.hours), pad(t.minutes), pad(t.seconds)] : ["--", "--", "--"];

  return (
    <div className="flex items-center gap-1.5" role="timer" aria-label="Time until the live training starts">
      <Box>{vals[0]}</Box><span className="font-bold text-white">:</span>
      <Box>{vals[1]}</Box><span className="font-bold text-white">:</span>
      <Box>{vals[2]}</Box>
    </div>
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
