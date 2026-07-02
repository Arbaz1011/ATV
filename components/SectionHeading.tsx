"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 text-center"
    >
      <span className="luxury-label">{label}</span>
      <div className="luxury-divider" aria-hidden />
      <h2 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
