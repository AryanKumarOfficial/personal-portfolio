import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {

    const renderSocialLinks = () => {
        const socialLinks = [
            {name: 'GitHub', href: 'https://github.com/aryankumarofficial', icon: 'fab fa-github'},
            {name: 'LinkedIn', href: 'https://www.linkedin.com/in/aryankumarofficial', icon: 'fab fa-linkedin'},
            {name: 'Twitter', href: 'https://twitter.com/aryankumar', icon: 'fab fa-twitter'},
        ]

        return socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-teal-400 transition duration-300 mr-6">
                <i className={`${link.icon} text-2xl`}></i>
            </a>
        ))
    }

    const renderNavLinks = () => {
        const navLinks = [
            {name: 'Home', href: '/'},
            {name: 'About', href: '/about'},
            {name: 'Portfolio', href: '/portfolio'},
            {name: 'Blogs', href: '/blogs'},
            {name: 'Contact', href: '/contact'},
        ];

        return navLinks.map((link, index) => (
            <Link key={index} href={link.href}
                  className="text-gray-400 hover:text-teal-400 transition duration-300 mr-4 md:mr-8 uppercase">{link.name}</Link>
        ));
    }

    return (
        <footer className="bg-gray-950 text-white py-8 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Brand & Navigation */}
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="mb-6 md:mb-0">
                            <h1 className="text-2xl font-bold text-teal-400">Aryan Kumar</h1>
                            <p className="text-gray-400 text-center md:text-left text-sm">Full Stack Developer</p>
                        </div>
                        <nav className="flex flex-col md:flex-row md:ml-12 mt-4 md:mt-0">
                            {renderNavLinks()}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="flex mt-6 md:mt-0">
                        {renderSocialLinks()}
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Aryan Kumar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
