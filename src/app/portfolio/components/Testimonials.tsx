import React from 'react';

const testimonials = [
    {quote: 'Great service!', name: 'John Doe', title: 'CEO of Company'},
    {quote: 'Highly recommend!', name: 'Jane Smith', title: 'Manager at Business'},
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-teal-400">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-lg flex flex-col items-center"
                        style={{
                            boxShadow:"12px 12px 12px rgba(0, 0, 0, 0.2), -10px -10px 10px #1f2937"
                        }}
                        >
                            <p className="text-lg italic mb-4 text-center">"{testimonial.quote}"</p>
                            <h5 className="text-xl font-semibold text-teal-400">{testimonial.name}</h5>
                            <p className="text-gray-400 text-center">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
