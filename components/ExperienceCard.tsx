"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { useBooking } from "@/context/BookingContext";

type Package = {
  id: string;
  name: string;
  imageKey?: "basic" | "premium";
  subtitle: string;
  duration: string;
  pricePerson: number;
  priceCouple?: number;
  features: readonly string[];
  highlight: boolean;
};

export default function ExperienceCard({ pkg }: { pkg: Package }) {
  const { openBooking } = useBooking();
  const img =
    pkg.imageKey && pkg.imageKey in IMAGES.packages
      ? IMAGES.packages[pkg.imageKey as keyof typeof IMAGES.packages]
      : IMAGES.packages.basic;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`luxury-card overflow-hidden rounded-[2rem] ${
        pkg.highlight ? "luxury-card-premium" : ""
      }`}
    >
      <div className="relative h-64 sm:h-80">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover object-center ${pkg.highlight ? "brightness-[0.88] saturate-[1.1]" : ""}`}
          priority={pkg.highlight}
        />
        <div className="image-grain absolute inset-0" />
        <div className="image-luxury-overlay absolute inset-0" />
        {pkg.highlight && (
          <span className="absolute right-5 top-5 rounded-full border border-[var(--gold)]/40 bg-black/50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-light)] backdrop-blur-md">
            Signature
          </span>
        )}
        <div className="absolute bottom-5 left-6 right-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--gold)]">
            {pkg.duration}
          </p>
          <h3 className="font-display mt-1 text-2xl font-semibold text-white sm:text-3xl">
            {pkg.name}
          </h3>
        </div>
      </div>

      <div className="border-t border-[var(--gold)]/10 p-7 sm:p-9">
        <p className="text-sm text-[var(--muted)]">{pkg.subtitle}</p>

        <div className="mt-6 flex items-baseline gap-2 border-b border-white/5 pb-6">
          <span className="font-display text-4xl font-semibold accent-gradient-text">
            ₹{pkg.pricePerson}
          </span>
          <span className="text-sm text-white/40">per person</span>
        </div>
        {"priceCouple" in pkg && pkg.priceCouple && (
          <p className="mt-2 text-sm text-[var(--gold-light)]/80">
            Couple package · ₹{pkg.priceCouple}
          </p>
        )}

        <ul className="mt-6 space-y-3">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
              {feature}
            </li>
          ))}
        </ul>

        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={() => openBooking(pkg.id)}
          className={`mt-8 w-full ${pkg.highlight ? "btn-primary" : "btn-secondary"}`}
        >
          Book Now
        </motion.button>
      </div>
    </motion.article>
  );
}
