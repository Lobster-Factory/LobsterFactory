"use client";

import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import {
  boilProteins,
  mixMatchProteins,
  sauces,
  spiceLevels,
  regularSides,
  premiumAddOns,
} from "@/data/menu";
import { useOrder } from "./order-context";

type Mode = "individual" | "mixmatch";

function Pill({
  label,
  icon,
  active,
  disabled,
  onClick,
}: {
  label: string;
  icon?: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-brand-red bg-brand-red text-brand-cream shadow-md"
          : disabled
            ? "cursor-not-allowed border-brand-gold/15 bg-brand-cream/5 text-brand-tan/30"
            : "border-brand-gold/30 bg-brand-cream/5 text-brand-tan hover:border-brand-gold"
      }`}
    >
      {active && <Check size={13} />}
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}

function ModeTab({
  label,
  sub,
  active,
  onClick,
}: {
  label: string;
  sub: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-lg border px-4 py-3 text-left transition ${
        active
          ? "border-brand-red bg-brand-red/20"
          : "border-brand-gold/25 hover:border-brand-gold"
      }`}
    >
      <span
        className={`block text-sm font-semibold uppercase tracking-wide ${
          active ? "text-brand-red" : "text-brand-tan"
        }`}
      >
        {label}
      </span>
      <span className="mt-0.5 block text-xs text-brand-tan/70">{sub}</span>
    </button>
  );
}

const MAX_SIDES = 2;
const MIX_MATCH_COUNT = 2;

export function BoilBuilder() {
  const { setSectionLines } = useOrder();
  const [mode, setMode] = useState<Mode>("individual");
  const [individualProtein, setIndividualProtein] = useState<string | null>(null);
  const [mixProteins, setMixProteins] = useState<string[]>([]);
  const [sauce, setSauce] = useState<string | null>(null);
  const [spice, setSpice] = useState<string | null>(null);
  const [sides, setSides] = useState<string[]>([]);
  const [addOns, setAddOns] = useState<string[]>([]);

  // Reset protein picks when switching modes since the two pools differ
  const selectMode = (next: Mode) => {
    setMode(next);
    setIndividualProtein(null);
    setMixProteins([]);
  };

  const toggleMixProtein = (label: string) =>
    setMixProteins((prev) => {
      if (prev.includes(label)) return prev.filter((p) => p !== label);
      if (prev.length >= MIX_MATCH_COUNT) return prev;
      return [...prev, label];
    });

  const toggleSide = (label: string) =>
    setSides((prev) => {
      if (prev.includes(label)) return prev.filter((s) => s !== label);
      if (prev.length >= MAX_SIDES) return prev;
      return [...prev, label];
    });

  const toggleAddOn = (label: string) =>
    setAddOns((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );

  const summary = useMemo(() => {
    const parts: string[] = [];
    if (mode === "individual") {
      if (individualProtein) parts.push(`Protein: ${individualProtein} (1 lb)`);
    } else {
      if (mixProteins.length)
        parts.push(`Mix & Match: ${mixProteins.join(" + ")} (1/2 lb each)`);
    }
    if (sauce) parts.push(`Sauce: ${sauce}`);
    if (spice) parts.push(`Spice: ${spice}`);
    if (sides.length) parts.push(`Sides: ${sides.join(", ")}`);
    if (addOns.length) parts.push(`Premium Add-ons: ${addOns.join(", ")}`);
    return parts;
  }, [mode, individualProtein, mixProteins, sauce, spice, sides, addOns]);

  useEffect(() => {
    setSectionLines(
      "boil",
      summary.length
        ? [
            `Single Boil (${mode === "individual" ? "Individual" : "Mix & Match"}):`,
            ...summary.map((line) => `• ${line}`),
          ]
        : []
    );
  }, [summary, mode, setSectionLines]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <ModeTab
          label="Individual Boil"
          sub="1 protein · 1 lb"
          active={mode === "individual"}
          onClick={() => selectMode("individual")}
        />
        <ModeTab
          label="Mix & Match"
          sub="2 proteins · 1/2 lb each"
          active={mode === "mixmatch"}
          onClick={() => selectMode("mixmatch")}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs text-brand-cream">
              1
            </span>
            {mode === "individual" ? "Choose Your Protein" : "Choose 2 Proteins"}
          </h4>

          {mode === "individual" ? (
            <div className="flex flex-wrap gap-2">
              {boilProteins.map((p) => (
                <Pill
                  key={p.label}
                  label={p.label}
                  icon={p.icon}
                  active={individualProtein === p.label}
                  onClick={() =>
                    setIndividualProtein(individualProtein === p.label ? null : p.label)
                  }
                />
              ))}
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-2">
                {mixMatchProteins.map((p) => (
                  <Pill
                    key={p.label}
                    label={p.label}
                    icon={p.icon}
                    active={mixProteins.includes(p.label)}
                    disabled={!mixProteins.includes(p.label) && mixProteins.length >= MIX_MATCH_COUNT}
                    onClick={() => toggleMixProtein(p.label)}
                  />
                ))}
              </div>
              <p className="mt-4 border-l-2 border-brand-red pl-3 text-xs italic text-brand-gold-light">
                Mix &amp; Match: Shrimp • Mussels • Clams • Chicken Slices — choose any 2
              </p>
            </>
          )}
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

          <h4 className="mb-4 mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs text-brand-cream">
              3
            </span>
            Choose Your Spice Level
          </h4>
          <div className="flex flex-col gap-2">
            {spiceLevels.map((s) => (
              <Pill
                key={s.label}
                label={s.label}
                icon={s.icon}
                active={spice === s.label}
                onClick={() => setSpice(spice === s.label ? null : s.label)}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs text-brand-cream">
              4
            </span>
            Choose 2 Included Sides
          </h4>
          <div className="flex flex-wrap gap-2">
            {regularSides.map((s) => (
              <Pill
                key={s.label}
                label={s.label}
                icon={s.icon}
                active={sides.includes(s.label)}
                disabled={!sides.includes(s.label) && sides.length >= MAX_SIDES}
                onClick={() => toggleSide(s.label)}
              />
            ))}
          </div>

          <h4 className="mb-4 mt-7 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
            Premium Add-Ons
          </h4>
          <div className="flex flex-wrap gap-2">
            {premiumAddOns.map((s) => (
              <Pill
                key={s.label}
                label={s.label}
                icon={s.icon}
                active={addOns.includes(s.label)}
                onClick={() => toggleAddOn(s.label)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

