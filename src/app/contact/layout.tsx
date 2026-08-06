import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact Us | Love Your Skin by Renee',
	description:
		'Get in touch with Renée for skincare consultations and booking. Call (858) 663-9538 or email hello@lysbyrenee.com.',
	openGraph: {
		title: 'Contact Us | Love Your Skin by Renee',
		description: 'Get in touch to book your skincare appointment.',
		url: 'https://www.lysbyrenee.com/contact',
		type: 'website',
		images: [
			{
				url: 'https://www.lysbyrenee.com/logo.png',
				width: 875,
				height: 499,
				alt: 'Love Your Skin by Renee logo',
			},
		],
	},
	alternates: {
		canonical: 'https://www.lysbyrenee.com/contact',
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
