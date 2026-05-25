import SectionHeading from "./SectionHeading";
import InstagramFeed from "./InstagramFeed";
import { BUSINESS } from "@/lib/constants";

export default function InstagramSection() {
  return (
    <section id="gallery" className="section-padding bg-[#0f2920]/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Gallery"
          title="Life at Adventure Wheels"
          subtitle={`Follow our latest rides, reels, and moments on Instagram @${BUSINESS.instagram}`}
        />
        <InstagramFeed />
        <div className="mt-8 text-center">
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
