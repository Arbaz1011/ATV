import InstagramSection from "@/components/InstagramSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Gallery",
  "Photos and reels from Adventure Wheels ATV Lonavala. Offroad adventures, jungle trails, and guest moments.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <InstagramSection />
    </div>
  );
}
