import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { SchemaScript } from '@/components/SchemaScript';
import { MobileNav } from '@/components/MobileNav';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
	title: 'Renée Skin Care | Advanced Skincare & Facial Treatments',
	description:
		'Discover personalized skincare treatments with Renée, a licensed aesthetician with 25+ years of experience. Specializing in facials, medical-grade treatments, and holistic skincare.',
	openGraph: {
		title: 'Renée Skin Care',
		description:
			'Advanced skincare treatments with personalized care and proven techniques.',
		url: 'https://reneeskincare.com',
		type: 'website',
	},
};

export default function Home() {
	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', url: 'https://reneeskincare.com' },
	]);

	return (
		<div className='min-h-screen bg-[#f5f3f0] text-[#4a4a48]'>
			<SchemaScript schema={breadcrumbs} />
			{/* Header */}
			<header className='border-b border-[#c4b5a0]'>
				<nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
					<Link href='/' className='font-serif text-2xl font-light hover:opacity-80 transition'>
						Love Your Skin by Renee
					</Link>
					{/* Desktop Nav */}
					<div className='hidden md:flex gap-8 tracking-wider'>
						<Link
							href='/'
							className='text-md font-light hover:opacity-60 transition'
						>
							Home
						</Link>
						<Link
							href='/services'
							className='text-md font-light hover:opacity-60 transition'
						>
							Services
						</Link>
						<Link
							href='/contact'
							className='text-md font-light hover:opacity-60 transition'
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
							src='/skincare.jpg'
							alt='Renée, Licensed Aesthetician specializing in advanced skincare and facial treatments'
							width={400}
							height={400}
							className='w-4/5 h-auto rounded'
							priority
						/>
					</div>

					{/* Content */}
					<div className='space-y-6 p-4 text-center'>
						<h1 className='font-serif text-3xl md:text-4xl font-light leading-tight'>
							Love Your Skin
							<br />
							by Renee
						</h1>

						<p className='text-lg font-light text-neutral-800 tracking-wide'>
							Licensed Aesthetician | Integrative Skincare Specialist
						</p>

						<div className='space-y-4 text-lg text-neutral-800 tracking-wide leading-relaxed text-neutral-200'>
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
			<section className='bg-[#a8b5a3] py-10 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<p className='font-serif text-3xl italic font-light leading-relaxed text-white mb-6'>
						&ldquo;My clients are extremely loyal due to exemplary results,
						customer service and personal attention unique to each
						client.&rdquo;
					</p>
					<p className='text-sm font-light text-white uppercase tracking-wide'>
						— Renée, Licensed Aesthetician
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className='border-t border-[#b5a690] bg-[#f5f3f0] py-12 px-6 text-center text-neutral-800'>
				<div className='max-w-7xl mx-auto text-neutral-800 tracking-wider'>
					<div className='mb-8'>
						<p className='text-md text-neutral-800'>
							Email: hello@reneeskincare.com
						</p>
						<p className='text-md text-neutral-800'>Phone: (555) 123-4567</p>
					</div>
					<div className='border-t border-[#b5a690] pt-6 text-xs text-neutral-800'>
						<p>&copy; 2026 Love Your Skin by Renee. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
