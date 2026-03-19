"use client";
import { projects } from "@/lib/data/profile";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-175 h-100 bg-primary/10 blur-[120px] -z-10"
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
            Production Grade SaaS and full-stack applications
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
