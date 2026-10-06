"use client";

import { useEffect, useState } from "react";
import { schedule } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");

function Box({ children }: { children: React.ReactNode }) {
  return <span className="grid h-10 min-w-10 place-items-center rounded bg-navy px-2 font-sans text-lg font-bold tabular-nums text-white">{children}</span>;
}

/** Countdown to a fixed session start (used on the confirm page). */
export function Countdown({ target }: { target: number }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = now === null ? null : target - now;

  if (remaining !== null && remaining <= -schedule.durationMinutes * 60_000) {
    return <p className="font-sans font-semibold text-soft">This session has ended</p>;
  }
  if (remaining !== null && remaining <= 0) {
    return <p className="font-sans font-bold text-cta">● We’re live now</p>;
  }

  const s = Math.max(0, Math.floor((remaining ?? 0) / 1000));
  const parts = [
    { label: "Days", value: Math.floor(s / 86400) },
    { label: "Hrs", value: Math.floor((s % 86400) / 3600) },
    { label: "Mins", value: Math.floor((s % 3600) / 60) },
    { label: "Secs", value: s % 60 },
  ];

  return (
    <div className="flex justify-center gap-2" role="timer" aria-label="Time until the live training starts">
      {parts.map((p) => (
        <div key={p.label} className="flex flex-col items-center gap-1">
          <Box>{remaining === null ? "--" : pad(p.value)}</Box>
          <span className="font-sans text-[10px] uppercase tracking-wider text-soft">{p.label}</span>
        </div>
      ))}
    </div>
  );
}

const STORAGE_KEY = "em_urgency_deadline";

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
      if (deadline <= now) {
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
