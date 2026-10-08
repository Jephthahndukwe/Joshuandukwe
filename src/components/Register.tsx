"use client";

import { useEffect, useRef, useState } from "react";
import { webinarjam as wj } from "@/lib/content";

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
      aria-label="Register for the live training"
      onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      className="m-auto w-[calc(100%-2rem)] max-w-md overflow-visible rounded-xl bg-white p-0 shadow-2xl backdrop:bg-black/70"
    >
      <button
        type="button"
        onClick={() => dialogRef.current?.close()}
        aria-label="Close"
        className="absolute -right-2 -top-3 z-10 grid size-8 place-items-center rounded-full bg-night text-lg leading-none text-white shadow-lg hover:bg-night-2"
      >
        ×
      </button>
      <div className="p-3 sm:p-4">
        {/* WebinarJam renders its registration form inside this wrapper. */}
        <div ref={wrapperRef} className="wj-embed-wrapper min-h-48" data-webinar-hash={wj.webinarHash} />
        {state === "loading" && <p className="pb-2 text-center text-sm text-soft">Loading…</p>}
        {state === "error" && (
          <p role="alert" className="pb-2 text-center text-sm font-semibold text-cta-dark">
            The form couldn’t load. Check your connection and try again.
          </p>
        )}
      </div>
    </dialog>
  );
}
