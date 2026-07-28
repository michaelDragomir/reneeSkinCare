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
		title: 'Love your Skin by Renee',
		description:
			'Advanced skincare treatments with personalized care and proven techniques.',
		url: 'https://lysbyrenee.com',
		type: 'website',
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
				<nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
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

						<p className='text-lg font-light text-neutral-500 tracking-wide'>
							Licensed Aesthetician | Integrative Skincare Specialist
						</p>

						<div
							className='space-y-4 text-lg text-neutral-800 tracking-wide leading-relaxed text-neutral-200'
							style={{ fontFamily: 'var(--font-raleway)' }}
						>
							<p>
								Licensed and practicing skincare since 1996, with advanced
								training in both medical and holistic skincare. With over 25
								years of experience working alongside dermatology professionals,
								I have extensive knowledge in treating problematic and
								challenging skin conditions.
							</p>

							<p>
								My philosophy blends the best of science and nature to help you
								achieve healthy, radiant skin. I believe true skin health comes
								from a balanced approach that combines effective skincare
								treatments with a healthy lifestyle.
							</p>

							<p>
								Through personalized care and proven techniques, my goal is to
								help you look and feel your best because beautiful skin is more
								than skin deep.
							</p>
						</div>
					</div>
				</div>
			</main>

			{/* Testimonial Section */}
			<section className='bg-[#eddbd2] py-10 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<p className='font-serif text-3xl italic font-light leading-relaxed text-[#4a4a48] mb-6 tracking-wide'>
						&ldquo;My clients are extremely loyal due to exemplary results,
						customer service and personal attention unique to each
						client.&rdquo;
					</p>
					<p className='text-sm font-light text-[#4a4a48] uppercase tracking-wide'>
						— Renée, Licensed Aesthetician
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
