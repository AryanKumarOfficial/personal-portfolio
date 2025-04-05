"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
    FaGraduationCap, FaUniversity, FaSchool, FaCode,
    FaCertificate, FaAward, FaTrophy, FaStar, FaBookOpen,
    FaLaptopCode, FaCalendarAlt, FaMapMarkerAlt, FaLink,
    FaChevronDown, FaChevronUp, FaBookReader, FaBriefcase
} from 'react-icons/fa';

interface EducationItem {
    id?: number;
    institution: string;
    degree: string;
    field?: string;
    year?: string; // Support for "2021 - 2024" format in your JSON
    startDate?: string;
    endDate?: string;
    current?: boolean;
    location?: string;
    description?: string;
    highlights?: string | string[];
    courses?: string[]; // Add support for the courses array
    achievements?: string[]; // Add support for achievements array
    icon?: string; // Support for custom icons
    internship?: string; // Add support for internship information
    extracurricular?: string; // Add support for extracurricular activities
}

// Function to get education icon based on type or icon
const getEducationIcon = (type?: string, iconString?: string) => {
    if (iconString) {
        if (iconString.includes('certificate')) return <FaCertificate />;
        if (iconString.includes('graduation')) return <FaGraduationCap />;
        if (iconString.includes('school')) return <FaSchool />;
        if (iconString.includes('book')) return <FaBookReader />;
        if (iconString.includes('briefcase')) return <FaBriefcase />;
    }

    type = type?.toLowerCase() || '';

    if (type.includes('university') || type.includes('college')) {
        return <FaUniversity />;
    } else if (type.includes('school') || type.includes('high')) {
        return <FaSchool />;
    } else if (type.includes('bootcamp')) {
        return <FaLaptopCode />;
    } else if (type.includes('course') || type.includes('online')) {
        return <FaBookOpen />;
    } else if (type.includes('certification') || type.includes('certificate')) {
        return <FaCertificate />;
    } else {
        return <FaGraduationCap />;
    }
};

// Format date or year string
const formatDate = (dateString?: string, isCurrent?: boolean) => {
    if (isCurrent) return "Present";
    if (!dateString) return "";

    // If it's already in a year format like "2021 - 2024"
    if (dateString.includes('-')) return dateString;

    // Otherwise parse as a date
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch (e) {
        return dateString; // Return as is if parsing fails
    }
};

// Extract year from date or year string
const extractYear = (dateString?: string) => {
    if (!dateString) return "";

    // If it contains a year range like "2021 - 2024"
    if (dateString.includes('-')) {
        const years = dateString.split('-');
        return years[0].trim();
    }

    // Otherwise try to parse as date
    try {
        const date = new Date(dateString);
        return date.getFullYear().toString();
    } catch (e) {
        return dateString; // Return as is if parsing fails
    }
};

// EducationCard component for expandable cards
const EducationCard = ({ item, index, expanded, toggleExpand }: {
    item: EducationItem;
    index: number;
    expanded: boolean;
    toggleExpand: () => void;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            className="w-full"
        >
            {/* Main card */}
            <div
                className={`relative p-6 rounded-xl ${expanded ? 'bg-white/[0.06]' : 'bg-white/[0.03]'} backdrop-blur-md 
                         border border-white/10 shadow-lg transition-all duration-300 
                         hover:border-blue-500/20 hover:shadow-blue-500/5
                         ${expanded ? 'rounded-b-none' : ''}`}
            >
                {/* Year label - absolute positioned */}
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 
                             rounded-full text-blue-300 text-sm font-medium border border-blue-500/10">
                    {item.year || formatDate(item.startDate)}
                </div>

                {/* Header with institution and degree */}
                <div className="mb-4 mt-3">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {item.institution}
                        </h3>
                        <button
                            onClick={toggleExpand}
                            className="text-blue-400 hover:text-blue-300 transition-colors p-2"
                            aria-label={expanded ? "Collapse details" : "Expand details"}
                        >
                            {expanded ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                    </div>
                    <h4 className="text-teal-300 font-medium text-lg">
                        {item.degree}
                        {item.field && <span className="text-gray-400"> • {item.field}</span>}
                    </h4>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.description}
                </p>

                {/* Expandable section */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            {/* Highlights */}
                            {item.highlights && (
                                <div className="mt-4 border-t border-white/5 pt-4">
                                    <h5 className="text-blue-300 font-medium mb-2">Highlights</h5>
                                    <div className="text-gray-400 text-sm">
                                        {typeof item.highlights === 'string' ? (
                                            <p>{item.highlights}</p>
                                        ) : (
                                            <ul className="list-disc pl-5 space-y-2">
                                                {item.highlights.map((highlight, idx) => (
                                                    <li key={idx}>{highlight}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Courses */}
                            {item.courses && item.courses.length > 0 && (
                                <div className="mt-4 border-t border-white/5 pt-4">
                                    <h5 className="text-blue-300 font-medium mb-2">Key Courses</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {item.courses.map((course, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-900/20 text-teal-300 text-sm px-3 py-1 rounded-full"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Achievements */}
                            {item.achievements && item.achievements.length > 0 && (
                                <div className="mt-4 border-t border-white/5 pt-4">
                                    <h5 className="text-blue-300 font-medium mb-2">Achievements</h5>
                                    <ul className="space-y-2">
                                        {item.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <span className="text-yellow-400 mt-1 flex-shrink-0"><FaTrophy /></span>
                                                <span className="text-gray-400">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Internship */}
                            {item.internship && (
                                <div className="mt-4 border-t border-white/5 pt-4">
                                    <h5 className="text-blue-300 font-medium mb-2">Internship Experience</h5>
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-teal-400 mt-1 flex-shrink-0"><FaBriefcase /></span>
                                        <span className="text-gray-400">{item.internship}</span>
                                    </div>
                                </div>
                            )}

                            {/* Extracurricular */}
                            {item.extracurricular && (
                                <div className="mt-4 border-t border-white/5 pt-4">
                                    <h5 className="text-blue-300 font-medium mb-2">Extracurricular Activities</h5>
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-teal-400 mt-1 flex-shrink-0"><FaBookReader /></span>
                                        <span className="text-gray-400">{item.extracurricular}</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Education = ({ education }: { education: EducationItem[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [svgHeight, setSvgHeight] = useState(1000);

    // Prepare education items with IDs if they don't have them
    const educationWithIds = education.map((item, index) => ({
        ...item,
        id: item.id || index + 1
    }));

    // Reverse order to show newest first (typical for timelines)
    const sortedEducation = [...educationWithIds].sort((a, b) => {
        const yearA = extractYear(a.year || a.startDate);
        const yearB = extractYear(b.year || b.startDate);
        // If years can't be parsed or are equal, maintain original order
        if (!yearA || !yearB || yearA === yearB) return b.id! - a.id!;
        return parseInt(yearB) - parseInt(yearA);
    });

    // Set up scrolling effects
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Spring physics for smoother scrolling effect
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate path height
    useEffect(() => {
        if (containerRef.current) {
            setSvgHeight(containerRef.current.scrollHeight || 1000);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setSvgHeight(containerRef.current.scrollHeight || 1000);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => {
            handleResize();
        }, 500);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, [education, expandedId]); // Re-run when expanded state changes

    // Transform scroll progress to SVG path y-coordinate
    const lineHeight = useTransform(smoothProgress, [0, 1], [50, svgHeight - 100]);

    // Toggle expanded state for a card
    const toggleExpand = (id: number) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <section
            className="relative py-16 bg-gradient-to-b from-[#0c0c20] to-[#07071c]"
            id="education"
        >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated gradient orbs */}
                <div className="absolute top-1/3 right-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-[15%] w-[300px] h-[300px] rounded-full bg-teal-500/10 blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

                {/* Grid pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                    backgroundSize: "70px 70px"
                }}></div>
            </div>

            {/* Section header */}
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mb-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center"
                >
                    <div className="inline-block mb-2">
                        <span className="bg-white/5 backdrop-blur-md text-sm text-blue-300 py-1 px-4 rounded-full font-medium border border-white/5">
                            Academic Journey
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                        Education & Certifications
                    </h2>

                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        My academic timeline showing the path of continuous learning and growth
                    </p>
                </motion.div>
            </div>

            {/* Main timeline content */}
            <div
                ref={containerRef}
                className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline connector */}
                    <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-blue-500/20 via-teal-400/20 to-teal-500/20"></div>

                    {/* Timeline progress line */}
                    <motion.div
                        className="absolute left-8 top-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-teal-500"
                        style={{ height: lineHeight }}
                    />

                    {/* Education items */}
                    <div className="space-y-12">
                        {sortedEducation.map((item, index) => (
                            <div key={item.id} className="relative pl-24">
                                {/* Timeline node */}
                                <div className="absolute left-8 top-6 transform -translate-x-1/2 z-20">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            delay: index * 0.1 + 0.2,
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        }}
                                        className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 
                                              shadow-lg shadow-blue-500/20 flex items-center justify-center"
                                    >
                                        <span className="text-white text-xs">
                                            {getEducationIcon(item.type, item.icon)}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Education card */}
                                <EducationCard
                                    item={item}
                                    index={index}
                                    expanded={expandedId === item.id}
                                    toggleExpand={() => toggleExpand(item.id!)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;