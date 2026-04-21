"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { HeroData, contact } from "@/lib/data/profile";

export default function Footer() {
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTop(latest > 400);
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative mt-16">
      {/* subtle divider glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-100 h-30 bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* copyright */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {HeroData.name}
          <span className="mx-2">•</span>
          Engineered with Next.js, TypeScript and Motion
        </div>

        {/* socials */}
        <div className="flex gap-6">
          {contact.socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
      </div>

      {/* back to top */}
      <motion.button
        onClick={scrollToTop}
        animate={{
          opacity: showTop ? 1 : 0,
          y: showTop ? 0 : 20,
          pointerEvents: showTop ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-3 rounded-full border bg-background/80 backdrop-blur shadow-lg hover:bg-primary/10 transition z-50"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
