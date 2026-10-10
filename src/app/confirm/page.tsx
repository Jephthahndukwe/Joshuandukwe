import type { Metadata } from "next";
import { Disclaimer } from "@/components/Chrome";
import { confirm as c } from "@/lib/content";
import { eventFromSearchParams } from "@/lib/webinar";
import { ReservedSession } from "@/components/Countdown";
import { SnapSignUp } from "@/components/SnapPixel";

export const metadata: Metadata = { title: "Seat Confirmed", robots: { index: false, follow: false } };

function Arrow({ tilt }: { tilt: number }) {
  return (
    <svg viewBox="0 0 40 80" className="h-14 w-7 text-cta sm:h-16" style={{ transform: `rotate(${tilt}deg)` }} aria-hidden>
      <path d="M20 4 C 18 26, 22 46, 20 70 M8 56 L20 72 L32 56" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const event = eventFromSearchParams(await searchParams);

  return (
    <main className="hero-glow relative min-h-dvh overflow-hidden text-white">
      <div className="dots pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-5 pb-6 pt-12 text-center sm:px-6 sm:pt-16">
        <p className="font-sans text-base font-bold italic text-accent sm:text-lg">{c.secured}</p>

        <h1 className="mt-6 font-sans text-[1.65rem] font-extrabold leading-[1.2] tracking-tight sm:text-4xl">
          {c.headlineBefore}
          <span className="text-accent">{c.headlineHighlight}</span>
          {c.headlineMiddle}
          <em className="underline decoration-2 underline-offset-4">{c.headlineEmphasis}</em>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
          {c.sub}<strong className="text-white">{c.subStrong}</strong>
        </p>

        <p className="mt-6 font-sans text-sm font-bold uppercase tracking-wide text-cta sm:text-base">🔥 {c.scarcity}</p>

        {/* How to join */}
        <section className="mt-6 rounded-2xl border-2 border-dashed border-cta bg-paper px-5 py-8 text-body sm:px-10">
          <h2 className="font-sans text-2xl font-extrabold tracking-tight sm:text-3xl">{c.joinHeading}</h2>
          <ReservedSession {...event} />

          <p className="mt-4 font-sans text-base font-semibold">{c.joinPrompt}</p>
          <div className="mt-3 flex justify-center gap-4" aria-hidden>
            <Arrow tilt={-14} /><Arrow tilt={0} /><Arrow tilt={14} />
          </div>
          <a href={c.joinUrl} target="_blank" rel="noopener noreferrer" className="btn-cta mt-3 w-full font-sans uppercase tracking-wide">
            {c.joinButton}
          </a>
          <p className="mt-5 font-sans text-sm leading-relaxed text-cta-dark sm:text-base">{c.noRedirect}</p>
        </section>

        <div className="mt-8 space-y-4 text-base italic leading-relaxed text-white/80 sm:text-lg">
          <p>{c.emailNote}</p>
          <p>{c.updatesNote}</p>
        </div>
      </div>

      <div className="relative [&_footer]:text-white/50">
        <Disclaimer />
      </div>
      {/* PAGE_VIEW and SIGN_UP, with the hashed email when WebinarJam passes it. Base pixel is in the layout <head>. */}
      <SnapSignUp />
    </main>
  );
}
