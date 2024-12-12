"use client";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema, FormSchema} from "@/backend/schema/message";
import toast from "react-hot-toast";

const Contact: React.FC = () => {

    const socialMediaData = [
        {
            name: 'Facebook',
            icon: 'fab fa-facebook fa-2x',
            link: 'https://facebook.com/aryan.kumar.2505'
        },
        {
            name: 'Twitter',
            icon: 'fab fa-twitter fa-2x',
            link: 'https://x.com/_aryankofficial'
        },
        {
            name: 'Instagram',
            icon: 'fab fa-instagram fa-2x',
            link: 'https://instagram.com/_aryankumarofficial'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin fa-2x',
            link: 'https://linkedin.com/in/aryankumarofficial'
        },
        {
            name: 'Github',
            icon: 'fab fa-github fa-2x',
            link: 'https://github.com/aryankumarofficial'
        },
    ]
    const address = [
        {
            name: 'Address',
            icon: 'fas fa-map-marker-alt',
            text: '1234 Elm St. New York, NY 10001'
        },
        {
            name: 'Email',
            icon: 'fas fa-envelope',
            text: 'aryanak9163@gmail.com'
        },
        {
            name: 'Phone',
            icon: 'fas fa-phone-alt',
            text: '+91 82351 72505'
        }
    ]
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    });
    const [loading, setLoading] = useState(false)
    const onSubmit = async (data: FormSchema) => {
        setLoading(true)
        try {

            const res = await fetch('/contact/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (res.ok) {
                toast.success('Message sent successfully!');
            } else {
                toast.error('An error occurred. Please try again later!');
            }

            reset();
        } catch (e: any) {
            console.log(e?.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-16 pt-32">
            <h1 className="text-5xl font-normal text-teal-400 mb-12 uppercase">Contact <span
                className={'text-white uppercase'}> me</span></h1>

            <section
                className="w-full max-w-4xl flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">

                {/* Contact Form */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-400">Contact Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
                                placeholder="Your Name"
                                {...register('name')}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
                                placeholder="you@example.com"
                                {...register('email')}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="mt-1 block w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out"
                                placeholder="Your message"
                                rows={5}
                                {...register('message')}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white font-semibold py-3 rounded-md hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed mt-4 disabled:bg-gray-700 disabled:text-gray-300"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <section className="md:w-1/2 bg-gray-700 p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-400">Get in Touch</h2>
                    <address className="space-y-4">
                        {address.map((info, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold">
                                        <i className={`${info.icon} mr-2 text-teal-400`}></i> {info.name}
                                    </h3>
                                    <p className="text-gray-300">{info.text}</p>
                                </div>
                            )
                        })}

                    </address>


                    {/* Social Media links  */}

                    <section
                        aria-labelledby={'social-media'}
                        className={'mt-8'}
                    >
                        <h2 id={'social-media'} className="text-2xl font-semibold mb-6 text-teal-400">Social Media</h2>
                        <div className="flex space-x-4">
                            {socialMediaData.map((social, index) => (
                                <a href={social.link}
                                   key={index}
                                   className="text-gray-300 hover:text-teal-400 transition duration-300 ease-in-out">
                                    <span className="sr-only">{social.name}</span>
                                    <i className={`${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </section>

                </section>
            </section>
        </main>
    )
        ;
}

export default Contact;
