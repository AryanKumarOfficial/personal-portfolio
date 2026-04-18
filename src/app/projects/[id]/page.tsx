"use client";

import { projects } from "@/lib/data/profile";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use, useState } from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [imageError, setImageError] = useState<boolean>(false);
  const { id } = use(params);
  console.log(`param`, id);
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Image */}
      <motion.img
        layoutId={`image-${project.id}`}
        src={
          imageError
            ? `https://dummyimage.com/800x450/1a1a1a/ffffff&text=${project.title.replace(" ", "+")}`
            : project.image
        }
        onError={() => setImageError(true)}
        className="rounded-xl mb-8"
      />

      {/* Title */}
      <motion.h1
        layoutId={`card-${project.id}`}
        className="text-3xl font-bold mb-4"
      >
        {project.title}
      </motion.h1>

      {/* Description */}
      <p className="text-zinc-400 mb-6">{project.description}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded">
            {t}
          </span>
        ))}
      </div>

      {/* case study sections */}
      <div className="space-y-6 text-zinc-300">
        <p>
          <strong>Problem:</strong> real problem.
        </p>
        <p>
          <strong>Solution:</strong> What built.
        </p>
        <p>
          <strong>Challenges:</strong> struggled.
        </p>
      </div>
    </div>
  );
}
