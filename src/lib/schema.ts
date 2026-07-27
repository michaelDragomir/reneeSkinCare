export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': 'https://lysbyrenee.com',
	name: 'Renée Skin Care',
	description:
		'Licensed aesthetician offering advanced skincare treatments including facials, HydraFacial, and chemical peels.',
	url: 'https://lysbyrenee.com',
	telephone: '(555) 123-4567',
	email: 'hello@lysbyrenee.com',
	image: 'https://lysbyrenee.com/facial.png',
	priceRange: '$175 - $375',
	areaServed: {
		'@type': 'City',
		name: 'San Francisco',
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
	name: 'Renée Skin Care',
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
		telephone: '(555) 123-4567',
		contactType: 'Customer Service',
	},
};

export const servicesSchema = [
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'The Works — Signature Intensive',
		description:
			'A clinically specified customized treatment addressing and correcting your specific skincare needs. Includes dermal infusion, peels, extractions, oxygen therapy, microcurrent, customized mask, and modifications according to your skin type.',
		duration: 'PT2H',
		price: '375',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Renée Skin Care',
		},
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Classic Facial — Signature Treatment',
		description:
			'A comprehensive facial treatment tailored to your skin type. Includes cleansing, exfoliation, extractions, massage, serums, and a customized mask to address your specific concerns.',
		duration: 'PT1H30M',
		price: '225',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Renée Skin Care',
		},
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'HydraFacial — Vortex Fusion',
		description:
			'A non-invasive, non-chemical hydradermabrasion treatment. Uses water, serums, and suction to cleanse, extract, and hydrate the skin. Leaves skin glowing and refreshed.',
		duration: 'PT45M',
		price: '175',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Renée Skin Care',
		},
	},
	{
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Chemical Peel — Customized Strength',
		description:
			'A professional chemical peel customized to your skin concerns. Helps improve texture, tone, fine lines, and hyperpigmentation. Includes pre and post-care instructions.',
		duration: 'PT1H',
		price: '200',
		priceCurrency: 'USD',
		provider: {
			'@type': 'LocalBusiness',
			name: 'Renée Skin Care',
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
