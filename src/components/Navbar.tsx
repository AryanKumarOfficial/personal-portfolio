"use client";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const renderLinks = () =>
        [
            {name: "Home", href: "/"},
            {name: "About", href: "/about"},
            {name: "Portfolio", href: "/portfolio"},
            {name: "Blogs", href: "/blogs"},
            {name: "Contact", href: "/contact"}
        ].map((link, index) => (
            <Link
                key={index}
                href={link.href}
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white after:content-[''] after:block after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full uppercase"
            >
                {link.name}
            </Link>
        ));

    return (
        <nav
            className="p-4 fixed w-full z-10 shadow-md bg-gray-800"
        >
            <div
                className="max-w-6xl mx-auto flex flex-row-reverse md:flex-row flex-wrap justify-center md:justify-between items-center">
                <Link href="/" className="text-white text-xl md:text-3xl font-bold capitalize">
                    AryanKumarOfficial
                </Link>
                <div className="hidden md:flex space-x-4">
                    {renderLinks()}
                </div>
            </div>
            <button
                onClick={toggleMenu}
                name="menu"
                aria-label="Toggle Menu"
                className="md:hidden text-white absolute top-1/2 transform -translate-y-1/2 left-4"
            >
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-4xl`}></i>
            </button>

            {/* Blur background overlay */}
            {isMenuOpen && (
                <div
                    className="fixed md:hidden inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                    onClick={toggleMenu} // Close menu when the backdrop is clicked
                ></div>
            )}

            <aside
                id="side-menu"
                className={`fixed top-0 left-0 h-full w-2/3 bg-gray-800 transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-500 ease-in-out z-20 md:hidden`}
                role="menu"
            >
                <button onClick={toggleMenu} className="text-white absolute top-10 transform -translate-y-1/2 right-4">
                    <i className="fas fa-times text-4xl"></i>
                </button>
                <div className="flex flex-col justify-center items-center space-y-4 h-full">
                    {renderLinks()}
                </div>
            </aside>
        </nav>
    );
};

export default Navbar;
