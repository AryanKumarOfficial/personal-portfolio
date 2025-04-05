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
import { FaGithub, FaLinkedin, FaTwitter, FaBriefcase } from 'react-icons/fa';
import { MdEmail, MdArrowDownward, MdAccountCircle } from 'react-icons/md';
import { BsCode, BsCodeSlash, BsLaptop } from 'react-icons/bs';
import { IoRocket, IoStatsChart } from 'react-icons/io5';

// Tech stack and skills for the cards section
const techStack = [
  {
    icon: "fab fa-react",
    name: "React & Next.js",
    description: "Building modern, SEO-friendly web applications with the latest features",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: "fab fa-node-js",
    name: "Node.js & Express",
    description: "Creating robust backend systems and performant API endpoints",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: "fas fa-database",
    name: "MongoDB & SQL",
    description: "Database design, optimization and advanced querying",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: "fab fa-css3-alt",
    name: "Tailwind & CSS",
    description: "Crafting beautiful, responsive user interfaces",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: "fas fa-mobile-alt",
    name: "Responsive Design",
    description: "Mobile-first, cross-device experiences that work everywhere",
    color: "from-violet-500 to-purple-400"
  },
  {
    icon: "fas fa-cloud",
    name: "Cloud Services",
    description: "AWS, Firebase, and other cloud platforms for scalable solutions",
    color: "from-orange-400 to-pink-500"
  },
];

// Convert tech stack data for use with MovingCards component if needed
const movingCardsItems = techStack.map(tech => ({
  content: (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="mb-4 text-teal-400 text-4xl">
        <i className={tech.icon}></i>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
      <p className="text-gray-400 text-center text-sm">{tech.description}</p>
    </div>
  ),
  key: tech.name.toLowerCase().replace(/\s+/g, '-')
}));

// Component for tech cards with hover effects
const TechCard = ({ tech, index }: { tech: typeof techStack[0]; index: number }) => (
  <div
    className="group relative overflow-hidden rounded-xl bg-black border border-white/10 p-6 h-full transition-all duration-300 hover:shadow-glow hover:border-teal-500/30 hover:-translate-y-1"
  >
    <div className={cn(
      "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
      tech.color
    )}></div>
    <div className="flex flex-col space-y-4">
      <div className="flex justify-center mb-4">
        <div className="rounded-full p-3 bg-gradient-to-br from-black to-gray-900 border border-teal-500/20 group-hover:border-teal-500/50 transition-all duration-300">
          <i className={cn(tech.icon, "text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300")}></i>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white text-center">{tech.name}</h3>
      <p className="text-gray-400 text-center text-sm">{tech.description}</p>
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

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1.5 text-sm mb-6"
            >
              <i className="fas fa-code mr-2"></i> Skills & Expertise
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TextShimmer>My Tech Stack</TextShimmer>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              I work with cutting-edge technologies to build responsive, scalable, and performant web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {techStack.map((tech, index) => (
              <TechCard key={index} tech={tech} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              className="bg-transparent border border-teal-500/30 hover:bg-teal-500/10 text-teal-400 rounded-full py-6 px-8 transition-all duration-300"
            >
              <Link href="/about#skills">
                View All Skills <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Showcase with Moving Cards */}
      <section className="py-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1.5 text-sm mb-6"
            >
              <i className="fas fa-code mr-2"></i> Technologies
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills in Motion</h2>
          </div>

          <div className="w-full h-[30rem] overflow-hidden">
            <MovingCards items={movingCardsItems} direction="right" speed="slow" pauseOnHover={true} />
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
              <i className="fas fa-briefcase mr-2"></i> Featured Work
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
                View All Projects <i className="fas fa-arrow-right ml-2"></i>
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
                    <i className="fas fa-envelope mr-2"></i> Get in Touch
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