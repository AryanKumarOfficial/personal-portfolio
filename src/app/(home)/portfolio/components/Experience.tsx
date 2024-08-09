import React from 'react';

const timeline = [
    {
        year: '2020',
        title: 'Software Engineer',
        company: 'Tech Innovators Inc.',
        description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to design and implement new features.',
        location: 'San Francisco, CA'
    },
    {
        year: '2022',
        title: 'Senior Software Engineer',
        company: 'Creative Solutions Ltd.',
        description: 'Led a team of developers in building scalable solutions for e-commerce platforms. Improved application performance and scalability through optimization techniques.',
        location: 'New York, NY'
    },
];

const Experience: React.FC = () => {
    return (
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-teal-400">Professional Experience</h2>
                <div className="relative">
                    <div
                        className="border-l-2 border-teal-400 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                    {timeline.map((item, index) => (
                        <div key={index} className="mb-16 flex items-start justify-center">
                            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md text-center relative">
                                <div className="absolute left-[-30px] top-1/2 transform -translate-y-1/2">
                                    {/*<div className="w-6 h-6 bg-teal-400 rounded-full"></div>*/}
                                </div>
                                <h4 className="text-2xl font-bold text-teal-400">{item.year}</h4>
                                <h5 className="text-xl font-semibold mt-2">{item.title}</h5>
                                <p className="text-md font-medium text-gray-300 mt-1">{item.company}</p>
                                <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                                <p className="text-sm text-gray-500 mt-4 italic">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
