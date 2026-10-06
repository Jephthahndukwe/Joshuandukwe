# Everything Melda: Faceless YouTube Live Training Funnel

Two-step webinar funnel built with Next.js (App Router), TypeScript and Tailwind CSS v4.

| Route | Purpose |
| --- | --- |
| `/youtube-masterclass` | Registration page matching the live everythingmelda.com design: hero, learning list, not-for-everyone section, popup opt-in form and sticky "Live Training Starting Soon" countdown bar |
| `/confirm` | Thank-you page. Reads the WebinarJam `wj_*` query params (live room link, timestamp, timezone, date/time labels) and shows countdown, join button, add-to-calendar (Google, Apple/ICS, Outlook) and prep steps |
| `/api/register` | Validates the lead, registers it with WebinarJam, then redirects to `/confirm` with WebinarJam-format params |
| `/` | Redirects to `/youtube-masterclass` |

## Editing copy

All text lives in `src/lib/content.ts` (headlines, bullets, testimonials, FAQ, host bio, schedule).
The sticky bar countdown is per visitor and restarts when it hits zero (`urgency.countdownMinutes`).

## WebinarJam setup

Copy `.env.example` to `.env.local` and fill in:

- `WEBINARJAM_API_KEY` and `WEBINARJAM_WEBINAR_ID`: registrations go straight into WebinarJam and each lead gets their unique live room link.
- `WEBINARJAM_SCHEDULE`: which schedule to register into (default `0`).
- `NEXT_PUBLIC_FALLBACK_ROOM_URL`: room link used if the API is not configured or fails, so a lead is never shown an error.

Without API keys the funnel still works end to end using the weekly schedule in `content.ts` (Tuesday 4:30 PM London).

Using WebinarJam's own registration form instead? Set its thank-you page to `https://<domain>/confirm` with "pass registrant data" enabled. The page reads the same `wj_*` params.

## Develop and deploy

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Deploy on Vercel: import the repo, add the env vars, done.
