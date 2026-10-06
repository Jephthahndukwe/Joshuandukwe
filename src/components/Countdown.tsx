"use client";

import { useEffect, useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

function Box({ children }: { children: React.ReactNode }) {
  return <span className="grid h-10 min-w-10 place-items-center rounded bg-navy px-2 font-sans text-lg font-bold tabular-nums text-white">{children}</span>;
}

const STORAGE_KEY = "urgency_deadline";

/** Per-visitor HH:MM:SS countdown for the sticky bar; restarts when it reaches zero. */
export function EvergreenCountdown({ minutes }: { minutes: number }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const span = minutes * 60_000;
    let deadline = 0;
    try {
      deadline = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    } catch {}
    const tick = () => {
      const now = Date.now();
      // Restart when expired, or when a saved deadline is longer than the current setting.
      if (deadline <= now || deadline > now + span) {
        deadline = now + span;
        try {
          localStorage.setItem(STORAGE_KEY, String(deadline));
        } catch {}
      }
      setLeft(deadline - now);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [minutes]);

  const s = Math.max(0, Math.floor((left ?? 0) / 1000));
  const vals = left === null ? ["--", "--", "--"] : [pad(Math.floor(s / 3600)), pad(Math.floor((s % 3600) / 60)), pad(s % 60)];

  return (
    <div className="flex items-center gap-1.5" role="timer" aria-label="Time until the live training starts">
      <Box>{vals[0]}</Box><span className="font-bold text-white">:</span>
      <Box>{vals[1]}</Box><span className="font-bold text-white">:</span>
      <Box>{vals[2]}</Box>
    </div>
  );
}
