"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

export default function InstagramCTA() {
  return (
    <motion.a
      href={BUSINESS.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="group relative mt-10 block overflow-hidden rounded-3xl"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(135deg, #833ab4 0%, #fd1d1d 45%, #fcb045 100%)",
        }}
      />
      <div className="absolute inset-[1px] rounded-[23px] bg-[#0a0a0a]/92 backdrop-blur-xl" />
      <div className="relative flex flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between sm:px-10 sm:py-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px] shadow-lg">
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#0f2920]">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a227]">
              @adventure_wheels_
            </p>
            <p className="font-display text-lg font-bold text-white sm:text-xl">
              Follow real rides & reels
            </p>
            <p className="mt-0.5 text-sm text-white/55">
              Daily ATV moments from Atvan, Lonavala
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-black shadow-lg transition-transform group-hover:scale-105">
          Follow on Instagram
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
