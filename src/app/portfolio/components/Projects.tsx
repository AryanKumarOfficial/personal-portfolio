"use client";
import React from "react";

const projects = [
    {
        title: "E-Commerce Website",
        description: "An complete e-commerce website built with Next.js and Tailwind CSS.",
        link: "https://codeswear-xi.vercel.app/",
        techStack: ["Next.js", "Tailwind CSS", "Razorpay", "MongoDB", "NextAuth"],
    },
    {
        title: "Portfolio Website",
        description: "A portfolio website template built with Next.js and Tailwind CSS with appwrite as backend.",
        link: "https://aryankumarofficial.line.pm",
        techStack: ["Next.js", "Tailwind CSS", "Appwrite"],
    },


    // Add more projects as needed
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-16 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-teal-400 mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 bg-teal-400 rounded-full invisible hidden md:flex items-center justify-center text-white font-bold text-xl mr-4">
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-teal-400 mb-1">{project.title.length > 30 ? project.title.substring(0, 30) + '...' : project.title}</h4>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 flex-1">{project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, techIndex) => (
                                    <span key={techIndex}
                                          className="bg-gray-500 text-gray-950 text-xs font-semibold py-1 px-3 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link}
                               className="mt-auto inline-block bg-teal-400 text-center text-gray-900 py-2 rounded-lg font-semibold hover:bg-teal-500 transition-colors">Visit</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
