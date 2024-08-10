"use client";
import Link from 'next/link';
import React, {useEffect} from "react";
import useAuth from "@/backend/store/Auth";
import {useRouter} from "next/navigation";

const AdminHome = () => {
    const {session, user} = useAuth();
    const router = useRouter();
    const links = [
        {
            name: "Dashboard",
            description: "Overview of site statistics",
            link: "/admin/dashboard",
            icon: "fas fa-tachometer-alt",
        },
        {
            name: "Posts",
            description: "Manage blog posts",
            link: "/admin/posts",
            icon: "fas fa-blog",
        },
        {
            name: "Settings",
            description: "Configure site settings",
            link: "/admin/settings",
            icon: "fas fa-cogs",
        },
    ]

    useEffect(() => {
        if (!session) {
            router.push("/admin/login");
        } else if (session && user && user.prefs.role !== "admin") {
            router.push("/admin/unauthorized");
        }
    }, [session]);

    return (
        <div className="container mx-auto p-4 flex justify-center items-center flex-col gap-20
        ">
            <h1 className="text-3xl font-bold mb-4 ">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {links.map((link, index) => (

                    <Link legacyBehavior={true} key={index} href={link.link}>
                        <a className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 ">
                            <i className={`${link.icon} text-4xl text-blue-500`}></i>
                            <h2 className="mt-2 text-xl font-semibold">{link.name}</h2>
                            <p className="text-teal-500">{link.description}</p>
                        </a>
                    </Link>
                ))}
                {/* Add more admin links as needed */}
            </div>
        </div>
    );
};

export default AdminHome;