import { MovingCards } from "@/components/ui/aceternity/moving-cards";
import TechCard, { TechCardProps } from "./TechCard";
import { 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaToolbox, 
  FaFireAlt 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiOpenjdk, 
  SiAppwrite, 
  SiWordpress, 
  SiFigma, 
  SiPostgresql, 
  SiMysql
} from "react-icons/si";
import { 
  MdOutlineHandyman 
} from 'react-icons/md';
import { 
  BsServer, 
  BsLightningCharge 
} from 'react-icons/bs';
import { 
  IoRocket 
} from 'react-icons/io5';
import { 
  TbBrandVscode 
} from 'react-icons/tb';

// Tech stack and skills for the cards section
const techStack = [
  {
    icon: <FaReact className="text-5xl text-blue-400 animate-pulse-slow" />,
    name: "React & Next.js",
    description: "Building modern, SEO-friendly web applications with the latest features",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <FaNodeJs className="text-5xl text-green-500" />,
    name: "Node.js & Express",
    description: "Creating robust backend systems and performant API endpoints",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: <SiMongodb className="text-5xl text-green-600" />,
    name: "MongoDB & Databases",
    description: "Designing efficient data models and seamless database integrations",
    color: "from-green-500 to-teal-400"
  },
  {
    icon: <SiTypescript className="text-5xl text-blue-500" />,
    name: "JavaScript & TypeScript",
    description: "Developing with modern JavaScript and TypeScript for type safety",
    color: "from-yellow-500 to-amber-400"
  },
  {
    icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
    name: "Tailwind CSS",
    description: "Creating responsive, utility-first designs for all screen sizes",
    color: "from-blue-400 to-sky-300"
  },
  {
    icon: <FaGithub className="text-5xl text-white" />,
    name: "Git & Version Control",
    description: "Managing code with best practices for collaboration and deployment",
    color: "from-orange-500 to-red-400"
  },
  {
    icon: <SiWordpress className="text-5xl text-blue-400" />,
    name: "WordPress Development",
    description: "Building custom themes and plugins for WordPress websites",
    color: "from-blue-600 to-blue-400"
  },
  {
    icon: <SiAppwrite className="text-5xl text-red-500" />,
    name: "Backend Services",
    description: "Integration with Appwrite, Firebase and other backend services",
    color: "from-red-500 to-pink-400"
  },
  {
    icon: <IoRocket className="text-5xl text-purple-500" />,
    name: "Performance Optimization",
    description: "Improving load times and overall web application performance",
    color: "from-purple-500 to-violet-400"
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Simple, elegant background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in full-stack development with expertise in both frontend and backend technologies.
            I&apos;m passionate about creating responsive, user-friendly interfaces and robust, scalable backend systems.
          </p>
        </div>
        
        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {techStack.map((tech, index) => (
            <TechCard key={index} tech={tech} index={index} />
          ))}
        </div>
        
        {/* Tech Categories */}
        <div className="mt-16 space-y-16">
          {/* Frontend tech */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
            
            <h3 className="text-xl font-semibold text-white flex items-center mb-6">
              <FaReact className="text-blue-400 mr-3" /> Frontend Technologies
            </h3>
            
            <MovingCards
              items={[
                {
                  content: (
                    <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-black border border-white/5 rounded-xl shadow-md hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500">
                      <SiReact className="text-blue-400 text-3xl" />
                      <span className="text-sm font-medium text-white">React</span>
                    </div>
                  ),
                  key: "react"
                },
                {
                  content: (
                    <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-black border border-white/5 rounded-xl shadow-md hover:shadow-white/20 hover:border-white/30 transition-all duration-500">
                      <SiNextdotjs className="text-white text-3xl" />
                      <span className="text-sm font-medium text-white">Next.js</span>
                    </div>
                  ),
                  key: "nextjs"
                },
                {
                  content: (
                    <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-sky-500/10 rounded-xl shadow-md hover:shadow-sky-500/30 hover:border-sky-500/40 transition-all duration-500 group hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-sky-500/20 group-hover:border-sky-500/40 transition-all duration-300 shadow-inner">
                        <SiTailwindcss className="text-sky-400 text-3xl group-hover:animate-pulse-slow" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-sky-400 transition-colors duration-300">Tailwind</span>
                    </div>
                  ),
                  key: "tailwind"
                },
                {
                  content: (
                    <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-yellow-500/10 rounded-xl shadow-md hover:shadow-yellow-500/30 hover:border-yellow-500/40 transition-all duration-500 group hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-300 shadow-inner">
                        <SiJavascript className="text-yellow-400 text-3xl group-hover:animate-pulse-slow" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">JavaScript</span>
                    </div>
                  ),
                  key: "javascript"
                },
                {
                  content: (
                    <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-blue-500/10 rounded-xl shadow-md hover:shadow-blue-500/30 hover:border-blue-500/40 transition-all duration-500 group hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 shadow-inner">
                        <SiTypescript className="text-blue-400 text-3xl group-hover:animate-pulse-slow" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">TypeScript</span>
                    </div>
                  ),
                  key: "typescript"
                }
              ]}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              cardClassName="!bg-transparent !border-0 !p-0 !shadow-none"
            />
          </div>
          
          {/* Backend tech */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
            
            <h3 className="text-xl font-semibold text-white flex items-center mb-6">
              <BsServer className="text-green-400 mr-3" /> Backend Technologies
            </h3>
            
            <MovingCards
              items={[
                {
                  content: (
                    <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-green-500/10 rounded-xl shadow-md hover:shadow-green-500/30 hover:border-green-500/40 transition-all duration-500 group hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300 shadow-inner">
                        <FaNodeJs className="text-green-500 text-3xl group-hover:animate-pulse-slow" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-green-500 transition-colors duration-300">Node.js</span>
                    </div>
                  ),
                  key: "nodejs"
                },
                {
                  content: (
                    <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-gray-500/10 rounded-xl shadow-md hover:shadow-gray-500/30 hover:border-gray-500/40 transition-all duration-500 group hover:-translate-y-1">
                      <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-500/20 group-hover:border-gray-500/40 transition-all duration-300 shadow-inner">
                        <SiExpress className="text-gray-400 text-3xl group-hover:animate-pulse-slow" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Express.js</span>
                    </div>
                  ),
                  key: "express"
                }
              ]}
              direction="left"
              speed="normal"
              pauseOnHover={true}
              cardClassName="!bg-transparent !border-0 !p-0 !shadow-none"
            />
          </div>
          
          {/* More categories can be added here */}
        </div>
        
        {/* Skills Showcase */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-black/80 to-black border border-gray-800/50 p-8">
            <div className="absolute inset-0 bg-grid-white/5 bg-grid-8 [mask-image:radial-gradient(white,transparent_85%)]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <BsLightningCharge className="text-yellow-400" /> 
                <span>Specialized Skills</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frontend Skills */}
                <div className="group relative bg-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/5 shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-6 relative z-10">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/10 w-14 h-14 flex items-center justify-center mb-4 shadow-inner group-hover:border-blue-500/30 transition-all duration-500">
                      <SiReact className="text-blue-400 text-3xl group-hover:animate-spin-slow" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">Frontend Development</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                        React & Next.js Expertise
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                        Responsive & Adaptive UI
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                        Modern Animation & Transitions
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></div>
                        Performance Optimization
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Backend Skills */}
                <div className="group relative bg-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/5 shadow-xl hover:shadow-green-500/10 hover:border-green-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-6 relative z-10">
                    <div className="p-3 rounded-full bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/10 w-14 h-14 flex items-center justify-center mb-4 shadow-inner group-hover:border-green-500/30 transition-all duration-500">
                      <FaNodeJs className="text-green-400 text-3xl group-hover:animate-pulse-slow" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">Backend Development</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                        Node.js & Express Architecture
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                        Database Design & Integration
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                        RESTful & GraphQL APIs
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                        Authentication & Security
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Design Skills */}
                <div className="group relative bg-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/5 shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-6 relative z-10">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/10 w-14 h-14 flex items-center justify-center mb-4 shadow-inner group-hover:border-purple-500/30 transition-all duration-500">
                      <SiFigma className="text-purple-400 text-3xl group-hover:animate-pulse-slow" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">UI/UX Design</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></div>
                        Interaction Design Principles
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></div>
                        Visual Hierarchy & Flow
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></div>
                        Wireframing & Prototyping
                      </li>
                      <li className="text-gray-300 flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></div>
                        User Research & Testing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
