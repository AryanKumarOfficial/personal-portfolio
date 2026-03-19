"use client";
import { projects } from "@/lib/data/profile";
import { ProjectCard } from "./ProjectCard";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-primary/20 blur-[140px] -z-10"
      />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-muted-foreground mt-2">
            Selected work focused on SaaS, systems, and real-world scale.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <Link href={`/projects/${project.id}`}>
                <ProjectCard project={project} featured={i === 0} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
