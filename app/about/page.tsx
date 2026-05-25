import AboutSection from "@/components/AboutSection";
import SafetySection from "@/components/SafetySection";
import ComingSoonSection from "@/components/ComingSoonSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Us",
  "Discover Adventure Wheels ATV in Atvan, Lonavala — premium guided offroad experiences with safety-first adventure tourism.",
  "/about"
);

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutSection />
      <SafetySection />
      <ComingSoonSection />
    </div>
  );
}
