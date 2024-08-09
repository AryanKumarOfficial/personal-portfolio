"use client";
import React from "react";
import Link from "next/link";

interface BlogPostProps {
    id: number;
    title: string;
    date: string;
    description: string;
    author: string;
    link: string;
    tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({id, title, date, description, link, author, tags}) => {
    return (
        <>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
                <div className="flex items-center mb-4">
                    <div
                        className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        <i className="fa-solid fa-newspaper"></i>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-teal-400 mb-1">{title.length > 30 ? title.substring(0, 30) + '...' : title}</h4>
                        <p className="text-gray-400 text-sm mb-1">{date} • {author}</p>
                    </div>
                </div>
                <p className="text-gray-300 mb-4 flex-1">{description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, tagIndex) => (
                        <span key={tagIndex}
                              className="bg-gray-500 text-gray-950 text-xs font-semibold py-1 px-3 rounded-full">
                                        {tag}
                                    </span>
                    ))}
                </div>
                <Link href={{
                    pathname: `/blogs/${id}`,
                    query: {slug: id}
                }} passHref
                      className="mt-auto inline-block bg-teal-400 text-center text-gray-900 py-2 rounded-lg font-semibold hover:bg-teal-500 transition-colors">Read
                    More</Link>
            </div>
        </>
    )
        ;
};

export default BlogPost;
