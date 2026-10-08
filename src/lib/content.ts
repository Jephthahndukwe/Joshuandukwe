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
  trainerImage: "/joshua.jpg",
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

};

export const confirm = {
  secured: "You’ve Successfully Secured Your Seat for the Live Webinar",
  headlineBefore: "In This Training, I’ll Be Revealing ",
  headlineHighlight: "“How Everyday Nigerians Are Getting Paid in Dollars",
  headlineMiddle: " With Faceless YouTube Channels, ",
  headlineEmphasis: "Without Ever Showing Their Face”",
  sub: "And exactly how you can start doing the same, right from your smartphone or laptop, with ",
  subStrong: "no prior experience needed.",
  scarcity: "Limited seats available",
  joinHeading: "Here Is How To Join",
  reservedLabel: "Your training slot is reserved at:",
  joinPrompt: "Click the button below to enter the training once it is time",
  joinButton: "Join the training",
  // Where the Join the Training button on the success page goes.
  joinUrl: "https://event.webinarjam.com/k50n24/go/live/pkz936i4fgs6sq",
  noRedirect: "Be sure to click the button above at the scheduled time: this page will NOT automatically redirect.",
  emailNote: "You should have received an email about this training. Kindly check your inbox and mark the mail as important.",
  updatesNote: "I’ll be sending you updates about this training, plus insights on other smart ways people are building income online, from time to time.",
};

/** /signup_today: the paid offer page shown after the webinar. */
export const offer = {
  productName: "YouTube Automation Blueprint",
  countdownMinutes: 72 * 60,
  headlineBefore: "Learn How To Build A Faceless YouTube Channel That Can Generate ",
  headlineHighlight: "$1,000 to $5,000+",
  headlineAfter: " Monthly From Home",
  subhead: "No experience whatsoever needed, and this works even for complete beginners.",
  intro: "This proven system you are about to learn has helped me build my faceless YouTube journey, and now it is your turn.",
  enrollBefore: "When you enroll in the ",
  enrollAfter: ", you will gain access to the knowledge, strategies, resources and tools you need to start and build your own faceless YouTube channel.",
  instructionsHeading: "To get the special offer, make sure you follow the instructions",
  instructions: [
    "Use the available discount (act fast, this offer is limited)",
    "Send your payment to the available account details",
    "Confirm your payment by clicking the button below",
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

  valueHeadingBefore: "Here Is What You Will Get When You Enroll In The ",
  valueHeadingAfter: " Today",
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

  fastActionHeading: "Fast action bonus when you make payment right now",
  fastAction: ["2 Weeks Direct Access to Coach Joshua", "30-Minute Strategy Call", "1 Month Channel Monitoring & Feedback"],
  fastActionValue: "Total bonus value: Priceless",

  moreBonusesHeading: "More bonuses if you are paying now",
  moreBonuses: [
    "We would be teaching you how to build and grow your faceless YouTube channel from scratch.",
    "We would be giving you step-by-step guidance on how to create content using AI tools.",
    "We would be revealing how to find profitable faceless YouTube niches.",
    "We would be showing you how to create videos without showing your face.",
    "We would be showing you how to optimize your videos for YouTube and work towards monetization.",
  ],

  closingLine: "Take this opportunity to learn how to build a faceless YouTube channel and start working towards creating income from a global audience.",
  finalEyebrow: "It’s up to you",
  finalHeading: "What Would You Do?",
  finalQuestions: [
    "Do you want to take this opportunity to gain access to a practical system for building a faceless YouTube channel and creating an additional source of income?",
    "Would you rather close this page, miss the current ₦60,000 offer, and continue doing things the same way?",
  ],
  finalBall: "The ball is in your court.",
  finalAction: "👉 Take action now!",
  finalCta: "Click here",
};
