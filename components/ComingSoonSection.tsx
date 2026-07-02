"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMING_SOON, BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import SectionHeading from "./SectionHeading";

function getUpcomingImage(imageKey?: "dirtBike" | "buggy") {
  if (!imageKey) return null;
  return IMAGES.upcoming[imageKey];
}

export default function ComingSoonSection() {
  const featured = COMING_SOON.filter((i) => i.featured);
  const rest = COMING_SOON.filter((i) => !i.featured);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Upcoming"
          title="The Next Chapter"
          subtitle="Dirt bike trails and buggy adventures — register your interest today."
        />

        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {featured.map((item, i) => {
            const img = getUpcomingImage(
              "imageKey" in item ? item.imageKey : undefined
            );
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative min-h-[340px] overflow-hidden rounded-[2rem] ring-1 ring-[var(--gold)]/20"
              >
                {img && (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover brightness-[0.82] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                )}
                <div className="image-grain absolute inset-0" />
                <div className="image-luxury-overlay absolute inset-0" />
                <span className="absolute left-6 top-6 rounded-full border border-[var(--gold)]/50 bg-black/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-light)] backdrop-blur-md">
                  Coming Soon
                </span>
                <div className="absolute bottom-0 p-8">
                  <h3 className="font-display text-3xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in ${item.title} at Adventure Wheels Lonavala.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)] transition-colors hover:text-white"
                  >
                    Register interest
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="luxury-card rounded-2xl p-6"
            >
              <span className="luxury-label text-[10px]">Soon</span>
              <h3 className="font-display mt-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
