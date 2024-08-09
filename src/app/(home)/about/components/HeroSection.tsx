import React from 'react';

const HeroSection: React.FC = () => {
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
                                <h3 className="text-white"><span className="text-teal-500">Name: </span>Aryan Kumar</h3>
                                <h3 className="text-white"><span
                                    className="text-teal-500">Age: </span>{(new Date().getFullYear()) - 2005}</h3>
                                <h3 className="text-white"><span className="text-teal-500">Email: </span><span
                                    className="!text-white lowercase">aryan.official.cse@mail.com</span></h3>
                                <h3 className="text-white"><span className="text-teal-500">Address: </span>Sitamarhi,
                                    Bihar</h3>
                            </div>

                            <div className="flex-1 bg-gray-700 p-4 rounded-lg">
                                <h3 className="text-white"><span className="text-teal-500">Freelance: </span>Available
                                </h3>
                                <h3 className="text-white"><span className="text-teal-500">Skill: </span>Full Stack
                                    Developer</h3>
                                <h3 className="text-white"><span
                                    className="text-teal-500">Experience: </span>{(new Date().getFullYear()) - 2021} years
                                </h3>
                                <h3 className="text-white"><span className="text-teal-500">Language: </span>English</h3>
                            </div>
                        </div>

                        <a href="resume-aryan.pdf"
                           className="inline-block mt-4 px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-300"
                           download>
                            Download CV <i className="fas fa-download"></i>
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col flex-1 gap-4 justify-center">
                        <div className="flex-1 bg-gray-700 p-6 rounded-lg text-center shadow-lg">
                            <h3 className="text-2xl sm:text-3xl text-teal-500">{(new Date().getFullYear()) - 2021}+</h3>
                            <p className="text-gray-400">Years of Experience</p>
                        </div>

                        <div className="flex-1 bg-gray-700 p-6 rounded-lg text-center shadow-lg pt-4">
                            <h3 className="text-2xl sm:text-3xl text-teal-500">150+</h3>
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
