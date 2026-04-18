"use client";

import Github from "@/assets/icons/Github";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: readonly string[];
  github?: string;
  live?: string;
  image: string;
};

const MotionImage = motion.create(Image);

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [imgError, setImageError] = useState<boolean>(false);

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={`group cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-white/20 transition ${
        featured ? "h-full" : ""
      }`}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-64" : "h-52"}`}>
        <MotionImage
          layoutId={`image-${project.id}`}
          width={"100"}
          height={"100"}
          src={
            imgError
              ? `https://placehold.co/800x450?text=${project.title.split(" ").join("+")}`
              : project.image
          }
          alt={project.title}
          onError={() => {
            setImageError(true);
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        {/* Floating label */}
        <div className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-md bg-white/10 backdrop-blur border border-white/10 text-white">
          {featured ? "Featured" : "Project"}
        </div>
      </div>

      {/* Content */}
      <div className={`p-5 space-y-3 ${featured ? "p-6" : ""}`}>
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>

        <p className="text-sm text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-zinc-400 hover:text-white transition"
              >
                <Github />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="text-zinc-400 hover:text-white transition"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          {/* Subtle CTA */}
          <span className="text-xs text-zinc-500 group-hover:text-white transition">
            View →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
