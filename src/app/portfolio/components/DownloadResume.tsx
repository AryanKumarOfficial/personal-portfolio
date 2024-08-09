import React from 'react';

const DownloadResume: React.FC = () => {
    return (
        <section className="bg-gray-800 text-white py-20 text-center">
            <div className="container mx-auto">
                <a
                    href="/assets/resume.pdf"
                    className="bg-teal-400 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold"
                    download
                >
                    Download My Resume
                </a>
            </div>
        </section>
    );
};

export default DownloadResume;
