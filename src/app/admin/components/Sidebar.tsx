"use client";
import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import ProfileDD from "@/app/admin/components/Profile";

const Sidebar: React.FC = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setSidebarOpen(false);
        }
    };

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <aside
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-md transform ${
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
                            <li className={pathname === "/admin/dashboard" ? "bg-gray-200 rounded" : ""}>
                                <Link onClick={handleToggleSidebar} href="/admin/dashboard"
                                      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                                    <i className="mr-2 fas fa-tachometer-alt"/>
                                    Dashboard
                                </Link>
                            </li>
                            <li className={pathname === "/admin/posts" ? "bg-gray-200 rounded" : ""}>
                                <Link onClick={handleToggleSidebar} href="/admin/posts"
                                      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                                    <i className="mr-2 fas fa-newspaper"/>
                                    Posts
                                </Link>
                            </li>
                            <li className={pathname === "/admin/settings" ? "bg-gray-200 rounded" : ""}>
                                <Link onClick={handleToggleSidebar} href="/admin/settings"
                                      className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
                                    <i className="mr-2 fas fa-cog"/>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="flex fixed w-full items-center justify-between p-4 bg-white shadow-md">
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
                            <div className="">
                                <ProfileDD/>
                            </div>
                        </div>
                    )}
                </header>
                {/*<main*/}
                {/*    className="flex-1 p-6 bg-gray-100 overflow-y-auto flex flex-col justify-center items-center min-h-screen h-fit">*/}
                {/*    {children}*/}
                {/*</main>*/}
                {/*<footer className="p-4 bg-white shadow-md text-center">*/}
                {/*    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>*/}
                {/*</footer>*/}
                {/*</div>*/}
            </div>

        </>

    )
        ;
};

export default Sidebar;
