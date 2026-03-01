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

const techStack = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Node.js",
  "Prisma",
  "Docker",
];

import Image from "next/image";

const MotionImage = motion.create(Image);

const Hero = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="relative w-full pb-28 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-175 h-175 bg-primary/20 rounded-full blur-[120px] -z-10"
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
            Available for freelance & internships
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-muted-foreground font-mono mb-3 text-sm"
          >
            Full-Stack Engineer
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-xl sm:text-2xl font-semibold mb-2"
          >
            {` Hi, I'm Aryan Kumar 👋`}
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            transition={defaultTransition}
            className="max-w-xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Building scalable <span className="text-primary">SaaS</span>,
            dashboards, and modern web apps.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Full-stack developer specializing in SaaS architecture, REST APIs,
            authentication systems, and scalable database design using Next.js,
            Node.js, and PostgreSQL.
          </motion.p>

          {/* TECH STACK */}
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="flex flex-wrap gap-2 mt-6"
          >
            {techStack.map((tech) => (
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
                  href="https://github.com/aryankumarofficial"
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
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 h-72 rounded-2xl border bg-muted/40 backdrop-blur overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent blur-2xl opacity-60 z-10 pointer-events-none" />

            <MotionImage
              src="/images/aryan.jpg"
              alt="Aryan Kumar"
              fill
              priority
              className="object-cover"
              initial={{
                opacity: 0,
                scale: 1.1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
