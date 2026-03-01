"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { about } from "@/lib/data/profile";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Counter from "@/components/shared/Home/Counter";

const MotionImage = motion.create(Image);

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            className="relative w-full max-w-sm mx-auto"
          >
            {/* glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

            {/* floating animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MotionImage
                src="/images/aryan.jpg"
                alt="Aryan Kumar"
                width={420}
                height={420}
                className="relative rounded-2xl border object-cover shadow-lg"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
              />
            </motion.div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">
              {about.title}
            </motion.h2>

            {/* paragraphs sequential */}
            <motion.div variants={staggerContainer} className="mt-6 space-y-4">
              {about.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* stats */}
            <motion.div
              variants={staggerContainer}
              className="flex gap-10 mt-10"
            >
              {about.stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <div className="text-3xl font-bold text-primary">
                    <Counter value={stat.value} suffix="+" />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
