"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { HERO_SLIDES, BUSINESS } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";
import { callUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {HERO_SLIDES.map((item, i) => (
        <motion.div
          key={item.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === slide ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover scale-105"
            style={{
              transform: i === slide ? "scale(1.08)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
        </motion.div>
      ))}

      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2920]/60 to-transparent" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-32 pt-32 sm:px-6 lg:px-8 lg:pb-40"
      >
        <motion.span
          className="hero-animate mb-4 inline-block rounded-full border border-[#c9a227]/30 bg-[#1a3d2e]/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#c9a227]"
        >
          Atvan · Lonavala
        </motion.span>

        <h1 className="hero-animate font-display max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Adventure Wheels ATV –{" "}
          <span className="gold-gradient-text">Lonavala Offroad Experience</span>
        </h1>

        <p className="hero-animate mt-4 font-display text-lg italic text-[#c9a227]/90 sm:text-xl">
          अविस्मरणीय ATV adventure अनुभव
        </p>

        <p className="hero-animate mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          Premium guided ATV trails through jungle and offroad terrain. Safe,
          thrilling, unforgettable.
        </p>

        <div className="hero-animate mt-8 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            WhatsApp Booking
          </a>
          <button type="button" onClick={() => openBooking()} className="btn-primary">
            Open Booking Form
          </button>
          <a href={callUrl(BUSINESS.whatsapp)} className="btn-secondary">
            Call Now
          </a>
        </div>

        <div className="hero-animate mt-10 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === slide ? "w-10 bg-[#c9a227]" : "w-4 bg-white/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
