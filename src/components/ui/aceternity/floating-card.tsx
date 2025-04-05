"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";

type FloatingCardContextType = {
  mouseX: number;
  mouseY: number;
  mouseXPercentage: number;
  mouseYPercentage: number;
};

const FloatingCardContext = createContext<FloatingCardContextType>({
  mouseX: 0,
  mouseY: 0,
  mouseXPercentage: 0,
  mouseYPercentage: 0,
});

export const FloatingCard = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
    mouseXPercentage: 0,
    mouseYPercentage: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const mouseXPercentage = mouseX / rect.width;
      const mouseYPercentage = mouseY / rect.height;
      setMousePosition({
        mouseX,
        mouseY,
        mouseXPercentage,
        mouseYPercentage,
      });
    }
  };

  return (
    <FloatingCardContext.Provider value={mousePosition}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={cn("relative", containerClassName)}
      >
        <div
          className={cn(
            "flex w-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-black p-6 transition-transform duration-200 ease-in-out will-change-transform",
            className
          )}
          style={{
            transform: `perspective(1000px) rotateX(${
              (mousePosition.mouseYPercentage - 0.5) * 10
            }deg) rotateY(${(mousePosition.mouseXPercentage - 0.5) * -10}deg) scale3d(1, 1, 1)`,
            boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.2), 0 30px 60px -30px rgba(0, 0, 0, 0.3)",
          }}
        >
          {children}
        </div>
      </div>
    </FloatingCardContext.Provider>
  );
};

export const useFloatingCardContext = () => {
  return useContext(FloatingCardContext);
};

export const CardGlow = ({ className }: { className?: string }) => {
  const { mouseXPercentage, mouseYPercentage } = useFloatingCardContext();

  return (
    <div
      className={cn(
        "pointer-events-none absolute -inset-px z-10 h-full w-full rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
        className
      )}
      style={{
        background: `radial-gradient(800px circle at ${
          mouseXPercentage * 100
        }% ${
          mouseYPercentage * 100
        }%, rgba(0, 208, 255, 0.15), transparent 40%)`,
      }}
    />
  );
};
