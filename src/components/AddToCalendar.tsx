"use client";

import { brand, schedule } from "@/lib/content";

function stamp(ms: number) {
  return new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function AddToCalendar({ startMs, roomUrl }: { startMs: number; roomUrl: string }) {
  const endMs = startMs + schedule.durationMinutes * 60_000;
  const title = `Faceless YouTube Live Training with ${brand.host}`;
  const details = `Join the live room here: ${roomUrl}\n\nShow up 5 minutes early to grab your bonuses.`;

  const google = `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${stamp(startMs)}/${stamp(endMs)}`,
    details,
    location: roomUrl,
  })}`;

  const outlook = `https://outlook.live.com/calendar/0/deeplink/compose?${new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: title,
    startdt: new Date(startMs).toISOString(),
    enddt: new Date(endMs).toISOString(),
    body: details,
    location: roomUrl,
  })}`;

  const btn = "rounded-lg border border-cocoa/20 bg-white px-4 py-2.5 font-sans text-sm font-semibold text-cocoa transition-colors hover:bg-cream-2";

  function downloadIcs() {
    const esc = (s: string) => s.replace(/[\\,;]/g, (c) => `\\${c}`).replace(/\n/g, "\\n");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Everything Melda//Masterclass//EN",
      "BEGIN:VEVENT",
      `UID:${startMs}-masterclass@everythingmelda.com`,
      `DTSTAMP:${stamp(Date.now())}`,
      `DTSTART:${stamp(startMs)}`,
      `DTEND:${stamp(endMs)}`,
      `SUMMARY:${esc(title)}`,
      `DESCRIPTION:${esc(details)}`,
      `LOCATION:${esc(roomUrl)}`,
      `URL:${roomUrl}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT15M",
      "ACTION:DISPLAY",
      "DESCRIPTION:Live training starts in 15 minutes",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "faceless-youtube-training.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <a href={google} target="_blank" rel="noopener noreferrer" className={btn}>Google Calendar</a>
      <button type="button" onClick={downloadIcs} className={btn}>Apple / iCal</button>
      <a href={outlook} target="_blank" rel="noopener noreferrer" className={btn}>Outlook</a>
    </div>
  );
}
