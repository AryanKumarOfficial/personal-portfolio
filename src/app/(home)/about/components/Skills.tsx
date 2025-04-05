"use client";

import React, { useState } from 'react';
import Icon from "@/app/admin/components/Icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";
import { GridPattern } from "@/components/ui/aceternity/grid-pattern";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Skill {
    name: string;
    icon: string;
}

// Group skills by category
const skillCategories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools & DevOps" },
    { id: "other", name: "Other" },
];

// Map skills to categories based on common technologies
const getSkillCategory = (skillName: string): string => {
    const name = skillName.toLowerCase();
    
    if (
        name.includes("react") ||
        name.includes("html") ||
        name.includes("css") ||
        name.includes("javascript") ||
        name.includes("typescript") ||
        name.includes("tailwind") ||
        name.includes("bootstrap") ||
        name.includes("vue") ||
        name.includes("angular") ||
        name.includes("redux") ||
        name.includes("next") ||
        name.includes("ui") ||
        name.includes("ux")
    ) {
        return "frontend";
    }
    
    if (
        name.includes("node") ||
        name.includes("express") ||
        name.includes("django") ||
        name.includes("flask") ||
        name.includes("php") ||
        name.includes("laravel") ||
        name.includes("python") ||
        name.includes("java") ||
        name.includes("spring") ||
        name.includes("api")
    ) {
        return "backend";
    }
    
    if (
        name.includes("sql") ||
        name.includes("mongo") ||
        name.includes("database") ||
        name.includes("postgresql") ||
        name.includes("mysql") ||
        name.includes("firebase") ||
        name.includes("supabase")
    ) {
        return "database";
    }
    
    if (
        name.includes("git") ||
        name.includes("docker") ||
        name.includes("aws") ||
        name.includes("azure") ||
        name.includes("vercel") ||
        name.includes("netlify") ||
        name.includes("heroku") ||
        name.includes("ci") ||
        name.includes("cd") ||
        name.includes("jenkins")
    ) {
        return "tools";
    }
    
    return "other";
};

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <Card 
            className="relative overflow-hidden bg-black border border-white/10 p-6 group hover:border-teal-500/30 transition-all duration-300"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-4xl text-teal-400 mb-3 transition-transform duration-500 transform group-hover:scale-110">
                    <Icon className={skill.icon} />
                </div>
                <span className="text-white font-medium text-center">{skill.name}</span>
            </div>
        </Card>
    );
};

const SkillsComponent = ({ skills }: { skills: Skill[] }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    // Group skills by category
    const categorizedSkills = skills.reduce<Record<string, Skill[]>>(
        (acc, skill) => {
            const category = getSkillCategory(skill.name);
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(skill);
            return acc;
        },
        { frontend: [], backend: [], database: [], tools: [], other: [] }
    );
    
    // Filter skills based on selected category
    const filteredSkills = selectedCategory === "all" 
        ? skills 
        : categorizedSkills[selectedCategory] || [];

    return (
        <section className="relative bg-black text-white py-24" id="skills">
            <GridPattern
                className="absolute inset-0 z-0"
                cellSize={40}
                dotSize={1}
                dotClassName="bg-teal-500/5"
            />
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge 
                        variant="outline" 
                        className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1 text-sm mb-6"
                    >
                        My Expertise
                    </Badge>
                    
                    <h2 className="text-4xl font-bold mb-4">
                        <TextShimmer>
                            Technical Skills
                        </TextShimmer>
                    </h2>
                    
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I've developed expertise in various technologies across the full-stack development spectrum.
                    </p>
                </div>
                
                <Tabs defaultValue="all" className="mb-12">
                    <div className="flex justify-center mb-8">
                        <TabsList className="bg-black/50 border border-white/10 p-1">
                            <TabsTrigger 
                                value="all" 
                                onClick={() => setSelectedCategory("all")}
                                className={cn(
                                    "data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400",
                                    "text-gray-400"
                                )}
                            >
                                All Skills
                            </TabsTrigger>
                            
                            {skillCategories.map((category) => (
                                <TabsTrigger 
                                    key={category.id}
                                    value={category.id} 
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={cn(
                                        "data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400",
                                        "text-gray-400"
                                    )}
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    
                    <Spotlight className="w-full">
                        <TabsContent value="all" className="mt-0">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {filteredSkills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill} index={index} />
                                ))}
                            </div>
                        </TabsContent>
                        
                        {skillCategories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="mt-0">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {(categorizedSkills[category.id] || []).map((skill, index) => (
                                        <SkillCard key={index} skill={skill} index={index} />
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Spotlight>
                </Tabs>
            </div>
        </section>
    );
};

export default SkillsComponent;
