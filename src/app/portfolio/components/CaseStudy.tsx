"use client"
import React, {useState} from 'react';

const caseStudies = [
    {
        title: 'Case Study 1',
        description: 'Detailed description of case study 1, highlighting key challenges, solutions, and results achieved.',
        date: 'August 2023',
        tags: ['Web Development', 'UI/UX Design']
    },
    {
        title: 'Case Study 2',
        description: 'Detailed description of case study 2, including project goals, methodology, and impactful outcomes.',
        date: 'June 2024',
        tags: ['Mobile App', 'Project Management']
    },
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
                                <span className="material-icons mr-3">folder_open</span>
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
