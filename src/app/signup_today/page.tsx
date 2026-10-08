import type { Metadata } from "next";
import { OfferCountdown } from "@/components/Countdown";
import { offer as o } from "@/lib/content";

export const metadata: Metadata = {
  title: `Enroll in the ${o.productName}`,
  description: o.subhead,
  openGraph: { title: `Enroll in the ${o.productName}`, description: o.subhead },
  twitter: { title: `Enroll in the ${o.productName}`, description: o.subhead },
  robots: { index: false, follow: false },
};

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;
const p = o.payment;
const hasBank = Boolean(p.accountNumber && p.bankName && p.accountName);

function EnquiryNumbers({ first = false }: { first?: boolean }) {
  return (
    <>
      {(first ? p.enquiry.slice(0, 1) : p.enquiry).map((e, i) => (
        <span key={e.number}>
          {i > 0 && " or "}
          <a href={`https://wa.me/${e.number}`} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap font-semibold text-body underline underline-offset-4 hover:text-cta-dark">{e.display}</a>
        </span>
      ))}
    </>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 size-5 shrink-0 fill-emerald-500" aria-hidden>
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 1 1 1.06 1.06Z" />
    </svg>
  );
}

function PaymentBox({ id, showPrice = false }: { id?: string; showPrice?: boolean }) {
  return (
    <section id={id} className="scroll-mt-6 rounded-2xl border-2 border-accent bg-white px-5 py-8 text-center shadow-xl shadow-accent/10 sm:px-10">
      <h2 className="font-sans text-xl font-extrabold uppercase tracking-tight sm:text-2xl">Pay by bank transfer</h2>
      <p className="mt-3 text-soft">Send your payment to the account below to enroll in the</p>
      <p className="mt-2 font-sans font-extrabold uppercase tracking-wide text-cta-dark">{o.productName}</p>
      {showPrice && <p className="mt-2 font-sans text-xl font-extrabold text-cta-dark">{o.price}</p>}

      {hasBank ? (
        <div className="mx-auto mt-5 max-w-sm rounded-xl bg-paper px-5 py-4">
          <p className="font-sans text-3xl font-extrabold tracking-wider tabular-nums">{p.accountNumber}</p>
          <p className="mt-2 font-sans font-bold uppercase">{p.bankName}</p>
          <p className="font-sans font-bold uppercase">{p.accountName}</p>
        </div>
      ) : (
        <p className="mx-auto mt-5 max-w-sm rounded-xl bg-paper px-5 py-4 font-sans font-semibold">
          Payment details coming soon. Please check back shortly.
        </p>
      )}

      {p.proofUrl && (
        <>
          <p className="mt-5 leading-relaxed text-soft">
            Once you’ve paid, tap the button below to send your receipt to me on WhatsApp.
            {p.enquiry.length > 0 && <> If the button doesn’t open, message me directly on <EnquiryNumbers first />.</>}
          </p>
          <a href={p.proofUrl} target="_blank" rel="noopener noreferrer" className="btn-cta mt-5 w-full sm:w-auto">Send my payment receipt</a>
        </>
      )}

      {p.selarUrl && (
        <>
          {p.proofUrl && <p className="my-3 font-sans text-sm font-semibold uppercase tracking-widest text-soft">or</p>}
          <a href={p.selarUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-[0.85rem] border-2 border-cta px-7 py-3.5 font-serif font-bold text-cta-dark transition-colors hover:bg-cta/10 sm:w-auto">
            Pay online with Selar
          </a>
          <p className="mt-3 text-sm text-soft">Paid on Selar? Send me a screenshot of your receipt.</p>
        </>
      )}

      {p.enquiry.length > 0 && <p className="mt-3 text-sm leading-relaxed text-soft">Questions? Chat with me on WhatsApp: <EnquiryNumbers /></p>}
    </section>
  );
}

export default function SignupTodayPage() {
  const total = o.valueStack.reduce((sum, v) => sum + v.value, 0);

  return (
    <>
      {/* Hero */}
      <header className="hero-glow relative overflow-hidden text-white">
        <div className="dots pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 pb-12 pt-10 text-center sm:px-6 sm:pb-16 sm:pt-14">
          <OfferCountdown minutes={o.countdownMinutes} />
          <h1 className="mt-8 font-sans text-[1.65rem] font-extrabold leading-[1.2] tracking-tight sm:text-4xl">
            {o.headlineBefore}<span className="text-accent">{o.headlineHighlight}</span>{o.headlineAfter}
          </h1>
          <p className="mt-5 italic text-white/85 sm:text-lg">{o.subhead}</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-12 px-5 py-12 sm:px-6 sm:py-16">
        {/* Intro + instructions */}
        <section className="space-y-4 leading-relaxed sm:text-[1.0625rem]">
          <p>{o.intro}</p>
          <p>{o.enrollBefore}<strong>{o.productName}</strong>{o.enrollAfter}</p>
          <h2 className="pt-3 font-sans text-xl font-extrabold uppercase leading-snug tracking-tight text-cta-dark">{o.instructionsHeading}</h2>
          <ul className="space-y-3">
            {o.instructions.map((i) => <li key={i} className="flex gap-3"><Tick />{i}</li>)}
          </ul>
        </section>

        {/* Scarcity + price */}
        <section className="text-center">
          <p className="font-sans text-6xl font-extrabold text-cta">{o.slots}</p>
          <p className="mt-1 font-sans text-xl font-bold">Just {o.slots} spots left at this price</p>
          <div className="mt-8 rounded-2xl border-l-4 border-accent bg-night px-6 py-6 text-left leading-relaxed text-white/90">
            <p><strong className="text-accent">Good news!</strong> The {o.price} special price is still open, but only {o.slots} spots remain. Pay now to lock yours in.</p>
            <p className="mt-4">Follow the steps below to pay for the <strong className="uppercase text-accent">{o.productName}</strong> at just {o.price} today.</p>
          </div>
          <p className="mt-8 font-sans text-lg text-soft line-through decoration-2">Normal price: {o.regularPrice}</p>
          <p className="font-sans text-4xl font-extrabold text-cta-dark">Today only: {o.price}</p>
        </section>

        <PaymentBox id="pay" />

        <p className="text-center leading-relaxed sm:text-[1.0625rem]">{o.closingLine}</p>

        {/* Value stack */}
        <section className="rounded-2xl bg-night px-5 py-8 text-white sm:px-8">
          <h2 className="text-center font-sans text-xl font-extrabold tracking-tight sm:text-2xl">
            {o.valueHeadingBefore}<span className="uppercase text-accent">{o.productName}</span>{o.valueHeadingAfter}
          </h2>
          <ul className="mt-6 divide-y divide-white/10">
            {o.valueStack.map((v) => (
              <li key={v.item} className="flex items-start gap-3 py-3.5">
                <Tick />
                <span className="flex-1 text-white/90">{v.item}</span>
                <span className="shrink-0 font-sans text-sm font-bold text-accent sm:text-base">{naira(v.value)} value</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center font-sans text-xl font-extrabold uppercase text-accent">Total value: {naira(total)}</p>
        </section>

        {/* Fast action bonus */}
        <section className="text-center">
          <p className="font-sans font-extrabold uppercase tracking-wide">But wait, there’s more…</p>
          <div className="mt-5 rounded-2xl border-2 border-dashed border-accent bg-accent/10 px-5 py-8">
            <h2 className="font-sans text-lg font-extrabold uppercase tracking-tight text-cta-dark">🎁 {o.fastActionHeading}</h2>
            <ul className="mx-auto mt-5 inline-flex flex-col gap-3 text-left">
              {o.fastAction.map((b) => <li key={b} className="flex gap-3"><Tick />{b}</li>)}
            </ul>
            <p className="mt-6 font-sans font-extrabold uppercase">{o.fastActionValue}</p>
          </div>
        </section>

        <PaymentBox />

        {/* More bonuses */}
        <section className="rounded-2xl bg-night px-5 py-8 text-white sm:px-8">
          <h2 className="text-center font-sans text-lg font-extrabold uppercase tracking-tight">{o.moreBonusesHeading}</h2>
          <ul className="mt-6 space-y-4 leading-relaxed text-white/90">
            {o.moreBonuses.map((b) => <li key={b} className="flex gap-3"><span aria-hidden>🎁</span>{b}</li>)}
          </ul>
        </section>

        <PaymentBox showPrice />

        {/* Final close */}
        <section className="hero-glow relative overflow-hidden rounded-3xl px-5 py-10 text-center text-white sm:px-10">
          <div className="dots pointer-events-none absolute inset-0" />
          <div className="relative">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-accent">{o.finalEyebrow}</p>
            <h2 className="mt-3 font-sans text-2xl font-extrabold tracking-tight sm:text-3xl">{o.finalHeading}</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-white/85">
              {o.finalQuestions.map((q) => <p key={q}>{q}</p>)}
            </div>
            <p className="mt-6 font-sans text-lg font-extrabold text-accent">{o.finalBall}</p>
            <p className="mt-2 font-sans font-bold">{o.finalAction}</p>
            <a href="#pay" className="btn-cta mt-6 font-sans uppercase tracking-wide">{o.finalCta}</a>
          </div>
        </section>
      </main>

    </>
  );
}
