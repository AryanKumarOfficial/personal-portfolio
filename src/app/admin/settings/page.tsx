"use client";

import React, {useState, useEffect} from "react";
import toast from "react-hot-toast";

const sections = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "portfolio", label: "Portfolio"},
];

const SettingsPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const [formData, setFormData] = useState({title: "", bio: ""});

    useEffect(() => {
        // Fetch the existing settings from the API when the component loads
        fetch("/api/settings/home")
            .then((res) => res.json())
            .then((data) => {
                setFormData({title: data.title || "", bio: data.bio || ""});
            })
            .catch((error) => console.error("Failed to fetch settings:", error));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleUpdate = () => {
        // Send the updated settings to the API
        fetch("/api/settings/home", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
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

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white p-6">
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
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">About Settings</h2>
                            {/* Add form fields for About settings */}
                        </div>
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
