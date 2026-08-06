import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { SchemaScript } from '@/components/SchemaScript';
import { MobileNav } from '@/components/MobileNav';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
	title: 'Love Your Skin by Renee | Advanced Skincare & Facial Treatments',
	description:
		'Discover personalized skincare treatments with Renée, a licensed aesthetician with 25+ years of experience. Specializing in facials, medical-grade treatments, and holistic skincare.',
	openGraph: {
		title: 'Love Your Skin by Renee',
		description:
			'Advanced skincare treatments with personalized care and proven techniques.',
		url: 'https://www.lysbyrenee.com',
		type: 'website',
		images: [
			{
				url: 'https://www.lysbyrenee.com/facial.png',
				width: 500,
				height: 500,
				alt: 'Renée, Licensed Aesthetician specializing in advanced skincare',
			},
		],
	},
	alternates: {
		canonical: 'https://www.lysbyrenee.com',
	},
};

export default function Home() {
	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', url: 'https://lysbyrenee.com' },
	]);

	return (
		<div className='min-h-screen bg-[#f5f3f0] text-[#4a4a48]'>
			<SchemaScript schema={breadcrumbs} />
			{/* Header */}
			<header className='border-b border-[##745e4c]'>
				<nav className='max-w-7xl mx-auto px-6 py-2 flex items-center justify-between'>
					<Link href='/'>
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

			{/* Hero Section */}
			<main className='max-w-7xl mx-auto px-6 py-8 md:py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
					{/* Image */}
					<div className='flex justify-center'>
						<Image
							src='/facial.png'
							alt='Renée, Licensed Aesthetician specializing in advanced skincare and facial treatments'
							width={500}
							height={500}
							className='w-full h-auto rounded shadow-2xl'
							priority
						/>
					</div>

					{/* Content */}
					<div className='space-y-6 p-4 text-center md:text-left'>
						<h1
							className='text-4xl md:text-5xl leading-tight tracking-wide text-[#745e4c] mb-1'
							style={{
								fontFamily: 'var(--font-bodoni-moda)',
								fontStyle: 'italic',
								fontWeight: '400',
							}}
						>
							Love Your Skin by Renee
						</h1>

						<p className='text-lg font-light text-neutral-500 tracking-wider'>
							Licensed Aesthetician | Integrative Skincare Specialist
						</p>

						<div
							className='space-y-4 text-lg text-neutral-800 tracking-wide leading-relaxed text-neutral-200'
							style={{ fontFamily: 'var(--font-raleway)' }}
						>
							<p>
								Welcome to Love Your Skin, where skincare is treated as a
								progressive journey. As an esthetician licensed in California,
								Nevada, and Utah, I bring over 20 years of experience and
								advanced training in both medical and holistic treatments.
								Throughout my career, I&apos;ve had the privilege of working
								alongside top professionals in dermatology and medical spas,
								allowing me to blend clinical precision with holistic healing.
							</p>

							<p>
								Here, each treatment is designed with intention. I focus on
								real, visible results through a structured, guided process that
								supports your skin at every stage. By restoring balance and
								strengthening your skin&apos;s natural barrier, I improve your
								overall skin quality over time. Every service is entirely
								tailored to your current needs, ensuring safe, personalized care
								that evolves right alongside you.
							</p>
						</div>
					</div>
				</div>
			</main>

			{/* Testimonial Section */}
			<section className='bg-[#eddbd2] py-10 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<p className='font-serif text-3xl italic font-light leading-relaxed text-[#4a4a48] mb-2 tracking-wide'>
						&ldquo;The glow you want starts with the skin you love.&rdquo;
					</p>
				</div>
			</section>

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
						<p className='text-md text-[#745e4c] font-mono'>
							Phone: (858) 663-9538
						</p>
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
