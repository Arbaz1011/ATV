"use client";

import { BUSINESS } from "@/lib/constants";
import { useBooking } from "@/context/BookingContext";
import { callUrl } from "@/lib/whatsapp";

export default function MobileCTABar() {
  const { openBooking } = useBooking();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 glass-card border-t border-[#c9a227]/20 px-3 py-2.5 sm:hidden">
      <div className="flex gap-2">
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp flex-1 !rounded-xl !py-2.5 !text-xs"
        >
          WhatsApp
        </a>
        <button
          type="button"
          onClick={() => openBooking()}
          className="btn-primary flex-1 !rounded-xl !py-2.5 !text-xs"
        >
          Book
        </button>
        <a
          href={callUrl(BUSINESS.whatsapp)}
          className="btn-secondary flex-1 !rounded-xl !py-2.5 !text-xs"
        >
          Call
        </a>
      </div>
    </div>
  );
}
