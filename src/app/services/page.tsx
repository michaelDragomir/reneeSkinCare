import Link from 'next/link';

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

	return (
		<div className='min-h-screen bg-[#f5f3f0] text-[#4a4a48]'>
			{/* Header */}
			<header className='border-b border-[#c4b5a0]'>
				<nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
					<Link
						href='/'
						className='font-serif text-2xl font-light hover:opacity-80 transition'
					>
						Renée Skin Care
					</Link>
					<div className='flex gap-8 tracking-wider'>
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
				</nav>
			</header>

			{/* Header Section */}
			<section className='bg-[#9ba89f] py-20 px-6'>
				<div className='max-w-4xl mx-auto'>
					<p className='text-white text-xs font-light tracking-widest uppercase mb-4'>
						What I Offer
					</p>
					<div className='border-b border-white w-12 mb-6' />
					<h1 className='font-serif text-5xl font-light text-white mb-4'>
						Services & Pricing
					</h1>
					<p className='text-lg font-light text-white opacity-90'>
						Every treatment is customized to your skin.
					</p>
				</div>
			</section>

			{/* Services Section */}
			<main className='max-w-4xl mx-auto px-6 py-16'>
				<h1 className='font-serif text-4xl font-light mb-12'>
					Facials & Clinical Treatments
				</h1>

				<div className='space-y-8'>
					{services.map((service, index) => (
						<div key={index}>
							<div className='flex items-start justify-between mb-3'>
								<div>
									<h2 className='font-serif text-2xl font-light'>
										"{service.name}" — {service.subtitle}
									</h2>
									<p className='text-xs font-light text-[#c4b5a0] tracking-widest mt-2 uppercase'>
										{service.duration}
									</p>
								</div>
								<p className='font-serif text-3xl font-light text-[#c4b5a0]'>
									{service.price}
								</p>
							</div>
							<p className='text-base font-light leading-relaxed text-[#4a4a48] mb-6'>
								{service.description}
							</p>
							{index < services.length - 1 && (
								<div className='border-b border-[#c4b5a0]' />
							)}
						</div>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className='border-t border-[#b5a690] bg-[#f5f3f0] py-12 px-6 text-center text-neutral-800 mt-16'>
				<div className='max-w-7xl mx-auto text-neutral-800 tracking-wider'>
					<div className='mb-8'>
						<p className='text-md text-neutral-800'>
							Email: hello@reneeskincare.com
						</p>
						<p className='text-md text-neutral-800'>Phone: (555) 123-4567</p>
					</div>
					<div className='border-t border-[#b5a690] pt-6 text-xs text-neutral-800'>
						<p>&copy; 2026 Renée Skin Care. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
