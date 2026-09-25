"use client";

import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import {
  boilProteins,
  friedRiceChoices,
  menuExtras,
  sauces,
  spiceLevels,
} from "@/data/menu";
import { useOrder } from "./order-context";

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-brand-red bg-brand-red text-brand-cream shadow-md"
          : "border-brand-gold/30 bg-brand-cream/5 text-brand-tan hover:border-brand-gold"
      }`}
    >
      {active && <Check size={13} />}
      {label}
    </button>
  );
}

export function BoilBuilder() {
  const { setSectionLines } = useOrder();
  const [protein, setProtein] = useState<string | null>(null);
  const [sauce, setSauce] = useState<string | null>(null);
  const [spice, setSpice] = useState<string | null>(null);
  const [extras, setExtras] = useState<string[]>([]);
  const [friedRiceChoice, setFriedRiceChoice] = useState<string | null>(null);

  const toggleExtra = (label: string) =>
    setExtras((prev) => {
      if (prev.includes(label)) {
        if (label === "Fried Rice") setFriedRiceChoice(null);
        return prev.filter((item) => item !== label);
      }
      return [...prev, label];
    });

  const summary = useMemo(() => {
    const parts: string[] = [];
    const selectedProtein = boilProteins.find((item) => item.label === protein);
    const selectedExtras = menuExtras.filter((item) => extras.includes(item.label));
    const total =
      (selectedProtein?.price ?? 0) +
      selectedExtras.reduce((sum, item) => sum + (item.price ?? 0), 0);

    if (selectedProtein)
      parts.push(`Bucket: ${selectedProtein.label} — $${selectedProtein.price?.toFixed(2)}`);
    if (sauce) parts.push(`Sauce: ${sauce}`);
    if (spice) parts.push(`Heat: ${spice}`);
    if (selectedExtras.length)
      parts.push(
        `Extras: ${selectedExtras
          .map((item) => {
            const choice = item.label === "Fried Rice" && friedRiceChoice
              ? ` — ${friedRiceChoice}`
              : "";
            return `${item.label}${choice} ($${item.price?.toFixed(2)})`;
          })
          .join(", ")}`
      );
    if (total > 0) parts.push(`Estimated subtotal: $${total.toFixed(2)}`);
    return parts;
  }, [protein, sauce, spice, extras, friedRiceChoice]);

  useEffect(() => {
    setSectionLines(
      "boil",
      summary.length
        ? ["Lobster Factory Order:", ...summary.map((line) => `• ${line}`)]
        : []
    );
  }, [summary, setSectionLines]);

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="lg:row-span-2">
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs text-brand-cream">
              1
            </span>
            Pick Your Bucket
          </h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {boilProteins.map((item) => {
              const active = protein === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setProtein(active ? null : item.label)}
                  className={`flex min-h-16 items-center justify-between rounded-md border px-4 py-3 text-left transition ${
                    active
                      ? "border-brand-red bg-brand-red/20"
                      : "border-brand-gold/25 bg-brand-black/25 hover:border-brand-gold"
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold uppercase text-brand-cream">
                    {active && <Check size={15} className="text-brand-red" />}
                    {item.label}
                  </span>
                  <span className="text-lg font-semibold text-brand-gold-light">
                    ${item.price?.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs uppercase tracking-wide text-brand-tan/70">
            Every bucket is served with corn and potatoes
          </p>
        </div>

        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs text-brand-cream">
              2
            </span>
            Choose Your Sauce
          </h4>
          <div className="flex flex-wrap gap-2">
            {sauces.map((s) => (
              <Pill
                key={s.label}
                label={s.label}
                active={sauce === s.label}
                onClick={() => setSauce(sauce === s.label ? null : s.label)}
              />
            ))}
          </div>

        </div>

        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs text-brand-cream">
              3
            </span>
            Pick Your Heat
          </h4>
          <div className="flex flex-wrap gap-2">
            {spiceLevels.map((s) => (
              <Pill
                key={s.label}
                label={s.label}
                active={spice === s.label}
                onClick={() => setSpice(spice === s.label ? null : s.label)}
              />
            ))}
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-brand-gold/25 pt-8">
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
          More On The Menu
        </h4>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {menuExtras.map((item) => {
            const active = extras.includes(item.label);
            return (
              <button
                key={item.label}
                type="button"
                aria-pressed={active}
                onClick={() => toggleExtra(item.label)}
                className={`min-h-24 rounded-md border p-3 text-left transition ${
                  active
                    ? "border-brand-red bg-brand-red/20"
                    : "border-brand-gold/25 bg-brand-black/25 hover:border-brand-gold"
                }`}
              >
                <span className="flex items-center gap-2 text-sm font-semibold uppercase text-brand-cream">
                  {active && <Check size={14} className="text-brand-red" />}
                  {item.label}
                </span>
                {item.detail && (
                  <span className="mt-1 block text-xs text-brand-tan/70">{item.detail}</span>
                )}
                <span className="mt-2 block text-lg font-semibold text-brand-gold-light">
                  ${item.price?.toFixed(2)}
                </span>
              </button>
            );
          })}
        </div>
        {extras.includes("Fried Rice") && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-brand-tan">
              Fried Rice Choice
            </span>
            {friedRiceChoices.map((choice) => (
              <Pill
                key={choice}
                label={choice}
                active={friedRiceChoice === choice}
                onClick={() =>
                  setFriedRiceChoice(friedRiceChoice === choice ? null : choice)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

