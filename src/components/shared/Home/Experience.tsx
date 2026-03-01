"use client";

import { experiences } from "@/lib/data/profile";
import ExperienceCard from "./ExperienceCard";

import { motion } from "motion/react";

import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold">Experience</h2>

          <p className="text-muted-foreground mt-2">
            Professional work and internships
          </p>
        </motion.div>

        {/* grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className=" grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={fadeUp}>
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
