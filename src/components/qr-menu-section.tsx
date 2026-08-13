"use client";

import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/site";

export function QrMenuSection() {
  return (
    <section className="bg-brand-charcoal py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold-light">
          Dine-In Table Card
        </p>
        <h2 className="text-3xl text-brand-cream">
          Scan For The Menu
        </h2>
        <div className="rounded-xl border-2 border-brand-gold bg-white p-4 shadow-md">
          <QRCodeSVG value={`${siteConfig.url}/#menu`} size={160} marginSize={2} />
        </div>
      </div>
    </section>
  );
}
