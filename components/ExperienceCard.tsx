"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

type Package = {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  pricePerson: number;
  priceCouple?: number;
  features: readonly string[];
  highlight: boolean;
};

export default function ExperienceCard({ pkg }: { pkg: Package }) {
  const { openBooking } = useBooking();

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-3xl glass-card p-8 ${
        pkg.highlight
          ? "ring-1 ring-[#c9a227]/50 shadow-2xl shadow-[#c9a227]/10"
          : ""
      }`}
    >
      {pkg.highlight && (
        <span className="absolute right-6 top-6 rounded-full bg-[#c9a227] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
          Premium
        </span>
      )}

      <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a227]">
        {pkg.duration}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold text-white">{pkg.name}</h3>
      <p className="mt-1 text-sm text-white/50">{pkg.subtitle}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-bold gold-gradient-text">
          ₹{pkg.pricePerson}
        </span>
        <span className="text-sm text-white/50">/ person</span>
      </div>
      {"priceCouple" in pkg && pkg.priceCouple && (
        <p className="mt-1 text-sm text-[#c9a227]/80">
          Couple: ₹{pkg.priceCouple}
        </p>
      )}

      <ul className="mt-6 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-[#c9a227]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={() => openBooking(pkg.id)}
        className={`mt-8 w-full ${pkg.highlight ? "btn-primary" : "btn-secondary"}`}
      >
        Book Now
      </motion.button>
    </motion.article>
  );
}
