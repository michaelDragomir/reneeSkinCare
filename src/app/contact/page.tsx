'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SchemaScript } from '@/components/SchemaScript';
import { MobileNav } from '@/components/MobileNav';
import { breadcrumbSchema } from '@/lib/schema';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		setSuccess(false);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			setSuccess(true);
			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (err) {
			setError('Something went wrong. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', url: 'https://lysbyrenee.com' },
		{ name: 'Contact', url: 'https://lysbyrenee.com/contact' },
	]);

	return (
		<div className='min-h-screen bg-[#f5f3f0] text-[#4a4a48]'>
			<SchemaScript schema={breadcrumbs} />
			{/* Header */}
			<header className='border-b border-[#c4b5a0]'>
				<nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
					<Link
						href='/'
						className='text-2xl hover:opacity-80 transition'
						style={{
							fontFamily: 'var(--font-bodoni-moda)',
							fontStyle: 'italic',
						}}
					>
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

			{/* Header Section */}
			<section className='bg-[#c9a8a8] py-16 px-6'>
				<div className='max-w-4xl mx-auto text-center md:text-left'>
					<h1
						className='text-5xl text-white mb-4'
						style={{ fontFamily: 'var(--font-bodoni-moda-regular)' }}
					>
						Get in Touch
					</h1>
					<p className='text-lg font-light text-white opacity-90 tracking-wide'>
						Have questions or ready to book? I&apos;d love to hear from you.
					</p>
					<div className='mt-4'>
						<p className='text-white mb-4 tracking-wide'>
							Or reach out directly:
						</p>
						<p className='text-lg font-light text-white tracking-wide'>
							(555) 123-4567
						</p>
						<p className='text-lg font-light text-white tracking-wide'>
							<a
								href='mailto:hello@lysbyrenee.com'
								className='hover:opacity-80 transition'
							>
								hello@lysbyrenee.com
							</a>
						</p>
					</div>
				</div>
			</section>

			{/* Main */}
			<main className='max-w-2xl mx-auto px-6 py-16'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block text-sm font-light mb-2'>Name</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3] rounded-sm'
						/>
					</div>

					<div>
						<label className='block text-sm font-light mb-2'>Email</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3] rounded-sm'
						/>
					</div>

					<div>
						<label className='block text-sm font-light mb-2'>Subject</label>
						<input
							type='text'
							name='subject'
							value={formData.subject}
							onChange={handleChange}
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3] rounded-sm'
						/>
					</div>

					<div>
						<label className='block text-sm font-light mb-2'>Message</label>
						<textarea
							name='message'
							value={formData.message}
							onChange={handleChange}
							required
							rows={6}
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3] rounded-sm'
						/>
					</div>

					<div className='flex justify-center md:justify-start'>
						<button
							type='submit'
							disabled={loading}
							className='bg-[#a8b5a3] hover:bg-[#98a593] disabled:opacity-50 transition text-white font-light px-8 py-3 uppercase tracking-wider rounded-sm'
						>
							{loading ? 'Sending...' : 'Send Message'}
						</button>
					</div>

					{success && (
						<div className='bg-[#a8b5a3] text-white p-4 rounded mt-6'>
							<p className='font-light'>
								Thank you! Your message has been sent successfully.
							</p>
						</div>
					)}

					{error && (
						<div className='bg-red-100 text-red-700 p-4 rounded mt-6'>
							<p className='font-light'>{error}</p>
						</div>
					)}
				</form>
			</main>

			{/* Footer */}
			<footer className='border-t border-[#b5a690] bg-[#f5f3f0] py-12 px-6 text-center text-neutral-800 mt-16'>
				<div className='max-w-7xl mx-auto text-neutral-800 tracking-wider'>
					<div className='mb-8'>
						<p className='text-md text-neutral-800'>
							Email:{' '}
							<a
								href='mailto:hello@lysbyrenee.com'
								className='hover:opacity-80 transition'
							>
								hello@lysbyrenee.com
							</a>
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
