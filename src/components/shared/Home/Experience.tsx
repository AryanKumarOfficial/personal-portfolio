"use client";

import { experiences } from "@/lib/data/profile";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold">Experience</h2>

          <p className="text-muted-foreground mt-2">
            My professional journey building scalable systems
          </p>
        </motion.div>

        {/* timeline container */}
        <div className="relative">
          {/* vertical line */}
          <div className=" absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{
                  opacity: 0,
                  x: isLeft ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                }}
                className={cn(
                  `relative mb-12 flex md:items-center`,
                  isLeft ? "md:justify-start" : "md:justify-end",
                )}
              >
                {/* dot */}
                <div className=" absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow" />

                {/* card */}
                <div className=" ml-12 md:ml-0 md:w-[45%] border rounded-xl p-6 bg-muted/30 backdrop-blur">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>

                  <p className="text-primary text-sm">{exp.company}</p>

                  <p className="text-xs text-muted-foreground mt-1">
                    {exp.period}
                  </p>

                  <p className="text-sm text-muted-foreground mt-3">
                    {exp.description}
                  </p>

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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
