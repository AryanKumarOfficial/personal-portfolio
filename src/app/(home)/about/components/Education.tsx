"use client";
import React, {useState} from 'react';

const educationData = [
    {
        year: '2016 - 2021',
        degree: 'Matriculation',
        institution: 'Nikhil Shyama DAV Public School',
        description: 'Completed matriculation with a strong focus on science and mathematics, excelling in subjects like Physics, Chemistry, and Advanced Mathematics. Actively participated in science fairs and mathematics competitions, achieving several accolades.',
        details: 'In addition to academic achievements, engaged in various extracurricular activities such as the debate club and robotics team, which nurtured leadership and teamwork skills.',
        icon: 'fas fa-certificate'
    },
    {
        year: '2021 - 2024',
        degree: 'Diploma in Computer Science and Engineering',
        institution: 'New Government Polytechnic',
        description: 'Specialized in core computer science subjects including Algorithms, Data Structures, Web Development, and Database Management. Gained hands-on experience through various projects and internships.',
        details: 'Successfully completed a final year project on developing a full-stack web application, which was well-received by the faculty. Participated in hackathons and coding competitions, securing top positions. Volunteered as a tutor for junior students, helping them with programming basics.',
        icon: 'fas fa-graduation-cap'
    },
    // Add more education data as needed
];

const Education: React.FC = () => {
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
                                    <h3 className="text-lg font-semibold">{education.institution}</h3>
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
                                <p className="p-2 text-gray-300 text-justify md:text-left">{education.details}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
