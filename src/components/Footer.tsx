import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/aryankumarofficial', icon: <FaGithub /> },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aryankumarofficial', icon: <FaLinkedinIn /> },
        { name: 'Twitter', href: 'https://twitter.com/aryankumar', icon: <FaTwitter /> },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-teal-400">Aryan Kumar</h1>
                        <p className="text-gray-400 mt-2">Full Stack Developer</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex justify-center md:justify-start space-x-6 md:space-x-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-teal-400 transition duration-300 uppercase text-sm tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-end space-x-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className="text-gray-400 hover:text-teal-400 transition duration-300 text-2xl"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10"></div>

                {/* Copyright */}
                <div className="text-center mt-6 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Aryan Kumar. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
