import Script from "next/script";
import { snapPixelId } from "@/lib/content";

/** Snap Pixel base code (from Snapchat Ads Manager). Loads on every page and tracks PAGE_VIEW. */
export function SnapPixel() {
  return (
    <Script id="snap-pixel" strategy="afterInteractive">
      {`(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';var r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');
snaptr('init', '${snapPixelId}', {});
snaptr('track', 'PAGE_VIEW');`}
    </Script>
  );
}

/** Fires a Snap SIGN_UP conversion. Render it on the page people land on after registering. */
export function SnapSignUp() {
  return (
    <Script id="snap-sign-up" strategy="afterInteractive">
      {`window.snaptr && window.snaptr('track', 'SIGN_UP');`}
    </Script>
  );
}
