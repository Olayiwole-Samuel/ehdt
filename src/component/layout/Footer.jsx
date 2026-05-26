// components/Layout/Footer.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = [
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'News & Updates', href: '/news' },
            { label: 'Media Gallery', href: '/media' },
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'FAQs', href: '/faqs' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms & Conditions', href: '/terms' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#0a1628] text-white">

            {/* BACKGROUND EFFECTS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d47a1]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f59e0b]/10 rounded-full blur-3xl" />
            </div>
            {/* MAIN FOOTER */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

                        {/* BRAND */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >

                            <Link
                                href="/"
                                className="inline-flex items-center gap-4"
                            >
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#ff8f00] flex items-center justify-center shadow-2xl shadow-[#f59e0b]/20">
                                        <span className="text-[#0a1628] text-2xl font-black">
                                           <img src="/logo.png" alt="" className="rounded-2xl"/>
                                        </span>
                                    </div>

                                    <div className="absolute -inset-1 rounded-2xl border border-white/10" />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-black tracking-tight">
                                        EHCDT
                                    </h3>

                                    <p className="text-white/60 text-sm mt-1">
                                        Participation for Sustainable Development
                                    </p>
                                </div>
                            </Link>

                            <p className="mt-8 text-white/60 leading-relaxed max-w-md">
                                We are committed to driving sustainable
                                transformation through innovation,
                                collaboration, and community-focused
                                development initiatives.
                            </p>

                            {/* SOCIALS */}
                            <div className="flex items-center gap-4 mt-8">

                                {['facebook', 'instagram', 'twitter'].map((social, index) => (
                                    <Link
                                        key={index}
                                        href="/"
                                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#0d47a1] flex items-center justify-center transition-all duration-300"
                                    >
                                        {social === 'facebook' && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 text-white"
                                            >
                                                <path d="M22 12a10 10 0 10-11.5 9.88v-6.99H8.08V12h2.42V9.8c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.2 0-1.57.75-1.57 1.51V12h2.67l-.43 2.89h-2.24v6.99A10 10 0 0022 12z" />
                                            </svg>
                                        )}

                                        {social === 'instagram' && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 text-white"
                                            >
                                                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                                            </svg>
                                        )}

                                        {social === 'twitter' && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 text-white"
                                            >
                                                <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 001.8-2.2 7.8 7.8 0 01-2.5 1A4 4 0 0016 4a4 4 0 00-4 4c0 .3 0 .6.1.9A11.3 11.3 0 013 5.1a4 4 0 001.2 5.3 3.9 3.9 0 01-1.8-.5v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8.1 8.1 0 012 18.6 11.4 11.4 0 008.3 20c7.5 0 11.7-6.2 11.7-11.7v-.5A8 8 0 0022 5.8z" />
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* LINKS */}
                        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-10">

                            {footerLinks.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <h4 className="text-lg font-bold text-white mb-6">
                                        {section.title}
                                    </h4>

                                    <ul className="space-y-4">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={link.href}
                                                    className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* NEWSLETTER */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <h4 className="text-lg font-bold text-white mb-6">
                                Stay Updated
                            </h4>

                            <p className="text-white/60 leading-relaxed mb-6">
                                Subscribe to receive updates, news, and stories
                                from EHCDT.
                            </p>

                            <form className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-white placeholder:text-white/40 outline-none focus:border-[#0d47a1]"
                                />

                                <button
                                    type="submit"
                                    className="w-full h-14 rounded-2xl bg-[#0d47a1] hover:bg-[#0b3d91] transition-all duration-300 font-semibold"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/40 text-center md:text-left">
                            © {new Date().getFullYear()} EHCDT. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6 text-sm text-white/40">
                            <Link
                                href="/privacy-policy"
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="hover:text-white transition-colors"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}