import React from 'react';
import Link from "next/link";

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-4">Oops! Page not found.</p>
                <p className="mb-8">The page you are looking for does not exist or has been moved.</p>
                <Link href="/"
                      className="bg-teal-400 text-gray-900 py-2 px-6 rounded-lg font-semibold hover:bg-teal-500 transition-colors">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
