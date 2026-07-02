/** Image map — hero & premium generated, gallery uses your photos */

const g = (file: string) => `/gallery/${file}`;
const img = (file: string) => `/images/${file}`;

export const IMAGES = {
  /** Cinematic fullscreen hero backgrounds */
  hero: [
    { src: img("hero-atv-fleet.png"), alt: "ATV fleet — Adventure Wheels Lonavala" },
    { src: img("hero-atv-action.png"), alt: "ATV mud trail action — jungle offroad" },
    { src: img("hero-lonavala-hills.png"), alt: "Lonavala hills — golden hour landscape" },
  ],
  packages: {
    basic: { src: img("basic-atv-ride.png"), alt: "Basic ATV Ride — beginner 3 km track" },
    premium: {
      src: img("premium-atv-experience.png"),
      alt: "Premium Offroad Experience — jungle mud ATV",
    },
  },
  stay: { src: img("lonavala-stay.png"), alt: "Lonavala hills stay — weekend retreat" },
  upcoming: {
    dirtBike: { src: img("dirt-bike-track.png"), alt: "Dirt Bike Track — coming soon" },
    buggy: { src: img("buggy-experience.png"), alt: "Buggy Experience — coming soon" },
  },
  gallery: [
    { src: g("1.jpg"), alt: "Our ATV Fleet", featured: true, span: "large" as const },
    { src: g("5.jpg"), alt: "Group Adventure Ride", featured: true, span: "wide" as const },
    { src: g("2.jpg"), alt: "Trail Experience", featured: false, span: "tall" as const },
    { src: g("4.jpg"), alt: "Muddy Offroad", featured: false, span: "normal" as const },
    { src: g("7.jpg"), alt: "Jungle Track", featured: false, span: "normal" as const },
    { src: g("8.jpg"), alt: "Adventure Wheels Lonavala", featured: false, span: "normal" as const },
  ],
} as const;

export type GalleryImageItem = (typeof IMAGES.gallery)[number];
export type HeroSlide = { src: string; alt: string };
