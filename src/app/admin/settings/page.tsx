"use client";

import React, {useState, useEffect, ChangeEvent, FormEvent} from "react";
import toast from "react-hot-toast";
import {FaPlus} from "react-icons/fa";

// Define the types for the sections, form data, about data, and other structures
interface Section {
    id: string;
    label: string;
}

interface FormData {
    title: string;
    bio: string;
}

interface PersonalData {
    name: string;
    age: string;
    email: string;
    address: string;
    freelance: string;
    title: string;
    experience: string;
    language: string;
}

interface ExperiencesData {
    year: string;
    projectsCompleted: string;
}

interface Skill {
    name: string;
    icon: string;
}

interface Education {
    degree: string;
    year: string;
    institute: string;
    description: string;
    highlights: string;
}

interface AboutData {
    personal: PersonalData;
    experiences: ExperiencesData;
    skills: Skill[];
    education: Education[];
}

// Define the sections array with proper typing
const sections: Section[] = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "portfolio", label: "Portfolio"},
];

const SettingsPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>(sections[0].id);
    const [formData, setFormData] = useState<FormData>({title: "", bio: ""});
    const [aboutData, setAboutData] = useState<AboutData>({
        personal: {
            name: "",
            age: "",
            email: "",
            address: "",
            freelance: "",
            title: "",
            experience: "",
            language: "",
        },
        experiences: {
            year: "",
            projectsCompleted: "",
        },
        skills: [{name: "", icon: ""}],
        education: [{degree: "", year: "", institute: "", description: "", highlights: ""}],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/settings/${activeSection}`);
                const data = await response.json();
                if (activeSection === "home") {
                    setFormData({title: data.title || "", bio: data.bio || ""});
                } else if (activeSection === "about") {
                    // Ensure we have default values if data is null or undefined
                    setAboutData({
                        personal: {
                            ...aboutData.personal,
                            ...(data?.personal || {}),
                        },
                        experiences: {
                            ...aboutData.experiences,
                            ...(data?.experiences || {}),
                        },
                        skills: data?.skills || aboutData.skills,
                        education: data?.education || aboutData.education,
                    });
                }
            } catch (error) {
                console.error(`Failed to fetch ${activeSection} settings:`, error);
                toast.error(`Failed to fetch ${activeSection} settings.`);
            }
        };
        fetchData();
    }, [activeSection]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        if (activeSection === "home") {
            setFormData((prevData) => ({...prevData, [name]: value}));
        } else if (activeSection === "about") {
            setAboutData((prevData) => {
                // Use a deep copy of aboutData to avoid mutating state directly
                const updatedAboutData = {...prevData};

                if (name in prevData.personal) {
                    // Update personal section
                    console.log(name, value, "name, value");
                    updatedAboutData.personal = {...prevData.personal, [name]: value};
                } else if (name in prevData.experiences) {
                    // Update experience section
                    updatedAboutData.experiences = {...prevData.experiences, [name]: value};
                }
                return updatedAboutData;
            });
        }
    };


    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/settings/${activeSection}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(activeSection === "home" ? formData : aboutData),
            });
            const result = await response.json();
            if (result.message) {
                toast.success(result.message);
            } else {
                toast.error(result.error || "Update failed");
            }
        } catch (error) {
            console.error(`Failed to update ${activeSection} settings:`, error);
            toast.error("An error occurred while updating the settings.");
        }
    };

    const handleListChange = (
        listKey: keyof AboutData,
        index: number,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const {name, value} = event.target;
        setAboutData((prevData) => {
            const updatedList = [...(prevData[listKey] as any[])];
            updatedList[index] = {...updatedList[index], [name]: value};
            return {...prevData, [listKey]: updatedList};
        });
    };

    const handleAddItem = (listKey: "skills" | "education") => {
        const newItem = listKey === "skills"
            ? {name: "", icon: ""}
            : {degree: "", year: "", institute: "", description: "", highlights: ""};
        setAboutData((prevData) => ({
            ...prevData,
            [listKey]: [...prevData[listKey], newItem],
        }));
    };

    const renderFormField = (
        label: string,
        name: string,
        value: string,
        placeholder: string
    ) => (
        <div className="mb-4">
            <label className="block text-gray-300">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleInputChange}
                className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                placeholder={placeholder}
            />
        </div>
    );

    const renderListItems = (
        items: any[],
        listKey: keyof AboutData,
        fields: { name: string; placeholder: string }[]
    ) =>
        items.map((item, index) => (
            <div key={index} className="my-4">
                {fields.map((field) => (
                    <input
                        key={field.name}
                        type="text"
                        name={field.name}
                        value={item[field.name]}
                        onChange={(e) => handleListChange(listKey, index, e)}
                        className="w-full bg-gray-700 p-2 mb-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={field.placeholder}
                    />
                ))}
            </div>
        ));

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
                        <form onSubmit={handleUpdate}>
                            <h2 className="text-2xl font-semibold mb-4">Home Settings</h2>
                            {renderFormField("Title", "title", formData.title, "Home title")}
                            {renderFormField("Description", "bio", formData.bio, "Home description")}
                            <button
                                type="submit"
                                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out flex items-center justify-center mt-4 w-full uppercase tracking-wider font-semibold text-sm cursor-pointer"
                            >
                                Update
                            </button>
                        </form>
                    )}

                    {activeSection === "about" && (
                        <form onSubmit={handleUpdate} className={"max-w-screen-md"}>
                            <h2 className="text-2xl font-semibold mb-4">About Settings</h2>

                            <h3 className="text-lg font-semibold mb-4">Personal Info</h3>
                            {renderFormField("Name", "name", aboutData.personal.name, "Name")}
                            {renderFormField("Age", "age", aboutData.personal.age, "Age")}
                            {renderFormField("Email", "email", aboutData.personal.email, "Email")}
                            {renderFormField("Address", "address", aboutData.personal.address, "Address")}
                            {renderFormField("Freelance", "freelance", aboutData.personal.freelance, "Freelance")}
                            {renderFormField("Title", "title", aboutData.personal.title, "Title")}
                            {renderFormField("Experience", "experience", aboutData.personal.experience, "Experience")}
                            {renderFormField("Language", "language", aboutData.personal.language, "Language")}

                            <h3 className="text-lg font-semibold mb-4">Experience Info</h3>
                            {renderFormField("Years", "year", aboutData.experiences.year, "Years of Experience")}
                            {renderFormField(
                                "Projects Completed",
                                "projectsCompleted",
                                aboutData.experiences.projectsCompleted,
                                "Projects Completed"
                            )}

                            <h3 className="text-lg font-semibold mb-4">Skills</h3>
                            {renderListItems(aboutData.skills, "skills", [
                                {name: "name", placeholder: "Skill name"},
                                {name: "icon", placeholder: "Skill icon"},
                            ])}

                            <button
                                type="button"
                                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out flex items-center justify-center mt-4 w-full uppercase tracking-wider font-semibold text-sm cursor-pointer"
                                onClick={() => handleAddItem("skills")}
                            >
                                Add Skill <FaPlus className="ml-2"/>
                            </button>

                            <h3 className="text-lg font-semibold mt-6 mb-4">Education</h3>
                            {renderListItems(aboutData.education, "education", [
                                {name: "degree", placeholder: "Degree"},
                                {name: "year", placeholder: "Year"},
                                {name: "institute", placeholder: "Institute"},
                                {name: "description", placeholder: "Description"},
                                {name: "highlights", placeholder: "Highlights"},
                            ])}

                            <button
                                type="button"
                                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out flex items-center justify-center mt-4 w-full uppercase tracking-wider font-semibold text-sm cursor-pointer"
                                onClick={() => handleAddItem("education")}
                            >
                                Add Education <FaPlus className="ml-2"/>
                            </button>

                            <button
                                type="submit"
                                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out flex items-center justify-center mt-8 w-full uppercase tracking-wider font-semibold text-sm cursor-pointer"
                            >
                                Update
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
