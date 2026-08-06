export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': 'https://lysbyrenee.com',
	name: 'Love Your Skin by Renee',
	description:
		'Licensed aesthetician offering advanced skincare treatments including customized facials, dermaplane facials, microneedling, and specialized skin treatments.',
	url: 'https://lysbyrenee.com',
	telephone: '(858) 663-9538',
	email: 'hello@lysbyrenee.com',
	image: 'https://lysbyrenee.com/facial.png',
	priceRange: '$100 - $250+',
	areaServed: {
		'@type': 'City',
		name: 'San Diego',
	},
	sameAs: [
		// Add your social media URLs here when available
		// 'https://www.instagram.com/lysbyrenee',
		// 'https://www.facebook.com/lysbyrenee',
	],
};

export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'Love Your Skin by Renee',
	url: 'https://lysbyrenee.com',
	logo: 'https://lysbyrenee.com/logo.png',
	description: 'Advanced skincare services by a licensed aesthetician',
	founder: {
		'@type': 'Person',
		name: 'Renée',
		jobTitle: 'Licensed Aesthetician',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '(858) 663-9538',
		contactType: 'Customer Service',
	},
};

export const servicesSchema = [
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Customized Facial',
		description:
			'A clinically designed treatment tailored entirely to your skin\'s specific needs. This fully customized facial targets your specific skincare goals through a clinical, results-driven approach. Features microdermabrasion, targeted enzyme peels, extractions, and a custom-blended mask.',
		duration: 'PT1H',
		price: '125',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Love Your Skin by Renee',
		},
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Express Facial',
		description:
			'A 45-minute express facial perfect for busy schedules. Designed to deeply hydrate, refresh, and revitalize your skin when you need a little extra love on the go.',
		duration: 'PT45M',
		price: '100',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Love Your Skin by Renee',
		},
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Dermaplane Facial',
		description:
			'A 75-minute facial with zero downtime. A gentle removal of unwanted facial hair and dead skin followed by a customized facial treatment. Instantly brightens your complexion and leaves your face incredibly soft and perfectly prepped for makeup application.',
		duration: 'PT1H15M',
		price: '155',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Love Your Skin by Renee',
		},
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Microneedling',
		description:
			'A results-driven treatment designed to improve skin health at a deeper level. Uses precision controlled micro-injuries to activate the skin\'s natural repair process. Clinically proven to reduce acne scars, fine lines, hyperpigmentation, and uneven texture. Series of 3 to 6 recommended.',
		duration: 'PT1H',
		price: '250',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Love Your Skin by Renee',
		},
	},
];

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: item.url,
	})),
});
