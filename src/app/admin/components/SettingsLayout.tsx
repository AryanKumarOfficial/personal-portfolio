import React from "react";
import Link from "next/link";
import { headers, type UnsafeUnwrappedHeaders } from "next/headers";

const SettingsLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const headerList = (headers() as unknown as UnsafeUnwrappedHeaders);
    const currentSection = headerList.get("x-current-path")?.split("/admin/settings/").join("");
    console.log(currentSection, "currentSection");
    const sections = [
        {
            id: "home",
            label: "Home",
            content: "Home content settings."
        },
        {
            id: "about",
            label: "About Me",
            content: "About Me content settings."
        },
        {
            id: "portfolio",
            label: "Portfolio",
            content: "Portfolio content settings."
        },
    ]
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white py-36">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-teal-400 mb-8">Settings</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sections?.map((section, index) => (
                                <Link href={`/admin/settings/${section.id}`} key={index}>
                                    <div
                                        className={`p-4 rounded-lg cursor-pointer ${
                                            currentSection === section.id ? "bg-teal-500 text-white" : "bg-gray-800 text-gray-300"
                                        }`}
                                    >
                                        <h2 className="text-2xl font-semibold">{section.label}</h2>
                                        <p className="mt-2">{section.label} content settings.
                                        </p>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>

                    <div className="mt-8 bg-gray-800 p-6 rounded-lg">
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
        ;
};

export default SettingsLayout;

