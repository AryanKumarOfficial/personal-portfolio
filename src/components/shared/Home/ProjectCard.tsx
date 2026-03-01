"use client";

import { type Project } from "@/lib/data/profile";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

type Props = {
  project: Project;
};

const MotionImage = motion.create(Image);

export default function ProjectCard({ project }: Props) {
  const [imgSrc, setImgSrc] = useState(project.image);
  const fallbackImg = "/images/projects/fallback.png";

  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative h-full rounded-2xl"
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-primary/10 blur-xl" />
      </div>

      {/* card */}
      <div className=" relative h-full flex flex-col rounded-2xl border border-border/60 bg-linear-to-b from-background/90 to-muted/40 backdrop-blur-xl overflow-hidden">
        {/* IMAGE */}
        <div className="relative h-48 shrink-0 overflow-hidden rounded-t-2xl isolate">
          <MotionImage
            src={imgSrc}
            alt={project.title}
            fill
            onError={() => setImgSrc(fallbackImg)}
            className="object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 px-6 py-6">
          {/* TITLE */}
          <h3 className="text-lg font-semibold">{project.title}</h3>

          <p className=" text-sm text-muted-foreground mt-3 flex-1 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className=" text-xs px-3 py-1 rounded-md bg-muted/60 border border-border/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className=" flex gap-6 mt-6 text-sm font-medium">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                GitHub →
              </Link>
            )}

            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                Live →
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
