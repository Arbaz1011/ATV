"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
              alt="ATV adventure in Lonavala nature"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2920] via-transparent to-transparent" />
          </motion.div>

          <div>
            <SectionHeading
              label="Our Story"
              title="Adventure Wheels at Atvan"
              marathi="निसर्गातला एक अविस्मरणीय अनुभव"
            />
            <div className="space-y-4 text-sm leading-relaxed text-white/65 sm:text-base">
              <p>
                Nestled in Atvan, Lonavala, Adventure Wheels ATV brings you a
                premium offroad experience where Western Ghats greenery meets
                raw adrenaline. We are not just rides — we craft cinematic
                adventures you will remember.
              </p>
              <p>
                Our trails wind through jungle paths and rugged terrain, always
                guided by expert marshals who prioritize your safety without
                compromising the thrill. Whether it is your first ATV or your
                tenth, every journey feels first-class.
              </p>
              <p>
                Nature, thrill, and safe adventure — that is the Adventure Wheels
                promise. Book your Lonavala ATV experience today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
