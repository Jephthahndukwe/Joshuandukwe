/**
 * All funnel copy lives here so the client can edit text without touching layout.
 */

export const brand = {
  name: "Joshua Ndukwe",
  host: "Joshua Ndukwe",
  // Set NEXT_PUBLIC_SITE_URL once the custom domain is live; Vercel's production URL is used until then.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  // Shown on the confirm page when set.
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "",
};

/**
 * Webinar schedule used when WebinarJam is not returning a date.
 * Weekly recurring session, expressed in the host's local timezone.
 */
export const schedule = {
  timeZone: "Europe/London",
  weekday: 2, // 0 = Sunday ... 2 = Tuesday
  hour: 16,
  minute: 30,
  durationMinutes: 90,
};

/** "Live Training Starting Soon" bar: per-visitor countdown that restarts when it hits zero. */
export const urgency = {
  label: "Live Training",
  sublabel: "Starting Soon",
  countdownMinutes: 165,
  cta: "Click here to register now!!!",
};

export const masterclass = {
  pill: "Making Money Online Doesn’t Have To Be This Complicated",
  headlineBefore: "How Everyday Nigerians Are Quietly Building Faceless YouTube Channels That Can Generate Over ",
  headlineHighlight: "$1,000 to $5,000+",
  headlineAfter: " Monthly",
  subhead: "You don’t need to be a YouTuber to start making money from YouTube.",
  promise:
    "Using MY simple step-by-step system to choose the right niche, create videos with AI, build your channel, and work towards monetization from scratch.",
  noNeed: ["No showing your face", "No followers", "No prior YouTube experience", "No complicated tech skills"],
  heroMeta: ["100% free", "Live training", "Beginner friendly"],
  proofStat: "9,715+",
  proofLabel: "people already helped to start building online income",

  joinCta: "Click Here to Join the Live Training Now",
  registerCta: "Click Here to Register Now!!!",

  intro:
    "This training works even if you’ve never made a dollar online before. It is beginner-friendly, practical, and designed for anyone who wants to start building a faceless YouTube channel and creating an online income stream from home.",
  proof: "A proven system that has already helped over 9,715 people get started with building online income.",
  yourTurn: "Now it’s your turn.",
  curious: "If you’ve been curious about faceless YouTube but don’t know where to start, this training will show you exactly what you need to know.",

  learnEyebrow: "Inside the training",
  learnHeading: "Here’s exactly what I’ll show you",
  learn: [
    "How to find the right faceless YouTube niche",
    "How to create YouTube videos using AI, even if you have no editing experience",
    "How to build your channel from scratch and create content consistently",
    "How YouTube monetization works and what you need to do to work towards earning from your channel",
    "The common mistakes beginners make and how to avoid them",
    "How to outsource and scale your channel when you’re ready",
  ],

  tip: "This training is beginner-friendly, practical, and designed to help you get started without feeling overwhelmed. Follow the steps I’ll show you, and you can start building your faceless YouTube channel sooner than you think.",

  notForHeading: "Please note: this training is not for everyone",
  notForLead: "This is not for you if…",
  forLead: "This is for you if…",
  forList: [
    "You’re curious about faceless YouTube but don’t know where to start",
    "You want to build an online income stream from home",
    "You’re ready to learn, apply what you’re taught and stay consistent",
  ],
  notFor: [
    "You’re looking for quick money / Ponzi schemes",
    "You’re not ready to put in the work",
    "You have a negative mindset about making money online",
  ],
  trainerEyebrow: "Meet your trainer",
  trainerFirstName: "Joshua",
  trainerLastName: "Ndukwe",
  trainerRole: "Faceless YouTube creator & digital educator",
  // Drop a square photo in /public (e.g. /joshua.jpg) and set the path here. Initials show until then.
  trainerImage: "",
  trainerBio: [
    "I’m Joshua Ndukwe, a faceless YouTube creator and digital educator.",
    "I’ve spent years learning how YouTube really works, from picking the right niche to creating videos with AI without ever showing my face.",
    "I’ve also helped thousands of people get started with building an online income from home.",
    "In this free training, I’ll break it all down simply: what faceless YouTube is, how it works, and how you can start.",
  ],
  trainerCta: "Join the free training",

  finalHeadingBefore: "Ready to ",
  finalHeadingAccent: "learn more?",
  finalBody: "Join the free training to learn how everyday Nigerians are building faceless YouTube channels with AI, and how you can start too.",
  actionTakers: "This training is for action takers who are ready to learn, apply what they’re taught, and build a real online income.",

  disclaimer:
    "This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.",

  form: {
    heading: "Reserve Your Free Spot",
    sub: "Enter your first name and correct email to join the live training.",
    submit: "Join the Live Training Now",
    loading: "Securing your spot…",
    privacy: "100% free. Your details are safe with us.",
  },
};

export const confirm = {
  pill: "🎉 You’ve Successfully Secured Your Seat for the Live Webinar",
  sub: "You don’t need to show your face, have previous experience, or be a tech expert to get started.",
  scarcity: "🔥 Limited seats available",
  badge: "✅ Seat confirmed",
  cardHeading: "Check Your Email Now",
  cardBody: [
    "Your webinar link has been sent straight to your email, not this page.",
    "Open your inbox, find the confirmation email, and save it somewhere you’ll see it again at your scheduled time.",
  ],
  prompt: "👉 Click the button below to confirm you’ve seen this page",
  button: "I’ve Seen This, Confirm",
  closeNote: "You can safely close this page now. Your link to join the training is waiting in your email.",
  confirmedHeading: "You’re all set! 🎉",
  confirmedBody: "See you live. Keep an eye on your inbox for your joining link and reminders.",
  importantHeading: "⚠️ Important",
  importantLead: "Please make sure you check your email inbox after registering.",
  importantIf: "If you don’t see the email immediately:",
  importantList: [
    "Check your Spam/Junk folder",
    "Check your Promotions/Updates folder",
    // Match this to the subject line of the WebinarJam confirmation email.
    "Search your inbox for “Faceless YouTube Live Training”",
  ],
  importantOutro: "Save your scheduled webinar time to your calendar so you don’t miss it.",
};
