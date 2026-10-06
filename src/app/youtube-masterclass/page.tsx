import type { Metadata } from "next";
import { Disclaimer } from "@/components/Chrome";
import { EvergreenCountdown } from "@/components/Countdown";
import { RegisterButton, RegisterModal } from "@/components/Register";
import { masterclass as c, urgency } from "@/lib/content";

export const metadata: Metadata = { title: "Free Faceless YouTube Training" };

function Instructions() {
  return (
    <p className="text-lg leading-relaxed text-soft">
      Click the button below, enter your first name and correct email, then click{" "}
      <strong className="text-body">“{c.form.submit}”</strong> to secure your spot and join the class.{" "}
      <strong className="text-body">We’re starting soon.</strong>
    </p>
  );
}

function Cta({ label = c.joinCta }: { label?: string }) {
  return (
    <div className="my-12 flex justify-center">
      <RegisterButton className="btn-cta w-full sm:w-auto">{label}</RegisterButton>
    </div>
  );
}

export default function MasterclassPage() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-4 pb-32 pt-10 sm:px-6 sm:pt-20">
        {/* Hero */}
        <section className="bg-cocoa px-5 py-10 text-center sm:px-10 sm:py-16">
          <p className="mx-auto inline-block rounded-full bg-gold px-6 py-3 font-serif text-base font-bold text-cocoa sm:px-9 sm:text-xl">{c.pill}</p>
          <h1 className="mt-8 font-sans text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl sm:leading-[1.2]">
            {c.headlineBefore}
            <span className="text-gold">{c.headlineHighlight}</span>
            {c.headlineAfter}
          </h1>
          <p className="mt-6 text-lg italic text-white/85 sm:text-xl">{c.subhead}</p>
          <p className="mx-auto mt-8 max-w-4xl rounded border border-white/40 px-5 py-6 text-lg italic leading-relaxed text-white/85 sm:px-8 sm:text-xl">
            {c.promise}
          </p>
        </section>

        <div className="mx-auto max-w-[57rem]">
          <Cta />

          <section className="space-y-6">
            <p className="text-lg leading-relaxed sm:text-xl">{c.intro}</p>
            <p className="text-lg font-bold leading-snug sm:text-xl">{c.proof}</p>
            <h2 className="pt-2 text-2xl font-bold text-cta">{c.yourTurn}</h2>
            <p className="text-lg leading-relaxed text-soft">{c.curious}</p>
            <Instructions />
          </section>

          <Cta />

          {/* What you'll learn */}
          <section className="bg-cocoa-2 px-5 py-10 sm:px-10">
            <h2 className="text-center font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{c.learnHeading}</h2>
            <ul className="mt-6 space-y-4">
              {c.learn.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed text-white/90">
                  <span className="mt-0.5 text-gold" aria-hidden>√</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Cta />

          <p className="border-l-4 border-gold bg-cream-2 px-6 py-5 text-lg leading-relaxed">
            <span aria-hidden>💡 </span>{c.tip}
          </p>

          <div className="mt-12"><Instructions /></div>

          <Cta label={c.registerCta} />

          {/* Not for everyone */}
          <section>
            <h2 className="text-2xl font-bold text-cta">{c.notForHeading}</h2>
            <p className="mt-6 text-lg font-bold">{c.notForLead}</p>
            <ul className="mt-4 list-disc space-y-3 pl-7 text-lg">
              {c.notFor.map((n) => <li key={n}>{n}</li>)}
            </ul>
            <p className="mt-8 border border-dashed border-soft/50 bg-cream-2/70 px-6 py-6 text-center text-lg italic leading-relaxed">{c.actionTakers}</p>
          </section>

          <Cta />
        </div>

        <Disclaimer />
      </main>

      {/* Sticky urgency bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-cocoa-2 shadow-[0_-8px_30px_rgba(0,0,0,0.25)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
          <div className="hidden font-sans leading-tight text-white sm:block">
            <p className="font-bold">{urgency.label}</p>
            <p className="text-sm text-white/80">{urgency.sublabel}</p>
          </div>
          <EvergreenCountdown minutes={urgency.countdownMinutes} />
          <RegisterButton className="rounded-lg bg-cta px-3 py-2.5 font-sans text-xs font-bold uppercase leading-tight text-white transition-colors hover:bg-cta-dark sm:px-6 sm:py-3 sm:text-sm">
            {urgency.cta}
          </RegisterButton>
        </div>
      </div>

      <RegisterModal />
    </>
  );
}
