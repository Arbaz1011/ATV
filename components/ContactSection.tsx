"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import { callUrl, whatsappUrl } from "@/lib/whatsapp";

const contacts = [
  {
    label: "WhatsApp",
    value: `+91 ${BUSINESS.whatsapp}`,
    href: `https://wa.me/${BUSINESS.whatsapp}`,
    accent: "text-[#25D366]",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Call",
    value: `+91 ${BUSINESS.phones[0]}`,
    href: callUrl(BUSINESS.phones[0]),
    accent: "text-white",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    accent: "text-white",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: BUSINESS.location,
    href: BUSINESS.mapsLink,
    accent: "text-white/80",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
] as const;

export default function ContactSection() {
  const stayMsg = whatsappUrl(
    "Hi! I need help with stay/accommodation near Adventure Wheels ATV, Lonavala."
  );

  return (
    <section id="contact" className="section-compact bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a227]">
              Contact
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
              Book Your <span className="gold-gradient-text">Adventure</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/55">
              Fast replies on WhatsApp · Same-day slots when available
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} className="btn-whatsapp !py-2.5 !text-xs">
              WhatsApp
            </a>
            <a href={callUrl(BUSINESS.whatsapp)} className="btn-secondary !py-2.5 !text-xs">
              Call
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-5 lg:gap-5">
          <div className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-1">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "Location" ? "_blank" : undefined}
                rel={c.label === "Location" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-2xl border border-white/8 bg-[#1a3d2e]/30 p-4 transition-colors hover:border-[#c9a227]/30 hover:bg-[#1a3d2e]/50"
              >
                <div className="icon-ring shrink-0 !p-2.5 text-[#c9a227]">{c.icon}</div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#c9a227]/80">
                    {c.label}
                  </p>
                  <p className={`truncate text-sm font-medium ${c.accent}`}>{c.value}</p>
                </div>
              </motion.a>
            ))}
            <a
              href={stayMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 flex items-center gap-3 rounded-2xl border border-dashed border-[#c9a227]/40 bg-[#c9a227]/5 p-4 lg:col-span-1"
            >
              <div className="icon-ring shrink-0 !p-2.5 text-[#c9a227]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#e8c547]">Stay requests</p>
                <p className="text-xs text-white/50">We help arrange accommodation</p>
              </div>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[280px] overflow-hidden rounded-2xl ring-1 ring-[#c9a227]/20 lg:col-span-3 lg:min-h-[320px]"
          >
            <iframe
              title="Adventure Wheels ATV — Atvan, Lonavala"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782!2d73.407!3d18.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0048c8f8f7%3A0x0!2sAtvan%2C%20Lonavala!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0, minHeight: 280 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[1.05] sepia-[15%]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0a0a] to-transparent p-4">
              <p className="text-xs font-medium text-white/80">{BUSINESS.address}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
