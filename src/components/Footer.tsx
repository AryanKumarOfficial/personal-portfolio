"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { GridPattern } from "@/components/ui/aceternity/grid-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TextShimmer } from "@/components/ui/aceternity/text-shimmer";

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/aryankumarofficial', icon: <FaGithub className="h-5 w-5" /> },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aryankumarofficial', icon: <FaLinkedinIn className="h-5 w-5" /> },
        { name: 'Twitter', href: 'https://twitter.com/aryankumar', icon: <FaTwitter className="h-5 w-5" /> },
        { name: 'Instagram', href: 'https://instagram.com/aryankumarofficial', icon: <FaInstagram className="h-5 w-5" /> },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact', href: '/contact' },
    ];

    const quickLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Skills', href: '/about#skills' },
        { name: 'Resume', href: '/resume' },
        { name: 'FAQs', href: '/faqs' },
    ];

    return (
        <footer className="relative overflow-hidden pt-20 pb-10 bg-black">
            <GridPattern
                className="absolute inset-0 z-0"
                cellSize={50}
                dotSize={1.5}
                dotClassName="bg-white/20"
            />
            
            {/* Newsletter Section */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mb-20">
                <Card className="bg-black/50 backdrop-blur-md border border-white/10 shadow-glow overflow-hidden">
                    <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-3 text-center md:text-left w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-bold text-white">Subscribe to my newsletter</h3>
                            <p className="text-gray-400">Stay updated with my latest projects and tech articles.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-1/2">
                            <Input 
                                placeholder="Enter your email" 
                                className="bg-white/5 border-white/10 focus:border-teal-500 text-white" 
                            />
                            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                                Subscribe
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            {/* Main Footer Content */}
            <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <TextShimmer className="text-3xl font-bold">
                            Aryan Kumar
                        </TextShimmer>
                        <p className="text-gray-400 max-w-xs">
                            Full Stack Developer specialized in building modern web applications with cutting-edge technologies.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="p-2 bg-white/5 rounded-full hover:bg-teal-500/20 hover:text-teal-400 transition-all duration-300 text-gray-400"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Navigation</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-teal-400 transition-all duration-300 inline-block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Quick Links Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-teal-400 transition-all duration-300 inline-block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">
                                <span className="block text-teal-400 font-medium">Email</span>
                                <a href="mailto:contact@aryankumar.dev" className="hover:text-teal-400 transition-colors duration-300">
                                    contact@aryankumar.dev
                                </a>
                            </li>
                            <li className="text-gray-400">
                                <span className="block text-teal-400 font-medium">Based in</span>
                                India
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="text-center pt-8 text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Aryan Kumar. All rights reserved.
                    </p>
                    <p className="mt-2">
                        Built with Next.js, Tailwind, Shadcn UI & Aceternity UI
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
