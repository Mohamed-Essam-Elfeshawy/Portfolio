import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-woad-sigma-75uvnqaa5o.vercel.app'),
  title: 'Mohamed Essam Elfeshawy | Frontend Engineer & Next.js Specialist',
  description: 'Portfolio of Mohamed Essam Elfeshawy - Frontend Engineer specializing in Next.js, React.js, TypeScript, Redux Toolkit, and high-performance modern web architectures. Mansoura University & ITI Graduate.',
  keywords: [
    'Mohamed Essam Elfeshawy',
    'Frontend Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Redux Toolkit',
    'Tailwind CSS',
    'Egypt Frontend Engineer',
    'Mansoura University',
    'ITI Graduate',
    'Web Developer Portfolio'
  ],
  authors: [{ name: 'Mohamed Essam Elfeshawy', url: 'https://github.com/Mohamed-Essam-Elfeshawy' }],
  creator: 'Mohamed Essam Elfeshawy',
  openGraph: {
    title: 'Mohamed Essam Elfeshawy | Frontend Engineer & Next.js Specialist',
    description: 'Explore featured Next.js, React, and TypeScript projects, live demos, and technical case studies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mohamed Essam Elfeshawy Portfolio',
    images: [
      {
        url: '/images/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Mohamed Essam Elfeshawy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Essam Elfeshawy | Frontend Engineer',
    description: 'Frontend Engineer specializing in Next.js, React, and TypeScript.',
    images: ['/images/profile.jpg'],
  },
  icons: {
    icon: '/images/profile.jpg',
    shortcut: '/images/profile.jpg',
    apple: '/images/profile.jpg',
  },
};

export const viewport: Viewport = {
  themeColor: '#07090e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#07090e] text-gray-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
