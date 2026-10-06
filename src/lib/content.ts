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
  finalHeading: "Your spot is waiting. We’re starting soon.",
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
  eyebrow: "You’re registered",
  title: "Your Spot Is Confirmed!",
  subtitle: "Complete the 3 steps below so you don’t miss the live training.",
  steps: [
    {
      title: "Add it to your calendar",
      body: "Lock the time in now. Most people who miss the live training simply forgot.",
    },
    {
      title: "Check your inbox",
      body: "Your private access link is on its way. If you can’t see it, check spam or promotions and mark it as safe.",
    },
    {
      title: "Show up live, 5 minutes early",
      body: "Live attendees get the full Q&A and bonuses that won’t be in any replay.",
    },
  ],
  joinCta: "Click Here to Join the Live Training",
  prepHeading: "Before the training",
  prep: [
    "Have a notebook ready. You’ll want to take notes.",
    "Join on a laptop if you can, so you can see the screen clearly.",
    "Write down your biggest question about faceless YouTube for the Q&A.",
    "Find a quiet spot and give yourself the full session.",
  ],
};
