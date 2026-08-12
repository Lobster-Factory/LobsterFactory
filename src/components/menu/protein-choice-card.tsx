"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import type { MenuOption } from "@/data/menu";
import { siteConfig } from "@/lib/site";
import { AnimatedCard } from "./animated-card";

export function ProteinChoiceCard({
  icon,
  title,
  options,
  delay = 0,
}: {
  icon: string;
  title: string;
  options: MenuOption[];
  delay?: number;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <AnimatedCard delay={delay}>
      <div className="mb-5 flex items-center gap-3 border-b-2 border-dashed border-brand-gold/40 pb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="flex-1 text-2xl text-brand-black dark:text-brand-cream">{title}</h3>
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-red-dark dark:text-brand-red">
          Choose Your Protein
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = selected === o.label;
          return (
            <button
              key={o.label}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(active ? null : o.label)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-brand-red bg-brand-red text-brand-cream shadow-md"
                  : "border-brand-gold/30 bg-brand-black/5 text-brand-black/80 hover:border-brand-gold dark:bg-brand-cream/5 dark:text-brand-tan"
              }`}
            >
              {active && <Check size={13} />}
              {o.icon && <span>{o.icon}</span>}
              {o.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 overflow-hidden"
          >
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex w-fit items-center gap-1.5 rounded-md bg-brand-red px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-cream"
            >
              <Phone size={13} /> Call to Order {title} — {selected}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedCard>
  );
}
