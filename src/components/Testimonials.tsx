import React from 'react';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: 'John Doe',
            feedback: 'Aryan is a fantastic developer with great attention to detail.',
            role: 'CEO, Tech Solutions Inc.',
        },
        {
            name: 'Jane Smith',
            feedback: 'Working with Aryan has been a pleasure. Highly recommend!',
            role: 'CTO, Web Innovations LLC',
        },
        // Add more testimonials as needed
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-teal-400 mb-8">Testimonials</h1>
                <div className="space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <p className="text-lg mb-4">"{testimonial.feedback}"</p>
                            <h3 className="text-xl font-bold text-teal-400">{testimonial.name}</h3>
                            <span className="text-sm">{testimonial.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
