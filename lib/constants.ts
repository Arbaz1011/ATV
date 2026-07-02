export const BUSINESS = {
  name: "Adventure Wheels ATV",
  tagline: "Lonavala Offroad Experience",
  location: "Atvan, Lonavala, Maharashtra",
  address: "Atvan, Lonavala, Maharashtra 410401",
  domain: "adventurewheelsatv.com",
  url: "https://adventurewheelsatv.com",
  instagram: "adventure_wheels_",
  instagramUrl: "https://www.instagram.com/adventure_wheels_/",
  whatsapp: "9766045349",
  phones: ["9552540114", "9766045349"],
  email: "info@adventurewheelsatv.com",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0!2d73.4!3d18.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMThCsDQyJzAwLjAiTiA3M8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
  mapsLink: "https://maps.google.com/?q=Atvan+Lonavala+Maharashtra",
} as const;

/** Optional hero accent — one line only, not full bilingual UI */
export const HERO_TAGLINE_MR = "अविस्मरणीय ATV adventure अनुभव";

export const PACKAGES = [
  {
    id: "basic",
    name: "Basic ATV Ride",
    imageKey: "basic" as const,
    subtitle: "Perfect for first-timers",
    duration: "3 km track",
    pricePerson: 500,
    priceCouple: 800,
    features: [
      "3 km scenic track",
      "Beginner friendly",
      "Guided experience",
      "Safety gear included",
    ],
    highlight: false,
  },
  {
    id: "premium",
    name: "Premium Offroad Experience",
    imageKey: "premium" as const,
    subtitle: "The ultimate jungle adventure",
    duration: "1 hour ride",
    pricePerson: 1500,
    features: [
      "1 hour premium ride",
      "Jungle + offroad terrain",
      "Adventure premium experience",
      "Expert marshals",
    ],
    highlight: true,
  },
] as const;

export const ABOUT_STATS = [
  { value: "7+", label: "Age welcome", sub: "Supervised rides" },
  { value: "3 km", label: "Beginner track", sub: "Safe & scenic" },
  { value: "1 hr", label: "Premium ride", sub: "Jungle offroad" },
  { value: "Stay", label: "We help book", sub: "Lonavala hotels" },
] as const;

export const SAFETY_POINTS = [
  {
    icon: "age" as const,
    title: "Age 7+",
    description: "Young adventurers welcome with full parental supervision on every ride",
  },
  {
    icon: "helmet" as const,
    title: "Safety Gear",
    description: "Helmets, gloves & protective kit included — no extra hassle",
  },
  {
    icon: "marshal" as const,
    title: "Expert Marshals",
    description: "Trained marshals lead every batch — briefing before you hit the trail",
  },
  {
    icon: "trail" as const,
    title: "Supervised Trails",
    description: "Marked routes, controlled speed zones & on-ground support throughout",
  },
] as const;

export const STAY_REQUEST = {
  title: "We Help You Stay in Lonavala",
  description:
    "Book your ATV ride with us and ask for stay help in the same message. We coordinate homestays, resorts, villas and budget rooms near Atvan — share your dates, group size and budget on WhatsApp.",
  cta: "Request Stay on WhatsApp",
} as const;

export const STAY_FEATURES = [
  "Homestays near Atvan",
  "Lonavala resorts & villas",
  "Budget rooms for groups",
  "Ride + stay in one plan",
] as const;

export const COMING_SOON = [
  {
    id: "dirtBike",
    title: "Dirt Bike Track",
    description: "Dedicated dirt bike circuit with jumps, berms and guided sessions",
    imageKey: "dirtBike" as const,
    featured: true,
  },
  {
    id: "buggy",
    title: "Buggy Experience",
    description: "Side-by-side buggy rides on rugged Lonavala offroad trails",
    imageKey: "buggy" as const,
    featured: true,
  },
  {
    id: "nightRide",
    title: "ATV Night Rides",
    description: "Evening sessions on lit trails — register interest on WhatsApp",
    featured: false,
  },
  {
    id: "packages",
    title: "Weekend Packages",
    description: "ATV + stay + meals — full adventure weekends",
    featured: false,
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/#stays", label: "Stays" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FALLBACK_GALLERY: readonly string[] = [];

export const SEO_KEYWORDS = [
  "ATV rides in Lonavala",
  "Offroad ATV Lonavala",
  "Adventure Wheels ATV",
  "Lonavala adventure activities",
  "ATV Lonavala",
  "offroad experience Maharashtra",
] as const;
