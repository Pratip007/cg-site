import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
    title: 'Kolkata Call Girls | No.1 VIP Escort Service & Sex Satisfaction | VelvetDate',
    description: 'Best Call Girls in Kolkata, VIP Escort Service, Independent Models for 100% Sex Satisfaction. 24/7 Hotel & Home Delivery. Book Premium Kolkata Escorts in Park Street, Salt Lake, New Town.',
    keywords: ['call girl', 'sex girl', 'escort service', 'kolkata escorts', 'vip models', 'independent escorts', 'sex satisfaction', 'kolkata call girls', 'premium escorts', 'top rated companions'],
    openGraph: {
        title: 'Kolkata Call Girls | VIP Escort Service & Models',
        description: 'Book the hottest Call Girls and VIP Escorts in Kolkata. 100% Verified, Safe, and Private. Satisfaction Guaranteed.',
        url: 'https://velvetdate.com',
        siteName: 'VelvetDate',
        locale: 'en_IN',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
            <body className="bg-slate-900 text-white font-sans antialiased min-h-screen flex flex-col">
                {/* Navigation */}
                <Navbar />

                <main className="flex-grow pt-20">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}
