import { PACKAGES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.07),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Experiences"
          title="Choose Your Adventure"
          subtitle="Beginner-friendly 3 km track or premium jungle offroad — both guided with full safety gear."
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
