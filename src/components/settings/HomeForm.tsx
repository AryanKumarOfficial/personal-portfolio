import React from 'react'
import {HomeSettings, homeSettingsSchema} from "@/backend/schema/HomeSettings";
import toast from "react-hot-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

const HomeForm = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<HomeSettings>({
        resolver: zodResolver(homeSettingsSchema),
    })
    const handleUpdate = async (data: HomeSettings) => {
        try {
            const response = await fetch(`/api/settings/home`, {
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
            console.error(`Failed to update home settings:`, error);
            toast.error("An error occurred while updating the settings.");
        } finally {
            reset();
        }
    };
    return (
        <form onSubmit={handleSubmit(handleUpdate)}>
            <h2 className="text-2xl font-semibold mb-4">Home Settings</h2>
            <div className="mb-4">
                <label className="block text-gray-300">Title</label>
                <input
                    type="text"
                    className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                    placeholder={"Home Title"}
                    {...register("title")}
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-300">Description</label>
                <input
                    type="text"
                    className="w-full bg-gray-700 p-2 rounded-lg outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-teal-400 placeholder:text-teal-600"
                    placeholder={`Home Description`}
                    {...register("description")}
                />
                {errors.description && (
                    <p className="text-red-500 text-sm mt-2">
                        {errors.description.message}
                    </p>
                )}
            </div>
            <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
            >
                Update Home Settings
            </button>
        </form>
    )
}
export default HomeForm
