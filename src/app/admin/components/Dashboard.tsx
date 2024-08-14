"use client"
import React, {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import useAuth from "@/backend/store/Auth";

const AdminDashboard = () => {
    const router = useRouter();
    const {session, user} = useAuth();
    const stats = [
        {
            title: 'Users',
            value: 123,
            icon: 'fas fa-users text-blue-500 text-4xl',
        },
        {
            title: 'Posts',
            value: 45,
            icon: 'fas fa-file text-green-500 text-4xl',
        },
        {
            title: 'Visits',
            value: 789,
            icon: 'fas fa-chart-line text-yellow-500 text-4xl',
        },
        {
            title: 'Settings',
            value: 'Manage',
            icon: 'fas fa-cog text-red-500 text-4xl',
        },
    ];

    useEffect(() => {
        if (!session) {
            router.push("/admin/login");
        } else if (session && user && user.labels.includes("admin")) {
            router.push("/admin/unauthorized");
        }
    }, [session]);

    return (
        <main className="flex-1 p-6 flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full max-w-5xl">
                {stats.map((stat, index) => (
                    <div key={index}
                         className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center">
                        <i className={stat.icon}/>
                        <h2 className="text-lg md:text-xl font-semibold mt-4">{stat.title}</h2>
                        <p className="text-gray-400 text-lg">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl">
                <div className="bg-gray-800 text-teal-400 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-300">Recent Activities</h2>
                    <ul>
                        <li className="mb-4">
                            <p className="text-teal-500"><strong>John Doe</strong> added a new post <em>"How to use
                                Tailwind CSS"</em></p>
                            <p className="text-teal-600 text-sm">2 hours ago</p>
                        </li>
                        <li className="mb-4">
                            <p className="text-teal-500"><strong>Jane Smith</strong> updated settings</p>
                            <p className="text-teal-600 text-sm">5 hours ago</p>
                        </li>
                        <li className="mb-4">
                            <p className="tt5"><strong>Bob Johnson</strong> commented on <em>"React vs
                                Vue"</em></p>
                            <p className="text-teal-600 text-sm">1 day ago</p>
                        </li>
                        {/* Add more recent activities as needed */}
                    </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-300">Quick Links</h2>
                    <ul>
                        <li className="mb-4">
                            <Link href="/admin/posts"
                                  className="flex items-center text-teal-400 hover:text-teal-500 transition-colors duration-500">
                                <i className="fas fa-pen mr-2"/>
                                Manage Posts
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/admin/settings"
                                  className="flex items-center text-teal-400 hover:text-teal-500 transition-colors duration-500">
                                <i className="fas fa-cog mr-2"/>
                                Settings
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/admin/profile"
                                  className="flex items-center text-teal-400 hover:text-teal-500 transition-colors duration-500">
                                <i className="fas fa-user mr-2"/>
                                Edit Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default AdminDashboard;
