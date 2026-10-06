import type { Metadata } from "next";
import Image from "next/image";
import { Countdown } from "@/components/Countdown";
import { Footer, Logo } from "@/components/Chrome";
import { RegisterForm } from "@/components/RegisterForm";
import { masterclass as c, schedule } from "@/lib/content";
import { formatEvent, nextSessionStart } from "@/lib/schedule";

export const metadata: Metadata = { title: "Free YouTube Masterclass" };
export const revalidate = 300;

function Check({ tone = "brand" }: { tone?: "brand" | "muted" }) {
  return tone === "brand" ? (
    <svg viewBox="0 0 20 20" className="mt-0.5 size-5 shrink-0 fill-brand" aria-hidden>
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.7-9.3-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 1 1 1.06 1.06Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" className="mt-0.5 size-5 shrink-0 fill-zinc-600" aria-hidden>
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM7.53 6.47a.75.75 0 0 0-1.06 1.06L8.94 10l-2.47 2.47a.75.75 0 1 0 1.06 1.06L10 11.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L11.06 10l2.47-2.47a.75.75 0 0 0-1.06-1.06L10 8.94 7.53 6.47Z" />
    </svg>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">{children}</h2>
    </div>
  );
}

export default function MasterclassPage() {
  const start = nextSessionStart();
  const event = formatEvent(start, schedule.timeZone);

  return (
    <>
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 border-b border-line bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <a href="#register" className="btn-primary !px-5 !py-2.5 text-sm">Register free</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pt-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300">
                <span className="live-dot size-1.5 rounded-full bg-brand" />
                {c.eyebrow} · {event.date}
              </div>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                {c.title} <em className="text-gradient">{c.titleAccent}</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">{c.subtitle}</p>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-2xl font-semibold">{s.value}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wider text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div id="register" className="card relative scroll-mt-24 p-6 shadow-2xl shadow-black/50 sm:p-8">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Next live session</p>
              <p className="mt-2 text-xl font-semibold">{event.date}</p>
              <p className="text-sm text-muted">{event.time} {event.tzLabel}</p>
              <div className="my-6"><Countdown target={start} /></div>
              <RegisterForm id="hero-form" />
            </div>
          </div>
        </section>

        {/* Pain */}
        <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionHeading>{c.painHeading}</SectionHeading>
            <ul className="grid gap-4 sm:grid-cols-2">
              {c.pains.map((p) => (
                <li key={p} className="card p-5 text-zinc-300">“{p}”</li>
              ))}
            </ul>
            <p className="mx-auto mt-12 max-w-2xl text-center text-xl leading-relaxed text-zinc-200">{c.painResolution}</p>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Inside the masterclass">{c.learnHeading}</SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.learn.map((item, i) => (
                <article key={item.title} className="card group p-6 transition-colors hover:border-white/15">
                  <span className="text-sm font-semibold tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="#register" className="btn-primary">{c.cta} <span aria-hidden>→</span></a>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeading>{c.audienceHeading}</SectionHeading>
            <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
              <ul className="card space-y-4 p-6 sm:p-8">
                {c.audienceFor.map((a) => (
                  <li key={a} className="flex gap-3 text-zinc-200"><Check />{a}</li>
                ))}
              </ul>
              <div className="card p-6 sm:p-8">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Not for you if…</p>
                <ul className="space-y-4">
                  {c.audienceNotFor.map((a) => (
                    <li key={a} className="flex gap-3 text-muted"><Check tone="muted" />{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Host */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-gold/20 blur-2xl" />
              <Image src={c.hostImage} alt={`${c.hostName}, your host`} width={480} height={600} unoptimized className="relative aspect-[4/5] w-full rounded-[1.75rem] border border-line object-cover" />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">{c.hostHeading}</p>
              <h2 className="font-display text-5xl tracking-tight">Hi, I&apos;m {c.hostName}.</h2>
              <p className="mt-2 text-muted">{c.hostRole}</p>
              <div className="mt-6 space-y-4 leading-relaxed text-zinc-300">
                {c.hostBio.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-y border-line bg-ink-2 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Results">{c.testimonialsHeading}</SectionHeading>
            <div className="grid gap-4 md:grid-cols-3">
              {c.testimonials.map((t) => (
                <figure key={t.name} className="card flex flex-col p-6">
                  <div className="mb-4 flex gap-0.5 text-gold" aria-label="5 out of 5 stars">{"★★★★★"}</div>
                  <blockquote className="flex-1 leading-relaxed text-zinc-200">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand/80 to-brand-2/80 text-sm font-semibold">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-sm text-muted">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading>{c.faqHeading}</SectionHeading>
            <div className="space-y-3">
              {c.faqs.map((f) => (
                <details key={f.q} className="card group px-6 py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                    {f.q}
                    <span className="faq-icon text-2xl leading-none text-muted transition-transform">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-line py-20 sm:py-28">
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6">
            <h2 className="font-display text-5xl tracking-tight sm:text-6xl">{c.finalHeading}</h2>
            <p className="mt-4 text-lg text-zinc-300">{c.finalBody}</p>
            <div className="mt-8 flex justify-center"><Countdown target={start} compact /></div>
            <p className="mt-4 text-sm text-muted">{event.date} · {event.time} {event.tzLabel}</p>
            <div className="card mt-8 p-6 text-left sm:p-8"><RegisterForm id="final-form" /></div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 p-3 backdrop-blur-xl sm:hidden">
        <a href="#register" className="btn-primary w-full">{c.cta}</a>
      </div>
      <div className="h-20 sm:hidden" />
    </>
  );
}
