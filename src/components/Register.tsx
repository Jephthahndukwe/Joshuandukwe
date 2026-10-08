"use client";

import { useEffect, useRef, useState } from "react";
import { masterclass, webinarjam as wj } from "@/lib/content";

const OPEN_EVENT = "open-register";

/** Any CTA on the page. Opens the registration popup. */
export function RegisterButton({ children, className = "btn-cta" }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {children}
    </button>
  );
}

function embedSrc() {
  const params = new URLSearchParams({
    formButtonText: wj.formButtonText,
    formAccentColor: wj.formAccentColor,
    formAccentOpacity: "0.95",
    formBgColor: wj.formBgColor,
    formBgOpacity: "1",
  });
  return `https://event.webinarjam.com/register/${wj.webinarHash}/embed-form?${params}`;
}

/** Popup holding the WebinarJam registration form. The embed script loads the first time the popup opens. */
export function RegisterModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const f = masterclass.form;

  useEffect(() => {
    const open = () => {
      dialogRef.current?.showModal();
      const wrapper = wrapperRef.current;
      if (!wrapper || wrapper.dataset.loaded) return;
      wrapper.dataset.loaded = "true";
      setState("loading");
      const script = document.createElement("script");
      script.src = embedSrc();
      script.async = true;
      script.onload = () => setState("ready");
      script.onerror = () => setState("error");
      wrapper.appendChild(script);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

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
      <div className="p-4 sm:p-6">
        {/* WebinarJam renders its form inside this wrapper. */}
        <div ref={wrapperRef} className="wj-embed-wrapper min-h-48" data-webinar-hash={wj.webinarHash} />
        {state === "loading" && <p className="py-2 text-center text-sm text-soft">{f.loading}</p>}
        {state === "error" && (
          <p role="alert" className="py-2 text-center text-sm font-semibold text-cta-dark">
            The form couldn’t load. Check your connection and try again.
          </p>
        )}
        <p className="mt-3 text-center text-xs text-soft">{f.privacy}</p>
      </div>
    </dialog>
  );
}
