import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { SchemaScript } from '@/components/SchemaScript';
import { MobileNav } from '@/components/MobileNav';
import { servicesSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
	title: 'Services & Pricing | Love Your Skin by Renee',
	description:
		'Professional skincare treatments including facials, HydraFacial, chemical peels, and intensive treatments. Custom solutions for all skin types.',
	openGraph: {
		title: 'Services & Pricing',
		description: 'Professional skincare treatments tailored to your skin.',
		url: 'https://lysbyrenee.com/services',
		type: 'website',
	},
};

export default function Services() {
	const services = [
		{
			name: 'The Works',
			subtitle: 'Signature Intensive',
			duration: '2 HOURS',
			price: '$375',
			description:
				'A clinically specified customized treatment addressing and correcting your specific skincare needs. Includes dermal infusion, peels, extractions, oxygen therapy, microcurrent, customized mask, and modifications according to your skin type.',
		},
		{
			name: 'Classic Facial',
			subtitle: 'Signature Treatment',
			duration: '1.5 HOURS',
			price: '$225',
			description:
				'A comprehensive facial treatment tailored to your skin type. Includes cleansing, exfoliation, extractions, massage, serums, and a customized mask to address your specific concerns.',
		},
		{
			name: 'HydraFacial',
			subtitle: 'Vortex Fusion',
			duration: '45 MINUTES',
			price: '$175',
			description:
				'A non-invasive, non-chemical hydradermabrasion treatment. Uses water, serums, and suction to cleanse, extract, and hydrate the skin. Leaves skin glowing and refreshed.',
		},
		{
			name: 'Chemical Peel',
			subtitle: 'Customized Strength',
			duration: '1 HOUR',
			price: '$200',
			description:
				'A professional chemical peel customized to your skin concerns. Helps improve texture, tone, fine lines, and hyperpigmentation. Includes pre and post-care instructions.',
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
			<header className='border-b border-[#c4b5a0]'>
				<nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
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
						Services & Pricing
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
				<h1
					className='font-serif text-4xl font-light mb-12 text-center md:text-left text-[#745e4c]'
					style={{
						fontFamily: 'var(--font-bodoni-moda)',
						fontStyle: 'italic',
					}}
				>
					Facials & Clinical Treatments
				</h1>

				<div className='space-y-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-white bg-opacity-40 rounded-lg p-6 md:p-8'
						>
							<div className='mb-4'>
								<div className='flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4 mb-2'>
									<h2
										className='font-serif text-xl md:text-2xl font-light'
										style={{ fontFamily: 'var(--font-raleway-500)' }}
									>
										{service.name}
									</h2>
									<p className='font-serif text-2xl md:text-3xl font-light text-[#c9a8a8] flex-shrink-0'>
										{service.price}
									</p>
								</div>
								<p
									className='text-sm md:text-base text-[#4a4a48]'
									style={{
										fontFamily: 'var(--font-raleway-light)',
										fontStyle: 'italic',
									}}
								>
									{service.subtitle}
								</p>
							</div>
							<div className='flex items-center gap-2 mb-4'>
								<span
									className='text-xs font-light text-[#8b888] tracking-wid uppercase'
									style={{ fontFamily: 'var(--font-raleway-500)' }}
								>
									Duration:
								</span>
								<span
									className='text-sm font-light text-[#8b888]'
									style={{ fontFamily: 'var(--font-raleway-500)' }}
								>
									{service.duration}
								</span>
							</div>
							<div className='border-b border-[#c9a8a8] border-opacity-30 my-4' />
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
						<p className='text-md text-[#745e4c]'>Phone: (555) 123-4567</p>
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
