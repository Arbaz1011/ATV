"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES, type GalleryImageItem } from "@/lib/images";
import { BUSINESS } from "@/lib/constants";

const spanClass: Record<GalleryImageItem["span"], string> = {
  large: "bento-large",
  wide: "bento-wide",
  tall: "bento-tall",
  normal: "",
};

type Props = {
  items?: readonly GalleryImageItem[];
};

export default function PremiumGallery({ items = IMAGES.gallery }: Props) {
  return (
    <div className="bento-grid">
      {items.map((item, index) => (
        <motion.a
          key={item.src}
          href={BUSINESS.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: index * 0.07, duration: 0.6 }}
          className={`bento-item group relative block min-h-[220px] overflow-hidden rounded-2xl ring-1 ring-[var(--gold)]/15 ${spanClass[item.span]}`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover brightness-[0.88] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="image-grain pointer-events-none absolute inset-0" />
          <div className="image-luxury-overlay pointer-events-none absolute inset-0" />
          {item.featured && (
            <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-[var(--gold)]/40 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--gold-light)] backdrop-blur-sm">
              Featured
            </span>
          )}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 border-t border-[var(--gold)]/10 bg-black/30 p-4 backdrop-blur-sm">
            <p className="font-display text-sm font-medium text-white">{item.alt}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
