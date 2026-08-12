"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ClipboardCopy, MessageSquareText, Phone } from "lucide-react";
import {
  proteins,
  sauces,
  spiceLevels,
  premiumSides,
  mixAndMatchNote,
} from "@/data/menu";
import { siteConfig } from "@/lib/site";

function Pill({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon?: string;
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
          : "border-brand-gold/30 bg-brand-black/5 text-brand-black/80 hover:border-brand-gold dark:bg-brand-cream/5 dark:text-brand-tan"
      }`}
    >
      {active && <Check size={13} />}
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}

export function BoilBuilder() {
  const [selectedProteins, setSelectedProteins] = useState<string[]>([]);
  const [sauce, setSauce] = useState<string | null>(null);
  const [spice, setSpice] = useState<string | null>(null);
  const [addOns, setAddOns] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const toggleProtein = (label: string) =>
    setSelectedProteins((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );

  const toggleAddOn = (label: string) =>
    setAddOns((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );

  const summary = useMemo(() => {
    const parts: string[] = [];
    if (selectedProteins.length) parts.push(`Protein: ${selectedProteins.join(", ")}`);
    if (sauce) parts.push(`Sauce: ${sauce}`);
    if (spice) parts.push(`Spice: ${spice}`);
    if (addOns.length) parts.push(`Add-ons: ${addOns.join(", ")}`);
    return parts;
  }, [selectedProteins, sauce, spice, addOns]);

  const hasSelection = summary.length > 0;

  const orderText = `${siteConfig.smsBody}\n${summary.join("\n")}`;
  const smsHref = `sms:${siteConfig.phone}?&body=${encodeURIComponent(orderText)}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(orderText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div>
        <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-xs text-brand-cream">
            1
          </span>
          Choose Your Protein
        </h4>
        <div className="flex flex-wrap gap-2">
          {proteins.map((p) => (
            <Pill
              key={p.label}
              label={p.label}
              icon={p.icon}
              active={selectedProteins.includes(p.label)}
              onClick={() => toggleProtein(p.label)}
            />
          ))}
        </div>
        <p className="mt-4 border-l-2 border-brand-red pl-3 text-xs italic text-brand-gold-light">
          {mixAndMatchNote}
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
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
          Premium Add-Ons
        </h4>
        <div className="flex flex-wrap gap-2">
          {premiumSides.map((s) => (
            <Pill
              key={s.label}
              label={s.label}
              icon={s.icon}
              active={addOns.includes(s.label)}
              onClick={() => toggleAddOn(s.label)}
            />
          ))}
        </div>

        <AnimatePresence>
          {hasSelection && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden rounded-lg border border-brand-gold/40 bg-brand-black/5 p-4 dark:bg-brand-cream/5"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-red-dark dark:text-brand-gold-light">
                Your Order
              </p>
              <ul className="mb-4 space-y-1 text-sm text-brand-black/80 dark:text-brand-tan">
                {summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-1.5 rounded-md bg-brand-red px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-cream"
                >
                  <Phone size={13} /> Call to Order
                </a>
                <a
                  href={smsHref}
                  className="flex items-center gap-1.5 rounded-md border border-brand-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-gold-light"
                >
                  <MessageSquareText size={13} /> Text Order
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-md border border-brand-gold/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-black/70 dark:text-brand-tan"
                >
                  <ClipboardCopy size={13} /> {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
