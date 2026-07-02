"use client";

import { motion } from "framer-motion";
import { SAFETY_POINTS } from "@/lib/constants";
import { SAFETY_ICON_MAP } from "@/components/icons/SafetyIcons";
import SectionHeading from "./SectionHeading";

export default function SafetySection() {
  return (
    <section id="safety" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Safety First"
          title="Ride with Assurance"
          subtitle="Trained marshals, full safety gear, and supervised trails on every experience."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SAFETY_POINTS.map((point, i) => {
            const Icon = SAFETY_ICON_MAP[point.icon];
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="luxury-card rounded-2xl p-7 text-center"
              >
                <div className="icon-ring mx-auto mb-5">
                  <Icon className="h-7 w-7 text-[var(--gold-light)]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
