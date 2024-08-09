"use client"
import React, {useState} from 'react';

const caseStudies = [
    {
        title: 'E-Commerce Platform',
        date: '2021',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        description: 'Developed an e-commerce platform with user authentication, product management, and order processing features.',
    },
    {
        title: 'Portfolio Website',
        date: '2021',
        tags: ['React', 'TailwindCSS'],
        description: 'Built a responsive portfolio website to showcase projects and skills using React and TailwindCSS.',
    },
    // Add more case studies as needed
];

const CaseStudies: React.FC = () => {
    const [open, setOpen] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-teal-400">Case Studies</h2>
                {caseStudies.map((caseStudy, index) => (
                    <div key={index} className="mb-8">
                        <button
                            className="w-full text-left bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
                            onClick={() => toggleOpen(index)}
                        >
                            <h5 className="text-xl font-semibold text-teal-400 flex items-center">
                                <i className="fas fa-folder-open mr-3"></i>
                                {caseStudy.title}
                            </h5>
                            <p className="text-gray-400 text-sm">{caseStudy.date}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {caseStudy.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex}
                                          className="bg-teal-400 text-gray-900 text-xs font-semibold py-1 px-2 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </button>
                        {open === index && (
                            <div className="mt-4 p-6 bg-gray-800 rounded-lg shadow-lg">
                                <p className="text-gray-300">{caseStudy.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;
