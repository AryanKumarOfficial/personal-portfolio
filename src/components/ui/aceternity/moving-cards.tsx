"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  cardClassName,
}: {
  items: {
    content: React.ReactNode;
    key?: string;
  }[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
  cardClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const initAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        
        // Duplicate the scroller content for a smooth loop
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
        
        setStart(true);
      }
    };
    
    initAnimation();
  }, []);

  const getSpeedClassName = () => {
    switch (speed) {
      case "slow":
        return "duration-[50s]";
      case "normal":
        return "duration-[30s]";
      case "fast":
        return "duration-[20s]";
      default:
        return "duration-[30s]";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 gap-4 py-4",
          start && "animate-scroll",
          start && pauseOnHover && "hover:[animation-play-state:paused]",
          start && direction === "right" && "flex-row-reverse",
          start && getSpeedClassName()
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.key || idx}
            className={cn(
              "relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-white/10 bg-gray-900 p-4 shadow-xl",
              cardClassName
            )}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
