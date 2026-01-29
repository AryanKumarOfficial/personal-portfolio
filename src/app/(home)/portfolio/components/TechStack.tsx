"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiMongodb, SiExpress, SiPostgresql, SiFirebase,
  SiGit, SiDocker, SiAmazon, SiVercel, SiGithubactions,
  SiRedux, SiGraphql, SiSass, SiBootstrap, SiMui
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const TechStack: React.FC = () => {
  const technologies: TechItem[] = [
    { name: "React", icon: <SiReact />, color: "text-blue-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
    { name: "Sass", icon: <SiSass />, color: "text-pink-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-400" },
    { name: "Material UI", icon: <SiMui />, color: "text-blue-400" },
    { name: "Git", icon: <SiGit />, color: "text-red-500" },
    { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
    { name: "AWS", icon: <SiAmazon />, color: "text-yellow-400" },
    { name: "Vercel", icon: <SiVercel />, color: "text-white" },
    { name: "GitHub Actions", icon: <SiGithubactions />, color: "text-gray-300" },
  ];

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-teal-400/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Tech Stack</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The technologies, frameworks, and tools I use to build exceptional digital experiences.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-blue-400/30 transition-all group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className={`text-4xl mb-3 ${tech.color} group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <p className="text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            className="inline-block relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="p-px bg-gradient-to-r from-blue-500 to-teal-400 rounded-full">
              <a 
                href="#projects" 
                className="block px-8 py-3 bg-black/80 rounded-full text-white font-medium hover:bg-black/60 transition-colors"
              >
                See My Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
