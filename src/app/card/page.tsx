import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 transform -skew-y-6"></div>
            <div
                className="relative flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                <div className="flex-1 text-center p-6 md:order-2">
                    <Image
                        src={`/assets/images/user.jpg`}
                        alt="Profile Picture"
                        width={400}
                        height={400}
                        quality={100}
                        placeholder="blur"
                        blurDataURL="/images/avatar.jpg"
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="flex-1 p-6 md:order-1 text-center md:text-left">
                    <h1 className="text-5xl font-bold text-white mb-4">Hi, I'm Aryan Kumar</h1>
                    <h2 className="text-3xl text-blue-400 mb-4">Front-end Developer</h2>
                    <p className="text-lg text-gray-400 mb-6">
                        I am an open-source enthusiast and maintainer. I have learned a lot from the open-source
                        community, and I love how collaboration and knowledge sharing happen through open-source.
                    </p>
                    <Link href="/about">
                        <button
                            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                            About Me <i className="fas fa-user ml-2"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
