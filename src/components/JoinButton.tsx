"use client";

import { useState } from "react";
import { confirm as c } from "@/lib/content";

/** Always visible. Opens the live room when we have its link; otherwise points people to their email. */
export function JoinButton({ roomUrl }: { roomUrl: string }) {
  const [showHelp, setShowHelp] = useState(false);
  const cls = "btn-cta mt-3 w-full font-sans uppercase tracking-wide";

  return (
    <>
      {roomUrl ? (
        <a href={roomUrl} target="_blank" rel="noopener noreferrer" className={cls}>{c.joinButton}</a>
      ) : (
        <button type="button" onClick={() => setShowHelp(true)} className={cls}>{c.joinButton}</button>
      )}
      {showHelp && <p role="status" className="mt-3 font-sans text-sm font-semibold leading-relaxed">{c.noLink}</p>}
    </>
  );
}
