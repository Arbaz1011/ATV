import { PACKAGES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="section-padding relative bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a3d2e33,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Experiences"
          title="Choose Your Adventure"
          subtitle="From beginner-friendly trails to premium jungle offroad — every ride is guided and gear-equipped."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {PACKAGES.map((pkg) => (
            <ExperienceCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
