import type { Metadata } from 'next';
import { Inter, Lora, Bodoni_Moda } from 'next/font/google';
import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const lora = Lora({
	variable: '--font-lora',
	subsets: ['latin'],
});

const bodoniModa = Bodoni_Moda({
	variable: '--font-bodoni-moda',
	subsets: ['latin'],
	weight: '400',
	style: 'italic',
});

const bodoniModaRegular = Bodoni_Moda({
	variable: '--font-bodoni-moda-regular',
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Love Your Skin by Renee',
	description: 'Advanced skincare services with a personalized approach',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${inter.variable} ${lora.variable} ${bodoniModa.variable} ${bodoniModaRegular.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col bg-[#f5f3f0]'>{children}</body>
		</html>
	);
}
