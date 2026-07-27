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
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!isOpen) return;

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsOpen(false);
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
					isOpen ? 'z-[60]' : ''
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

			{mounted &&
				isOpen &&
				createPortal(
					<div className='fixed inset-0 z-50 md:hidden'>
						<div
							className='absolute inset-0 bg-black/50'
							onClick={close}
							aria-hidden='true'
						/>

						<div className='relative z-10 w-full border-b border-[#c4b5a0] bg-[#f5f3f0] shadow-lg'>
							<nav className='mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8'>
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className='text-lg font-light tracking-wider text-[#4a4a48] transition hover:opacity-60'
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
