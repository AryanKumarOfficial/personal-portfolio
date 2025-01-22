"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
import Icon from "@/app/admin/components/Icon";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const renderLinks = () =>
        [
            {
                name: "Home",
                href: "/",
                icon: "fas fa-home"
            },
            {
                name: "About",
                href: "/about",
                icon: "fas fa-user"
            },
            {
                name: "Portfolio",
                href: "/portfolio",
                icon: "fas fa-briefcase"
            },
            {
                name: "Blogs",
                href: "/blogs",
                icon: "fas fa-blog"
            },
            {
                name: "Contact",
                href: "/contact",
                icon: "fas fa-envelope"
            }
        ].map((link, index) => (
            <Link
                key={index}
                href={link.href}
                onClick={toggleMenu}
                className="text-gray-300 w-full md:w-auto text-left hover:text-teal-400 uppercase flex items-center space-x-2 py-2 px-4 md:p-0 transition-colors duration-300 ease-in-out"
            >
                <Icon className={`${link.icon} text-xl md:block hidden`} />
                <span className="md:text-lg">{link.name}</span>
            </Link>
        ));

    return (
        <nav className="p-4 fixed w-full z-10 shadow-md bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 backdrop-blur-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className={`${styles.waveText} text-white text-2xl md:text-3xl font-bold uppercase`}>
                    Aryan&nbsp;Kumar
                </Link>
                <div className="hidden md:flex space-x-8">{renderLinks()}</div>
            </div>
            <button
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                className="md:hidden text-white absolute top-1/2 transform -translate-y-1/2 left-4"
            >
                <Icon className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-3xl`} />
            </button>

            {/* Overlay for mobile */}
            {isMenuOpen && (
                <div
                    className="fixed md:hidden inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"
                    onClick={toggleMenu} // Close menu when the backdrop is clicked
                ></div>
            )}

            {/* Mobile Menu */}
            <aside
                id="side-menu"
                className={`fixed top-0 left-0 h-full w-3/4 bg-gray-900 transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-500 ease-in-out z-20 md:hidden`}
                role="menu"
            >
                <button onClick={toggleMenu} className="text-white absolute top-4 right-4">
                    <Icon className="fas fa-times text-2xl" />
                </button>
                <div className="flex flex-col items-start space-y-4 px-6 py-10">
                    {renderLinks()}
                </div>
            </aside>
        </nav>
    );
};

export default Navbar;
