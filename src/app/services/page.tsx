import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { SchemaScript } from '@/components/SchemaScript';
import { MobileNav } from '@/components/MobileNav';
import { servicesSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
	title: 'Services & Pricing | Love Your Skin by Renee',
	description:
		'Professional skincare treatments including customized facials, dermaplane, microneedling, and intensive treatments. Custom solutions for all skin types.',
	openGraph: {
		title: 'Services & Pricing | Love Your Skin by Renee',
		description: 'Professional skincare treatments tailored to your skin.',
		url: 'https://www.lysbyrenee.com/services',
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
		canonical: 'https://www.lysbyrenee.com/services',
	},
};

export default function Services() {
	const services = [
		{
			name: 'Customized Facial',
			subtitle: 'Signature Intensive',
			duration: '60 minutes',
			price: '$125+',
			description:
				"A clinically designed treatment tailored entirely to your skin's specific needs. Your session is built from the ground up to correct concerns and enhance your natural complexion.  This fully customized facial targets your specific skincare goals through a clinical, results-driven approach. Depending on what your skin needs that day, your session may feature microdermabrasion, targeted enzyme peels, extractions, and a custom-blended mask—leaving you completely relaxed and glowing.",
		},
		{
			name: 'Express Facial',
			subtitle: 'Signature Treatment',
			duration: '45 minutes',
			price: '$100',
			description:
				'Short on time but still want that signature glow? This 45-minute express facial is the perfect pick-me-up for busy schedules. Enjoy a quick, highly effective treatment designed to deeply hydrate, refresh, and revitalize your skin when you need a little extra love on the go.',
		},
		{
			name: 'Dermaplane Facial',
			subtitle: 'Signature Treatment',
			duration: '75 minutes',
			price: '$155',
			description:
				'Experience the ultimate glow with zero downtime. This 75-minute facial will leave your skin radiant! A gentle removal of unwanted facial hair and dead skin is followed by a customized facial treatment tailored specifically to your needs. Not only does this service instantly brighten your complexion, but it also allows your personalized serums to penetrate deeper, leaving your face incredibly soft and perfectly prepped for seamless makeup application.',
		},
		{
			name: 'Microneedling',
			subtitle: 'Vortex Fusion',
			duration: '60 minutes',
			price: '$250+',
			description:
				'A results-driven treatment designed to improve skin health at a deeper level. Using precision controlled micro-injuries to activate the skin’s natural repair process, significantly boosting collagen and elastic production. Clinically proven to reduce acne scars, fine lines, hyperpigmentation, and uneven texture. This advanced procedure delivers measurable improvement in skin firmness, clarity, and overall rejuvenation. For optimum results a series of 3 to 6 is recommended. ',
		},
	];

	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', url: 'https://lysbyrenee.com' },
		{ name: 'Services', url: 'https://lysbyrenee.com/services' },
	]);

	return (
		<div className='min-h-screen bg-[#f5f3f0] text-[#4a4a48]'>
			{servicesSchema.map((schema, idx) => (
				<SchemaScript key={idx} schema={schema} />
			))}
			<SchemaScript schema={breadcrumbs} />
			{/* Header */}
			<header className='border-b border-[#745e4c]'>
				<nav className='max-w-7xl mx-auto px-6 py-2 flex items-center justify-between'>
					<Link href='/' className='hover:opacity-80 transition'>
						<Image
							src='/logo.png'
							alt='Love Your Skin by Renee'
							width={280}
							height={160}
							className='h-20 w-auto'
						/>
					</Link>
					{/* Desktop Nav */}
					<div className='hidden md:flex gap-8 tracking-wider text-[#745e4c]'>
						<Link
							href='/'
							className='text-md font-light hover:opacity-60 transition text-[#745e4c]'
						>
							Home
						</Link>
						<Link
							href='/services'
							className='text-md font-light hover:opacity-60 transition text-[#745e4c]'
						>
							Services
						</Link>
						<Link
							href='/contact'
							className='text-md font-light hover:opacity-60 transition text-[#745e4c]'
						>
							Contact
						</Link>
					</div>
					{/* Mobile Nav */}
					<MobileNav />
				</nav>
			</header>

			{/* Header Section */}
			<section className='bg-[#eddbd2] py-16 px-6'>
				<div className='max-w-4xl mx-auto text-center md:text-left'>
					{/* <p className='text-[#a89682] text-xs font-light tracking-widest uppercase mb-4'>
						What I Offer
					</p>
					<div className='border-b border-[#a89682] w-12 mb-6' /> */}
					<h1
						className='text-5xl text-[#4a4a48] mb-4'
						style={{ fontFamily: 'var(--font-bodoni-moda-regular)' }}
					>
						Signature Treatments
					</h1>
					<p
						className='text-md md:text-lg font-light text-[#4a4a48] opacity-90 whitespace-nowrap'
						style={{ fontFamily: 'var(--font-raleway-500)' }}
					>
						Every treatment is customized to your skin.
					</p>
				</div>
			</section>

			{/* Services Section */}
			<main className='max-w-4xl mx-auto px-6 py-16'>
				<div className='space-y-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-white bg-opacity-40 rounded-lg p-6 md:p-8'
						>
							<div className='mb-2'>
								<div className='flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4 mb-2'>
									<h2
										className='font-serif text-xl md:text-2xl font-light text-[#745e4c]'
										style={{ fontFamily: 'var(--font-raleway-500)' }}
									>
										{service.name}
									</h2>
									<p className='font-serif text-2xl md:text-3xl font-light text-[#745e4c] flex-shrink-0'>
										{service.price}
									</p>
								</div>
								{/* <p
									className='text-sm md:text-base text-[#4a4a48]'
									style={{
										fontFamily: 'var(--font-raleway-light)',
										fontStyle: 'italic',
									}}
								>
									{service.subtitle}
								</p> */}
							</div>
							<div className='flex items-center gap-2 mb-2'>
								{/* <span
									className='text-xs font-light text-[#8b888] tracking-wid uppercase'
									style={{ fontFamily: 'var(--font-raleway-500)' }}
								>
									Duration:
								</span> */}
								<span
									className='text-sm font-light text-[#8b888]'
									style={{ fontFamily: 'var(--font-raleway-500)' }}
								>
									{service.duration}
								</span>
							</div>
							<div className='border-b border-[#745e4c] border-opacity-30 my-4' />
							<p
								className='text-sm md:text-base font-light leading-relaxed text-[#4a4a48] tracking-wide'
								style={{ fontFamily: 'var(--font-raleway-500)' }}
							>
								{service.description}
							</p>
						</div>
					))}
				</div>
			</main>

			{/* CTA Section */}
			{/* <section className='bg-[#3d3d3d] py-16 px-6'>
				<div className='max-w-3xl mx-auto text-center'>
					<div className='flex justify-center mb-6'>
						<div className='w-12 border-b-2 border-[#c4b5a0]' />
					</div>
					<h2 className='font-serif text-4xl font-light text-white'>
						Ready to Book? Have Questions?
					</h2>
				</div>
			</section> */}

			{/* Footer */}
			<footer className='border-t border-[#745e4c] bg-[#f5f3f0] py-12 px-6 text-center text-neutral-800'>
				<div className='max-w-7xl mx-auto text-neutral-800 tracking-wider'>
					<div
						className='mb-8 text-[#745e4c]'
						style={{ fontFamily: 'var(--font-raleway-500)' }}
					>
						<p className='text-md text-[#745e4c]'>
							Email:{' '}
							<a
								href='mailto:hello@lysbyrenee.com'
								className='hover:opacity-80 transition text-[#745e4c]'
							>
								hello@lysbyrenee.com
							</a>
						</p>
						<p className='text-md text-[#745e4c] font-lora'>Phone: (858) 663-9538</p>
					</div>
					<div
						className='border-t border-[#745e4c] pt-6 text-xs text-neutral-800'
						style={{ fontFamily: 'var(--font-raleway-500)' }}
					>
						<p className='text-[#745e4c]'>
							&copy; 2026 Love Your Skin by Renee. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
