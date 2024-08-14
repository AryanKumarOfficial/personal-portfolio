"use client";

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";
import {
    FaPlus,
} from "react-icons/fa";

const sections = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "portfolio", label: "Portfolio"},
];

const SettingsPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const [formData, setFormData] = useState({title: "", bio: ""});
    const [aboutData, setAboutData] = useState({
        title: "",
        bio: "",
        personal: {
            name: "",
            age: "",
            email: "",
            address: "",
            freelance: "",
            experience: "",
            language: "",
        },
        experience: {
            year: "",
            projectsCompleted: "",
        },
        skills: [
            {name: "", icon: ""}
        ],
        education: [
            {degree: "", year: "", institute: "", description: "", highlights: ""}
        ],
    });

    useEffect(() => {
        // Fetch the existing settings when the component loads or when the section changes
        if (activeSection === "home") {
            fetch("/api/settings/home")
                .then((res) => res.json())
                .then((data) => {
                    setFormData({title: data.title || "", bio: data.bio || ""});
                })
                .catch((error) => console.error("Failed to fetch settings:", error));
        } else if (activeSection === "about") {
            fetch("/api/settings/about")
                .then((res) => res.json())
                .then((data) => {
                    setAboutData({
                        title: data.title || "",
                        bio: data.bio || "",
                        personal: data.personal || aboutData.personal,
                        experience: data.experience || aboutData.experience,
                        skills: data.skills || aboutData.skills,
                        education: data.education || aboutData.education,
                    });
                })
                .catch((error) => console.error("Failed to fetch about settings:", error));
        }
    }, [activeSection]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if (activeSection === "home") {
            setFormData({...formData, [name]: value});
        } else if (activeSection === "about") {
            setAboutData({...aboutData, [name]: value});
        }
    };

    const handleUpdate = () => {
        const endpoint = activeSection === "home" ? "/api/settings/home" : "/api/settings/about";
        const dataToUpdate = activeSection === "home" ? formData : aboutData;

        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToUpdate),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    toast.success(data.message);
                } else {
                    toast.error(data.error || "An error occurred while updating the settings.");
                }
            })
            .catch((error) => {
                console.error("Failed to update settings:", error);
                toast.error("An error occurred while updating the settings.");
            });
    };

    function renderSkills() {
        return aboutData.skills.map((skill, index) => (
            <div key={index} className="my-4">
                <label className="block text-gray-300">Skill {index + 1}</label>
                <input
                    type="text"
                    name="name"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, e)}
                    className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600 my-4"
                    placeholder="Skill name"
                />
                <input
                    type="text"
                    name="icon"
                    value={skill.icon}
                    onChange={(e) => handleSkillChange(index, e)}
                    className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                    placeholder="Skill icon"
                />
            </div>
        ));
    }

    const handleSkillChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedSkills = aboutData.skills.map((skill, i) =>
            i === index ? {...skill, [event.target.name]: event.target.value} : skill
        );
        setAboutData({...aboutData, skills: updatedSkills});
    };

    const handleAddSkill = () => {
        setAboutData({
            ...aboutData,
            skills: [...aboutData.skills, {name: "", icon: ""}],
        });
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white py-36">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-teal-400 mb-8">Settings</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className={`p-4 rounded-lg cursor-pointer ${
                                activeSection === section.id
                                    ? "bg-teal-500 text-white"
                                    : "bg-gray-800 text-gray-300"
                            }`}
                            onClick={() => setActiveSection(section.id)}
                        >
                            <h2 className="text-2xl font-semibold">{section.label}</h2>
                            <p className="mt-2">{section.label} content settings.</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-gray-800 p-6 rounded-lg">
                    {activeSection === "home" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Home Settings</h2>

                            <div className="mb-4">
                                <label className="block text-gray-300">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                    placeholder="Home title"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300">Description</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-700 p-2 rounded-lg resize-none outline-none h-32 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                    placeholder="Home description"
                                />
                            </div>
                            <button
                                onClick={handleUpdate}
                                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out flex items-center justify-center mt-4 w-full uppercase tracking-wider font-semibold text-sm cursor-pointer"
                            >
                                Update
                            </button>
                        </div>
                    )}

                    {activeSection === "about" && (
                        <form>
                            <h2 className="text-2xl font-semibold mb-4">About Settings</h2>

                            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={aboutData.personal.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Age</label>
                                    <input
                                        type="text"
                                        name="age"
                                        value={aboutData.personal.age}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Your age"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={aboutData.personal.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={aboutData.personal.address}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Your address"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Freelance</label>
                                    <input
                                        type="text"
                                        name="freelance"
                                        value={aboutData.personal.freelance}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Freelance status"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Experience</label>
                                    <input
                                        type="text"
                                        name="experience"
                                        value={aboutData.personal.experience}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Experience"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Language</label>
                                    <input
                                        type="text"
                                        name="language"
                                        value={aboutData.personal.language}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Language"
                                    />
                                </div>

                            </div>

                            <h3 className="text-xl font-semibold mb-2">Experience</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-300">Year</label>
                                    <input
                                        type="text"
                                        name="year"
                                        value={aboutData.experience.year}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Year"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-300">Projects Completed</label>
                                    <input
                                        type="text"
                                        name="projectsCompleted"
                                        value={aboutData.experience.projectsCompleted}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                                        placeholder="Projects completed"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-2">Skills</h3>
                            <div className="mb-4">
                                {renderSkills()}
                                <button
                                    type="button"
                                    onClick={handleAddSkill}
                                    className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out flex items-center justify-center mt-4 w-full uppercase tracking-wider font-semibold text-sm cursor-pointer"
                                >
                                    <FaPlus className="mr-2"/> Add New Skill
                                </button>
                            </div>
                        </form>
                    )}

                    {activeSection === "portfolio" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Portfolio Settings</h2>
                            {/* Add form fields for Portfolio settings */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
