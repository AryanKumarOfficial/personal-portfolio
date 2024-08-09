import React from 'react';
import Image from "next/image"
import TailwindCSSIcon from "../../../../public/assets/icons/tailwindcss.svg";
import NextJSIcon from "../../../../public/assets/icons/next.svg"
import Flask from "../../../../public/assets/icons/flask.svg"
import Django from "../../../../public/assets/icons/Django.svg"
import Express from "../../../../public/assets/icons/express.svg"
import TS from "../../../../public/assets/icons/ts.svg"
import CPlus from "../../../../public/assets/icons/C++.svg"

const Skills: React.FC = () => {
    const skills = [
        {name: 'HTML', icon: 'fab fa-html5'},
        {name: 'CSS', icon: 'fab fa-css3-alt'},
        {name: 'JavaScript', icon: 'fab fa-js'},
        {name: 'bootstrap', icon: 'fab fa-bootstrap'},
        {name: 'React.js', icon: 'fab fa-react'},
        {name: 'tailwindcss', icon: TailwindCSSIcon},
        {name: 'Node.js', icon: 'fab fa-node'},
        {name: 'express.js', icon: Express},
        {name: 'MongoDB', icon: 'fab fa-envira'},
        {name: 'next.js', icon: NextJSIcon},
        {name: 'typescript', icon: TS},
        {name: 'Python', icon: 'fab fa-python'},
        {name: 'Django', icon: Django},
        {name: 'Flask', icon: Flask},
        {name: 'java',icon: 'fab fa-java'},
        { name: 'C++', icon: CPlus},
        {name: 'SQL', icon: 'fas fa-database'},
        {name: 'Git', icon: 'fab fa-git-alt'}
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-[15vw] md:text-[6vw] font-normal text-teal-400 mb-10 text-center uppercase">
                    <span className={"text-white"}>MY</span> Skills
                </h1>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow-md transition-transform transform hover:scale-105"
                        >
                            {typeof skill.icon === "string" ? (
                                <i className={`${skill.icon} text-3xl text-teal-400 mb-2`}></i>
                            ) : (
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    className="mb-2"
                                />
                            )}
                            <span className="text-sm font-semibold text-center uppercase">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
