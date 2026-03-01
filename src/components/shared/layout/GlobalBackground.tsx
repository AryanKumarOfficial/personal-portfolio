"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function GlobalBackground() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 800], [0.5, 0.15]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <div className="absolute inset-0 bg-background" />

      <motion.div
        style={{ opacity, scale }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-175 h-87.5 bg-primary/10 blur-[120px] rounded-full"
      />
    </div>
  );
}
