import InstagramSection from "@/components/InstagramSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Gallery",
  "Photos and reels from Adventure Wheels ATV Lonavala. Offroad adventures, jungle trails, and guest moments.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <div className="section-padding pb-0 text-center">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Adventure <span className="gold-gradient-text">Gallery</span>
        </h1>
      </div>
      <InstagramSection />
    </div>
  );
}
