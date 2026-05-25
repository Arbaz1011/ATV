"use client";

import { motion } from "framer-motion";
import { COMING_SOON } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function ComingSoonSection() {
  return (
    <section className="section-padding border-t border-[#c9a227]/10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Coming Soon"
          title="More Adventures Ahead"
          subtitle="Exciting new experiences launching soon at Adventure Wheels Lonavala."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMING_SOON.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl glass-card p-6"
            >
              <span className="absolute right-4 top-4 rounded-full border border-[#c9a227]/40 px-2 py-0.5 text-[10px] font-semibold uppercase text-[#c9a227]">
                Soon
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/50">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
