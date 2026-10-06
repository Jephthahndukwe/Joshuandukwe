# Everything Melda: YouTube Masterclass Funnel

Two-step webinar funnel built with Next.js (App Router), TypeScript and Tailwind CSS v4.

| Route | Purpose |
| --- | --- |
| `/youtube-masterclass` | Registration landing page (hero + countdown, pain points, curriculum, audience fit, host bio, testimonials, FAQ, final CTA, mobile sticky CTA) |
| `/confirm` | Thank-you page. Reads the WebinarJam `wj_*` query params (live room link, timestamp, timezone, date/time labels) and shows countdown, join button, add-to-calendar (Google, Apple/ICS, Outlook) and prep steps |
| `/api/register` | Validates the lead, registers it with WebinarJam, then redirects to `/confirm` with WebinarJam-format params |
| `/` | Redirects to `/youtube-masterclass` |

## Editing copy

All text lives in `src/lib/content.ts` (headlines, bullets, testimonials, FAQ, host bio, schedule).
Replace `public/melda.svg` with the host photo (keep the path or update `hostImage`).

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
