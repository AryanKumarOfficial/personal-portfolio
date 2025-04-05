"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
    FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaTools, 
    FaPalette, FaRobot, FaDesktop, FaTabletAlt, FaHtml5, 
    FaJs, FaCss3Alt, FaPhp, FaPython, FaJava, FaGit, FaAws,
    FaDocker, FaMobile, FaBrain, FaStar, FaFire, FaCheckCircle,
    FaSearch
} from "react-icons/fa";
import { 
    SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress,
    SiMongodb, SiPostgresql, SiFirebase, SiGraphql,
    SiRedux, SiVercel, SiJavascript, SiCss3, SiHtml5,
    SiReact, SiFigma, SiGithub, SiVsco
} from "react-icons/si";

interface Skill {
    name: string;
    level?: number;  // Optional skill level 1-100
}

// Define skill categories with better icons
const skillCategories = [
    { id: 'frontend', name: 'Frontend', icon: <SiReact className="text-blue-400" /> },
    { id: 'backend', name: 'Backend', icon: <FaNodeJs className="text-green-500" /> },
    { id: 'database', name: 'Database', icon: <FaDatabase className="text-purple-500" /> },
    { id: 'devops', name: 'DevOps', icon: <FaDocker className="text-blue-500" /> },
    { id: 'design', name: 'Design', icon: <SiFigma className="text-pink-400" /> },
    { id: 'tools', name: 'Tools', icon: <SiGithub className="text-gray-400" /> },
];

// Function to determine which category a skill belongs to
const getSkillCategory = (skillName: string): string => {
    skillName = skillName.toLowerCase();
    
    // Frontend skills
    if (skillName.includes('react') || 
        skillName.includes('next') || 
        skillName.includes('vue') || 
        skillName.includes('angular') || 
        skillName.includes('javascript') || 
        skillName.includes('typescript') ||
        skillName.includes('js') || 
        skillName.includes('ts') || 
        skillName.includes('html') || 
        skillName.includes('css') || 
        skillName.includes('tailwind') || 
        skillName.includes('bootstrap') || 
        skillName.includes('material') || 
        skillName.includes('redux') || 
        skillName.includes('mobx')) {
        return "frontend";
    }
    
    // Backend skills
    if (skillName.includes('node') || 
        skillName.includes('express') || 
        skillName.includes('django') || 
        skillName.includes('flask') || 
        skillName.includes('php') || 
        skillName.includes('laravel') || 
        skillName.includes('java') || 
        skillName.includes('spring') || 
        skillName.includes('ruby') || 
        skillName.includes('rails') || 
        skillName.includes('python') || 
        skillName.includes('c#') || 
        skillName.includes('.net') || 
        skillName.includes('api') || 
        skillName.includes('graphql') || 
        skillName.includes('rest')) {
        return "backend";
    }
    
    // Database skills
    if (skillName.includes('sql') || 
        skillName.includes('mysql') || 
        skillName.includes('postgresql') || 
        skillName.includes('postgres') || 
        skillName.includes('mongo') || 
        skillName.includes('firebase') || 
        skillName.includes('database') || 
        skillName.includes('orm') || 
        skillName.includes('prisma') || 
        skillName.includes('sequelize') || 
        skillName.includes('redis') || 
        skillName.includes('nosql')) {
        return "database";
    }
    
    // DevOps and cloud skills
    if (skillName.includes('aws') || 
        skillName.includes('azure') || 
        skillName.includes('gcp') || 
        skillName.includes('cloud') || 
        skillName.includes('docker') || 
        skillName.includes('kubernetes') || 
        skillName.includes('ci') || 
        skillName.includes('cd') || 
        skillName.includes('jenkins') || 
        skillName.includes('travis') || 
        skillName.includes('github actions') || 
        skillName.includes('gitlab') || 
        skillName.includes('deployment') || 
        skillName.includes('terraform') || 
        skillName.includes('serverless')) {
        return "devops";
    }
    
    // Design skills
    if (skillName.includes('figma') || 
        skillName.includes('sketch') || 
        skillName.includes('xd') || 
        skillName.includes('illustrator') || 
        skillName.includes('photoshop') || 
        skillName.includes('design') || 
        skillName.includes('ui') || 
        skillName.includes('ux') || 
        skillName.includes('wireframe') || 
        skillName.includes('prototype')) {
        return "design";
    }
    
    // Tools and misc skills
    if (skillName.includes('git') || 
        skillName.includes('github') || 
        skillName.includes('gitlab') || 
        skillName.includes('bitbucket') || 
        skillName.includes('vscode') || 
        skillName.includes('visual studio') || 
        skillName.includes('webpack') || 
        skillName.includes('babel') || 
        skillName.includes('eslint') || 
        skillName.includes('prettier') || 
        skillName.includes('testing') || 
        skillName.includes('jest') || 
        skillName.includes('mocha') || 
        skillName.includes('cypress')) {
        return "tools";
    }
    
    // Default category
    return "other";
};

// Function to get an icon based on skill name
const getSkillIcon = (name: string, iconClassName: string = "text-xl") => {
    // Convert the name to lowercase for easier matching
    name = name.toLowerCase();
    
    // Frontend icons
    if (name.includes("react")) return <FaReact className={cn(iconClassName, "text-blue-400")} />;
    if (name.includes("next")) return <SiNextdotjs className={cn(iconClassName, "text-white")} />;
    if (name.includes("tailwind")) return <SiTailwindcss className={cn(iconClassName, "text-cyan-400")} />;
    if (name.includes("typescript")) return <SiTypescript className={cn(iconClassName, "text-blue-500")} />;
    if (name.includes("javascript")) return <SiJavascript className={cn(iconClassName, "text-yellow-400")} />;
    if (name.includes("html")) return <SiHtml5 className={cn(iconClassName, "text-orange-500")} />;
    if (name.includes("css")) return <SiCss3 className={cn(iconClassName, "text-blue-500")} />;
    if (name.includes("redux")) return <SiRedux className={cn(iconClassName, "text-purple-500")} />;
    
    // Backend icons
    if (name.includes("node")) return <FaNodeJs className={cn(iconClassName, "text-green-500")} />;
    if (name.includes("express")) return <SiExpress className={cn(iconClassName, "text-gray-300")} />;
    if (name.includes("python")) return <FaPython className={cn(iconClassName, "text-blue-500")} />;
    if (name.includes("django")) return <FaServer className={cn(iconClassName, "text-green-600")} />;
    if (name.includes("flask")) return <FaServer className={cn(iconClassName, "text-black")} />;
    if (name.includes("php")) return <FaPhp className={cn(iconClassName, "text-indigo-500")} />;
    if (name.includes("java")) return <FaJava className={cn(iconClassName, "text-red-500")} />;
    if (name.includes("graphql")) return <SiGraphql className={cn(iconClassName, "text-pink-600")} />;
    
    // Database icons
    if (name.includes("mongo")) return <SiMongodb className={cn(iconClassName, "text-green-500")} />;
    if (name.includes("postgresql") || name.includes("postgres")) return <SiPostgresql className={cn(iconClassName, "text-blue-500")} />;
    if (name.includes("firebase")) return <SiFirebase className={cn(iconClassName, "text-yellow-500")} />;
    if (name.includes("database")) return <FaDatabase className={cn(iconClassName, "text-purple-500")} />;
    
    // DevOps and tools
    if (name.includes("git")) return <FaGit className={cn(iconClassName, "text-orange-500")} />;
    if (name.includes("docker")) return <FaDocker className={cn(iconClassName, "text-blue-500")} />;
    if (name.includes("aws")) return <FaAws className={cn(iconClassName, "text-orange-400")} />;
    if (name.includes("azure")) return <FaServer className={cn(iconClassName, "text-blue-500")} />;
    if (name.includes("vercel")) return <SiVercel className={cn(iconClassName, "text-white")} />;
    if (name.includes("netlify")) return <FaServer className={cn(iconClassName, "text-teal-500")} />;
    if (name.includes("vscode") || name.includes("visual studio")) return <SiVsco className={cn(iconClassName, "text-blue-500")} />;
    
    // Default icon if no match is found
    return <FaCode className={cn(iconClassName, "text-blue-400")} />;
};

// Clean, elegant skill card with modern styling
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    // Generate a skill level or use provided one
    const skillLevel = skill.level || Math.floor(70 + Math.random() * 25);
    
    // Determine skill proficiency label
    const getSkillLabel = (level: number) => {
        if (level >= 90) return { text: "Expert", color: "from-blue-400 to-blue-600", textColor: "text-blue-500" };
        if (level >= 80) return { text: "Advanced", color: "from-violet-400 to-violet-600", textColor: "text-violet-500" };
        if (level >= 70) return { text: "Proficient", color: "from-teal-400 to-teal-600", textColor: "text-teal-500" };
        if (level >= 50) return { text: "Intermediate", color: "from-amber-400 to-amber-600", textColor: "text-amber-500" };
        return { text: "Beginner", color: "from-pink-400 to-pink-600", textColor: "text-pink-500" };
    };
    
    const skillProficiency = getSkillLabel(skillLevel);
    
    // Calculate stars based on skill level
    const stars = Math.floor(skillLevel / 20);
    
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
        >
            {/* Modern floating card with subtle shadow and hover effects */}
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 h-full border border-white/10 shadow-lg shadow-black/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex flex-col h-full">
                    {/* Top section with name and icon */}
                    <div className="flex justify-between items-start mb-5">
                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                        
                        {/* Floating icon with gradient background */}
                        <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${skillProficiency.color} flex items-center justify-center shadow-md transform -translate-y-2 -translate-x-2`}>
                            {getSkillIcon(skill.name, "text-xl text-white")}
                        </div>
                    </div>
                    
                    {/* Middle section with skill level */}
                    <div className="flex-grow">
                        {/* Star rating visualization */}
                        <div className="flex mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="mr-1">
                                    <FaStar className={cn(
                                        "h-4 w-4",
                                        star <= stars 
                                            ? `${skillProficiency.textColor}` 
                                            : "text-gray-600"
                                    )} />
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Bottom section with progress bar */}
                    <div className="mt-auto">
                        <div className="flex justify-between items-center mb-1.5">
                            <span className={`text-sm font-medium ${skillProficiency.textColor}`}>{skillProficiency.text}</span>
                            <span className="text-sm text-gray-400">{skillLevel}%</span>
                        </div>
                        
                        {/* Elegant progress bar with gradient fill */}
                        <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                            <motion.div 
                                className={`h-full rounded-full bg-gradient-to-r ${skillProficiency.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skillLevel}%` }}
                                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SkillsComponent = ({ skills }: { skills: Skill[] }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
    
    // Group skills by category for displaying in tabs
    const categorizedSkills = useMemo(() => {
        if (!skills || !skills.length) return {};
        
        const result: { [key: string]: Skill[] } = { all: [...skills] };
        
        skillCategories.forEach(category => {
            result[category.id] = skills.filter(skill => 
                getSkillCategory(skill.name) === category.id
            );
        });
        
        return result;
    }, [skills]);
    
    // Filter skills based on search term and active category
    useEffect(() => {
        const term = searchTerm.toLowerCase().trim();
        
        if (!term && categorizedSkills[activeCategory]) {
            setVisibleSkills(categorizedSkills[activeCategory]);
            return;
        }
        
        const filtered = activeCategory === "all" 
            ? skills.filter(skill => skill.name.toLowerCase().includes(term))
            : categorizedSkills[activeCategory]?.filter(skill => 
                skill.name.toLowerCase().includes(term)
            ) || [];
            
        setVisibleSkills(filtered);
    }, [searchTerm, activeCategory, skills, categorizedSkills]);
    
    // Set initial visible skills
    useEffect(() => {
        if (categorizedSkills.all) {
            setVisibleSkills(categorizedSkills.all);
        }
    }, [categorizedSkills]);
    
    return (
        <section className="relative py-24 bg-gradient-to-b from-[#07071c] to-[#0c0c20]" id="skills">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle gradient orbs */}
                <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"></div>
                <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]"></div>
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
                    backgroundSize: "70px 70px"
                }}></div>
            </div>
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Elegant section header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="inline-block mb-2">
                            <span className="bg-white/10 backdrop-blur-md text-sm text-blue-300 py-1 px-4 rounded-full font-medium">Technical Expertise</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                            Skills & Technologies
                        </h2>
                        
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Explore my technical proficiencies and expertise across various domains of software development
                        </p>
                    </motion.div>
                </div>
                
                {/* Search and categories */}
                <div className="max-w-4xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-6"
                    >
                        {/* Modern search box */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search skills..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <FaSearch className="text-gray-400 text-lg" />
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Modern category pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap gap-2 justify-center"
                    >
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={cn(
                                "px-4 py-2 rounded-full font-medium backdrop-blur-md transition-all duration-200",
                                activeCategory === "all"
                                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                            )}
                        >
                            All Skills
                        </button>
                        
                        {skillCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full font-medium backdrop-blur-md transition-all duration-200 flex items-center gap-2",
                                    activeCategory === category.id
                                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                                )}
                            >
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </motion.div>
                </div>
                
                {/* Skills grid with elegant transitions */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + visibleSkills.length}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {visibleSkills.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                                {visibleSkills.map((skill, index) => (
                                    <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
                                ))}
                            </div>
                        ) : (
                            <motion.div 
                                className="py-16 text-center bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-5xl mb-4 text-gray-500 opacity-50">😕</div>
                                <h3 className="text-xl font-semibold text-white mb-2">No skills found</h3>
                                <p className="text-gray-400">Try another search term or category</p>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SkillsComponent;
