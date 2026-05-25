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

export const PACKAGES = [
  {
    id: "basic",
    name: "Basic ATV Ride",
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

export const SAFETY_POINTS = [
  { title: "Age 7+", description: "Safe rides for young adventurers with supervision" },
  { title: "Safety Gear", description: "Helmets and protective equipment provided" },
  { title: "Expert Marshals", description: "Guided rides with trained marshals on every trail" },
  { title: "Supervised Trails", description: "Every route is monitored for a secure experience" },
] as const;

export const COMING_SOON = [
  { title: "Dirt Bike Track", description: "High-adrenaline dirt bike trails coming soon" },
  { title: "ATV Night Rides", description: "Moonlit offroad adventures under the stars" },
  { title: "Camping Experience", description: "Stay overnight in nature at Lonavala" },
  { title: "Adventure Packages", description: "Curated multi-activity bundles" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    alt: "ATV offroad adventure in mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920&q=80",
    alt: "Offroad vehicle on rugged terrain",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    alt: "Lonavala hills adventure landscape",
  },
] as const;

export const FALLBACK_GALLERY = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  "https://images.unsplash.com/photo-1511593354326-0851647a72fc?w=800&q=80",
  "https://images.unsplash.com/photo-1682687220063-4742bd6fd538?w=800&q=80",
] as const;

export const SEO_KEYWORDS = [
  "ATV rides in Lonavala",
  "Offroad ATV Lonavala",
  "Adventure Wheels ATV",
  "Lonavala adventure activities",
  "ATV Lonavala",
  "offroad experience Maharashtra",
] as const;
