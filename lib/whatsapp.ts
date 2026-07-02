import { BUSINESS } from "./constants";

function whatsappNumber(): string {
  const digits = BUSINESS.whatsapp.replace(/\D/g, "");
  return digits.startsWith("91") ? digits : `91${digits}`;
}

export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber()}?text=${encoded}`;
}

/** Open WhatsApp during a user gesture (form submit / button click). */
export function openWhatsAppChat(message: string): void {
  const url = whatsappUrl(message);
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    window.location.href = url;
    return;
  }

  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) {
    window.location.href = url;
  }
}

export function bookingMessage(data: {
  name: string;
  phone: string;
  date: string;
  people: string;
  package: string;
  message: string;
}): string {
  return `New Booking Request:
Name: ${data.name}
Phone: ${data.phone}
Date: ${data.date}
People: ${data.people}
Package: ${data.package}
Message: ${data.message || "—"}`;
}

export function callUrl(phone: string): string {
  return `tel:+91${phone.replace(/\D/g, "")}`;
}
