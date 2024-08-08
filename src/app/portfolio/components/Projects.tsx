"use client";
import React from "react";

const projects = [
    {
        title: "Banao Technology",
        description: "A React application with an interactive 3x3 matrix feature.",
        link: "https://github.com/AryanKumarOfficial/banao-technology",
        techStack: ["React", "JavaScript", "CSS"],
    },
    {
        title: "CloM Enterprises",
        description: "A digital marketing and e-commerce management platform.",
        link: "https://clomenterprises.com",
        techStack: ["WordPress", "SEO", "Social Media Marketing"],
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
                        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-teal-400 mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex space-x-2 mb-4">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="bg-gray-600 text-white text-sm px-2 py-1 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-400 underline"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
