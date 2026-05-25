import { BUSINESS } from "@/lib/constants";
import { callUrl } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Contact"
          title="Plan Your Visit"
          subtitle="Reach us on WhatsApp, phone, or email. We are ready to host your next adventure."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl glass-card p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                Get in Touch
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-white/70">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#c9a227]">
                    WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}`}
                    className="hover:text-[#25D366]"
                  >
                    +91 {BUSINESS.whatsapp}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#c9a227]">
                    Phone
                  </span>
                  {BUSINESS.phones.map((p) => (
                    <a key={p} href={callUrl(p)} className="block hover:text-white">
                      +91 {p}
                    </a>
                  ))}
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#c9a227]">
                    Email
                  </span>
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">
                    {BUSINESS.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-[#c9a227]">
                    Location
                  </span>
                  {BUSINESS.location}
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  WhatsApp
                </a>
                <a href={callUrl(BUSINESS.phones[0])} className="btn-secondary">
                  Call Now
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="btn-secondary">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#c9a227]/20">
            <iframe
              title="Adventure Wheels ATV location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94200!2d73.407!3d18.742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0048c8f8f7%3A0x0!2sAtvan%2C%20Lonavala!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
