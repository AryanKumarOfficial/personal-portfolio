"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const TextShimmer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "inline-block bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 bg-[200%_auto] bg-clip-text text-transparent animation-shimmer",
        className
      )}
    >
      {children}
    </div>
  );
};
