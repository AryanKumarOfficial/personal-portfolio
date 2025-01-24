import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://aryankumarofficial.tech/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://aryankumarofficial.tech/about',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://aryankumarofficial.tech/contact',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://aryankumarofficial.tech/blogs',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://aryankumarofficial.tech/portfolio',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
    ];
}