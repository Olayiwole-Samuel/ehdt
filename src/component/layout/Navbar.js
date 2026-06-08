'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('Home')
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/news', label: 'News' },
        { href: '/members', label: 'Members' },
        { href: '/contact', label: 'Contact' },
    ]

    const menuContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    }

    const menuItemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled ? 'pt-3' : 'pt-6'
                }`}
            >
                <div className="container mx-auto px-4 max-w-7xl">
                    <div
                        className={`flex items-center justify-between mx-auto transition-all duration-500 px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${
                            scrolled
                                ? 'bg-brand-primary/80 max-w-5xl'
                                : 'bg-brand-primary/40 max-w-7xl'
                        }`}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group relative z-50">
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.05 }}
                                className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/20"
                            >
                                <img src="/logo.png" alt="" className="rounded-full"/>
                            </motion.div>
                            <span className="text-white font-extrabold text-xl tracking-tight bg-clip-text group-hover:text-brand-gold transition-colors duration-300">
                                EKID
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center bg-black/20 backdrop-blur-md rounded-full p-1.5 border border-white/5 relative">
                            {navLinks.map((link) => {
                                const isActive = activeLink === link.label
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setActiveLink(link.label)}
                                        className={`relative px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors duration-300 z-10 ${
                                            isActive ? 'text-brand-primary' : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="activePill"
                                                className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4 relative z-50">
                            <Link href="/donate" className="hidden md:block">
                                <motion.button
                                    whileHover={{ y: -2, scale: 1.02 }}
                                    whileTap={{ y: 0, scale: 0.98 }}
                                    className="relative px-7 py-2.5 rounded-full bg-brand-secondary text-white text-xs uppercase tracking-wider font-bold overflow-hidden transition-all duration-300 shadow-lg shadow-brand-secondary/30 group/btn"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                                    Donate
                                </motion.button>
                            </Link>

                            <button
                                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle mobile menu"
                            >
                                <div className="space-y-1.5 w-5">
                                    <span className={`block h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`block h-0.5 bg-white transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                                    <span className={`block h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 bg-brand-dark/90 z-40 md:hidden flex flex-col justify-between p-8 pt-32"
                    >
                        <motion.div
                            variants={menuContainerVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col gap-4"
                        >
                            {navLinks.map((link) => {
                                const isActive = activeLink === link.label
                                return (
                                    <motion.div key={link.href} variants={menuItemVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={() => {
                                                setActiveLink(link.label)
                                                setIsMobileMenuOpen(false)
                                            }}
                                            className={`group flex items-center justify-between py-2 text-3xl font-bold tracking-tight border-b border-white/5 transition-all duration-300 ${
                                                isActive ? 'text-brand-gold' : 'text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            <span>{link.label}</span>
                                            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-10px] group-hover:translate-x-0 transform inline-block">
                                                →
                                            </span>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-8"
                        >
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-brand-secondary text-white py-4 rounded-full font-bold uppercase tracking-wider text-sm shadow-xl shadow-brand-secondary/20"
                                >
                                    Donate Now
                                </motion.button>
                            </Link>

                            <div className="flex justify-between items-center pt-6 border-t border-white/10 text-xs tracking-widest uppercase text-gray-500">
                                <span className="text-[10px]">© {new Date().getFullYear()} EHCDT</span>
                                <div className="flex gap-6">
                                    <a href="#" className="hover:text-brand-gold transition-colors">FB</a>
                                    <a href="#" className="hover:text-brand-gold transition-colors">IG</a>
                                    <a href="#" className="hover:text-brand-gold transition-colors">X</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}