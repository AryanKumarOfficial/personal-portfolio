"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";

export const Text3D = ({
  children,
  className,
  as: Component = "div",
  depth = 30,
  shadowColor = "rgba(0, 212, 212, 0.5)",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  depth?: number;
  shadowColor?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [children]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const normalizedX = (x - centerX) / centerX; // -1 to 1
    const normalizedY = (y - centerY) / centerY; // -1 to 1
    
    setMousePosition({ x: normalizedX, y: normalizedY });
  };

  const rotateX = isHovered ? mousePosition.y * -10 : 0; // Inverse Y for natural rotation
  const rotateY = isHovered ? mousePosition.x * 10 : 0;

  const textShadow = Array.from({ length: depth }, (_, i) => {
    const distance = i + 1;
    return `${rotateY * 0.1 * distance}px ${rotateX * 0.1 * distance}px 0 ${shadowColor}`;
  }).join(", ");

  return (
    <Component
      ref={ref}
      className={cn("relative inline-block transition-transform duration-150", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        textShadow: isHovered ? textShadow : undefined,
      }}
    >
      {children}
    </Component>
  );
};
