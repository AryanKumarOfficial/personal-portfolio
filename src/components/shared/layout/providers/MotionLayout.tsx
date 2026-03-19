"use client";
import { AnimatePresence } from "motion/react";
import React, { ReactNode } from "react";

export default function MotionLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <React.Fragment>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </React.Fragment>
  );
}
