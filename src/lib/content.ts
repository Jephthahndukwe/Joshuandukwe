/**
 * All funnel copy lives here so the client can edit text without touching layout.
 * Swap any string, add or remove list items, and the pages update automatically.
 */

export const brand = {
  name: "Everything Melda",
  host: "Melda",
  siteUrl: "https://everythingmelda.com",
  supportEmail: "hello@everythingmelda.com",
  instagram: "https://instagram.com/everythingmelda",
  youtube: "https://youtube.com/@everythingmelda",
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

export const masterclass = {
  eyebrow: "Free live masterclass",
  title: "Grow a YouTube channel that pays you,",
  titleAccent: "without going viral or burning out.",
  subtitle:
    "In 90 minutes I'll show you the exact system I use to plan, film and publish videos that pull in subscribers, brand deals and paying clients on autopilot.",
  cta: "Save my free seat",
  ctaSub: "100% free. Live training with Q&A. Limited seats.",
  stats: [
    { value: "90 min", label: "Live, no fluff" },
    { value: "3", label: "Core frameworks" },
    { value: "Q&A", label: "Ask me anything" },
  ],

  painHeading: "Sound familiar?",
  pains: [
    "You've posted for months and your views are stuck in double digits.",
    "You never know what to film next, so you don't film at all.",
    "You spend a whole weekend editing one video that nobody watches.",
    "You see creators with smaller audiences making real money and wonder what they know.",
  ],
  painResolution:
    "It's not your camera, your voice or the algorithm. It's the missing system. That's what we fix on this masterclass.",

  learnHeading: "What you'll walk away with",
  learn: [
    {
      title: "The Niche Clarity Formula",
      body: "Pick a channel angle that attracts the right viewers and the brands that want to pay them, even in a crowded niche.",
    },
    {
      title: "The Click-Worthy Content Map",
      body: "How to find video ideas people are already searching for, and package them with titles and thumbnails that get clicked.",
    },
    {
      title: "The 1-Day Filming Workflow",
      body: "Batch a month of videos in a single day with a simple setup you already own. No studio, no expensive gear.",
    },
    {
      title: "Retention Hooks That Hold Viewers",
      body: "The first-30-seconds script structure that keeps people watching, so YouTube pushes your videos to more people.",
    },
    {
      title: "Monetise Before 1,000 Subscribers",
      body: "Turn small, engaged audiences into income with affiliate links, digital products, coaching and brand partnerships.",
    },
    {
      title: "Your 30-Day Launch Plan",
      body: "Leave with a clear, step-by-step plan for your next 30 days so you actually take action straight after the call.",
    },
  ],

  audienceHeading: "This masterclass is for you if…",
  audienceFor: [
    "You're a mum, professional or business owner who wants to grow on YouTube around a busy life",
    "You've started a channel but growth has stalled",
    "You want YouTube to bring in income, clients or brand deals, not just views",
    "You're ready to show up consistently with a simple system",
  ],
  audienceNotFor: [
    "You're looking for a get-rich-quick shortcut",
    "You're not willing to put in a few focused hours a week",
  ],

  hostHeading: "Meet your host",
  hostName: "Melda",
  hostRole: "YouTube creator, mompreneur & content strategist",
  hostBio: [
    "I started my channel while juggling family life and a business, filming in whatever spare hour I could find. For a long time nothing worked, until I stopped guessing and built a repeatable system.",
    "Today my content reaches people all over the world and has opened doors to brand partnerships, a thriving community and income I never thought YouTube could bring.",
    "In this masterclass I'm handing you the same system, step by step, so you can skip the years of trial and error.",
  ],
  hostImage: "/melda.svg",

  testimonialsHeading: "What past attendees say",
  testimonials: [
    {
      quote:
        "I'd been posting for a year with no traction. After applying the content map my last three videos each outperformed my whole previous year.",
      name: "Aisha K.",
      role: "Lifestyle creator",
    },
    {
      quote:
        "The batch filming workflow alone was worth it. I filmed four videos on a Sunday and finally have a consistent schedule.",
      name: "Rachel M.",
      role: "Mum of two & beauty creator",
    },
    {
      quote:
        "I landed my first paid brand deal with under 2,000 subscribers using what Melda taught. Clear, practical and genuinely generous.",
      name: "Tolu A.",
      role: "Small business owner",
    },
  ],

  faqHeading: "Questions, answered",
  faqs: [
    {
      q: "Is the masterclass really free?",
      a: "Yes. There's no cost to attend. Just register with your name and email and you'll get your private access link.",
    },
    {
      q: "How long is the training?",
      a: "Around 90 minutes including live Q&A. Block out the time so you can take notes and ask questions.",
    },
    {
      q: "Will there be a replay?",
      a: "Attending live is strongly recommended. Replays are not guaranteed and live attendees get exclusive bonuses.",
    },
    {
      q: "I'm a complete beginner. Is this for me?",
      a: "Absolutely. Whether you have zero videos or a hundred, the frameworks work at every stage.",
    },
    {
      q: "Do I need expensive equipment?",
      a: "No. Everything I teach works with a smartphone and natural light.",
    },
  ],

  finalHeading: "Your seat is waiting.",
  finalBody:
    "Seats on the live session are limited. Register now and I'll send your private access link straight to your inbox.",
};

export const confirm = {
  eyebrow: "You're registered",
  title: "Your seat is confirmed",
  subtitle: "Complete the 3 steps below so you don't miss the live training.",
  steps: [
    {
      title: "Add it to your calendar",
      body: "Lock the time in now. Most people who miss the live session simply forgot.",
    },
    {
      title: "Check your inbox",
      body: "Your private access link is on its way. If you can't see it, check spam or promotions and mark it as safe.",
    },
    {
      title: "Show up live, 5 minutes early",
      body: "Live attendees get the full Q&A and exclusive bonuses that won't be in any replay.",
    },
  ],
  joinCta: "Join the live room",
  prepHeading: "Before the masterclass",
  prep: [
    "Have a notebook ready. You'll be filling in your 30-day plan live.",
    "Join on a laptop if you can, so you can see the slides clearly.",
    "Write down your biggest YouTube question to ask in the Q&A.",
    "Find a quiet spot and give yourself the full 90 minutes.",
  ],
};
