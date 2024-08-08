import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="container mx-auto bg-gray-800 text-white py-6"
        style={{
            padding: '2rem',
        }}
        >
            <div className="container mx-auto flex justify-between">
                <div>
                    <p>&copy; 2024 Aryan Kumar. All rights reserved.</p>
                </div>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-teal-400">Home
                    </Link>
                    <Link href="/about" className="hover:text-teal-400">About
                    </Link>
                    <Link href="/portfolio" className="hover:text-teal-400">Portfolio
                    </Link>
                    <Link href="/contact" className="hover:text-teal-400">Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
