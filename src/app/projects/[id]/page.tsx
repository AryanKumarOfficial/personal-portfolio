"use client";

import { projects } from "@/lib/data/profile";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { use, useState } from "react";
import Link from "next/link";
import { GithubIcon, ArrowLeftIcon, ExternalLinkIcon, CheckCircle2Icon } from "lucide-react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [imageError, setImageError] = useState<boolean>(false);
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Back Button */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4" /> Back to Portfolio
      </Link>

      {/* Image */}
      <motion.img
        layoutId={`image-${project.id}`}
        src={
          imageError
            ? `https://dummyimage.com/800x450/1a1a1a/ffffff&text=${project.title.replace(" ", "+")}`
            : project.image
        }
        onError={() => setImageError(true)}
        className="w-full h-auto object-cover rounded-xl mb-8 border border-white/10"
      />

      {/* Title & Metadata */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <motion.h1
            layoutId={`card-${project.id}`}
            className="text-4xl font-bold tracking-tight"
          >
            {project.title}
          </motion.h1>

          <div className="flex items-center gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm p-2 bg-white/5 hover:bg-white/10 rounded-md transition-colors flex items-center justify-center border border-white/5"
                title="Source Code"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm px-4 py-2 bg-white text-black hover:bg-zinc-200 rounded-md transition-colors flex items-center gap-2 font-medium"
              >
                Live Project <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-medium text-zinc-300">
              {t}
            </span>
          ))}
        </div>

        <p className="text-xl text-zinc-400 leading-relaxed font-light">
          {project.description}
        </p>
      </div>

      {project.blog ? (
        <article className="prose prose-invert prose-zinc max-w-none space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Overview</h2>
            <p className="text-zinc-400 leading-loose text-lg">{project.blog.overview}</p>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Architecture & Stack</h2>
            <p className="text-zinc-400 leading-loose text-lg">{project.blog.architecture}</p>
          </section>

          {/* Technical Challenges */}
          {project.blog.technicalChallenges && project.blog.technicalChallenges.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Technical Challenges</h2>
              <div className="grid gap-6">
                {project.blog.technicalChallenges.map((challenge, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      {challenge.title}
                    </h3>
                    <p className="text-zinc-400">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Learnings */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Key Learnings</h2>
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 text-zinc-400 leading-loose text-lg flex gap-4">
              <CheckCircle2Icon className="w-6 h-6 text-green-500 shrink-0 mt-1" />
              <p>{project.blog.learnings}</p>
            </div>
          </section>
        </article>
      ) : (
        <div className="py-24 text-center border-t border-white/10 mt-12">
          <h2 className="text-xl font-medium text-white mb-2">Technical Deep Dive Coming Soon</h2>
          <p className="text-zinc-500">I am currently writing up the engineering details and architecture decisions for this project.</p>
        </div>
      )}
    </div>
  );
}
