"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { masterclass } from "@/lib/content";

export function RegisterForm({ id }: { id?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

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
    <form id={id} onSubmit={onSubmit} className="flex w-full flex-col gap-3" noValidate={false}>
      <label className="sr-only" htmlFor={`${id}-first`}>First name</label>
      <input id={`${id}-first`} name="firstName" required autoComplete="given-name" placeholder="Your first name" className="input" />
      <label className="sr-only" htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder="Your best email" className="input" />
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button type="submit" disabled={status === "loading"} className="btn-primary mt-1 w-full text-base">
        {status === "loading" ? "Reserving your seat…" : masterclass.cta}
        {status !== "loading" && <span aria-hidden>→</span>}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-brand">{error}</p>
      )}
      <p className="text-center text-xs text-muted">{masterclass.ctaSub} We respect your privacy.</p>
    </form>
  );
}
