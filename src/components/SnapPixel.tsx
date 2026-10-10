"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { snapPixelId } from "@/lib/content";

type Snaptr = (...args: unknown[]) => void;
declare global {
  interface Window {
    snaptr?: Snaptr;
  }
}

/**
 * Snap Pixel base code (from Snapchat Ads Manager).
 * Tracks PAGE_VIEW unless the page sends its own (see SnapSignUp).
 */
export function SnapPixel({ pageView = true }: { pageView?: boolean }) {
  return (
    <Script id="snap-pixel" strategy="afterInteractive">
      {`(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';var r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');
snaptr('init', '${snapPixelId}', {});${pageView ? "\nsnaptr('track', 'PAGE_VIEW');" : ""}`}
    </Script>
  );
}

async function sha256(value: string) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Success page events: PAGE_VIEW and SIGN_UP, with the registrant's email (from WebinarJam's
 * wj_lead_email param) SHA-256 hashed in the browser for Snap's advanced matching.
 * The plain email is never sent to Snapchat.
 */
export function SnapSignUp() {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;

    (async () => {
      const email = new URLSearchParams(window.location.search).get("wj_lead_email")?.trim().toLowerCase() ?? "";
      const data: Record<string, string> = {};
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && window.crypto?.subtle) {
        try {
          data.user_hashed_email = await sha256(email);
        } catch {}
      }
      // The pixel script loads alongside this component, so wait briefly for it.
      const fire = () => {
        if (window.snaptr) {
          window.snaptr("track", "PAGE_VIEW", data);
          window.snaptr("track", "SIGN_UP", data);
        } else if (tries++ < 50) {
          timer = setTimeout(fire, 100);
        }
      };
      fire();
    })();

    return () => clearTimeout(timer);
  }, []);

  return null;
}
