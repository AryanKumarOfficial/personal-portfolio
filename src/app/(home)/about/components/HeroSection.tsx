"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  FaUser, 
  FaCalendarAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLaptopCode,
  FaGraduationCap,
  FaLanguage,
  FaBriefcase
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import Link from "next/link";

interface PersonalInfo {
    name: string;
    age: string;
    email: string;
    address: string;
    freelance: string;
    title: string;
    experience: string;
    language: string;
}

interface Experience {
    year: string;
    projectsCompleted: string;
}

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start space-x-3 group">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center text-blue-400 group-hover:text-teal-400 transition-colors duration-300">
      {icon}
    </div>
    <div className="flex flex-col space-y-1">
      <span className="text-blue-400 group-hover:text-teal-400 transition-colors duration-300 text-sm font-medium">{label}</span>
      <span className="text-white text-base">{value}</span>
    </div>
  </div>
);

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden group hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
    <CardContent className="p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-3 text-3xl text-blue-400 group-hover:text-teal-400 transition-colors duration-300">
          {icon}
        </div>
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-1">
          {value}+
        </div>
        <p className="text-gray-400">{label}</p>
      </div>
    </CardContent>
  </Card>
);

const HeroSection = ({ personalInfo, experience }: { personalInfo: PersonalInfo, experience: Experience }) => {
    return (
        <section className="relative bg-black text-white overflow-hidden py-20 md:py-28">
            {/* Animated background with enhanced visuals */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Main gradients */}
                <div className="absolute -inset-[10%] opacity-30">
                    <div className="absolute top-0 left-[20%] w-[60%] h-[40%] bg-blue-600/20 rounded-full filter blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[10%] right-[20%] w-[50%] h-[40%] bg-teal-600/20 rounded-full filter blur-[100px] animate-pulse-slow delay-1000"></div>
                    <div className="absolute top-[40%] right-[10%] w-[20%] h-[30%] bg-purple-600/10 rounded-full filter blur-[80px] animate-pulse-slow delay-700"></div>
                </div>
                
                {/* Animated grid overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] opacity-20"></div>
                
                {/* Radial gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black pointer-events-none"></div>
                
                {/* Float elements */}
                <div className="absolute w-20 h-20 border border-blue-500/20 rounded-full top-[15%] left-[10%] animate-float-slow"></div>
                <div className="absolute w-32 h-32 border border-teal-500/20 rounded-full bottom-[20%] right-[15%] animate-float-slow delay-1000"></div>
                <div className="absolute w-16 h-16 border border-purple-500/20 rounded-full top-[60%] left-[60%] animate-float-slow delay-500"></div>
                
                {/* Particle dots */}
                <div className="absolute inset-0 overflow-hidden">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div 
                            key={`dot-${i}`} 
                            className="absolute w-1 h-1 rounded-full bg-blue-400/70"
                            style={{ 
                                top: `${Math.random() * 100}%`, 
                                left: `${Math.random() * 100}%`,
                                opacity: 0.1 + (Math.random() * 0.3),
                                boxShadow: '0 0 4px 1px rgba(59, 130, 246, 0.3)',
                                transform: `scale(${0.5 + (Math.random() * 0.5)})`,
                                animation: `pulse 3s infinite ease-in-out ${Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>
            </div>
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge 
                        variant="outline" 
                        className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-4 py-1 text-sm mb-6"
                    >
                        Who I Am
                    </Badge>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                        About Me
                    </h1>
                    
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Get to know more about me, my background, and what drives my passion for development.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Profile Image */}
                    <div className="lg:col-span-1">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-black">
                                <Image
                                    src="/assets/images/user.jpg"
                                    alt={personalInfo?.name || "Profile"}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-blue-400/30 rounded-tl-lg"></div>
                                <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-teal-400/30 rounded-br-lg"></div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-white">{personalInfo?.name}</h3>
                                    <p className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{personalInfo?.title}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Call to action */}
                        <div className="mt-6 flex justify-center">
                            <Link href="/contact" passHref>
                                <Button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white border-none hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Personal Info & Stats */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FaUser className="text-blue-400" /> Personal Information
                            </h2>
                            
                            {/* Info grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <InfoItem icon={<FaCalendarAlt />} label="Age" value={personalInfo?.age} />
                                <InfoItem icon={<FaEnvelope />} label="Email" value={personalInfo?.email} />
                                <InfoItem icon={<FaMapMarkerAlt />} label="Address" value={personalInfo?.address} />
                                <InfoItem icon={<FaBriefcase />} label="Freelance" value={personalInfo?.freelance} />
                                <InfoItem icon={<FaLaptopCode />} label="Experience" value={personalInfo?.experience} />
                                <InfoItem icon={<FaLanguage />} label="Languages" value={personalInfo?.language} />
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <StatCard 
                                    icon={<FaGraduationCap className="text-3xl" />} 
                                    value={experience?.year} 
                                    label="Years of Experience" 
                                />
                                <StatCard 
                                    icon={<GiTrophyCup className="text-3xl" />} 
                                    value={experience?.projectsCompleted} 
                                    label="Projects Completed" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
