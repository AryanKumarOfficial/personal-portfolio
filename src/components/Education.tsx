"use client";
import React, {useState} from 'react';

const educationData = [
    {
        year: '2016 - 2021',
        degree: 'High School',
        institution: 'ABC High School',
        description: 'Completed high school with a focus on science and mathematics.',
    },
    {
        year: '2021 - 2024',
        degree: 'Diploma in Computer Science and Engineering',
        institution: 'New Government Polytechnic',
        description: 'Studied core computer science subjects and practical applications.',
    },
    // Add more education data as needed
];

const Education: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-teal-400 mb-8">Education</h1>
                <div className="space-y-4">
                    {educationData.map((education, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer "
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl font-bold text-teal-400">{education.degree}</h2>
                                    <h3 className="text-lg font-semibold">{education.institution}</h3>
                                    <span className="block mt-2 text-sm">{education.year}</span>
                                </div>
                                <span className="transition-transform transform duration-300">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            <div
                                className={`mt-4 overflow-hidden transition-max-height duration-1000 ease-in-out ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <p className="p-2">{education.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
