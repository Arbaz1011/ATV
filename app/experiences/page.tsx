import ExperiencesSection from "@/components/ExperiencesSection";
import SafetySection from "@/components/SafetySection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "ATV Experiences & Packages",
  "Book Basic ATV Ride (₹500) or Premium Offroad Experience (₹1500) in Lonavala. Guided trails, safety gear included.",
  "/experiences"
);

export default function ExperiencesPage() {
  return (
    <div className="pt-24">
      <div className="section-padding pb-0 text-center">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
          ATV <span className="gold-gradient-text">Experiences</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Lonavala&apos;s premium offroad packages — beginner trails to jungle adventures.
        </p>
      </div>
      <ExperiencesSection />
      <SafetySection />
    </div>
  );
}
