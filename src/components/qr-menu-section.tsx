"use client";

import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/site";

export function QrMenuSection() {
  return (
    <section className="bg-brand-tan/30 py-16 dark:bg-brand-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-red-dark dark:text-brand-gold-light">
          Dine-In Table Card
        </p>
        <h2 className="text-3xl text-brand-black dark:text-brand-cream">
          Scan For The Menu
        </h2>
        <p className="max-w-md text-sm text-brand-black/70 dark:text-brand-tan">
          Print this code on table tents or receipts so guests can pull up the menu instantly
          on their phone.
        </p>
        <div className="rounded-xl border-2 border-brand-gold bg-white p-4 shadow-md">
          <QRCodeSVG value={`${siteConfig.url}/#menu`} size={160} marginSize={2} />
        </div>
      </div>
    </section>
  );
}
