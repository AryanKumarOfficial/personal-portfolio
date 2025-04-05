import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Text3D } from "@/components/ui/aceternity/3d-text";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";
import { GridPattern } from "@/components/ui/aceternity/grid-pattern";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdArrowDownward, MdAccountCircle } from 'react-icons/md';
import { ImStatsBars } from "react-icons/im";

interface HeroSectionProps {
  typedText: string;
  scrollToNextSection: () => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ typedText, scrollToNextSection }, ref) => {
    // Stats to showcase achievements
    const stats = [
      { label: "Projects Completed", value: "30+" },
      { label: "Years Experience", value: "3+" },
      { label: "Satisfied Clients", value: "25+" },
      { label: "GitHub Repositories", value: "45+" },
    ];

    return (
      <section
        ref={ref}
        className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-center"
      >
        {/* Enhanced Background Elements with more animations */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Rich gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-900 to-black"></div>

          {/* Grid pattern for texture */}
          <GridPattern
            cellSize={40}
            dotSize={1}
            className="absolute inset-0 text-white/[0.1] [mask-image:linear-gradient(to_bottom,transparent_40%,black)]"
            dotClassName="bg-white"
          />

          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-teal-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow delay-700"></div>

          {/* Subtle shimmer effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(4,108,255,0.05),transparent)] transform"></div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 z-10 relative">
          {/* Left column with text content */}
          <div className="w-full md:w-1/2 mb-16 md:mb-0 relative">
            {/* Professional badge */}
            <div className="inline-block mb-6 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm px-3 py-1 text-sm text-teal-300 animate-fadeIn">
              <Badge className="mr-1 bg-teal-500/30 border-none">NEW</Badge> Available for work
            </div>

            {/* Main heading with modern typography */}
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold mb-6 text-white relative">
              <span className="block text-3xl md:text-4xl text-gray-400 mb-2">Hello, I'm</span>
              <span className="relative">
                <Text3D>Aryan Kumar</Text3D>
                <span className="absolute -bottom-1.5 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-teal-500 to-transparent"></span>
              </span>
            </h1>

            {/* Profession with typing effect */}
            <div className="text-xl md:text-2xl flex items-center mb-8 text-gray-300 h-8">
              <span className="mr-2 text-white">I'm a</span>
              <span className="text-teal-400 font-semibold">{typedText}</span>
              <span className="animate-blink ml-1">|</span>
            </div>

            {/* Enhanced description with gradients */}
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              I build <span className="text-teal-400 font-medium">modern</span> and{" "}
              <span className="text-blue-400 font-medium">responsive</span> web 
              applications with cutting-edge technologies, focusing on performance,
              scalability, and exceptional user experience.
            </p>

            {/* Statistics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center border border-gray-800 rounded-lg p-3 bg-gradient-to-b from-gray-900 to-transparent hover:border-teal-500/30 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors duration-300">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons with enhanced design */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/about" className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:from-teal-500 hover:to-cyan-500">
                About Me
              </Link>
              <Link href="/projects" className="px-6 py-3 bg-transparent border border-gray-700 text-white rounded-full font-medium transition-all duration-300 hover:border-teal-500/50 hover:bg-black hover:shadow-glow">
                My Projects
              </Link>
            </div>

            {/* Scroll Down Button */}
            <button 
              onClick={scrollToNextSection}
              className="absolute bottom-0 left-0 md:left-1/4 mb-4 text-white opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center text-sm font-medium"
            >
              <span className="mr-2">Scroll Down</span>
              <MdArrowDownward className="animate-bounce" />
            </button>
          </div>

          {/* Right column with profile image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Decorative elements for visual interest */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
            
            {/* Decorative grid in background */}
            <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] bg-repeat opacity-[0.03]"></div>

            {/* Circle with gradient around image */}
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute -inset-4 rounded-full border border-teal-500/30 animate-spin-slow"></div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-teal-500/30 rounded-tl-md"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-teal-500/30 rounded-tr-md"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-teal-500/30 rounded-bl-md"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-teal-500/30 rounded-br-md"></div>
              
              {/* Profile image with enhanced design */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-b from-gray-900 to-black">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
                  alt="Aryan Kumar"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Professional highlight badge */}
                <div className="absolute bottom-6 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs px-4 py-1 rounded-full font-medium shadow-xl">
                  <span className="whitespace-nowrap">Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social links with float-up effect */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-white hover:text-teal-400 hover:border-teal-500/50 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1"
          >
            <FaGithub className="group-hover:animate-pulse-slow" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-white hover:text-blue-400 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1"
          >
            <FaLinkedin className="group-hover:animate-pulse-slow" />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-white hover:text-blue-400 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1"
          >
            <FaTwitter className="group-hover:animate-pulse-slow" />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 bg-gray-900/50 text-white hover:text-red-400 hover:border-red-500/50 backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1"
          >
            <MdEmail className="group-hover:animate-pulse-slow" />
          </a>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
