import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { SchemaScript } from "@/components/SchemaScript";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renée Skin Care | Licensed Aesthetician & Skincare Specialist",
  description:
    "Advanced skincare treatments including facials, HydraFacial, and chemical peels. Licensed aesthetician with 25+ years of experience in medical and holistic skincare.",
  keywords: [
    "skincare",
    "facial treatments",
    "aesthetician",
    "HydraFacial",
    "chemical peels",
    "skincare specialist",
  ],
  authors: [{ name: "Renée" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reneeskincare.com",
    siteName: "Renée Skin Care",
    title: "Renée Skin Care | Licensed Aesthetician",
    description:
      "Advanced skincare treatments with personalized care. 25+ years of experience.",
    images: [
      {
        url: "https://reneeskincare.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Renée Skin Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renée Skin Care",
    description: "Advanced skincare treatments with personalized care",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <SchemaScript schema={localBusinessSchema} />
        <SchemaScript schema={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-[#f5f3f0]">{children}</body>
    </html>
  );
}
