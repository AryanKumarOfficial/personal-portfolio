"use client"
import React, {useState} from "react";
import Image from "next/image";
import Newsletter from "@/../public/assets/images/newsletter.jpg";
import toast from "react-hot-toast";

const NewsletterElegant: React.FC = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            toast.success("Thank you for subscribing!");
            setEmail("");
        } else {
            toast.error("Please enter a valid email.");
        }
    };

    return (
        <section className="bg-gray-900 text-white py-12 px-6 sm:px-8">
            <div className="container max-w-md mx-auto flex justify-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
                    <picture className="flex justify-center">
                        <Image
                            src={Newsletter}
                            alt={"newsletter"}
                            className={'mb-6 rounded-full w-32 h-32 object-cover'}
                        />
                    </picture>

                    <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-sm mb-6">Be the first to receive updates and special offers.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        <button
                            type="submit"
                            className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded-md transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default NewsletterElegant;
