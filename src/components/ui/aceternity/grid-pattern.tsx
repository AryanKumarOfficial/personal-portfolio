"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const GridPattern = ({
  children,
  className,
  containerClassName,
  dotClassName,
  cellSize = 40,
  dotSize = 1.5,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dotClassName?: string;
  cellSize?: number;
  dotSize?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        setColumns(Math.ceil(width / cellSize) + 1);
        setRows(Math.ceil(height / cellSize) + 1);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [cellSize]);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex h-full w-full items-center justify-center overflow-hidden", containerClassName)}
    >
      <div className={cn("relative z-10", className)}>{children}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="grid h-full w-full"
          style={{
            gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          }}
        >
          {Array.from({ length: columns * rows }).map((_, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <div
                className={cn("absolute rounded-full bg-gray-500/20", dotClassName)}
                style={{
                  width: `${dotSize}px`,
                  height: `${dotSize}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
