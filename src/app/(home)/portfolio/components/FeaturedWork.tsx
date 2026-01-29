"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  techStack: string[];
  featured: boolean;
  githubLink?: string;
};

interface FeaturedWorkProps {
  projects: Project[];
}

const FeaturedWork: React.FC<FeaturedWorkProps> = ({ projects }) => {
  return (
    <section id="featured-work" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/10 to-teal-400/10 blur-3xl"></div>
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
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Highlighting some of my best work that demonstrates my skills, creativity and problem-solving approach.
          </motion.p>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  {/* Decorative elements */}
                  <div className={`absolute -top-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 border border-blue-400/30 rounded-xl ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}></div>
                  
                  {/* Main image */}
                  <div className="relative bg-gradient-to-br from-blue-500/10 to-teal-400/10 p-1 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-auto object-cover rounded-lg transition-transform duration-1000 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/800x500?text=Project+Image';
                      }}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6">
                        <div className="flex gap-4">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-blue-500/80 rounded-full text-white hover:bg-blue-600 transition-colors"
                          >
                            <FaExternalLinkAlt />
                          </a>
                          {project.githubLink && (
                            <a 
                              href={project.githubLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-800/80 rounded-full text-white hover:bg-gray-700 transition-colors"
                            >
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <span className="text-blue-400 font-medium tracking-wider text-sm">FEATURED PROJECT</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm text-gray-400 mb-3">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium transition-transform hover:scale-105 hover:shadow-glow flex items-center gap-2"
                  >
                    View Project <FaExternalLinkAlt className="text-sm" />
                  </a>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium transition-all hover:bg-white/20 flex items-center gap-2"
                    >
                      View Code <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
