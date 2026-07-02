"use client";

import { motion } from "framer-motion";
import { ABOUT_STATS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Our Story"
              title="Crafted for Adventure"
              subtitle="Atvan, Lonavala — where premium offroad meets the calm of the Western Ghats."
            />
            <div className="space-y-5 text-sm leading-[1.8] text-[var(--muted)] sm:text-base">
              <p>
                Adventure Wheels is Lonavala&apos;s destination for guided ATV
                experiences — from gentle first rides to intense jungle offroad.
                Every trail is marshalled, every rider is geared.
              </p>
              <p>
                We also arrange{" "}
                <a href="#stays" className="text-[var(--gold-light)] hover:underline">
                  stays in Lonavala
                </a>{" "}
                so your weekend flows seamlessly from trail to rest.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ABOUT_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="luxury-card rounded-2xl p-6"
              >
                <p className="font-display text-3xl font-semibold accent-gradient-text">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-white/40">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
