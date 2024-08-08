import React from 'react';

const Projects: React.FC = () => {
    const projects = [
        {
            name: 'Project One',
            description: 'A web application built using React and Node.js.',
            link: '#',
        },
        {
            name: 'Project Two',
            description: 'An e-commerce platform developed with Next.js and MongoDB.',
            link: '#',
        },
        // Add more projects as needed
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-teal-400 mb-8">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-teal-400">{project.name}</h2>
                                <p className="mt-4">{project.description}</p>
                            </div>
                            <a
                                href={project.link}
                                className="mt-4 inline-block bg-teal-400 text-gray-900 font-semibold py-2 px-4 rounded hover:bg-teal-500"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
