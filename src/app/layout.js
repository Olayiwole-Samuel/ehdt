import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../component/layout/Navbar'
import Footer from '../component/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Ekid Host Community Development Trust (EHCDT)',
    description: 'Participation for Sustainable Development — Empowering host communities through sustainable development initiatives.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col bg-white text-brand-dark antialiased`}>
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}