import { BUSINESS } from "./constants";

export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encoded}`;
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
