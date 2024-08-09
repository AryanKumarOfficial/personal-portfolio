"use client"
import React from 'react';

const HeroSection: React.FC = () => {
    return (<>
            <style jsx>{`
                .animate-water-text {
                    background-size: 200% 200%;
                    animation: waterText 5s ease infinite;
                }

                @keyframes waterText {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }


            `}</style>
            <section className="bg-gray-900 text-white py-36 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl  font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-transparent to-teal-400 animate-water-text">
                        <span className={"block md:inline"}> Welcome </span>
                        <span className={"block md:inline"}>to </span>

                        My Portfolio</h1>
                    <p className="text-xs md:text-xl">Showcasing my work, skills, and experiences.</p>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
