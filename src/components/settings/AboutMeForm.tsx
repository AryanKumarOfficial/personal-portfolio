import React from 'react'
import {useForm} from "react-hook-form"
import {AboutSettings, aboutSettingsSchema} from "@/backend/schema/AboutSettings";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const AboutMeForm = ({activeSection, about}: {
    activeSection: string,
    about: {
        name: string,
        age: string,
        email: string,
        address: string,
        freelanceStatus: string,
        professionalTitle: string,
        experience: string,
        languageSpoken: string,
        projectsCompleted: string
    }
}) => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<AboutSettings>(
        {
            resolver: zodResolver(aboutSettingsSchema)
        }
    )

    const onSubmit = async (data: AboutSettings) => {
        try {
            const response = await fetch(`/api/settings/${activeSection}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
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
        } finally {
            reset();
        }
    }

    return (
        <form className={"max-w-screen-md"} onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-semibold mb-4">About Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                    <label className="block text-gray-300">Name</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your Name"}
                        defaultValue={about.name}
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Age</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your age"}
                        defaultValue={about.age}
                        {...register("age")}
                    />
                    {errors.age && (
                        <p className="text-red-500 text-sm mt-2">{errors.age.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Email</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your Email"}
                        defaultValue={about.email}
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Address</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your Address"}
                        defaultValue={about.address}
                        {...register("address")}
                    />
                    {errors.address && (
                        <p className="text-red-500 text-sm mt-2">{errors.address.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Freelance Status</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your Freelance Status"}
                        defaultValue={about.freelanceStatus}
                        {...register("freelanceStatus")}
                    />
                    {errors.freelanceStatus && (
                        <p className="text-red-500 text-sm mt-2">{errors.freelanceStatus.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Professional Title</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your Professional Title"}
                        defaultValue={about.professionalTitle}
                        {...register("professionalTitle")}
                    />
                    {errors.professionalTitle && (
                        <p className="text-red-500 text-sm mt-2">{errors.professionalTitle.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Experience</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your Experience"}
                        defaultValue={about.experience}
                        {...register("experience")}
                    />
                    {errors.experience && (
                        <p className="text-red-500 text-sm mt-2">{errors.experience.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Language Spoken</label>
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                        placeholder={"Your Language Spoken"}
                        defaultValue={about.languageSpoken}
                        {...register("languageSpoken")}
                    />
                    {errors.languageSpoken && (
                        <p className="text-red-500 text-sm mt-2">{errors.languageSpoken.message}</p>
                    )}
                </div>

            </div>
            <button
                type="submit"
                className="mt-8 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
            >
                Update About Settings
            </button>
        </form>
    )
}
export default AboutMeForm
