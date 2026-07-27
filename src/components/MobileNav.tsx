'use client';

import { useState } from 'react';
import Link from 'next/link';

export function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Hamburger Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='md:hidden flex flex-col gap-1.5 p-2'
				aria-label='Toggle menu'
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

			{/* Mobile Menu Modal */}
			{isOpen && (
				<>
					{/* Overlay */}
					<div
						className='fixed inset-0 bg-black bg-opacity-50 md:hidden z-40'
						onClick={() => setIsOpen(false)}
					/>

					{/* Menu Panel */}
					<div className='fixed top-0 left-0 right-0 bg-[#f5f3f0] border-b border-[#c4b5a0] md:hidden z-50'>
						<nav className='max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6'>
							<Link
								href='/'
								className='text-lg font-light hover:opacity-60 transition'
								onClick={() => setIsOpen(false)}
							>
								Home
							</Link>
							<Link
								href='/services'
								className='text-lg font-light hover:opacity-60 transition'
								onClick={() => setIsOpen(false)}
							>
								Services
							</Link>
							<Link
								href='/contact'
								className='text-lg font-light hover:opacity-60 transition'
								onClick={() => setIsOpen(false)}
							>
								Contact
							</Link>
						</nav>
					</div>
				</>
			)}
		</>
	);
}
