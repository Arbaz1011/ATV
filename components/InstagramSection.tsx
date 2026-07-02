import SectionHeading from "./SectionHeading";
import InstagramFeed from "./InstagramFeed";
import InstagramCTA from "./InstagramCTA";
import { BUSINESS } from "@/lib/constants";

export default function InstagramSection() {
  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Gallery"
          title="Real Rides at Adventure Wheels"
          subtitle="Photos from our Atvan trails — your adventure, captured."
        />
        <InstagramFeed />
        <InstagramCTA />
        <p className="mt-6 text-center text-xs text-white/40">
          Tag us in your ride videos ·{" "}
          <a
            href={BUSINESS.instagramUrl}
            className="text-[var(--gold)]/80 hover:text-[var(--gold-light)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            @{BUSINESS.instagram}
          </a>
        </p>
      </div>
    </section>
  );
}
