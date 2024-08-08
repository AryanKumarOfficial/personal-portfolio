import React from 'react';
import Link from "next/link";

const CTASection: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-20 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-lg mb-6">Contact me today to discuss your needs and how I can help.</p>
                <Link
                    href={'/contact'}
                    className="bg-teal-400 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold"
                >
                    Get in Touch
                </Link>
            </div>
        </section>
    );
};

export default CTASection;
