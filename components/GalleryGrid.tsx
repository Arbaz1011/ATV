"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FALLBACK_GALLERY } from "@/lib/constants";

type GalleryGridProps = {
  images?: { src: string; alt: string; href?: string }[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const items =
    images ??
    FALLBACK_GALLERY.map((src, i) => ({
      src,
      alt: `Adventure Wheels ATV gallery ${i + 1}`,
    }));

  return (
    <div className="masonry-grid">
      {items.map((item, index) => (
        <motion.div
          key={item.src + index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: index * 0.05 }}
          className="masonry-item"
        >
          <a
            href={item.href}
            target={item.href ? "_blank" : undefined}
            rel={item.href ? "noopener noreferrer" : undefined}
            className="group relative block overflow-hidden rounded-2xl"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={index % 2 === 0 ? 400 : 500}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&sig=${index}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </motion.div>
      ))}
    </div>
  );
}
