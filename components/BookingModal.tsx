"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { PACKAGES } from "@/lib/constants";
import { bookingMessage, openWhatsAppChat } from "@/lib/whatsapp";
import type { BookingFormData } from "@/lib/types";

const initialForm: BookingFormData = {
  name: "",
  phone: "",
  date: "",
  people: "1",
  package: "",
  message: "",
};

export default function BookingModal() {
  const { isOpen, preselectedPackage, closeBooking } = useBooking();
  const [form, setForm] = useState<BookingFormData>(initialForm);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && preselectedPackage) {
      const pkg = PACKAGES.find((p) => p.id === preselectedPackage);
      setForm((f) => ({
        ...f,
        package: pkg?.name ?? preselectedPackage,
      }));
    }
    if (!isOpen) {
      setSuccess(false);
      setSubmitting(false);
      setForm(initialForm);
    }
  }, [isOpen, preselectedPackage]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const message = bookingMessage(form);
    openWhatsAppChat(message);

    setSuccess(true);
    setTimeout(() => {
      closeBooking();
      setForm(initialForm);
      setSuccess(false);
      setSubmitting(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={closeBooking}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-x-4 top-[10%] z-[70] mx-auto max-h-[85vh] max-w-lg overflow-y-auto rounded-3xl glass-card p-6 shadow-2xl sm:inset-x-auto sm:top-[15%]"
          >
            {success ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/20"
                >
                  <svg
                    className="h-8 w-8 text-[#25D366]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="font-display text-xl font-bold text-white">
                  Booking Sent!
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Opening WhatsApp to confirm your adventure...
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h2
                      id="booking-title"
                      className="font-display text-xl font-bold text-white"
                    >
                      Book Your Ride
                    </h2>
                    <p className="mt-1 text-sm text-white/50">
                      We&apos;ll confirm via WhatsApp
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="rounded-xl p-2 text-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Close"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/70">
                      Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#c9a227]/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/70">
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#c9a227]/50"
                      placeholder="10-digit mobile"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/70">
                        Date *
                      </label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#c9a227]/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/70">
                        People *
                      </label>
                      <input
                        required
                        type="number"
                        min={1}
                        max={20}
                        value={form.people}
                        onChange={(e) => setForm({ ...form, people: e.target.value })}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#c9a227]/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/70">
                      Package *
                    </label>
                    <select
                      required
                      value={form.package}
                      onChange={(e) => setForm({ ...form, package: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#c9a227]/50"
                    >
                      <option value="" className="bg-[#1a3d2e]">
                        Select package
                      </option>
                      {PACKAGES.map((p) => (
                        <option key={p.id} value={p.name} className="bg-[#1a3d2e]">
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/70">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#c9a227]/50"
                      placeholder="Special requests, timing, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Submit via WhatsApp"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
