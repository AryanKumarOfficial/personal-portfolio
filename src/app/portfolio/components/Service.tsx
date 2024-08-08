"use client";
import React from "react";

const ServicesSection: React.FC = () => {

    const services = [
        {
            title: "Web Development",
            description: "Custom websites and web applications using the latest technologies like React, Next.js, and Tailwind CSS.",
            icon: "fas fa-laptop-code fa-4x"
        },
        {
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies including SEO, content marketing, and PPC campaigns.",
            icon: "fas fa-chart-line fa-4x"
        },
        {
            title: "E-commerce Management",
            description: "Expertise in managing and optimizing e-commerce platforms for increased sales and customer engagement.",
            icon: "fas fa-shopping-cart fa-4x"
        }
    ];

    return (
        <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-teal-400 mb-6">Services Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <i className={`${service.icon} text-4xl text-center w-full text-teal-400 mb-4`}></i>
                            <h3 className="text-2xl font-bold text-teal-400 mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
