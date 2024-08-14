"use client"
import React, {useState} from 'react';

const Settings: React.FC = () => {
    // State hooks for managing content
    const [homeContent, setHomeContent] = useState({
        title: 'Hi, I’m Aryan Kumar',
        subtitle: 'Full Stack Developer',
        description: 'I am a Full Stack Developer with 3+ years of experience...',
    });

    const [aboutContent, setAboutContent] = useState({
        personalInfo: {
            name: 'Aryan Kumar',
            age: new Date().getFullYear() - 2005,
            email: 'aryan.official.cse@mail.com',
            address: 'Sitamarhi, Bihar',
            freelance: 'Available',
            skill: 'Full Stack Developer',
            experience: new Date().getFullYear() - 2021,
            language: 'English',
        },
    });

    const [portfolioContent, setPortfolioContent] = useState([
        {title: 'Project 1', description: 'This is a description for Project 1'},
        {title: 'Project 2', description: 'This is a description for Project 2'},
        // More projects...
    ]);

    // Handlers for updating content
    const handleHomeContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setHomeContent(prev => ({...prev, [name]: value}));
    };

    const handleAboutContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setAboutContent(prev => ({
            personalInfo: {...prev.personalInfo, [name]: value},
        }));
    };

    const handlePortfolioChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        const newPortfolio = portfolioContent.slice();
        newPortfolio[index] = {...newPortfolio[index], [name]: value};
        setPortfolioContent(newPortfolio);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-teal-400 mb-8">Settings</h1>

                {/* Home Section */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Home Section</h2>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={homeContent.title}
                            onChange={handleHomeContentChange}
                            className="w-full p-2 bg-gray-800 rounded text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Subtitle</label>
                        <input
                            type="text"
                            name="subtitle"
                            value={homeContent.subtitle}
                            onChange={handleHomeContentChange}
                            className="w-full p-2 bg-gray-800 rounded text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Description</label>
                        <textarea
                            name="description"
                            value={homeContent.description}
                            onChange={handleHomeContentChange}
                            className="w-full p-2 bg-gray-800 rounded text-white"
                            rows={4}
                        />
                    </div>
                </div>

                {/* About Section */}
                <div className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">About Section</h2>
                    {Object.keys(aboutContent.personalInfo).map((key) => (
                        <div key={key} className="mb-4">
                            <label className="block mb-2 font-bold capitalize">{key}</label>
                            <input
                                type="text"
                                name={key}
                                value={(aboutContent.personalInfo as any)[key]}
                                onChange={handleAboutContentChange}
                                className="w-full p-2 bg-gray-800 rounded text-white"
                            />
                        </div>
                    ))}
                </div>

                {/* Portfolio Section */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Portfolio Section</h2>
                    {portfolioContent.map((project, index) => (
                        <div key={index} className="mb-8">
                            <div className="mb-4">
                                <label className="block mb-2 font-bold">Project Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={project.title}
                                    onChange={(e) => handlePortfolioChange(index, e)}
                                    className="w-full p-2 bg-gray-800 rounded text-white"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-bold">Project Description</label>
                                <textarea
                                    name="description"
                                    value={project.description}
                                    onChange={(e) => handlePortfolioChange(index, e)}
                                    className="w-full p-2 bg-gray-800 rounded text-white"
                                    rows={4}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="mt-8 bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Settings;
