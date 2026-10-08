# Joshua Ndukwe: Faceless YouTube Live Training Funnel

Two-step webinar funnel built with Next.js (App Router), TypeScript and Tailwind CSS v4.

| Route | Purpose |
| --- | --- |
| `/youtube-masterclass` | Registration page inspired by the original masterclass page: hero, learning list, not-for-everyone section, popup with the WebinarJam registration form and sticky "Live Training Starting Soon" countdown bar |
| `/confirm` | Success page: "Here Is How To Join" box showing the reserved session time (from WebinarJam's `wj_*` params) and a Join the Training button to the attendee's live room link. Set it as WebinarJam's thank-you page URL |
| `/signup_today` | Paid offer page for the YouTube Automation Blueprint: 72-hour countdown, price, value stack, bonuses and three payment boxes. Fill in Joshua's bank, WhatsApp and Selar details in `offer.payment` in `src/lib/content.ts`; empty fields show "payment details coming soon" |
| `/` | Redirects to `/youtube-masterclass` |

## Editing copy

All text lives in `src/lib/content.ts` (headlines, bullets, testimonials, FAQ, host bio, schedule).
The sticky bar countdown is per visitor and restarts when it hits zero (`urgency.countdownMinutes`).

## WebinarJam setup

- The signup popup embeds WebinarJam's registration form for webinar `pkz936i4` (see `webinarjam` in `src/lib/content.ts`).
- In WebinarJam, set the registration thank-you page to `https://joshuandukwe.com/confirm` with registrant data passed along, so the success page shows each person's session time.

## Develop and deploy

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Deploy on Vercel: import the repo, add the env vars, done.
