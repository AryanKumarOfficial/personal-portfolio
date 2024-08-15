import React from 'react';

interface PersonalInfo {
    name: string;
    age: string;
    email: string;
    address: string;
    freelance: string;
    title: string;
    experience: string;
    language: string;
}

interface Experience {
    year: string;
    projectsCompleted: string;
}

const HeroSection = ({personalInfo, experience}: { personalInfo: PersonalInfo, experience: Experience }) => {
    return (
        <>
            <section
                className="flex flex-col justify-center p-6 sm:p-10 md:px-[2rem] md:py-[6rem] bg-gray-900 text-white py-24">
                <h1 className="text-5xl uppercase sm:text-5xl md:text-[6vw] text-center mb-6 sm:mb-8 text-teal-500">
                    About <span className="text-white uppercase">Me</span>
                </h1>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8">

                    <div className="flex-1 p-6 sm:p-8 bg-gray-800 rounded-lg shadow-lg">
                        <h1 className="text-xl mb-4 sm:mb-6">Personal Info</h1>

                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                            <div className="flex-1 bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-white"><span
                                    className="text-teal-500">Name: </span>{personalInfo?.name}</h3>
                                <h3 className="text-white"><span
                                    className="text-teal-500">Age: </span>{personalInfo?.age}</h3>
                                <h3 className="text-white"><span className="text-teal-500">Email: </span><span
                                    className="!text-white lowercase">{personalInfo?.email}</span></h3>
                                <h3 className="text-white"><span
                                    className="text-teal-500">Address: </span>{personalInfo?.address}</h3>
                            </div>

                            <div className="flex-1 bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-white"><span
                                    className="text-teal-500">Freelance: </span>{personalInfo?.freelance}
                                </h3>
                                <h3 className="text-white"><span
                                    className="text-teal-500">Skill: </span>{personalInfo?.title}</h3>
                                <h3 className="text-white"><span
                                    className="text-teal-500">Experience: </span>{personalInfo?.experience} years
                                </h3>
                                <h3 className="text-white"><span
                                    className="text-teal-500">Language: </span>{personalInfo?.language}</h3>
                            </div>
                        </div>

                        <a href="/assets/resume.pdf"
                           className="inline-block mt-4 px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300"
                           download>
                            Download CV <i className="fas fa-download"></i>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col flex-1 gap-4 justify-center">
                        <div className="flex-1 bg-gray-700 p-6 rounded-lg text-center shadow-lg">
                            <h3 className="text-2xl sm:text-3xl text-teal-500">{experience.year}+</h3>
                            <p className="text-gray-400">Years of Experience</p>
                        </div>

                        <div className="flex-1 bg-gray-700 p-6 rounded-lg text-center shadow-lg pt-4">
                            <h3 className="text-2xl sm:text-3xl text-teal-500">{experience.projectsCompleted}+</h3>
                            <p className="text-gray-400">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*<Skills/>*/}
            {/*<Education/>*/}
        </>
    )
}

export default HeroSection;
