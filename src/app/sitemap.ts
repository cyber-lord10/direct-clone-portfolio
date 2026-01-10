import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://nzenongbraxton.com',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://nzenongbraxton.com/projects',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://nzenongbraxton.com/about',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://nzenongbraxton.com/team',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://nzenongbraxton.com/contact',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://nzenongbraxton.com/resume.pdf',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: 'https://nzenongbraxton.com/thumbnail.jpeg',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https://nzenongbraxton.com/hero-bg.jpeg',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: 'https://nzenongbraxton.com/icon.svg',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];
}
