"use client";
import React, {useState} from 'react';


interface Education {
    degree: string;
    year: string;
    institute: string;
    description: string;
    highlights: string;
    icon: string;
}

const Education = ({educationData}: { educationData: Education[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-teal-400 mb-8">Education</h1>
                <div className="space-y-4">
                    {educationData.map((education, index) => (
                        <article
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <header className="flex justify-between items-center">
                                <div>
                                    <i className={`mr-4 text-4xl ${education.icon}`}></i>
                                    <h2 className="text-2xl font-bold text-teal-400">
                                        {education.degree}</h2>
                                    <h3 className="text-lg font-semibold">{education.institute}</h3>
                                    <time className="block mt-2 text-sm">{education.year}</time>
                                </div>
                                <span className="text-3xl transition-transform transform duration-300">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </header>
                            <div
                                className={`mt-4 overflow-hidden transition-max-height duration-700 ease-in-out ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <p className="p-2 text-justify md:text-left">{education.description}</p>
                                <p className="p-2 text-gray-300 text-justify md:text-left">{education.highlights}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
