import { NextResponse } from "next/server";
import { schedule } from "@/lib/content";
import { nextSessionStart, zonedTimeToUtc } from "@/lib/schedule";
import { confirmQuery } from "@/lib/webinar";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WebinarJamUser = {
  live_room_url?: string;
  date?: string; // "YYYY-MM-DD HH:mm"
  timezone?: string;
  password?: string;
};

function parseWjDate(date: string | undefined, timeZone: string): number | null {
  const m = date?.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/);
  if (!m) return null;
  return zonedTimeToUtc(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], timeZone);
}

function isIanaZone(tz: string | undefined): tz is string {
  if (!tz) return false;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ redirect: "/confirm" });
  }

  const firstName = String(body.firstName ?? "").trim().slice(0, 80);
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 200);
  if (!firstName) return NextResponse.json({ error: "Please enter your first name." }, { status: 422 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });

  const apiKey = process.env.WEBINARJAM_API_KEY;
  const webinarId = process.env.WEBINARJAM_WEBINAR_ID;
  const fallbackRoom = process.env.NEXT_PUBLIC_FALLBACK_ROOM_URL ?? "";

  if (apiKey && webinarId) {
    try {
      const form = new URLSearchParams({
        api_key: apiKey,
        webinar_id: webinarId,
        first_name: firstName,
        email,
        schedule: process.env.WEBINARJAM_SCHEDULE ?? "0",
      });
      const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
      if (ip) form.set("ip_address", ip);

      const res = await fetch("https://api.webinarjam.com/webinarjam/register", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form,
        cache: "no-store",
      });
      const data = (await res.json().catch(() => null)) as { status?: string; user?: WebinarJamUser; message?: string } | null;

      if (res.ok && data?.status === "success" && data.user) {
        const timeZone = isIanaZone(data.user.timezone) ? data.user.timezone : schedule.timeZone;
        const startMs = parseWjDate(data.user.date, timeZone) ?? nextSessionStart();
        const query = confirmQuery({
          roomUrl: data.user.live_room_url || fallbackRoom,
          roomPassword: data.user.password,
          startMs,
          timeZone,
        });
        return NextResponse.json({ redirect: `/confirm?${query}` });
      }
      console.error("WebinarJam registration failed", res.status, data?.message);
    } catch (err) {
      console.error("WebinarJam registration error", err);
    }
    // Fall through: never lose a lead because the webinar API hiccupped.
  }

  const query = confirmQuery({ roomUrl: fallbackRoom, startMs: nextSessionStart(), timeZone: schedule.timeZone });
  return NextResponse.json({ redirect: `/confirm?${query}` });
}
