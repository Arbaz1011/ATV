"use client";

import { motion } from "framer-motion";
import { SAFETY_POINTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const icons = ["🛡️", "⛑️", "👨‍✈️", "✅"];

export default function SafetySection() {
  return (
    <section id="safety" className="section-padding bg-[#0f2920]/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Safety First"
          title="Ride with Confidence"
          subtitle="Every adventure is supervised by trained marshals with premium safety standards."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SAFETY_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl glass-card p-6 text-center"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {icons[i]}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-white/55">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
