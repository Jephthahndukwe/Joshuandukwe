"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { masterclass } from "@/lib/content";

const OPEN_EVENT = "open-register";

/** Any CTA on the page. Opens the registration popup. */
export function RegisterButton({ children, className = "btn-cta" }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {children}
    </button>
  );
}

export function RegisterModal() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const f = masterclass.form;

  useEffect(() => {
    const open = () => {
      dialogRef.current?.showModal();
      dialogRef.current?.querySelector<HTMLInputElement>("input[name=firstName]")?.focus();
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: fd.get("firstName"), email: fd.get("email"), company: fd.get("company") }),
      });
      const data = (await res.json()) as { redirect?: string; error?: string };
      if (!res.ok || !data.redirect) throw new Error(data.error || "Something went wrong. Please try again.");
      router.push(data.redirect);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="register-title"
      onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-xl bg-paper p-0 shadow-2xl backdrop:bg-black/70"
    >
      <div className="relative bg-night px-6 pb-5 pt-6 text-center text-white">
        <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close" className="absolute right-3 top-2 text-2xl leading-none text-white/70 hover:text-white">×</button>
        <h2 id="register-title" className="font-sans text-2xl font-extrabold tracking-tight">{f.heading}</h2>
        <p className="mt-1 text-sm italic text-white/80">{f.sub}</p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 p-6">
        <label className="sr-only" htmlFor="reg-first">First name</label>
        <input id="reg-first" name="firstName" required autoComplete="given-name" placeholder="Your first name" className="input" />
        <label className="sr-only" htmlFor="reg-email">Email</label>
        <input id="reg-email" name="email" type="email" required autoComplete="email" placeholder="Your correct email address" className="input" />
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button type="submit" disabled={status === "loading"} className="btn-cta mt-1 w-full">
          {status === "loading" ? f.loading : f.submit}
        </button>
        {status === "error" && <p role="alert" className="text-sm text-cta">{error}</p>}
        <p className="text-center text-xs text-soft">{f.privacy}</p>
      </form>
    </dialog>
  );
}
