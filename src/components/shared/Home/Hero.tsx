"use client";

import Github from "@/assets/icons/Github";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
  defaultTransition,
} from "@/lib/motion";
import { HeroData } from "@/lib/data/profile";

import Image from "next/image";

const MotionImage = motion.create(Image);

const Hero = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <motion.section
      id="home"
      style={{ opacity, y }}
      className="relative w-full pb-28 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm border rounded-full bg-muted/40 backdrop-blur"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {HeroData.availability}
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-muted-foreground font-mono mb-3 text-sm"
          >
            {HeroData.role}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-xl sm:text-2xl font-semibold mb-2"
          >
            {` Hi, I'm ${HeroData.name} 👋`}
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            transition={defaultTransition}
            className="max-w-xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            I build scalable SaaS systems with clean, production-ready
            architecture.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {HeroData.description}
          </motion.p>

          {/* TECH STACK */}
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="flex flex-wrap gap-2 mt-6"
          >
            {HeroData.techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                }}
                className="text-sm px-3 py-1 border rounded-md bg-muted/40 backdrop-blur cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.96 }}>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href={HeroData.social.github}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Github />
                  GitHub
                </Link>
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.96 }}>
              <Button variant="ghost" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-6 text-sm text-muted-foreground"
          >
            Built production SaaS dashboards • Full-stack Next.js & PostgreSQL •
            Open-source contributor
          </motion.p>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.6,
          }}
          className="flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl opacity-60" />

            {/* Border gradient */}
            <div className="absolute inset-0 rounded-2xl p-px bg-linear-to-br from-primary/40 via-transparent to-primary/10">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                <MotionImage
                  src="/images/aryan.jpg"
                  alt="Aryan Kumar"
                  fill
                  className="object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-background" />
    </motion.section>
  );
};

export default Hero;
