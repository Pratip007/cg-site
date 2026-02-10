import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
    title: 'VelvetDate | Exclusive Companion Rental',
    description: 'Find your perfect companion for any moment.',
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
