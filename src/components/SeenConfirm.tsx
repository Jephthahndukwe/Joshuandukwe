"use client";

import { useState } from "react";
import { confirm as c } from "@/lib/content";

export function SeenConfirm() {
  const [seen, setSeen] = useState(false);

  if (seen) {
    return (
      <div role="status" className="mt-6 rounded-xl bg-accent/15 px-5 py-5">
        <p className="font-sans text-lg font-extrabold tracking-tight">{c.confirmedHeading}</p>
        <p className="mt-2 text-base leading-relaxed text-soft">{c.confirmedBody}</p>
      </div>
    );
  }

  return (
    <>
      <p className="mt-6 text-base font-bold leading-snug">{c.prompt}</p>
      <button type="button" onClick={() => setSeen(true)} className="btn-cta mt-4 w-full sm:w-auto sm:min-w-80">{c.button}</button>
    </>
  );
}
