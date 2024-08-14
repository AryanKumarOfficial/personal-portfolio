"use client"
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
    const [userDetails, setUserDetails] = useState({title: "", bio: ""});
    useEffect(() => {
        fetch("/api/settings/home")
            .then((res) => res.json())
            .then((data) => {
                setUserDetails(data);
                console.log(data);
            })
            .catch((error) => console.error("Failed to fetch settings:", error));
    }, []);
    return (
        <>
            <section
                className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen py-24 bg-gray-900 px-8 !overflow-x-hidden">
                <div className="flex-1 text-center md:text-left p-6">
                    <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-teal-400 font-bold text-7xl py-4 block">Hi,</span> I'm Aryan Kumar
                    </h1>
                    <h2 className="text-xl md:text-3xl text-teal-400 mb-4">{userDetails.title}</h2>
                    <p className="text-lg text-left md:text-xl text-gray-400 mb-6">
                        {userDetails.bio}
                    </p>
                    <Link href="/about"
                          className="inline-block bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                        About Me <i className="fas fa-user ml-2"></i>
                    </Link>
                </div>

                <div className="flex-1 text-center mb-8 md:mb-0">
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
