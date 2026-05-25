import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact & Book",
  "Contact Adventure Wheels ATV Lonavala. WhatsApp 9766045349, call, or email for ATV booking.",
  "/contact"
);

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="section-padding pb-0 text-center">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
          <span className="gold-gradient-text">Contact</span> Us
        </h1>
      </div>
      <ContactSection />
    </div>
  );
}
