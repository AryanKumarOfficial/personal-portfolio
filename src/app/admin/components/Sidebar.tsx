"use client";
import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import ProfileDD from "@/app/admin/components/Profile";
import useAuth from "@/backend/store/Auth";
import SleekLoadingBar from "@/components/LoadingBar";
import {Toaster} from "react-hot-toast";

const Sidebar: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {session} = useAuth();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setSidebarOpen(false);
        }
    };

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // const handleKeyDown = (event: React.KeyboardEvent) => {
    //     if (event.key === 'Escape') {
    //         setSidebarOpen(false);
    //     }
    // };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (session) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [session]);

    return (
        <>
            <aside
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-teal-400 shadow-md shadow-gray-950 transform ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-200 ease-in-out md:translate-x-0`}
            >
                <div className="p-6 relative">
                    <Link onClick={handleToggleSidebar} href="/admin/"
                          className="flex items-center justify-center">
                        <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
                    </Link>
                    <button className="md:hidden absolute top-[1.95rem] right-4" onClick={handleToggleSidebar}>
                        <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}/>
                    </button>
                    <nav className="mt-10">
                        <ul>
                            <li className={`my-2 ${pathname === "/admin/dashboard"? "bg-gray-700 rounded" : ""}`}>
                                <Link onClick={handleToggleSidebar} href="/admin/dashboard"
                                      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                                    <i className="mr-2 fas fa-tachometer-alt"/>
                                    Dashboard
                                </Link>
                            </li>
                            <li className={pathname === "/admin/posts" ? "bg-gray-700 rounded" : ""}>
                                <Link onClick={handleToggleSidebar} href="/admin/blogs"
                                      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                                    <i className="mr-2 fas fa-newspaper"/>
                                    Blogs
                                </Link>
                            </li>
                            <li className={pathname === "/admin/settings" ? "bg-gray-700 rounded" : ""}>
                                <Link onClick={handleToggleSidebar} href="/admin/settings"
                                      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                                    <i className="mr-2 fas fa-cog"/>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            <div className="flex-1 flex flex-col">
                <header
                    className="flex fixed w-full items-center justify-between p-4 bg-gray-800 text-teal-400 shadow-md shadow-slate-500">
                    <div className="flex items-center">
                        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}/>
                        </button>
                        <h1 className="text-xl font-semibold ml-4">Admin Panel</h1>
                    </div>

                    {pathname !== '/admin/login' && (
                        <div
                            className={`flex items-center space-x-4 ${pathname === '/admin/' ? 'hidden' : ''
                            }`}
                        >
                            {/* Avatar image */}
                            <div className={isAuthenticated ? 'block' : 'hidden'}>
                                <ProfileDD/>
                            </div>
                        </div>
                    )}
                </header>
                <main
                    className="flex-1 p-6 bg-gray-900 overflow-y-auto flex flex-col justify-center items-center min-h-screen h-fit">
                    <SleekLoadingBar/>
                    <Toaster
                        position={'top-right'}
                        reverseOrder={false}
                        toastOptions={{
                            className: '',
                            style: {
                                background: '#111827',
                                color: '#2dd4bf',
                                zIndex: 1,
                            },
                            duration: 5000,
                            success: {
                                style: {
                                    background: '#10B981',
                                    color: '#fff',
                                },
                            },

                        }}
                    />
                    {children}
                </main>
            </div>

        </>

    )
        ;
};

export default Sidebar;
