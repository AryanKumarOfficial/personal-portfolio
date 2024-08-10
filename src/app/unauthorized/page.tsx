// app/unauthorized/page.tsx

import Link from 'next/link';

const UnauthorizedPage = () => {
    return (
        <body>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="text-center bg-gray-800 p-10 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-teal-500 mb-6">Unauthorized Access</h1>
                <p className="text-lg text-gray-300 mb-8">
                    You do not have permission to view this page.
                </p>
                <Link href="/" legacyBehavior={true}>
                    <a className="text-teal-400 font-semibold hover:text-teal-500 transition-colors duration-500">Go back to the homepage</a>
                </Link>
            </div>
        </div>
        </body>
    );
};

export default UnauthorizedPage;
