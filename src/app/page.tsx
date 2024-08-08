import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 p-8">
                <div className="flex-1 text-center md:text-left p-6">
                    <h1 className="text-5xl font-bold text-white mb-4">Hi, I'm Aryan Kumar</h1>
                    <h2 className="text-3xl text-teal-400 mb-4">Full Stack Developer</h2>
                    <p className="text-lg text-justify text-gray-400 mb-6">
                        I am a Full Stack Developer with 3+ years of experience in web development. I have a strong
                        understanding of web technologies and frameworks. I am passionate about building scalable and
                        responsive web applications. I am always eager to learn new technologies and frameworks.
                    </p>
                    <Link href="/about"
                          className="inline-block bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                        About Me <i className="fas fa-user ml-2"></i>
                    </Link>
                </div>

                <div className="flex-1 text-center">
                    <div className="inline-block">
                        <Image
                            src={`/assets/images/user.jpg`}
                            alt="Profile Picture"
                            width={400}
                            height={400}
                            quality={100}
                            placeholder="blur"
                            blurDataURL="/images/avatar.jpg"
                            className="rounded-full border-4 border-teal-500 shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
