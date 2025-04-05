"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import useHome from "@/backend/store/Home";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Text3D } from "@/components/ui/aceternity/3d-text";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";
import { GridPattern } from "@/components/ui/aceternity/grid-pattern";
import { FloatingCard } from "@/components/ui/aceternity/floating-card";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { MovingCards } from "@/components/ui/aceternity/moving-cards";
import { cn } from "@/lib/utils";
// Import React Icons
import { FaGithub, FaLinkedin, FaTwitter, FaBriefcase, FaToolbox, FaReact, FaNodeJs, FaCode, FaDatabase, FaDesktop, FaTerminal, FaTools, FaFireAlt } from 'react-icons/fa';
import { MdEmail, MdArrowDownward, MdAccountCircle, MdOutlineHandyman } from 'react-icons/md';
import { BsCode, BsCodeSlash, BsLaptop, BsServer, BsArrowRight, BsLightningCharge } from 'react-icons/bs';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiOpenjdk, SiAppwrite, SiWordpress, SiFigma, SiNpm, SiPostgresql, SiMysql, SiPrisma, SiGit, SiSass, SiDocker, SiAmazon } from "react-icons/si";
import { ImStatsBars } from "react-icons/im";
import { TbBrandVscode } from 'react-icons/tb';
import { IoRocket, IoStatsChart } from 'react-icons/io5';

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

// No need to convert tech stack for MovingCards as we're using separate MovingCards items
// This comment block is kept for future reference if needed

// Component for tech cards with hover effects
const TechCard = ({ tech, index }: { tech: typeof techStack[0]; index: number }) => (
  <div 
    className="group relative overflow-hidden rounded-xl bg-black/80 backdrop-blur-sm border border-white/10 p-6 h-full transition-all duration-300 hover:shadow-glow hover:border-teal-500/30 hover:-translate-y-1"
  >
    <div className={cn(
      "absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br", 
      tech.color
    )}></div>
    <div className="flex flex-col space-y-4">
      <div className="flex justify-center mb-4">
        <div className="rounded-full p-4 bg-gradient-to-br from-black to-gray-900 border-2 border-teal-500/30 group-hover:border-teal-500/70 transition-all duration-300 shadow-md group-hover:shadow-lg">
          {tech.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white text-center group-hover:text-teal-300 transition-colors duration-300">{tech.name}</h3>
      <p className="text-gray-400 text-center text-sm group-hover:text-gray-300 transition-colors duration-300">{tech.description}</p>
    </div>
  </div>
);

// Statistics to showcase achievements
const stats = [
  { label: "Projects Completed", value: "30+" },
  { label: "Years Experience", value: "3+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Technologies", value: "10+" },
];

export default function Home() {
  const { fetchHomeData, data, error, loading } = useHome();
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Profession titles for the typing effect
  const professions = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Innovator"
  ];

  // Scroll to next section
  const scrollToNextSection = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({ top: heroHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!data.title) {
      fetchHomeData();
    }
  }, [data, fetchHomeData]);

  // Typing effect
  useEffect(() => {
    if (loading || !data.title) return;

    const currentText = professions[textIndex];
    let currentIndex = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentProfession = professions[textIndex];

      if (!isDeleting && currentIndex <= currentProfession.length) {
        setTypedText(currentProfession.substring(0, currentIndex));
        currentIndex++;
        timer = setTimeout(type, 100);
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(currentProfession.substring(0, currentIndex));
        currentIndex--;
        timer = setTimeout(type, 50);
      } else if (currentIndex <= 0) {
        isDeleting = false;
        setTextIndex((prevIndex) => (prevIndex + 1) % professions.length);
        timer = setTimeout(type, 500);
      } else {
        isDeleting = true;
        timer = setTimeout(type, 2000);
      }
    };

    timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, [loading, data.title, textIndex]);

  if (loading || !data.title) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-teal-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-teal-400 text-lg font-medium">Loading</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero Section - Asymmetric Design */}
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-center"
      >
        {/* Enhanced Background Elements with more animations */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Rich gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-900 to-black"></div>

          {/* Diagonal accent element with animation */}
          <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-gradient-to-l from-teal-900/30 to-transparent skew-x-[-12deg] transform origin-top-right hidden lg:block"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-teal-900/10 via-blue-900/5 to-transparent blur-3xl animate-pulse-slow"></div>

          {/* Animated accent elements with varied animations */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse-slow opacity-70"></div>
          <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-teal-400/5 rounded-full blur-2xl animate-spin-slow"></div>

          {/* Floating particles */}
          <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-teal-400 rounded-full shadow-glow animate-float opacity-70"></div>
          <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-teal-400 rounded-full shadow-glow animate-float opacity-70 animation-delay-700"></div>
          <div className="absolute top-[20%] left-[40%] w-1 h-1 bg-blue-400 rounded-full shadow-glow animate-float opacity-70 animation-delay-1000"></div>

          {/* Grid overlay with enhanced pattern */}
          <GridPattern
            className="absolute inset-0 opacity-[0.15]"
            cellSize={20}
            dotSize={1}
            dotClassName="bg-white"
          />

          {/* Subtle tech pattern overlay */}
          <div className="absolute inset-0 bg-[url('/assets/images/tech-pattern.png')] bg-repeat opacity-[0.03] mix-blend-screen"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 items-center">
          {/* Left Column - Content with animations (3/5 width on large screens) */}
          <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
            {/* Professional Badge with slide-down animation */}
            <div className="flex justify-center lg:justify-start mb-2 animate-fade-in">
              <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-black/70 to-gray-900/70 border border-teal-500/30 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm hover:shadow-teal-500/10 transition-all duration-300 hover:border-teal-500/50">
                <BsCode className="text-teal-400 animate-pulse-slow" size={14} />
                <span className="text-teal-300 text-xs font-medium">Full-Stack Developer</span>
              </div>
            </div>

            {/* Name and Role with staggered animations */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-slide-up">
                <span className="text-white">Aryan </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 animate-gradient-x">Kumar</span>
              </h1>

              {/* Dynamic role with enhanced typing effect */}
              <div
                className="h-12 mt-5 mb-3 animate-fade-in opacity-0"
                style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></div>
                  <span className="text-xl text-white/80 font-light">
                    {typedText || '\u00A0'}
                  </span>
                </div>
              </div>


              {/* Short bio with fade-in animation */}
              <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mt-4 animate-fade-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                I build modern web applications with a focus on performance, user experience, and clean code.
              </p>
            </div>

            {/* Stats Row with staggered hover animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2 animate-fade-in opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start group transition-all duration-300 hover:translate-y-[-3px]">
                  <div className="flex items-center mb-1 gap-1.5">
                    {index === 0 && <IoRocket className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300" size={18} />}
                    {index === 1 && <IoStatsChart className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300" size={18} />}
                    {index === 2 && <FaBriefcase className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300" size={16} />}
                    {index === 3 && <BsCodeSlash className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300" size={18} />}
                    <div className="text-white font-bold text-lg md:text-xl group-hover:text-teal-300 transition-colors duration-300">{stat.value}</div>
                  </div>
                  <div className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons with enhanced hover effects */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
              <Button
                asChild
                className="group flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-lg px-6 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-teal-500/20"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <MdAccountCircle className="group-hover:animate-spin-slow" size={18} />
                  <span>About Me</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group flex items-center gap-2 bg-transparent border border-white/10 text-white hover:text-teal-400 hover:bg-gray-900/50 hover:border-teal-400/40 rounded-lg px-6 py-2.5 transition-all duration-300 shadow-sm hover:shadow-teal-500/10"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  <BsLaptop className="group-hover:translate-y-[-2px] transition-transform duration-300" size={16} />
                  <span>View Projects</span>
                </Link>
              </Button>
            </div>

            {/* Social Links with hover animations */}
            <div className="flex justify-center lg:justify-start gap-5 pt-3 animate-fade-in opacity-0" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
              <Link href="https://github.com/AryanKumarOfficial" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                <FaGithub className="text-white/60 hover:text-teal-400 transition-colors duration-300" size={22} />
              </Link>
              <Link href="https://linkedin.com/in/aryan-kumar-official" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                <FaLinkedin className="text-white/60 hover:text-teal-400 transition-colors duration-300" size={22} />
              </Link>
              <Link href="https://twitter.com/AryanKOfficial" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                <FaTwitter className="text-white/60 hover:text-teal-400 transition-colors duration-300" size={22} />
              </Link>
              <Link href="mailto:contact@aryankumar.dev" className="transition-transform duration-300 hover:scale-110">
                <MdEmail className="text-white/60 hover:text-teal-400 transition-colors duration-300" size={24} />
              </Link>
            </div>
          </div>

          {/* Right Column - Image (2/5 width on large screens) */}
          <div className="lg:col-span-2 flex justify-center items-center order-first lg:order-last">
            {/* Profile Image with Animated Geometric Frame */}
            <div className="relative">
              {/* Main container with enhanced design */}
              <div className="relative max-w-sm transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
                {/* Animated glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>

                {/* Background shape with subtle animation */}
                <div className="absolute -right-3 -bottom-3 w-full h-full border-2 border-teal-500/20 rounded-lg animate-pulse-slow"></div>

                {/* Main frame with hover effects */}
                <div className="relative bg-gradient-to-tr from-gray-900 to-black border border-white/10 rounded-lg overflow-hidden shadow-xl">
                  {/* Enhanced corner accents with hover animation */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-teal-400/40 rounded-tl-lg transition-all duration-500 group-hover:border-teal-400/60"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-teal-400/40 rounded-br-lg transition-all duration-500 group-hover:border-teal-400/60"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-400/40"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-400/40"></div>

                  {/* Image container with hover effect */}
                  <div className="aspect-[5/6] overflow-hidden group">
                    <Image
                      src="/assets/images/user.jpg"
                      alt="Aryan Kumar"
                      width={500}
                      height={600}
                      priority
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Enhanced overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                    {/* Tech pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/assets/images/circuit-pattern.png')] bg-repeat opacity-[0.07] mix-blend-overlay"></div>
                  </div>

                  {/* Enhanced experience badge with animation */}
                  <div className="absolute right-0 top-5 bg-gradient-to-r from-teal-900/80 to-blue-900/80 backdrop-blur-sm py-1 pl-3 pr-2 rounded-l-full border-l border-t border-b border-teal-500/40 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:pr-3">
                    <span className="text-white text-xs flex items-center">
                      <span className="text-teal-300 font-semibold mr-1 animate-pulse-slow">3+</span> Years Experience
                    </span>
                  </div>

                  {/* Tech stack badge */}
                  <div className="absolute left-0 bottom-5 bg-gradient-to-r from-blue-900/80 to-teal-900/80 backdrop-blur-sm py-1 pl-2 pr-3 rounded-r-full border-r border-t border-b border-blue-500/40 shadow-lg">
                    <span className="text-white text-xs flex items-center gap-1.5">
                      <BsCode className="text-blue-300" size={10} />
                      <span>Full-Stack Developer</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Animated Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in opacity-0" style={{animationDelay: '1400ms', animationFillMode: 'forwards'}}>
          <span className="block text-teal-500/60 text-xs mb-1 font-light tracking-wider hover:text-teal-400 transition-colors duration-300">Explore More</span>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition duration-300 animate-pulse-slow"></div>
            <Button
              onClick={scrollToNextSection}
              variant="ghost"
              size="icon"
              className="group relative text-teal-400 hover:text-white animate-float bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/40 rounded-full h-10 w-10 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-teal-500/20"
              aria-label="Scroll down"
            >
              <MdArrowDownward size={18} className="group-hover:translate-y-1 transition-all duration-300" />
            </Button>
          </div>
        </div> */}
      </section>

      {/* Skills & Expertise Section - Professional Capabilities */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
        {/* Simple, elegant background */}
        <div className="absolute inset-0 -z-10">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
          
          {/* Simple accent elements */}
          <div className="absolute left-0 top-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_bottom_left,#1a1a1a,transparent_40%)]">
          </div>
          <div className="absolute right-0 bottom-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_top_right,#1a1a1a,transparent_40%)]">
          </div>
          
          {/* Minimal color accents */}
          <div className="absolute left-0 -bottom-40 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl"></div>
          <div className="absolute right-0 -top-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl"></div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1.5 text-sm mb-6"
            >
              <FaToolbox className="mr-2" /> Skills & Expertise
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <TextShimmer className="bg-gradient-to-r from-emerald-400 to-teal-400">
                Technical Proficiencies
              </TextShimmer>
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my core skills and expertise gained through professional experience and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {techStack.map((tech, index) => (
              <div key={index} className="transform transition-all duration-500 hover:z-10" style={{ animationDelay: `${index * 150}ms` }}>
                <TechCard tech={tech} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              className="bg-transparent border border-teal-500/30 hover:bg-teal-500/10 text-teal-400 rounded-full py-6 px-8 transition-all duration-300 group"
            >
              <Link href="/about#skills" className="flex items-center gap-2">
                View All Skills <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Showcase - New Grid Layout */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-4 py-1.5 text-sm mb-6"
            >
              <FaToolbox className="mr-2" /> Technology Stack
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <TextShimmer className="bg-gradient-to-r from-blue-400 to-indigo-500">
                Tech Toolkit
              </TextShimmer>
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              The technologies and tools I use to build modern web applications
            </p>
          </div>

          {/* Tech Icons Showcase with MovingCards */}
          <div className="relative py-10 mb-16">
            {/* First row - frontend technologies */}
            <div className="relative mb-12 overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
              
              <h3 className="text-xl font-semibold text-white flex items-center mb-6">
                <BsLaptop className="text-blue-400 mr-3" /> Frontend Technologies
              </h3>
              
              <MovingCards
                items={[
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-blue-500/10 rounded-xl shadow-md hover:shadow-blue-500/30 hover:border-blue-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 shadow-inner">
                          <SiReact className="text-blue-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">React</span>
                      </div>
                    ),
                    key: "react"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-white/10 rounded-xl shadow-md hover:shadow-white/30 hover:border-white/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-inner">
                          <SiNextdotjs className="text-white text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">Next.js</span>
                      </div>
                    ),
                    key: "nextjs"
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
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/30 hover:border-cyan-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 shadow-inner">
                          <SiTailwindcss className="text-cyan-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">Tailwind CSS</span>
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
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-purple-500/10 rounded-xl shadow-md hover:shadow-purple-500/30 hover:border-purple-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 shadow-inner">
                          <SiAppwrite className="text-purple-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">UI/UX</span>
                      </div>
                    ),
                    key: "uiux"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-red-500/10 rounded-xl shadow-md hover:shadow-red-500/30 hover:border-red-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-red-500/20 group-hover:border-red-500/40 transition-all duration-300 shadow-inner">
                          <SiReact className="text-red-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-red-400 transition-colors duration-300">React Native</span>
                      </div>
                    ),
                    key: "reactnative"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-pink-500/10 rounded-xl shadow-md hover:shadow-pink-500/30 hover:border-pink-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-pink-500/20 group-hover:border-pink-500/40 transition-all duration-300 shadow-inner">
                          <SiTailwindcss className="text-pink-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-pink-400 transition-colors duration-300">CSS/SASS</span>
                      </div>
                    ),
                    key: "css"
                  },
                ]}
                direction="right"
                speed="fast"
                pauseOnHover={true}
                cardClassName="!bg-transparent !border-0 !p-0 !shadow-none"
              />
            </div>
            
            {/* Second row - backend technologies */}
            <div className="relative mb-12 overflow-hidden">
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
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-green-500/10 rounded-xl shadow-md hover:shadow-green-500/30 hover:border-green-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300 shadow-inner">
                          <SiMongodb className="text-green-500 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-green-500 transition-colors duration-300">MongoDB</span>
                      </div>
                    ),
                    key: "mongodb"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-black border border-white/5 rounded-xl shadow-md hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500">
                        <SiAppwrite className="text-blue-400 text-3xl" />
                        <span className="text-sm font-medium text-white">Appwrite</span>
                      </div>
                    ),
                    key: "appwrite"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-black border border-white/5 rounded-xl shadow-md hover:shadow-white/20 hover:border-white/30 transition-all duration-500">
                        <SiNextdotjs className="text-white text-3xl" />
                        <span className="text-sm font-medium text-white">Next API</span>
                      </div>
                    ),
                    key: "nextapi"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-orange-500/10 rounded-xl shadow-md hover:shadow-orange-500/30 hover:border-orange-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300 shadow-inner">
                          <FaFireAlt className="text-orange-500 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-orange-500 transition-colors duration-300">Firebase</span>
                      </div>
                    ),
                    key: "firebase"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-orange-500/10 rounded-xl shadow-md hover:shadow-orange-500/30 hover:border-orange-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300 shadow-inner">
                          <SiOpenjdk className="text-orange-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-colors duration-300">Java</span>
                      </div>
                    ),
                    key: "java"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-blue-500/10 rounded-xl shadow-md hover:shadow-blue-500/30 hover:border-blue-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 shadow-inner">
                          <SiPostgresql className="text-blue-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">PostgreSQL</span>
                      </div>
                    ),
                    key: "postgresql"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-blue-700/10 rounded-xl shadow-md hover:shadow-blue-700/30 hover:border-blue-700/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-blue-700/20 group-hover:border-blue-700/40 transition-all duration-300 shadow-inner">
                          <SiMysql className="text-blue-700 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-blue-700 transition-colors duration-300">MySQL</span>
                      </div>
                    ),
                    key: "mysql"
                  },
                ]}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                cardClassName="!bg-transparent !border-0 !p-0 !shadow-none"
              />
            </div>
            
            {/* Third row - tools and CMS */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
              
              <h3 className="text-xl font-semibold text-white flex items-center mb-6">
                <MdOutlineHandyman className="text-purple-400 mr-3" /> CMS & Tools
              </h3>
              
              <MovingCards
                items={[
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-black border border-white/5 rounded-xl shadow-md hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500">
                        <SiWordpress className="text-blue-400 text-3xl" />
                        <span className="text-sm font-medium text-white">WordPress</span>
                      </div>
                    ),
                    key: "wordpress"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-green-500/10 rounded-xl shadow-md hover:shadow-green-500/30 hover:border-green-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300 shadow-inner">
                          <FaToolbox className="text-green-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-green-400 transition-colors duration-300">Shopify</span>
                      </div>
                    ),
                    key: "shopify"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-gray-500/10 rounded-xl shadow-md hover:shadow-gray-500/30 hover:border-gray-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-500/20 group-hover:border-gray-500/40 transition-all duration-300 shadow-inner">
                          <FaGithub className="text-white text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">GitHub</span>
                      </div>
                    ),
                    key: "github"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-gradient-to-b from-black to-gray-900 border border-blue-500/10 rounded-xl shadow-md hover:shadow-blue-500/30 hover:border-blue-500/40 transition-all duration-500 group hover:-translate-y-1">
                        <div className="p-3 rounded-full bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 shadow-inner">
                          <TbBrandVscode className="text-blue-400 text-3xl group-hover:animate-pulse-slow" />
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">VS Code</span>
                      </div>
                    ),
                    key: "vscode"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-black border border-white/5 rounded-xl shadow-md hover:shadow-teal-500/20 hover:border-teal-500/30 transition-all duration-500">
                        <FaNodeJs className="text-teal-400 text-3xl" />
                        <span className="text-sm font-medium text-white">npm</span>
                      </div>
                    ),
                    key: "npm"
                  },
                  {
                    content: (
                      <div className="flex flex-col items-center justify-center gap-2 p-4 h-full w-full bg-black border border-white/5 rounded-xl shadow-md hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-500">
                        <IoRocket className="text-blue-500 text-3xl" />
                        <span className="text-sm font-medium text-white">Vercel</span>
                      </div>
                    ),
                    key: "vercel"
                  },
                ]}
                direction="right"
                speed="slow"
                pauseOnHover={true}
                cardClassName="!bg-transparent !border-0 !p-0 !shadow-none"
              />
            </div>
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
          
          {/* Currently Learning */}
          <div className="mt-16 max-w-3xl mx-auto bg-black/50 border border-gray-800/50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <BsLightningCharge className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Currently Learning</h3>
                <p className="text-gray-400 mb-4">I'm currently expanding my skills in these technologies to enhance my full-stack capabilities:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-0 text-blue-400">Java Development</Badge>
                  <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-0 text-purple-400">Next.js 15</Badge>
                  <Badge className="bg-gradient-to-r from-teal-500/20 to-green-500/20 border-0 text-teal-400">Full-Stack Projects</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section - NEW */}
      <section className="py-24 relative overflow-hidden">
        <GridPattern
          className="absolute inset-0 z-0"
          cellSize={40}
          dotSize={1.5}
          dotClassName="bg-blue-500/5"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-4 py-1.5 text-sm mb-6"
            >
              <FaBriefcase className="mr-2" /> Featured Work
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TextShimmer className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400">
                Recent Projects
              </TextShimmer>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Here's a glimpse of some projects I've worked on recently.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 px-8 transition-all duration-300 shadow-glow"
            >
              <Link href="/portfolio">
                View All Projects <BsArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <GridPattern
          className="absolute inset-0 z-0"
          cellSize={30}
          dotSize={1}
          dotClassName="bg-purple-400/10"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 border border-white/5 shadow-glow-lg overflow-hidden rounded-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <TextShimmer className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  Have a project in mind?
                </TextShimmer>

                <p className="text-gray-300 text-base md:text-lg mb-8">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>

                <Button
                  asChild
                  className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white text-base md:text-lg rounded-full px-8 py-6 shadow-glow transition-all duration-300 hover:shadow-glow-lg"
                >
                  <Link href="/contact">
                    <MdEmail className="mr-2" /> Get in Touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}