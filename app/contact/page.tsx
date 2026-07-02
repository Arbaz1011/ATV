import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact & Book",
  "Contact Adventure Wheels ATV Lonavala. WhatsApp 9766045349, call, or email for ATV booking.",
  "/contact"
);

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
