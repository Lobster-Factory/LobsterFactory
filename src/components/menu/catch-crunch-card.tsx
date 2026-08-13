"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { AnimatedCard } from "./animated-card";
import { useOrder } from "./order-context";

export function CatchCrunchCard({ items, delay = 0 }: { items: string[]; delay?: number }) {
  const { setSectionLines } = useOrder();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );

  useEffect(() => {
    setSectionLines(
      "catchCrunch",
      selected.length ? ["Catch & Crunch:", ...selected.map((s) => `• ${s}`)] : []
    );
  }, [selected, setSectionLines]);

  return (
    <AnimatedCard delay={delay}>
      <div className="mb-5 flex items-center gap-3 border-b-2 border-dashed border-brand-gold/40 pb-4">
        <span className="text-3xl">🍤</span>
        <h3 className="text-2xl text-brand-cream">Catch &amp; Crunch</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = selected.includes(item);
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => toggle(item)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-brand-red bg-brand-red text-brand-cream shadow-md"
                  : "border-brand-gold/30 bg-brand-cream/5 text-brand-tan hover:border-brand-gold"
              }`}
            >
              {active && <Check size={13} />}
              {item}
            </button>
          );
        })}
      </div>
    </AnimatedCard>
  );
}
