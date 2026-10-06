import type { Metadata } from "next";
import { Disclaimer } from "@/components/Chrome";
import { SeenConfirm } from "@/components/SeenConfirm";
import { confirm as c, masterclass } from "@/lib/content";

export const metadata: Metadata = { title: "Seat Confirmed", robots: { index: false, follow: false } };

export default function ConfirmPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 sm:pt-12">
      <section className="hero-glow relative overflow-hidden rounded-3xl px-5 pb-12 pt-10 text-center text-white sm:px-12 sm:pb-16 sm:pt-14">
        <div className="dots pointer-events-none absolute inset-0" />
        <div className="relative">
          <p className="mx-auto inline-block rounded-full bg-accent px-5 py-3 font-sans text-sm font-bold text-night shadow-lg shadow-accent/20 sm:px-8 sm:text-lg">{c.pill}</p>
          <h1 className="mx-auto mt-8 max-w-4xl font-sans text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl">
            {masterclass.headlineBefore}
            <span className="text-accent">{masterclass.headlineHighlight}</span>
            {masterclass.headlineAfter}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{c.sub}</p>
          <p className="mt-8 font-sans text-lg font-extrabold uppercase tracking-wide text-cta">{c.scarcity}</p>

          {/* Main card */}
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-night-2 p-2 ring-1 ring-white/10">
            <div className="rounded-[1.25rem] border-2 border-accent bg-paper px-5 py-10 text-body sm:px-12">
              <p className="inline-block rounded-full bg-cta px-5 py-2 font-sans text-sm font-bold uppercase tracking-wide text-white">{c.badge}</p>
              <h2 className="mt-5 font-sans text-3xl font-extrabold tracking-tight">{c.cardHeading}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-soft">
                {c.cardBody.map((p) => <p key={p}>{p}</p>)}
              </div>
              <SeenConfirm />
              <p className="mt-5 text-lg leading-relaxed text-soft">{c.closeNote}</p>
            </div>
          </div>

          {/* Important */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-left sm:px-10">
            <p className="text-center font-sans text-xl font-extrabold uppercase tracking-wide text-accent">{c.importantHeading}</p>
            <p className="mt-6 text-lg leading-relaxed text-white/90">{c.importantLead}</p>
            <p className="mt-4 text-lg text-white/90">{c.importantIf}</p>
            <ul className="mt-3 list-disc space-y-2 pl-7 text-lg text-white/90 marker:text-accent">
              {c.importantList.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <p className="mt-5 text-lg leading-relaxed text-white/90">{c.importantOutro}</p>
          </div>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}
