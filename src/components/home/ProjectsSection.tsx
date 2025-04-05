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
  SiTypescript,
  SiReact,
  SiFirebase,
  SiOpenai,
  SiPostgresql,
  SiNodedotjs,
  SiStripe
} from "react-icons/si";
import { IconType } from 'react-icons';

// Define project interface
interface Technology {
  name: string;
  icon?: IconType;
  color: string;
}

interface ProjectLink {
  url: string;
  text: string;
  icon: IconType;
  isPrimary?: boolean;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  technologies: Technology[];
  links: ProjectLink[];
  accentColor: string;
  size?: 'large' | 'small';
}

// Technology mapping
const TECHNOLOGIES: Record<string, Technology> = {
  nextjs: { name: 'Next.js', icon: SiNextdotjs, color: 'blue' },
  mongodb: { name: 'MongoDB', icon: SiMongodb, color: 'green' },
  tailwind: { name: 'Tailwind', icon: SiTailwindcss, color: 'cyan' },
  typescript: { name: 'TypeScript', icon: SiTypescript, color: 'blue' },
  react: { name: 'React', icon: SiReact, color: 'blue' },
  firebase: { name: 'Firebase', icon: SiFirebase, color: 'orange' },
  openai: { name: 'OpenAI', icon: SiOpenai, color: 'purple' },
  postgresql: { name: 'PostgreSQL', icon: SiPostgresql, color: 'blue' },
  nodejs: { name: 'Node.js', icon: SiNodedotjs, color: 'green' },
  stripe: { name: 'Stripe', icon: SiStripe, color: 'purple' },
};

// Color mapping for technology badges
const colorMap: Record<string, string> = {
  blue: 'bg-gradient-to-r from-blue-900/30 to-blue-800/30 text-blue-300 border border-blue-500/20',
  green: 'bg-gradient-to-r from-green-900/30 to-green-800/30 text-green-300 border border-green-500/20',
  purple: 'bg-gradient-to-r from-purple-900/30 to-purple-800/30 text-purple-300 border border-purple-500/20',
  cyan: 'bg-gradient-to-r from-cyan-900/30 to-cyan-800/30 text-cyan-300 border border-cyan-500/20',
  orange: 'bg-gradient-to-r from-orange-900/30 to-orange-800/30 text-orange-300 border border-orange-500/20',
  yellow: 'bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 text-yellow-300 border border-yellow-500/20',
};

// Project data
const PROJECTS: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with seamless shopping experiences, secure payment processing, and real-time inventory management. Built with a focus on performance and user experience.',
    image: 'https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
    technologies: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.stripe,
      TECHNOLOGIES.tailwind
    ],
    links: [
      {
        url: 'https://github.com/username/e-commerce',
        text: 'View Code',
        icon: FaGithub,
      },
      {
        url: 'https://e-commerce-demo.com',
        text: 'Live Demo',
        icon: BsArrowRight,
        isPrimary: true
      }
    ],
    accentColor: 'yellow',
    size: 'large'
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant App',
    description: 'A sophisticated AI assistant application with voice recognition and personalized responses.',
    image: 'https://images.unsplash.com/photo-1673255745677-e36f618550d1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.firebase,
      TECHNOLOGIES.openai
    ],
    links: [
      {
        url: 'https://github.com/username/ai-assistant',
        text: 'View Code',
        icon: FaGithub,
      },
      {
        url: 'https://ai-assistant-demo.com',
        text: 'Live Demo',
        icon: BsArrowRight,
        isPrimary: true
      }
    ],
    accentColor: 'blue',
    size: 'small'
  },
  {
    id: 'social-dashboard',
    title: 'Social Dashboard',
    description: 'A comprehensive dashboard for monitoring social media performance with real-time analytics.',
    image: 'https://images.unsplash.com/photo-1636516214833-3377b36bdcb5?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nodejs,
      TECHNOLOGIES.postgresql
    ],
    links: [
      {
        url: 'https://github.com/username/social-dashboard',
        text: 'View Code',
        icon: FaGithub,
      },
      {
        url: 'https://social-dashboard-demo.com',
        text: 'Live Demo',
        icon: BsArrowRight,
        isPrimary: true
      }
    ],
    accentColor: 'green',
    size: 'small'
  }
];

// Technology Badge component
const TechBadge = ({ tech }: { tech: Technology }) => {
  return (
    <Badge className={`${colorMap[tech.color] || colorMap.blue} px-2.5 py-1 text-xs`}>
      {tech.icon && <tech.icon className="mr-1" />} {tech.name}
    </Badge>
  );
};

// Project Card component
const ProjectCard = ({ project }: { project: Project }) => {
  const isLarge = project.size === 'large';
  const accentColorMap: Record<string, any> = {
    yellow: {
      border: 'hover:border-yellow-500/30',
      shadow: 'hover:shadow-yellow-500/20',
      gradient: 'from-yellow-600/10 via-amber-500/10',
      hoverText: 'group-hover:text-yellow-400',
      titleUnderline: 'bg-gradient-to-r from-yellow-500/50 to-amber-500/50',
      badgeBg: 'bg-yellow-500/10',
      badgeBorder: 'border-yellow-500/30',
      badgeText: 'text-yellow-300',
      buttonPrimary: 'bg-gradient-to-r from-yellow-600/80 to-amber-600/80 hover:from-yellow-500 hover:to-amber-500',
      buttonHover: 'hover:text-yellow-400 hover:border-yellow-400/30',
    },
    blue: {
      border: 'hover:border-blue-500/30',
      shadow: 'hover:shadow-blue-500/20',
      gradient: 'from-blue-600/10 via-blue-500/10',
      hoverText: 'group-hover:text-blue-400',
      titleUnderline: 'bg-gradient-to-r from-blue-500/50 to-blue-400/50',
      badgeBg: 'bg-blue-500/10',
      badgeBorder: 'border-blue-500/30',
      badgeText: 'text-blue-300',
      buttonPrimary: 'bg-gradient-to-r from-blue-600/80 to-blue-500/80 hover:from-blue-500 hover:to-blue-400',
      buttonHover: 'hover:text-blue-400 hover:border-blue-400/30',
    },
    green: {
      border: 'hover:border-green-500/30',
      shadow: 'hover:shadow-green-500/20',
      gradient: 'from-green-600/10 via-green-500/10',
      hoverText: 'group-hover:text-green-400',
      titleUnderline: 'bg-gradient-to-r from-green-500/50 to-green-400/50',
      badgeBg: 'bg-green-500/10',
      badgeBorder: 'border-green-500/30',
      badgeText: 'text-green-300',
      buttonPrimary: 'bg-gradient-to-r from-green-600/80 to-green-500/80 hover:from-green-500 hover:to-green-400',
      buttonHover: 'hover:text-green-400 hover:border-green-400/30',
    }
  };

  const accentStyle = accentColorMap[project.accentColor] || accentColorMap.blue;

  if (isLarge) {
    return (
      <FloatingCard className="h-full">
        <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 ${accentStyle.border} ${accentStyle.shadow} hover:shadow-xl h-full`}>
          {/* Enhanced hover gradient effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${accentStyle.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>

          {/* Interactive pattern overlay */}
          <div className="absolute inset-0 bg-[url('/assets/images/tech-pattern.png')] bg-repeat opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500"></div>

          <div className="h-72 overflow-hidden relative">
            {/* Corner accents */}
            <div className={`absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-${project.accentColor}-500/20 rounded-tl-md z-10 group-hover:border-${project.accentColor}-500/40 transition-all duration-500`}></div>
            <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-${project.accentColor}-500/20 rounded-br-md z-10 group-hover:border-${project.accentColor}-500/40 transition-all duration-500`}></div>

            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Featured tag */}
            {project.featured && (
              <div className={`absolute top-4 right-4 ${accentStyle.badgeBg} backdrop-blur-sm px-3 py-1 rounded-full border ${accentStyle.badgeBorder} z-20`}>
                <span className={`${accentStyle.badgeText} text-xs font-medium`}>FEATURED</span>
              </div>
            )}
          </div>

          <div className="p-6 relative z-10">
            <div className="flex flex-col mb-4">
              <h3 className={`text-2xl font-bold text-white ${accentStyle.hoverText} transition-colors duration-300`}>{project.title}</h3>
              <div className={`w-20 h-1 ${accentStyle.titleUnderline} rounded mt-2 group-hover:w-32 transition-all duration-500`}></div>
            </div>

            <p className="text-gray-300 mb-6">{project.description}</p>

            {/* Tech stack display */}
            <div className="mb-6">
              <div className="text-xs uppercase text-gray-500 mb-2 tracking-wider">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <TechBadge key={`${project.id}-tech-${index}`} tech={tech} />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {project.links.map((link, index) => (
                <a
                  key={`${project.id}-link-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.isPrimary
                    ? `flex items-center space-x-2 ${accentStyle.buttonPrimary} px-4 py-2 rounded-full text-white transition-all duration-300 group-hover:shadow-glow`
                    : `flex items-center space-x-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 text-white ${accentStyle.buttonHover} transition-all duration-300 group-hover:shadow-glow`
                  }
                >
                  <link.icon />
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>
    );
  } else {
    // Smaller project card with horizontal layout on non-mobile screens
    return (
      <FloatingCard>
        <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm transition-all duration-500 ${accentStyle.border} ${accentStyle.shadow} hover:shadow-xl`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${accentStyle.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 z-10 hidden md:block"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="p-6 md:w-3/5 relative z-10">
              <h3 className={`text-xl font-bold text-white ${accentStyle.hoverText} transition-colors duration-300`}>{project.title}</h3>
              <div className={`w-16 h-0.5 ${accentStyle.titleUnderline} rounded mt-2 mb-3 group-hover:w-24 transition-all duration-500`}></div>

              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={`${project.id}-tech-${index}`} className={`${colorMap[tech.color]} px-1.5 py-0.5 text-[10px]`}>
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <div className="flex space-x-3">
                {project.links.map((link, index) => (
                  <a
                    key={`${project.id}-link-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.isPrimary
                      ? `p-2 ${accentStyle.buttonPrimary} rounded-full text-white transition-all`
                      : `p-2 bg-black/40 rounded-full border border-white/10 text-white ${accentStyle.buttonHover} transition-all`
                    }
                  >
                    <link.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>
    );
  }
};

const ProjectsSection = () => {
  // Filter projects by size
  const largeProjects = PROJECTS.filter(project => project.size === 'large');
  const smallProjects = PROJECTS.filter(project => project.size === 'small' || !project.size);

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
        <Spotlight className="hidden md:block">
          <div className="flex flex-col items-center my-4">
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
        </Spotlight>
      </div>

      {/* Projects Layout - Dynamic rendering based on project size */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Large feature projects (spans 7 columns) */}
        {largeProjects.map(project => (
          <div key={project.id} className="lg:col-span-7">
            <ProjectCard project={project} />
          </div>
        ))}

        {/* Smaller projects column (spans 5 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {smallProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
