"use client";

import { Experience } from "@/lib/data/profile";
import { motion } from "motion/react";

type Props = {
  exp: Experience;
};

export default function ExperienceCard({ exp }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className=" relative border rounded-xl p-6 bg-muted/30 backdrop-blur h-full flex flex-col"
    >
      {/* role */}
      <h3 className="font-semibold text-lg">{exp.role}</h3>

      {/* company */}
      <p className="text-primary text-sm mt-1">{exp.company}</p>

      {/* period */}
      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>

      {/* description */}
      <p className="text-sm text-muted-foreground mt-4 grow">
        {exp.description}
      </p>

      {/* tech */}
      <div className="flex flex-wrap gap-2 mt-4">
        {exp.tech.map((tech) => (
          <span
            key={tech}
            className=" text-xs px-2 py-1 border rounded-md bg-background/40"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
