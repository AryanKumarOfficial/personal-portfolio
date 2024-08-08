import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            role: 'Full Stack Developer',
            company: 'Tech Solutions Inc.',
            duration: '2023 - Present',
            description: 'Developing and maintaining web applications using React and Node.js.'
        },
        {
            role: 'Frontend Developer Intern',
            company: 'Web Innovations LLC',
            duration: '2022 - 2023',
            description: 'Worked on creating responsive web designs and improving user experience.'
        },
        // Add more experiences as needed
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-teal-400 mb-8">Experience</h1>
                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-teal-400">{experience.role}</h2>
                            <h3 className="text-lg font-semibold">{experience.company}</h3>
                            <span className="text-sm">{experience.duration}</span>
                            <p className="mt-4">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
