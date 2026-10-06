import type { Metadata } from "next";
import { AddToCalendar } from "@/components/AddToCalendar";
import { Countdown } from "@/components/Countdown";
import { Footer, Logo } from "@/components/Chrome";
import { brand, confirm as c } from "@/lib/content";
import { eventFromSearchParams } from "@/lib/webinar";

export const metadata: Metadata = { title: "You're Registered", robots: { index: false, follow: false } };

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const event = eventFromSearchParams(await searchParams);

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6"><Logo /></div>
      </header>

      <main className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="grid-bg pointer-events-none absolute inset-0" />

        <section className="relative mx-auto max-w-3xl px-4 pb-16 pt-14 text-center sm:px-6 sm:pt-20">
          <div className="mx-auto mb-6 grid size-14 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 shadow-xl shadow-brand/40">
            <svg viewBox="0 0 24 24" className="size-7 fill-none stroke-white stroke-[2.5]" aria-hidden><path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{c.eyebrow}</p>
          <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">{c.subtitle}</p>

          <div className="card mx-auto mt-10 max-w-xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Free YouTube Masterclass with {brand.host}</p>
            <p className="mt-3 text-2xl font-semibold">{event.date}</p>
            <p className="text-muted">{event.time} {event.tzLabel}</p>
            <div className="mt-6 flex justify-center"><Countdown target={event.startMs} /></div>
            {event.roomUrl && (
              <div className="mt-8">
                <a href={event.roomUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">{c.joinCta} <span aria-hidden>→</span></a>
                <p className="mt-3 break-all text-xs text-muted">
                  Your personal link: <a href={event.roomUrl} className="underline decoration-line underline-offset-4 hover:text-white">{event.roomUrl}</a>
                </p>
                {event.roomPassword && <p className="mt-1 text-xs text-muted">Room password: <span className="font-mono text-white">{event.roomPassword}</span></p>}
              </div>
            )}
          </div>
        </section>

        <section className="relative mx-auto max-w-3xl px-4 pb-20 sm:px-6">
          <ol className="space-y-4">
            {c.steps.map((s, i) => (
              <li key={s.title} className="card flex gap-5 p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brand/40 bg-brand/10 font-semibold text-brand">{i + 1}</span>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                  <p className="mt-1 leading-relaxed text-muted">{s.body}</p>
                  {i === 0 && <div className="mt-4"><AddToCalendar startMs={event.startMs} roomUrl={event.roomUrl} /></div>}
                </div>
              </li>
            ))}
          </ol>

          <div className="card mt-10 p-6 sm:p-8">
            <h2 className="font-display text-3xl tracking-tight">{c.prepHeading}</h2>
            <ul className="mt-5 space-y-3">
              {c.prep.map((p) => (
                <li key={p} className="flex gap-3 text-zinc-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />{p}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Questions? Email <a href={`mailto:${brand.supportEmail}`} className="text-white underline underline-offset-4">{brand.supportEmail}</a>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
