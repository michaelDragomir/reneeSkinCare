'use client';

import { useState } from 'react';
import Link from 'next/link';

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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

	return (
		<div className='min-h-screen bg-[#f5f3f0] text-[#4a4a48]'>
			{/* Header */}
			<header className='border-b border-[#c4b5a0]'>
				<nav className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
					<Link href='/' className='font-serif text-2xl font-light hover:opacity-80 transition'>
						Renée Skin Care
					</Link>
					<div className='flex gap-8 tracking-wider'>
						<Link href='/' className='text-md font-light hover:opacity-60 transition'>
							Home
						</Link>
						<Link href='/services' className='text-md font-light hover:opacity-60 transition'>
							Services
						</Link>
						<Link href='/contact' className='text-md font-light hover:opacity-60 transition'>
							Contact
						</Link>
					</div>
				</nav>
			</header>

			{/* Main */}
			<main className='max-w-2xl mx-auto px-6 py-16'>
				<h1 className='font-serif text-4xl font-light mb-2'>Get in Touch</h1>
				<p className='text-lg font-light text-[#4a4a48] mb-12'>
					Have questions or ready to book? I'd love to hear from you.
				</p>

				{success && (
					<div className='bg-[#a8b5a3] text-white p-4 rounded mb-6'>
						<p className='font-light'>Thank you! Your message has been sent successfully.</p>
					</div>
				)}

				{error && (
					<div className='bg-red-100 text-red-700 p-4 rounded mb-6'>
						<p className='font-light'>{error}</p>
					</div>
				)}

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block text-sm font-light mb-2'>Name</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3]'
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
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3]'
						/>
					</div>

					<div>
						<label className='block text-sm font-light mb-2'>Subject</label>
						<input
							type='text'
							name='subject'
							value={formData.subject}
							onChange={handleChange}
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3]'
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
							className='w-full px-4 py-3 border border-[#c4b5a0] bg-white font-light focus:outline-none focus:ring-2 focus:ring-[#a8b5a3]'
						/>
					</div>

					<button
						type='submit'
						disabled={loading}
						className='bg-[#a8b5a3] hover:bg-[#98a593] disabled:opacity-50 transition text-white font-light px-8 py-3 uppercase tracking-wider'
					>
						{loading ? 'Sending...' : 'Send Message'}
					</button>
				</form>

				<div className='mt-12 pt-8 border-t border-[#c4b5a0]'>
					<p className='font-light text-[#4a4a48] mb-4'>Or reach out directly:</p>
					<p className='text-lg font-light'>
						<a href='tel:(555)123-4567' className='text-[#a8b5a3] hover:opacity-80 transition'>
							(555) 123-4567
						</a>
					</p>
					<p className='text-lg font-light'>
						<a href='mailto:hello@reneeskincare.com' className='text-[#a8b5a3] hover:opacity-80 transition'>
							hello@reneeskincare.com
						</a>
					</p>
				</div>
			</main>

			{/* Footer */}
			<footer className='border-t border-[#b5a690] bg-[#f5f3f0] py-12 px-6 text-center text-neutral-800 mt-16'>
				<div className='max-w-7xl mx-auto text-neutral-800 tracking-wider'>
					<div className='mb-8'>
						<p className='text-md text-neutral-800'>Email: hello@reneeskincare.com</p>
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
