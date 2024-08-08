import React from 'react';

const certifications = [
    {title: 'Certified React Developer', date: '2023'},
    {title: 'Top Performer Award', date: '2022'},
];

const CertificationsSection: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-teal-400">Certifications & Awards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index}
                             className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform">
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                    <span className="fa-solid fa-star"></span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-teal-400">{cert.title}</h4>
                                    <p className="text-gray-400">{cert.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
