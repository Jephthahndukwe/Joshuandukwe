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
 * Mirrors the WebinarJam schedule: Just-In-Time sessions every :00, :15, :30 and :45
 * in each viewer's own time zone.
 */
export const schedule = {
  intervalMinutes: 15,
  // How long the page keeps saying "We're live now" after a session starts.
  durationMinutes: 90,
};

/** "Live Training Starting Soon" bar: per-visitor countdown that restarts when it hits zero. */
export const urgency = {
  label: "Live Training",
  cta: "Click here to register now!!!",
};

/** WebinarJam registration form embedded in the signup popup. */
export const webinarjam = {
  webinarHash: "pkz936i4",
  // Styling passed to WebinarJam's embed: button text and colours to match the site.
  formButtonText: "Join the Live Training Now",
  formAccentColor: "#f97316",
  formBgColor: "#ffffff",
};

export const masterclass = {
  topBadge: "Free live online training",
  headlineBefore: "The Simple Way Regular Nigerians Are Turning Faceless YouTube Channels Into ",
  headlineHighlight: "$1,000 to $5,000+",
  headlineAfter: " a Month",
  subhead: "You don’t have to be on camera, or even be a YouTuber, to earn from YouTube.",
  promise:
    "I’ll walk you through my beginner-friendly process for picking a winning niche, making videos with AI, growing your channel and getting it ready to earn, starting from zero.",
  noNeed: ["Your face stays off camera", "Zero followers needed", "No YouTube experience required", "No tech skills needed"],
  heroMeta: ["Free to join", "Live with Joshua", "Made for beginners"],
  proofStat: "5,516+",
  proofLabel: "people I’ve helped start building an online income",

  joinCta: "Save My Free Seat Now",
  registerCta: "Yes, I Want In!",

  intro:
    "Never made money online before? Good. This training was built for you. It’s practical, easy to follow and made for anyone who wants to start a faceless YouTube channel and build a second income from home.",
  proof: "No camera, no fame, no fancy equipment. Just a clear process you can follow step by step.",
  yourTurn: "Your turn starts today.",
  curious: "If faceless YouTube has caught your eye but you have no idea where to begin, this session gives you the full picture in one sitting.",

  learnEyebrow: "What we’ll cover",
  learnHeading: "Here’s what you’ll learn in this training",
  learn: [
    "How to pick a faceless YouTube niche that can actually pay",
    "How to make engaging videos with AI tools, even if you’ve never edited before",
    "How to set up your channel from scratch and keep posting without burning out",
    "How YouTube pays creators, and the steps to get your channel earning",
    "The beginner mistakes that kill most channels, and how to avoid them",
    "How to hand off the work and grow when your channel takes off",
  ],

  tip: "You won’t be overwhelmed. Everything is broken into simple steps, so you can start your faceless YouTube channel sooner than you expect.",

  notForHeading: "Heads up: this training isn’t for everyone",
  notForLead: "Skip this if…",
  forLead: "Join if…",
  forList: [
    "Faceless YouTube interests you but you don’t know where to start",
    "You want an extra income stream you can run from home",
    "You’re willing to learn, take action and stay consistent",
  ],
  notFor: [
    "You want get-rich-quick money or Ponzi schemes",
    "You’re not willing to put in real effort",
    "You don’t believe making money online is possible",
  ],
  trainerEyebrow: "Meet your trainer",
  trainerFirstName: "Joshua",
  trainerLastName: "Ndukwe",
  trainerRole: "Faceless YouTube creator & digital educator",
  // Drop a square photo in /public (e.g. /joshua.jpg) and set the path here. Initials show until then.
  trainerImage: "/joshua.jpg",
  trainerBio: [
    "I’m Joshua Ndukwe, a faceless YouTube creator and digital educator.",
    "I learned YouTube the hard way, through trial, error and a lot of testing, until I found a process that works: choosing the right niche and creating videos with AI, no camera needed.",
    "Since then, I’ve helped thousands of people start building an income online, and now I teach that same process to beginners who want to earn without showing their face.",
    "In this free session, I’ll keep it simple: what faceless YouTube is, how it works and the first steps to start yours.",
  ],
  trainerCta: "Save my free seat",

  finalHeadingBefore: "Ready to ",
  finalHeadingAccent: "get started?",
  finalBody: "Grab your free seat and see how everyday Nigerians are building faceless YouTube channels with AI, and how you can build yours too.",
  actionTakers: "This is for doers: people ready to learn, put in the work and build real income online.",

  disclaimer:
    "This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.",
};

export const confirm = {
  secured: "You’re in! Your seat for the live training is confirmed",
  headlineBefore: "On This Live Session, I’ll Show You ",
  headlineHighlight: "“How Ordinary Nigerians Are Earning in Dollars",
  headlineMiddle: " From Faceless YouTube Channels, ",
  headlineEmphasis: "No Camera, No Face Required”",
  sub: "Plus how you can start yours using just your phone or laptop, with ",
  subStrong: "zero experience.",
  scarcity: "Seats are limited",
  joinHeading: "How To Join The Training",
  reservedLabel: "Your seat is booked for:",
  joinPrompt: "When it’s time, tap the button below to enter the training room",
  joinButton: "Enter the training room",
  // Where the Join the Training button on the success page goes.
  joinUrl: "https://event.webinarjam.com/k50n24/go/live/pkz936i4fgs6sq",
  noRedirect: "Remember to tap the button above at your booked time. This page won’t take you there automatically.",
  emailNote: "A confirmation email is on its way to your inbox. Open it and mark it as important so you don’t miss the reminders.",
  updatesNote: "From time to time, I’ll also share tips and updates on smart ways to build income online.",
};

/** /signup_today: the paid offer page shown after the webinar. */
export const offer = {
  productName: "YouTube Automation Blueprint",
  countdownMinutes: 72 * 60,
  headlineBefore: "Build a Faceless YouTube Channel From Home That Can Earn ",
  headlineHighlight: "$1,000 to $5,000+",
  headlineAfter: " Every Month",
  subhead: "No experience needed. If you’re a total beginner, this was made for you.",
  intro: "This is the same process I used to build my own faceless YouTube journey, and now I’m handing it to you.",
  enrollBefore: "Join the ",
  enrollAfter: " and get the knowledge, strategies, resources and tools to launch and grow your own faceless YouTube channel.",
  instructionsHeading: "How to claim today’s special price",
  instructions: [
    "Lock in the discounted price (it won’t last long)",
    "Transfer your payment to the account details below",
    "Tap the button below to confirm your payment",
  ],
  slots: 5,
  regularPrice: "₦120,000",
  price: "₦60,000",

  /**
   * Joshua's payment details. Leave a field empty until it is confirmed:
   * the page shows "payment details coming soon" instead of an account.
   */
  payment: {
    accountNumber: "0250131069",
    bankName: "EcoBank",
    accountName: "Joshua Ndukwe",
    // "Send proof of payment" button.
    proofUrl: "https://wa.link/ktpgg3",
    selarUrl: "https://selar.com/p/44u1474541?affiliate=x318z87s31",
    // WhatsApp enquiry numbers: international format without "+", plus how they read on the page.
    enquiry: [
      { number: "2348085622700", display: "+234 808 562 2700" },
      { number: "2348131970294", display: "+234 813 197 0294" },
    ],
  },

  valueHeadingBefore: "Everything You Get Inside The ",
  valueHeadingAfter: "",
  // Values in naira; the total is added up automatically.
  valueStack: [
    { item: "7 Complete Modules", value: 250_000 },
    { item: "20+ Profitable Faceless YouTube Niches", value: 50_000 },
    { item: "Step-by-Step Roadmap", value: 70_000 },
    { item: "Complete AI Workflow", value: 65_000 },
    { item: "Done-for-You Prompt Library", value: 45_000 },
    { item: "Clickable Thumbnails & Title Formula", value: 40_000 },
    { item: "Practical Templates", value: 35_000 },
    { item: "Future Course Updates", value: 49_500 },
  ],

  fastActionHeading: "Bonus for fast action: pay today and also get",
  fastAction: ["2 weeks of direct access to Coach Joshua", "A 30-minute one-on-one strategy call", "1 month of channel reviews & feedback"],
  fastActionValue: "Bonus value: Priceless",

  moreBonusesHeading: "Even more when you join today",
  moreBonuses: [
    "Guidance on building and growing your faceless YouTube channel from day one.",
    "Step-by-step help creating content with AI tools.",
    "How to spot faceless YouTube niches that can make money.",
    "How to make great videos without ever appearing on camera.",
    "How to optimize your videos for YouTube and move towards monetization.",
  ],

  closingLine: "This is your chance to build a faceless YouTube channel and start earning from a worldwide audience.",
  finalEyebrow: "Your call",
  finalHeading: "So, What’s Your Next Move?",
  finalQuestions: [
    "Will you grab this chance to get a practical, proven system for building a faceless YouTube channel and a new income stream?",
    "Or will you close this page, let the ₦60,000 offer go, and keep things exactly as they are?",
  ],
  finalBall: "The choice is yours.",
  finalAction: "👉 Make your move now!",
  finalCta: "Enroll now",
};
