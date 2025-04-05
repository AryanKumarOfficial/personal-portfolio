"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";
import { Card, CardContent } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/aceternity/grid-pattern";

interface Education {
    degree: string;
    year: string;
    institute: string;
    description: string;
    highlights: string;
    icon: string;
}

const TimelineItem = ({ education, index }: { education: Education; index: number }) => {
    return (
        <div className="relative pl-12 pb-10 group">
            {/* Timeline connector line */}
            <div className="absolute left-4 top-1 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-purple-500/20"></div>
            
            {/* Timeline dot */}
            <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-teal-400 shadow-glow transition-all duration-300 group-hover:scale-125 group-hover:shadow-glow-lg">
                <div className="absolute inset-0 rounded-full animate-ping bg-teal-400/70 opacity-75 duration-1000"></div>
            </div>
            
            {/* Card */}
            <Card className="bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 hover:border-teal-500/30 group-hover:shadow-glow">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="text-3xl text-teal-400 pt-1">
                            <i className={education.icon}></i>
                        </div>
                        
                        <div className="space-y-3 flex-1">
                            <div>
                                <Badge variant="outline" className="bg-teal-500/10 text-teal-400 border-teal-500/30 mb-2">
                                    {education.year}
                                </Badge>
                                
                                <h3 className="text-xl font-bold text-white">
                                    {education.degree}
                                </h3>
                                
                                <h4 className="text-lg text-gray-300">
                                    {education.institute}
                                </h4>
                            </div>
                            
                            <div className="pt-2 space-y-3">
                                <p className="text-gray-300 leading-relaxed">
                                    {education.description}
                                </p>
                                
                                {education.highlights && (
                                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 mt-2">
                                        <p className="text-sm text-teal-300">
                                            Highlights: {education.highlights}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const Education = ({ educationData }: { educationData: Education[] }) => {
    return (
        <section className="relative bg-black text-white py-24" id="education">
            <GridPattern
                className="absolute inset-0 z-0"
                cellSize={30}
                dotSize={1}
                dotClassName="bg-purple-500/5"
            />
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge 
                        variant="outline" 
                        className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1 text-sm mb-6"
                    >
                        Qualifications
                    </Badge>
                    
                    <h2 className="text-4xl font-bold mb-4">
                        <TextShimmer>
                            Education & Training
                        </TextShimmer>
                    </h2>
                    
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic journey that helped shape my professional career.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {educationData.map((education, index) => (
                        <TimelineItem key={index} education={education} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
