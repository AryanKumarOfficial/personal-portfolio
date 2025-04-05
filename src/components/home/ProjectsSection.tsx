import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";
import { FloatingCard } from "@/components/ui/aceternity/floating-card";
import { FaGithub } from 'react-icons/fa';
import { 
  BsArrowRight 
} from 'react-icons/bs';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiTypescript 
} from "react-icons/si";

const ProjectsSection = () => {
  return (
    <div className="mt-20 relative">
      {/* Background elements */}
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-teal-500/20 rounded-full blur-md animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-6 h-6 bg-yellow-500/10 rounded-full blur-md animate-pulse-slow"></div>
      </div>
      
      {/* Section Header with enhanced design */}
      <div className="relative mb-12">
        <Spotlight className="hidden md:block" />
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
            <Badge className="bg-teal-900/30 text-teal-300 border border-teal-500/20 px-3 py-1">
              FEATURED PROJECTS
            </Badge>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl font-bold text-white">
            <TextShimmer>My Creative Portfolio</TextShimmer>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl text-center">
            A showcase of my best work across e-commerce, AI applications, 
            social media, and web development.
          </p>
        </div>
      </div>
      
      {/* Enhanced Projects Layout - Staggered Grid for Visual Interest */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project 1 - Large feature (spans 7 columns) */}
        <div className="lg:col-span-7">
          <FloatingCard className="h-full">
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/30 hover:shadow-yellow-500/20 hover:shadow-xl h-full">
              {/* Enhanced hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Interactive pattern overlay */}
              <div className="absolute inset-0 bg-[url('/assets/images/tech-pattern.png')] bg-repeat opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500"></div>
              
              <div className="h-72 overflow-hidden relative">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-500/20 rounded-tl-md z-10 group-hover:border-yellow-500/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-500/20 rounded-br-md z-10 group-hover:border-yellow-500/40 transition-all duration-500"></div>
                
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                
                <img 
                  src="https://via.placeholder.com/1200x600/1a1a1a/yellow?text=E-Commerce+Platform" 
                  alt="E-Commerce Platform" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* Enhanced tag */}
                <div className="absolute top-4 right-4 bg-yellow-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-500/30 z-20">
                  <span className="text-yellow-300 text-xs font-medium">FEATURED</span>
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">E-Commerce Platform</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-yellow-500/50 to-amber-500/50 rounded mt-2 group-hover:w-32 transition-all duration-500"></div>
                </div>
                
                <p className="text-gray-300 mb-6">A full-featured e-commerce platform with seamless shopping experiences, secure payment processing, and real-time inventory management. Built with a focus on performance and user experience.</p>
                
                {/* Enhanced tech stack display */}
                <div className="mb-6">
                  <div className="text-xs uppercase text-gray-500 mb-2 tracking-wider">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 text-blue-300 border border-blue-500/20 px-2.5 py-1 text-xs">
                      <SiNextdotjs className="mr-1" /> Next.js
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-900/30 to-green-800/30 text-green-300 border border-green-500/20 px-2.5 py-1 text-xs">
                      <SiMongodb className="mr-1" /> MongoDB
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 text-purple-300 border border-purple-500/20 px-2.5 py-1 text-xs">
                      Stripe
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-900/30 to-cyan-800/30 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 text-xs">
                      <SiTailwindcss className="mr-1" /> Tailwind
                    </Badge>
                  </div>
                </div>
                
                {/* Enhanced Actions */}
                <div className="flex items-center space-x-4">
                  <a href="https://github.com/username/e-commerce" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 text-white hover:text-yellow-400 hover:border-yellow-400/30 transition-all duration-300 group-hover:shadow-glow">
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a href="https://e-commerce-demo.com" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center space-x-2 bg-gradient-to-r from-yellow-600/80 to-amber-600/80 px-4 py-2 rounded-full text-white hover:from-yellow-500 hover:to-amber-500 transition-all duration-300 group-hover:shadow-glow">
                    <BsArrowRight />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>
        
        {/* Project 2 & 3 Column (spans 5 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Project 2 - AI Assistant */}
          <FloatingCard>
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:shadow-blue-500/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 z-10 hidden md:block"></div>
                  <img 
                    src="https://via.placeholder.com/400x500/1a1a1a/0ea5e9?text=AI+App" 
                    alt="AI Assistant App" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                
                <div className="p-6 md:w-3/5 relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">AI Assistant App</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500/50 to-blue-400/50 rounded mt-2 mb-3 group-hover:w-24 transition-all duration-500"></div>
                  
                  <p className="text-gray-300 mb-4 text-sm">A sophisticated AI assistant application with voice recognition and personalized responses.</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-500/20 px-1.5 py-0.5 text-[10px]">React</Badge>
                    <Badge className="bg-orange-900/30 text-orange-300 border border-orange-500/20 px-1.5 py-0.5 text-[10px]">Firebase</Badge>
                    <Badge className="bg-purple-900/30 text-purple-300 border border-purple-500/20 px-1.5 py-0.5 text-[10px]">OpenAI</Badge>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a href="https://github.com/username/ai-assistant" target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-black/40 rounded-full border border-white/10 text-white hover:text-blue-400 hover:border-blue-400/30 transition-all">
                      <FaGithub className="text-sm" />
                    </a>
                    <a href="https://ai-assistant-demo.com" target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-gradient-to-r from-blue-600/80 to-blue-500/80 rounded-full text-white hover:from-blue-500 hover:to-blue-400 transition-all">
                      <BsArrowRight className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FloatingCard>
          
          {/* Project 3 - Social Dashboard */}
          <FloatingCard>
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 hover:border-green-500/30 hover:shadow-green-500/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 z-10 hidden md:block"></div>
                  <img 
                    src="https://via.placeholder.com/400x500/1a1a1a/22c55e?text=Social+Dashboard" 
                    alt="Social Media Dashboard" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                
                <div className="p-6 md:w-3/5 relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Social Dashboard</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-500/50 to-green-400/50 rounded mt-2 mb-3 group-hover:w-24 transition-all duration-500"></div>
                  
                  <p className="text-gray-300 mb-4 text-sm">A comprehensive dashboard for monitoring social media performance with real-time analytics.</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-500/20 px-1.5 py-0.5 text-[10px]">React</Badge>
                    <Badge className="bg-green-900/30 text-green-300 border border-green-500/20 px-1.5 py-0.5 text-[10px]">Node.js</Badge>
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-500/20 px-1.5 py-0.5 text-[10px]">PostgreSQL</Badge>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a href="https://github.com/username/social-dashboard" target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-black/40 rounded-full border border-white/10 text-white hover:text-green-400 hover:border-green-400/30 transition-all">
                      <FaGithub className="text-sm" />
                    </a>
                    <a href="https://social-dashboard-demo.com" target="_blank" rel="noopener noreferrer" 
                       className="p-2 bg-gradient-to-r from-green-600/80 to-green-500/80 rounded-full text-white hover:from-green-500 hover:to-green-400 transition-all">
                      <BsArrowRight className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>
        
        {/* Project 4 - Portfolio Website (spans full width for variety) */}
        <div className="lg:col-span-12">
          <FloatingCard>
            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-purple-500/20 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-3 p-6">
                  <div className="mb-1 text-xs text-purple-400 font-semibold tracking-wider">LATEST PROJECT</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Modern Portfolio Website</h3>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500/50 to-indigo-400/50 rounded mt-2 mb-4 group-hover:w-32 transition-all duration-500"></div>
                  
                  <p className="text-gray-300 mb-6">A responsive, modern portfolio website showcasing professional accomplishments with advanced animations and interactive elements. Built with Next.js, TypeScript, and Tailwind CSS.</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 text-blue-300 border border-blue-500/20 px-2.5 py-1 text-xs">
                      <SiNextdotjs className="mr-1" /> Next.js
                    </Badge>
                    <Badge className="bg-gradient-to-r from-cyan-900/30 to-cyan-800/30 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 text-xs">
                      <SiTailwindcss className="mr-1" /> Tailwind CSS
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 text-purple-300 border border-purple-500/20 px-2.5 py-1 text-xs">
                      Framer Motion
                    </Badge>
                    <Badge className="bg-gradient-to-r from-gray-900/30 to-gray-800/30 text-gray-300 border border-gray-500/20 px-2.5 py-1 text-xs">
                      <SiTypescript className="mr-1" /> TypeScript
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a href="https://github.com/username/portfolio" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 text-white hover:text-purple-400 hover:border-purple-400/30 transition-all duration-300">
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center space-x-2 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 px-4 py-2 rounded-full text-white hover:from-purple-500 hover:to-indigo-500 transition-all duration-300">
                      <BsArrowRight />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
                
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/40 to-black z-10 md:block hidden"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/20 rounded-tr-md z-20 group-hover:border-purple-500/40 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/20 rounded-bl-md z-20 group-hover:border-purple-500/40 transition-all duration-500"></div>
                  
                  <img 
                    src="https://via.placeholder.com/800x600/1a1a1a/a855f7?text=Portfolio+Website" 
                    alt="Modern Portfolio Website" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
      
      {/* Enhanced View All Projects Button */}
      <div className="mt-12 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
          <a 
            href="/projects" 
            className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white px-6 py-3 rounded-full font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-glow"
          >
            View All Projects
            <BsArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
