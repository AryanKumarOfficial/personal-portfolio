import React from 'react';
import Icon from "@/app/admin/components/Icon";


interface Skill {
    name: string;
    icon: string;
}

const SkillsComponent = ({skills}: { skills: Skill[] }) => {

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
                            {
                                <Icon className={`${skill.icon} text-3xl text-teal-400 mb-2`}/>
                            }
                            <span className="text-sm font-semibold text-center uppercase">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
        ;
};

export default SkillsComponent;
