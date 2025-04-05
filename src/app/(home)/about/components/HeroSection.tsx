"use client";

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";
import { GridPattern } from "@/components/ui/aceternity/grid-pattern";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { Text3D } from "@/components/ui/aceternity/3d-text";
import { cn } from "@/lib/utils";

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

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col space-y-1">
    <span className="text-teal-400 text-sm font-medium">{label}</span>
    <span className="text-white text-base">{value}</span>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
    <CardContent className="p-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <Text3D className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">
          {value}+
        </Text3D>
        <p className="text-gray-400">{label}</p>
      </div>
    </CardContent>
  </Card>
);

const HeroSection = ({ personalInfo, experience }: { personalInfo: PersonalInfo, experience: Experience }) => {
    return (
        <section className="relative bg-black text-white overflow-hidden py-24 md:py-32">
            <GridPattern
                className="absolute inset-0 z-0"
                cellSize={40}
                dotSize={1}
                dotClassName="bg-white/10"
            />
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge 
                        variant="outline" 
                        className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1 text-sm mb-6"
                    >
                        Who I Am
                    </Badge>
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <TextShimmer>
                            About Me
                        </TextShimmer>
                    </h1>
                    
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Get to know more about me, my background, and what drives my passion for development.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Profile Image */}
                    <div className="lg:col-span-1">
                        <Spotlight className="rounded-2xl overflow-hidden">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                                <Image
                                    src="/assets/images/user.jpg"
                                    alt="Aryan Kumar"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                                    <h3 className="text-xl font-bold text-white">{personalInfo?.name}</h3>
                                    <p className="text-teal-400">{personalInfo?.title}</p>
                                </div>
                            </div>
                        </Spotlight>
                    </div>
                    
                    {/* Personal Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                <span className="text-white">Personal </span>
                                <span className="text-teal-400">Details</span>
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                I'm a passionate full-stack developer with a keen eye for design and strong problem-solving abilities. 
                                I specialize in building robust web applications that deliver exceptional user experiences.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                <InfoItem label="Name" value={personalInfo?.name} />
                                <InfoItem label="Age" value={`${personalInfo?.age} years`} />
                                <InfoItem label="Location" value={personalInfo?.address} />
                                <InfoItem label="Email" value={personalInfo?.email} />
                                <InfoItem label="Languages" value={personalInfo?.language} />
                                <InfoItem label="Freelance" value={personalInfo?.freelance} />
                            </div>
                            
                            <div className="mt-8">
                                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-glow">
                                    <a href="/assets/resume.pdf" download>
                                        <i className="fas fa-download mr-2"></i> Download CV
                                    </a>
                                </Button>
                            </div>
                        </div>
                        
                        {/* Experience Stats */}
                        <div className="pt-8 border-t border-white/10">
                            <h2 className="text-2xl font-bold mb-6">
                                <span className="text-white">Professional </span>
                                <span className="text-teal-400">Journey</span>
                            </h2>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <StatCard value={experience.year} label="Years Experience" />
                                <StatCard value={experience.projectsCompleted} label="Projects Completed" />
                                <StatCard value="15" label="Happy Clients" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
