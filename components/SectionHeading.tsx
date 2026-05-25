"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  marathi?: string;
};

export default function SectionHeading({ label, title, subtitle, marathi }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
        {label}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {marathi && (
        <p className="mt-2 font-display text-base italic text-[#c9a227]/80">{marathi}</p>
      )}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/55 sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
