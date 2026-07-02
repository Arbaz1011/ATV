import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteMetadata, localBusinessJsonLd } from "@/lib/seo";
import { BookingProvider } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTABar from "@/components/MobileCTABar";
import BookingModal from "@/components/BookingModal";
import SiteBackground from "@/components/SiteBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <BookingProvider>
          <SiteBackground />
          <Navbar />
          <main className="relative z-[1] pb-20 sm:pb-0">{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileCTABar />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
