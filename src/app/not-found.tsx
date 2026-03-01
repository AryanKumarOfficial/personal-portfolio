"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-150 h-150 -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[140px] rounded-full"
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center max-w-xl"
      >
        {/* 404 number */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="text-7xl md:text-8xl font-bold tracking-tight"
        >
          404
        </motion.h1>

        {/* heading */}
        <h2 className="text-2xl font-semibold mt-4">Page not found</h2>

        {/* description */}
        <p className="text-muted-foreground mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <Button asChild size="lg">
            <Link href="/#home">Go Home</Link>
          </Button>

          <Button variant="outline" asChild size="lg">
            <Link href="/#projects">View Projects</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
