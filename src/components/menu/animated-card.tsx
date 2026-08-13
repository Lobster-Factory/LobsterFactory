"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}
      className={`rounded-xl border border-brand-gold/40 bg-brand-charcoal p-7 shadow-md ${className}`}
    >
      {children}
    </motion.article>
  );
}
