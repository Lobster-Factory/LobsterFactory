"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardCopy, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useOrder } from "./order-context";

export function OrderSummary() {
  const { lines, hasSelection } = useOrder();
  const [copied, setCopied] = useState(false);

  const orderText = `${siteConfig.smsBody}\n${lines.join("\n")}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(orderText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {hasSelection && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-10 overflow-hidden rounded-xl border border-brand-gold/40 bg-brand-cream/5 p-6"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-gold-light">
            Your Order
          </p>
          <ul className="mb-5 space-y-1 text-sm text-brand-tan">
            {lines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand-cream"
            >
              <Phone size={15} /> Call to Order
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md border border-brand-gold/40 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand-tan"
            >
              <ClipboardCopy size={15} /> {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
