"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type Sections = Record<string, string[]>;

type OrderContextValue = {
  setSectionLines: (key: string, lines: string[]) => void;
  lines: string[];
  hasSelection: boolean;
};

const OrderContext = createContext<OrderContextValue | null>(null);

// Fixed display order for the combined summary, regardless of which builder updates last
const SECTION_ORDER = ["boil", "macCheese", "friedRice", "catchCrunch"];

export function OrderProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<Sections>({});

  const setSectionLines = useCallback((key: string, newLines: string[]) => {
    setSections((prev) => {
      const existing = prev[key] ?? [];
      const unchanged =
        existing.length === newLines.length && existing.every((line, i) => line === newLines[i]);
      return unchanged ? prev : { ...prev, [key]: newLines };
    });
  }, []);

  const lines = useMemo(
    () => SECTION_ORDER.flatMap((key) => sections[key] ?? []),
    [sections]
  );

  const value = useMemo(
    () => ({ setSectionLines, lines, hasSelection: lines.length > 0 }),
    [setSectionLines, lines]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within an OrderProvider");
  return ctx;
}
