import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-[var(--gold)]/10 bg-[var(--surface)]/80 backdrop-blur-md">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-bold">
              Adventure <span className="accent-gradient-text">Wheels</span>
            </p>
            <p className="mt-2 text-sm text-white/60">{BUSINESS.location}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              Premium ATV offroad experiences in the heart of Lonavala. Nature,
              thrill, and safety — guided by expert marshals.
            </p>
            <p className="mt-3 text-sm text-white/45">
              ATV rides · Stay help · Lonavala weekends
            </p>
          </div>

          <div>
            <h3 className="luxury-label mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="luxury-label mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366]"
                >
                  WhatsApp: +91 {BUSINESS.whatsapp}
                </a>
              </li>
              {BUSINESS.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:+91${phone}`} className="hover:text-white">
                    +91 {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-white"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-[var(--gold-light)]"
          >
            @{BUSINESS.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}
