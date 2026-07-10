"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  duration,
  easeOut,
  revealVariants,
  type RevealVariant,
} from "@/lib/motion";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // SSR + first client paint stay identical (no motion styles) to avoid hydration mismatch.
  if (!ready || reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  const v = revealVariants[variant];

  return (
    <motion.div
      className={cn(className)}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: duration.reveal, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
