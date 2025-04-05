import { MetadataRoute } from 'next'

// Use a fixed date for lastModified to ensure consistency
const lastModified = new Date('2025-04-06T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.aryankumarofficial.tech/',
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://www.aryankumarofficial.tech/about',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.aryankumarofficial.tech/contact',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.aryankumarofficial.tech/blogs',
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://www.aryankumarofficial.tech/portfolio',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.aryankumarofficial.tech/portfolio/projects',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://www.aryankumarofficial.tech/learning-path',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];
}