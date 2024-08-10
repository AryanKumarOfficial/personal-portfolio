"use client";
import React from "react";

const ReactFreshersBlog: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative h-96 bg-cover bg-center"
                 style={{backgroundImage: "url('/images/react-hero.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-white mb-4">React for Freshers: A Beginner’s Guide</h1>
                        <p className="text-gray-400">Published on August 7, 2024 • By Aryan Kumar</p>
                    </div>
                </div>
            </div>

            {/* Blog Content Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300">
                            React is a powerful JavaScript library for building user interfaces, particularly
                            single-page applications where data needs to be displayed dynamically.
                            This guide will take you through the basics of React, perfect for freshers or anyone new to
                            the library.
                        </p>

                        <h2 className="text-3xl font-bold text-teal-400">What is React?</h2>
                        <p className="text-lg text-gray-300">
                            React is an open-source JavaScript library developed by Facebook for building user
                            interfaces.
                            It allows developers to create large web applications that can update and render efficiently
                            in response to data changes.
                            The main concept behind React is the component-based architecture, where UI components can
                            be reused and combined to create complex interfaces.
                        </p>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-teal-400">Key Points:</h3>
                            <ul className="list-disc list-inside text-lg text-gray-300 mt-4">
                                <li>Component-based architecture for reusable code.</li>
                                <li>Virtual DOM for efficient rendering.</li>
                                <li>Rich ecosystem and strong community support.</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-teal-400">Getting Started with React</h2>
                        <p className="text-lg text-gray-300">
                            To start using React, you can include it in your project via a CDN or install it using npm.
                            For beginners, I recommend starting with Create React App,
                            a comfortable environment that provides everything you need to build a modern React
                            application without configuration.
                        </p>

                        <pre className="bg-gray-800 p-4 rounded-lg text-teal-400 overflow-auto">
                            <code>
                                npx create-react-app my-app
                                cd my-app
                                npm start
                            </code>
                        </pre>

                        <h2 className="text-3xl font-bold text-teal-400">Conclusion</h2>
                        <p className="text-lg text-justify text-gray-300">
                            React is a must-learn library for any aspiring web developer. Its component-based
                            architecture and strong ecosystem make it an excellent choice for building modern web
                            applications.
                            Whether you are just starting or looking to enhance your skills, React offers a wealth of
                            opportunities to grow as a developer.
                        </p>
                    </div>
                </div>
            </div>

            {/* Author Info Section */}
            <div className="bg-gray-800 py-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-teal-400 mb-4">About the Author</h3>
                        <p className="text-lg text-justify text-gray-300">
                            Aryan Kumar is a full-stack developer with a passion for learning and sharing knowledge.
                            He has a strong background in web development and has been working with React for several
                            years.
                            Aryan enjoys writing technical content and helping others get started in the world of
                            programming.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center justify-center mt-6 space-x-4">
                            <a href="#" className="text-gray-400 hover:text-teal-400">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-teal-400">
                                <i className="fa-brands fa-instagram fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactFreshersBlog;
