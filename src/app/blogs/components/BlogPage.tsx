"use client";
import React from "react";
import BlogPost from "../components/BlogPost";

const blogs = [
    {
        id: Math.ceil(Math.random() * Date.now()),
        title: "Understanding React Hooks",
        date: "July 20, 2024",
        description: "A comprehensive guide to understanding and using React Hooks in modern web development.",
        author: "Aryan Kumar",
        link: "/blogs/react-hooks",
        tags: ["React", "JavaScript", "Frontend", "Web Development", "React Hooks", "React 19",],
    },
    {
        id: Math.ceil(Math.random() * Date.now()),
        title: "Next.js vs. React: What's the Difference?",
        date: "August 5, 2024",
        description: "A detailed comparison between Next.js and React, and when to use each for your projects.",
        author: "Aryan Kumar",
        link: "/blogs/nextjs-vs-react",
        tags: ["React", "Next.js", "JavaScript", "Frontend", "Web Development",],
    },
    {
        id: Math.ceil(Math.random() * Date.now()),
        title: "The Benefits of Tailwind CSS",
        date: "August 20, 2024",
        description: "Discover the benefits of using Tailwind CSS for styling your web applications and websites.",
        author: "Aryan Kumar",
        link: "/blogs/tailwind-css",
        tags: ["Tailwind CSS", "CSS", "Frontend", "Web Development", "Styling",],
    },
    // Add more blog posts as needed
];

const BlogsPage: React.FC = () => {
    return (
        <section className="min-h-screen bg-gray-900 text-white py-24 flex flex-col items-center justify-between p-24">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl text-center font-bold text-teal-400 mb-8 uppercase"><span
                    className={"uppercase text-white"}> my</span> Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogPost
                            key={index}
                            id={blog.id}
                            title={blog.title}
                            date={blog.date}
                            description={blog.description}
                            author={blog.author}
                            tags={blog.tags}
                            link={blog.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;
