import type { Metadata } from "next";
import { Disclaimer } from "@/components/Chrome";
import { EvergreenCountdown } from "@/components/Countdown";
import { RegisterButton, RegisterModal } from "@/components/Register";
import { brand, masterclass as c, urgency } from "@/lib/content";

export const metadata: Metadata = { title: "Free Faceless YouTube Training" };

const Arrow = () => <span aria-hidden>→</span>;

function Tick({ className = "text-accent" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`mt-1 size-5 shrink-0 fill-current ${className}`} aria-hidden>
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 1 1 1.06 1.06Z" />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 size-5 shrink-0 fill-cta/80" aria-hidden>
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM7.53 6.47a.75.75 0 0 0-1.06 1.06L8.94 10l-2.47 2.47a.75.75 0 1 0 1.06 1.06L10 11.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L11.06 10l2.47-2.47a.75.75 0 0 0-1.06-1.06L10 8.94 7.53 6.47Z" />
    </svg>
  );
}

export default function MasterclassPage() {
  return (
    <>
      {/* Hero */}
      <header className="hero-glow relative overflow-hidden text-white">
        <div className="dots pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-24">
          <p className="font-sans text-sm font-semibold tracking-tight text-white/80">{brand.name}</p>

          <p className="mx-auto mt-10 inline-block rounded-full bg-accent px-5 py-2 font-sans text-sm font-bold text-night shadow-lg shadow-accent/20 sm:text-base">
            {c.pill}
          </p>
          <h1 className="mx-auto mt-7 max-w-4xl font-sans text-[2rem] font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {c.headlineBefore}
            <span className="text-accent">{c.headlineHighlight}</span>
            {c.headlineAfter}
          </h1>
          <p className="mt-6 text-lg italic text-white/85 sm:text-xl">{c.subhead}</p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{c.promise}</p>

          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {c.noNeed.map((n) => (
              <li key={n} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-sans text-sm font-medium text-white/90 backdrop-blur">
                <span className="mr-1.5 text-accent">✕</span>{n}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4">
            <RegisterButton className="btn-cta w-full sm:w-auto">{c.joinCta} <Arrow /></RegisterButton>
            <p className="flex flex-wrap justify-center gap-x-4 gap-y-1 font-sans text-sm text-white/70">
              {c.heroMeta.map((m) => <span key={m} className="inline-flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-accent" />{m}</span>)}
            </p>
          </div>
        </div>
      </header>

      <main className="pb-28">
        {/* Intro + proof */}
        <section className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed sm:text-xl">{c.intro}</p>
            <h2 className="pt-2 font-sans text-3xl font-extrabold tracking-tight text-cta-dark">{c.yourTurn}</h2>
            <p className="text-lg leading-relaxed text-soft">{c.curious}</p>
          </div>
          <div className="rounded-3xl bg-night p-8 text-center text-white shadow-xl shadow-night/20">
            <p className="font-sans text-6xl font-extrabold tracking-tight text-accent">{c.proofStat}</p>
            <p className="mt-3 text-lg leading-snug text-white/85">{c.proofLabel}</p>
            <p className="mt-5 border-t border-white/10 pt-5 font-sans text-sm text-white/60">A proven, beginner-friendly system</p>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="bg-night-2 py-16 text-white sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="text-center font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent">{c.learnEyebrow}</p>
            <h2 className="mt-3 text-center font-sans text-3xl font-extrabold tracking-tight sm:text-4xl">{c.learnHeading}</h2>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.learn.map((item, i) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-accent/40">
                  <span className="font-sans text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-lg leading-relaxed text-white/90">{item}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex justify-center">
              <RegisterButton className="btn-cta w-full sm:w-auto">{c.registerCta} <Arrow /></RegisterButton>
            </div>
          </div>
        </section>

        {/* Tip */}
        <section className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-24">
          <div className="flex gap-4 rounded-2xl border border-accent/50 bg-accent/10 p-6 sm:p-8">
            <span className="text-2xl" aria-hidden>💡</span>
            <p className="text-lg leading-relaxed">{c.tip}</p>
          </div>
        </section>

        {/* Fit */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-center font-sans text-3xl font-extrabold tracking-tight sm:text-4xl">{c.notForHeading}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-night/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="font-sans text-lg font-bold">{c.forLead}</p>
              <ul className="mt-5 space-y-4">
                {c.forList.map((f) => <li key={f} className="flex gap-3 text-lg leading-relaxed"><Tick className="text-green-600" />{f}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-night/10 bg-paper-2 p-6 sm:p-8">
              <p className="font-sans text-lg font-bold">{c.notForLead}</p>
              <ul className="mt-5 space-y-4">
                {c.notFor.map((n) => <li key={n} className="flex gap-3 text-lg leading-relaxed text-soft"><Cross />{n}</li>)}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg italic leading-relaxed">{c.actionTakers}</p>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="hero-glow relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12">
            <div className="dots pointer-events-none absolute inset-0" />
            <div className="relative">
              <h2 className="font-sans text-3xl font-extrabold tracking-tight sm:text-4xl">{c.finalHeading}</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                Click the button below, enter your first name and correct email, then click <strong className="text-white">“{c.form.submit}”</strong> to secure your spot and join the class.
              </p>
              <div className="mt-8 flex justify-center"><EvergreenCountdown minutes={urgency.countdownMinutes} /></div>
              <div className="mt-8"><RegisterButton className="btn-cta w-full sm:w-auto">{c.joinCta} <Arrow /></RegisterButton></div>
            </div>
          </div>
        </section>

        <Disclaimer />
      </main>

      {/* Sticky urgency bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night-2/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
          <div className="hidden items-center gap-2.5 font-sans leading-tight text-white sm:flex">
            <span className="size-2 animate-pulse rounded-full bg-cta" />
            <span>
              <span className="block font-bold">{urgency.label}</span>
              <span className="block text-sm text-white/70">{urgency.sublabel}</span>
            </span>
          </div>
          <EvergreenCountdown minutes={urgency.countdownMinutes} />
          <RegisterButton className="rounded-xl bg-cta px-3 py-2.5 font-sans text-xs font-bold uppercase leading-tight text-white transition-colors hover:bg-cta-dark sm:px-5 sm:py-3 sm:text-sm">
            {urgency.cta}
          </RegisterButton>
        </div>
      </div>

      <RegisterModal />
    </>
  );
}
