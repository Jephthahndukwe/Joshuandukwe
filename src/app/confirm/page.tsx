import type { Metadata } from "next";
import { AddToCalendar } from "@/components/AddToCalendar";
import { Disclaimer } from "@/components/Chrome";
import { Countdown } from "@/components/Countdown";
import { brand, confirm as c } from "@/lib/content";
import { eventFromSearchParams } from "@/lib/webinar";

export const metadata: Metadata = { title: "You’re Registered", robots: { index: false, follow: false } };

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const event = eventFromSearchParams(await searchParams);

  return (
    <main className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-20">
      <section className="bg-night px-5 py-10 text-center sm:px-10 sm:py-14">
        <p className="mx-auto inline-block rounded-full bg-accent px-6 py-2.5 font-serif text-base font-bold text-night sm:text-lg">{c.eyebrow} ✓</p>
        <h1 className="mt-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{c.title}</h1>
        <p className="mt-4 text-lg italic text-white/85 sm:text-xl">{c.subtitle}</p>

        <div className="mx-auto mt-8 max-w-xl rounded border border-white/40 px-5 py-6 text-white">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">Faceless YouTube Live Training with {brand.host}</p>
          <p className="mt-3 font-sans text-2xl font-bold">{event.date}</p>
          <p className="text-white/80">{event.time} {event.tzLabel}</p>
          <div className="mt-5 rounded bg-paper px-3 py-4"><Countdown target={event.startMs} /></div>
        </div>
      </section>

      <div className="mx-auto max-w-[57rem]">
        {event.roomUrl && (
          <div className="my-12 text-center">
            <a href={event.roomUrl} target="_blank" rel="noopener noreferrer" className="btn-cta w-full sm:w-auto">{c.joinCta}</a>
            <p className="mt-4 break-all font-sans text-sm text-soft">
              Your personal link: <a href={event.roomUrl} className="underline underline-offset-4 hover:text-body">{event.roomUrl}</a>
            </p>
            {event.roomPassword && <p className="mt-1 font-sans text-sm text-soft">Room password: <span className="font-mono text-body">{event.roomPassword}</span></p>}
          </div>
        )}

        <ol className="space-y-4">
          {c.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 border-l-4 border-accent bg-paper-2 px-5 py-5 sm:px-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cta font-sans font-bold text-white">{i + 1}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="mt-1 text-lg leading-relaxed text-soft">{s.body}</p>
                {i === 0 && <div className="mt-4"><AddToCalendar startMs={event.startMs} roomUrl={event.roomUrl} /></div>}
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-12 bg-night-2 px-5 py-10 sm:px-10">
          <h2 className="text-center font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{c.prepHeading}</h2>
          <ul className="mt-6 space-y-4">
            {c.prep.map((p) => (
              <li key={p} className="flex gap-3 text-lg leading-relaxed text-white/90">
                <span className="mt-0.5 text-accent" aria-hidden>✓</span>{p}
              </li>
            ))}
          </ul>
        </section>

        {brand.supportEmail && (
          <p className="mt-10 text-center text-lg text-soft">
            Questions? Email <a href={`mailto:${brand.supportEmail}`} className="font-bold text-body underline underline-offset-4">{brand.supportEmail}</a>
          </p>
        )}
      </div>

      <Disclaimer />
    </main>
  );
}
