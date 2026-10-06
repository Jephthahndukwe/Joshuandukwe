"use client";

import { useEffect, useState } from "react";
import { schedule } from "@/lib/content";

function split(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
}

export function Countdown({ target, compact = false }: { target: number; compact?: boolean }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = now === null ? null : target - now;

  if (remaining !== null && remaining <= -schedule.durationMinutes * 60_000) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm font-medium text-muted">
        This session has ended
      </div>
    );
  }

  if (remaining !== null && remaining <= 0) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
        <span className="live-dot size-2 rounded-full bg-brand" /> We&apos;re live now
      </div>
    );
  }

  const t = split(remaining ?? 0);
  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Mins", value: t.minutes },
    { label: "Secs", value: t.seconds },
  ];

  return (
    <div className="flex gap-2 sm:gap-3" aria-label="Time until the masterclass starts" role="timer">
      {units.map((u) => (
        <div key={u.label} className={`card flex flex-col items-center justify-center ${compact ? "w-16 py-2" : "w-[4.5rem] py-3 sm:w-20"}`}>
          <span className={`font-semibold tabular-nums ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
            {remaining === null ? "--" : String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-widest text-muted">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
