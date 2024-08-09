import React from 'react';

const articles = [
    {
        title: 'Getting Started with React',
        excerpt: 'Learn how to get started with React and build your first web application.',
        link: '/blog/1',
        date: 'August 15, 2024',
        author: 'Jane Doe',
        tags: ['React', 'JavaScript', 'Web Development', 'Frontend', 'UI/UX', 'Web Design', 'Web Development', 'Frontend Development', 'React Development', 'React.js', 'React Library']
    },
    {
        title: 'Enhancing User Experience with JavaScript',
        excerpt: 'This article explores the role of JavaScript in enhancing user experience on websites and web applications.',
        link: '/blog/2',
        date: 'July 10, 2024',
        author: 'John Smith',
        tags: ['JavaScript', 'Web Development', 'Frontend', 'User Experience', 'UI/UX' , 'Web Design', 'Web Development' , 'Frontend Development',
            'JavaScript Development', 'JavaScript Libraries',]
    },
    {
        title: 'SEO Best Practices for 2024',
        excerpt: 'Stay ahead of the competition with the latest SEO best practices for 2024.',
        link: '/blog/3',
        date: 'June 5, 2024',
        author: 'Alice Johnson',
        tags: ['SEO', 'Digital Marketing', 'Content Marketing', 'Search Engine Optimization', 'Marketing', 'Online Marketing',
            'Search Engine Marketing', 'SEM', 'Search Marketing', 'Search Marketing']
    }
];

const Blog: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-[4vw] uppercase font-bold mb-12 text-center text-teal-400">Latest <span
                    className={'uppercase text-white'}> Articles</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                    <i className="fa-solid fa-newspaper"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-teal-400 mb-1">{article.title.length > 30 ? article.title.substring(0, 30) + '...' : article.title}</h4>
                                    <p className="text-gray-400 text-sm mb-1">{article.date}</p>
                                    <p className="text-gray-400 text-sm">by {article.author}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 flex-1">{article.excerpt.length > 100 ? article.excerpt.substring(0, 100) + '...' : article.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex}
                                          className="bg-gray-500 text-gray-950 text-xs font-semibold py-1 px-3 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={article.link}
                               className="mt-auto inline-block bg-teal-400 text-center text-gray-900 py-2 rounded-lg font-semibold hover:bg-teal-500 transition-colors">Read
                                More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
