"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDatabase, FaTools, 
  FaDesktop, FaMobileAlt, FaServer, FaCloud 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, 
  SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiPython, SiDjango, SiGit, SiDocker,
  SiWebpack, SiRedux, SiReactrouter, SiGraphql
} from 'react-icons/si';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    icon: React.ReactNode;
    proficiency: number;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <FaDesktop className="text-blue-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" />, proficiency: 90 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, proficiency: 85 },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, proficiency: 95 },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, proficiency: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, proficiency: 95 },
      { name: "Redux", icon: <SiRedux className="text-purple-500" />, proficiency: 80 },
      { name: "React Router", icon: <SiReactrouter className="text-red-400" />, proficiency: 90 },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" />, proficiency: 75 },
    ]
  },
  {
    name: "Backend",
    icon: <FaServer className="text-green-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, proficiency: 90 },
      { name: "Express", icon: <SiExpress className="text-gray-300" />, proficiency: 85 },
      { name: "Python", icon: <SiPython className="text-yellow-400" />, proficiency: 80 },
      { name: "Django", icon: <SiDjango className="text-green-600" />, proficiency: 75 },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" />, proficiency: 70 },
    ]
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-yellow-500" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, proficiency: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, proficiency: 80 },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, proficiency: 85 },
    ]
  },
  {
    name: "DevOps",
    icon: <FaTools className="text-gray-400" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-red-500" />, proficiency: 90 },
      { name: "Docker", icon: <SiDocker className="text-blue-400" />, proficiency: 75 },
    ]
  },
];

const SkillsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].name);
  
  const selectedCategory = skillCategories.find(cat => cat.name === activeCategory) || skillCategories[0];
  
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-teal-400/10 blur-3xl"></div>
        <div className="absolute -top-48 -left-48 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-600/10 blur-3xl"></div>
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
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and domains.
          </motion.p>
        </div>
        
        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.name
                  ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={activeCategory} // This forces a re-render and animation when category changes
        >
          {selectedCategory.skills.map((skill) => (
            <motion.div 
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-teal-400/10 flex items-center justify-center text-3xl mr-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Proficiency</span>
                  <span className="text-sm font-medium text-blue-400">{skill.proficiency}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
