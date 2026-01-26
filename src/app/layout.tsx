import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tapconsol.com'),
  title: {
    default: 'Tap Consol | Integrated Hardware & Software Solutions',
    template: '%s | Tap Consol',
  },
  description: 'Tap Consol delivers end-to-end engineering solutions, from custom hardware and embedded systems to intelligent 3D GIS platforms and global supply chain management.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Tap Consol | Integrated Hardware & Software Solutions',
    description: 'Tap Consol delivers end-to-end engineering solutions, from custom hardware and embedded systems to intelligent 3D GIS platforms and global supply chain management.',
    images: [
      {
        url: '/metadatalogo.jpg',
        width: 1200,
        height: 630,
        alt: 'Tap Consol Logo',
      },
    ],
    type: 'website',
    siteName: 'Tap Consol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tap Consol | Integrated Hardware & Software Solutions',
    description: 'Tap Consol delivers end-to-end engineering solutions, from custom hardware and embedded systems to intelligent 3D GIS platforms and global supply chain management.',
    images: ['/metadatalogo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
