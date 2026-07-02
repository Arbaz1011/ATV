"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { IMAGES } from "@/lib/images";
import { BUSINESS, HERO_TAGLINE_MR } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";
import { callUrl } from "@/lib/whatsapp";

const slides = IMAGES.hero;

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.4,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      {slides.map((item, i) => (
        <motion.div
          key={item.src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === slide ? 1 : 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center brightness-[0.78] saturate-[1.08] contrast-[1.08]"
            style={{
              transform: i === slide ? "scale(1.05)" : "scale(1)",
              transition: "transform 12s ease-out",
            }}
          />
          <div className="image-grain absolute inset-0" />
        </motion.div>
      ))}

      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight)] via-[var(--midnight)]/75 to-[var(--midnight)]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_40%,rgba(212,184,122,0.08),transparent_50%)]" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-36 pt-36 sm:px-6 lg:px-8 lg:pb-44"
      >
        <motion.span className="hero-animate mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--gold)]/30 bg-[var(--midnight)]/60 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--gold-light)] backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_8px_var(--gold)]" />
          Atvan · Lonavala
        </motion.span>

        <h1 className="hero-animate font-display max-w-4xl text-[2.5rem] font-semibold leading-[1.06] text-white sm:text-5xl lg:text-[3.6rem]">
          Adventure Wheels
          <br />
          <span className="accent-gradient-text">Lonavala Offroad</span>
        </h1>

        <p className="hero-animate mt-4 text-sm italic text-white/45">
          {HERO_TAGLINE_MR}
        </p>

        <p className="hero-animate mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Premium guided ATV experiences in the Western Ghats — with stay
          coordination for your perfect weekend escape.
        </p>

        <div className="hero-animate mt-10 flex flex-wrap gap-4">
          <button type="button" onClick={() => openBooking()} className="btn-primary">
            Reserve Your Ride
          </button>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            WhatsApp
          </a>
          <a href={callUrl(BUSINESS.whatsapp)} className="btn-secondary">
            Call
          </a>
        </div>

        <div className="hero-animate mt-12 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              className={`h-px transition-all duration-500 ${
                i === slide ? "w-14 bg-[var(--gold)] shadow-[0_0_6px_var(--gold)]" : "w-6 bg-white/20 hover:bg-white/35"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
