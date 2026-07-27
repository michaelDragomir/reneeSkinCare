'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' },
];

export function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen]);

	const close = () => setIsOpen(false);

	return (
		<>
			<button
				onClick={() => setIsOpen((open) => !open)}
				className={`md:hidden relative flex flex-col gap-1.5 p-2 ${
					isOpen ? 'z-[60] hidden' : ''
				}`}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isOpen}
			>
				<span
					className={`block w-6 h-0.5 bg-[#4a4a48] transition-all ${
						isOpen ? 'rotate-45 translate-y-2' : ''
					}`}
				/>
				<span
					className={`block w-6 h-0.5 bg-[#4a4a48] transition-all ${
						isOpen ? 'opacity-0' : ''
					}`}
				/>
				<span
					className={`block w-6 h-0.5 bg-[#4a4a48] transition-all ${
						isOpen ? '-rotate-45 -translate-y-2' : ''
					}`}
				/>
			</button>

			{isOpen &&
				createPortal(
					<div className='fixed inset-0 z-50 md:hidden flex flex-col'>
						<div
							className='absolute inset-0 bg-black/50'
							onClick={close}
							aria-hidden='true'
						/>

						<div className='relative z-10 w-full h-full bg-neutral-200 flex flex-col'>
							{/* Header */}
							<div className='flex items-center justify-between px-6 py-6 border-b border-neutral-300'>
								<h2 className='font-serif text-lg font-light text-[#4a4a48]'>
									Love Your Skin by Renee
								</h2>
								<button
									onClick={close}
									className='text-4xl text-[#4a4a48] hover:opacity-60 transition'
									aria-label='Close menu'
								>
									×
								</button>
							</div>

							{/* Navigation */}
							<nav className='flex flex-col items-center justify-center flex-1 gap-12'>
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className='font-serif text-4xl font-light text-[#4a4a48] transition hover:opacity-60'
										onClick={close}
									>
										{link.label}
									</Link>
								))}
							</nav>
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
