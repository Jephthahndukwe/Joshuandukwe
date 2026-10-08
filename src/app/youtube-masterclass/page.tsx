import type { Metadata } from "next";
import Image from "next/image";
import { Disclaimer } from "@/components/Chrome";
import { EvergreenCountdown } from "@/components/Countdown";
import { RegisterButton, RegisterModal } from "@/components/Register";
import { masterclass as c, urgency, webinarjam } from "@/lib/content";

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
        <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-6 text-center sm:px-6 sm:pb-20">
          <p className="mx-auto mt-4 inline-block rounded-full border border-accent/70 px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent sm:mt-8 sm:px-8 sm:py-3 sm:text-sm">
            {c.topBadge}
          </p>

          <h1 className="mx-auto mt-8 max-w-4xl font-sans text-[1.65rem] font-extrabold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {c.headlineBefore}
            <span className="text-accent">{c.headlineHighlight}</span>
            {c.headlineAfter}
          </h1>
          <p className="mt-6 text-base italic text-white/85 sm:text-lg">{c.subhead}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">{c.promise}</p>

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
        <section className="mx-auto grid max-w-4xl gap-8 px-5 py-12 sm:px-6 sm:py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-5">
            <p className="text-base leading-relaxed sm:text-[1.0625rem]">{c.intro}</p>
            <h2 className="pt-2 font-sans text-2xl font-extrabold tracking-tight text-cta-dark">{c.yourTurn}</h2>
            <p className="text-base leading-relaxed text-soft">{c.curious}</p>
          </div>
          <div className="rounded-3xl bg-night p-7 text-center text-white shadow-xl shadow-night/20">
            <p className="font-sans text-5xl font-extrabold tracking-tight text-accent">{c.proofStat}</p>
            <p className="mt-3 text-base leading-snug text-white/85">{c.proofLabel}</p>
            <p className="mt-5 border-t border-white/10 pt-5 font-sans text-sm text-white/60">A proven, beginner-friendly system</p>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="bg-night-2 py-12 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <p className="text-center font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent">{c.learnEyebrow}</p>
            <h2 className="mt-3 text-center font-sans text-2xl font-extrabold tracking-tight sm:text-3xl">{c.learnHeading}</h2>
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.learn.map((item, i) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-accent/40">
                  <span className="font-sans text-sm font-bold tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-base leading-relaxed text-white/90">{item}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex justify-center">
              <RegisterButton className="btn-cta w-full sm:w-auto">{c.registerCta} <Arrow /></RegisterButton>
            </div>
          </div>
        </section>

        {/* Tip */}
        <section className="mx-auto max-w-2xl px-5 pt-12 sm:px-6 sm:pt-20">
          <div className="flex gap-4 rounded-2xl border border-accent/50 bg-accent/10 p-5 sm:p-7">
            <span className="text-2xl" aria-hidden>💡</span>
            <p className="text-base leading-relaxed">{c.tip}</p>
          </div>
        </section>

        {/* Fit */}
        <section className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-20">
          <h2 className="text-center font-sans text-2xl font-extrabold tracking-tight sm:text-3xl">{c.notForHeading}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-night/10 bg-white p-6 shadow-sm sm:p-8">
              <p className="font-sans text-base font-bold">{c.forLead}</p>
              <ul className="mt-5 space-y-4">
                {c.forList.map((f) => <li key={f} className="flex gap-3 text-base leading-relaxed"><Tick className="text-green-600" />{f}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-night/10 bg-paper-2 p-5 sm:p-7">
              <p className="font-sans text-base font-bold">{c.notForLead}</p>
              <ul className="mt-5 space-y-4">
                {c.notFor.map((n) => <li key={n} className="flex gap-3 text-base leading-relaxed text-soft"><Cross />{n}</li>)}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base italic leading-relaxed">{c.actionTakers}</p>
        </section>

        {/* Trainer */}
        <section className="border-t border-night/5 bg-white py-12 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">{c.trainerEyebrow}</p>
            <h2 className="mt-3 font-sans text-2xl font-extrabold tracking-tight sm:text-3xl">
              {c.trainerFirstName} <span className="text-emerald-600">{c.trainerLastName}</span>
            </h2>
            <span className="mt-5 block h-1 w-24 rounded-full bg-gradient-to-r from-accent to-transparent" />

            <div className="mt-10 rounded-3xl border border-night/10 bg-paper p-5 sm:p-8">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                {c.trainerImage ? (
                  <Image src={c.trainerImage} alt={`${c.trainerFirstName} ${c.trainerLastName}`} width={288} height={288} className="size-24 sm:size-28 shrink-0 rounded-full object-cover ring-4 ring-accent/30" />
                ) : (
                  <span className="grid size-24 sm:size-28 shrink-0 place-items-center rounded-full bg-gradient-to-br from-night to-navy font-sans text-4xl font-extrabold text-accent ring-4 ring-accent/30">
                    {c.trainerFirstName[0]}{c.trainerLastName[0]}
                  </span>
                )}
                <div>
                  <p className="font-sans text-2xl font-bold tracking-tight">{c.trainerFirstName} {c.trainerLastName}</p>
                  <p className="mt-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">{c.trainerRole}</p>
                </div>
              </div>
              <div className="mt-8 space-y-2 text-base leading-relaxed">
                {c.trainerBio.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>

            <RegisterButton className="btn-cta mt-8 w-full font-sans uppercase tracking-wide">{c.trainerCta}</RegisterButton>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-4xl px-5 pt-12 sm:px-6 sm:pt-20">
          <div className="hero-glow relative overflow-hidden rounded-3xl px-5 py-12 text-center text-white sm:px-12">
            <div className="dots pointer-events-none absolute inset-0" />
            <div className="relative">
              <h2 className="font-sans text-2xl font-extrabold tracking-tight sm:text-3xl">{c.finalHeadingBefore}<span className="text-accent">{c.finalHeadingAccent}</span></h2>
              <span className="mx-auto mt-5 block h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">{c.finalBody}</p>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/60">
                Click the button below, enter your first name and correct email, then click <strong className="text-white">“{webinarjam.formButtonText}”</strong> to secure your spot.
              </p>
              <div className="mt-8 flex justify-center"><EvergreenCountdown minutes={urgency.countdownMinutes} /></div>
              <div className="mt-8"><RegisterButton className="btn-cta w-full font-sans uppercase tracking-wide sm:w-auto">{c.trainerCta} <Arrow /></RegisterButton></div>
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
