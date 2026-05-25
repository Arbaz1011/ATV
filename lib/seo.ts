import type { Metadata } from "next";
import { BUSINESS, SEO_KEYWORDS } from "./constants";

const defaultTitle = `${BUSINESS.name} – ${BUSINESS.tagline}`;
const defaultDescription =
  "Premium ATV offroad rides in Atvan, Lonavala. Guided jungle trails, safety-first adventures. Book Basic or Premium experiences at Adventure Wheels ATV.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: defaultTitle,
    template: `%s | ${BUSINESS.name}`,
  },
  description: defaultDescription,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Adventure Wheels ATV Lonavala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BUSINESS.url,
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${BUSINESS.name}`,
      description,
      url: `${BUSINESS.url}${path}`,
    },
    alternates: { canonical: `${BUSINESS.url}${path}` },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: BUSINESS.name,
    description:
      "Premium ATV offroad rides and adventure experiences in Atvan, Lonavala, Maharashtra.",
    url: BUSINESS.url,
    telephone: `+91-${BUSINESS.whatsapp}`,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atvan, Lonavala",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.75,
      longitude: 73.4,
    },
    sameAs: [BUSINESS.instagramUrl],
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  };
}
