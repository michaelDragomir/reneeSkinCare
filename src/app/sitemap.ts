import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://lysbyrenee.com',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://lysbyrenee.com/services',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://lysbyrenee.com/contact',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
	];
}
