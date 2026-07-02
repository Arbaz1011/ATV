"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BUSINESS, STAY_REQUEST, STAY_FEATURES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export default function StaySection() {
  const stayMessage = encodeURIComponent(
    "Hi Adventure Wheels! I need help with stay/accommodation in Lonavala for my ATV visit. Dates: ___ | People: ___ | Budget: ___"
  );

  return (
    <section id="stays" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="luxury-card overflow-hidden rounded-[2rem]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[300px] lg:min-h-[420px]">
              <Image
                src={IMAGES.stay.src}
                alt={IMAGES.stay.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="image-grain absolute inset-0" />
              <div className="image-luxury-overlay absolute inset-0" />
              <div className="absolute bottom-8 left-8">
                <span className="luxury-label">Lonavala Stays</span>
                <p className="font-display mt-2 text-2xl font-semibold text-white">
                  Ride & Rest
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="luxury-label">Concierge</span>
              <h2 className="font-display mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {STAY_REQUEST.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {STAY_REQUEST.description}
              </p>

              <ul className="mt-8 space-y-3">
                {STAY_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/75">
                    <span className="h-px w-4 bg-[var(--gold)]" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=${stayMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {STAY_REQUEST.cta}
                </a>
                <a href="#contact" className="btn-secondary">
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
