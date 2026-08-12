import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="bg-brand-cream py-24 dark:bg-brand-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-brand-red-dark dark:text-brand-gold-light">
            Visit Us
          </p>
          <h2 className="mb-8 text-4xl text-brand-black dark:text-brand-cream md:text-5xl">
            Get Your Boil On
          </h2>

          <ul className="mb-8 space-y-4 text-brand-black/85 dark:text-brand-tan">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-brand-red" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city},{" "}
                {siteConfig.address.state} {siteConfig.address.zip}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-1 shrink-0 text-brand-red" />
              <span className="space-y-0.5">
                {siteConfig.hours.map((h) => (
                  <span key={h.day} className="block">
                    <strong className="text-brand-gold-light">{h.day}:</strong> {h.time}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-brand-red" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-red">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-brand-red" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-red">
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <div className="mb-8 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold text-brand-gold-light transition hover:bg-brand-gold hover:text-brand-black"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold text-brand-gold-light transition hover:bg-brand-gold hover:text-brand-black"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>

          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-brand-red to-brand-red-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brand-cream shadow-[0_6px_0_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5"
          >
            <Phone size={16} /> Call to Order Takeout
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border-2 border-brand-gold/50 shadow-lg">
          <iframe
            title="Lobster Factory location map"
            src={siteConfig.mapsEmbedSrc}
            className="h-full min-h-[360px] w-full grayscale-[20%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
