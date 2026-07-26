import Link from 'next/link';

export default function Home() {
	return (
		<div className='min-h-screen bg-[#e8e3de] text-[#5a5653]'>
			{/* Header */}
			<header className='border-b border-[#c9b89a]'>
				<nav className='max-w-7xl mx-auto px-6 py-6 flex items-center justify-between'>
					<div className='font-serif text-2xl font-light'>Renée Skin Care</div>
					<div className='flex gap-8'>
						<Link
							href='/'
							className='text-md font-light hover:opacity-80 transition'
						>
							Home
						</Link>
						<Link
							href='/services'
							className='text-md font-light hover:opacity-80 transition'
						>
							Services
						</Link>
						<Link
							href='/contact'
							className='text-md font-light hover:opacity-80 transition'
						>
							Contact
						</Link>
					</div>
				</nav>
			</header>

			{/* Hero Section */}
			<main className='max-w-7xl mx-auto px-6 py-16'>
				<div className='grid grid-cols-2 gap-12 items-center'>
					{/* Image Placeholder */}
					<div className='flex justify-center'>
						<div className='w-full aspect-square bg-[#c9b89a] rounded flex items-center justify-center'>
							<span className='text-[#9db3a3]'>Portrait placeholder</span>
						</div>
					</div>

					{/* Content */}
					<div className='space-y-6 p-4'>
						<h1 className='font-serif text-5xl font-light leading-tight'>
							Renée Skin Care
						</h1>

						<p className='text-lg font-light text-neutral-300'>
							Licensed Aesthetician | Integrative Skincare Specialist
						</p>

						<div className='space-y-4 text-lg font-light tracking-wide leading-relaxed text-neutral-200'>
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
			<section className='bg-[#9db3a3] py-10 px-6'>
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
			<footer className='bg-[#d4a574] border-t border-[#c9b89a] py-12 px-6 text-center'>
				<div className='max-w-7xl mx-auto'>
					<div className='mb-8'>
						<h3 className='font-serif text-sm font-light mb-2 text-white'>Contact</h3>
						<p className='text-sm text-white font-light'>
							Email: hello@reneeskincare.com
						</p>
						<p className='text-sm text-white font-light'>
							Phone: (555) 123-4567
						</p>
					</div>
					<div className='border-t border-[#c9b89a] pt-6 text-xs text-white font-light'>
						<p>&copy; 2026 Renée Skin Care. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
