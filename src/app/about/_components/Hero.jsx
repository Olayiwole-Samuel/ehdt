'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const yLargeImage = useTransform(scrollYProgress, [0, 1], [0, -30])
    const ySmallImage = useTransform(scrollYProgress, [0, 1], [0, 40])
    const textParallax = useTransform(scrollYProgress, [0, 1], [0, 15])
    const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 360])

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden pt-36 pb-24 bg-[#f8fafc] flex items-center min-h-[90vh]"
        >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#0d47a1]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#64748b]/5 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">

                    {/* Left - Content (6 columns) */}
                    <motion.div
                        style={{ y: textParallax }}
                        className="lg:col-span-6 z-20 pr-4 lg:pr-8"
                    >
                        {/* Breadcrumbs */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs uppercase tracking-wider text-[#64748b] mb-6"
                        >
                            <Link href="/" className="hover:text-[#0d47a1] transition-colors duration-300">Home</Link>
                            <span className="text-slate-300">/</span>
                            <span className="text-[#0d47a1] font-semibold">About</span>
                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0a1628] leading-[1.05] tracking-tight">
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="block"
                            >
                                Ekid Host Community
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[#0d47a1] block mt-1"
                            >
                                Development Trust
                            </motion.span>
                        </h1>

                        {/* Description - Updated with key facts */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-6 text-lg sm:text-xl text-[#64748b] leading-relaxed max-w-2xl font-normal"
                        >
                            Incorporated on 27th September 2023 (CAC Registration No. 7153605), the <strong>Ekid</strong> Host Community Development Trust (EHCDT) is funded by Frontier Oil Limited (FOL) and Savannah Uquo Gas Limited (SEUGL) — settlers in PML 10. We are committed to the sustainable development of our host communities through active participation and transparent governance.
                        </motion.p>

                        {/* Stats line */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 flex items-center gap-6"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#0d47a1]" />
                                <span className="text-sm font-medium text-[#0a1628]">150+ Projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff6d00]" />
                                <span className="text-sm font-medium text-[#0a1628]">100+ Team Members</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ffc107]" />
                                <span className="text-sm font-medium text-[#0a1628]">200+ Communities</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Images (6 columns) */}
                    <div className="lg:col-span-6 relative flex items-center justify-center h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0">

                        <div className="relative w-full max-w-[580px] h-full flex items-center">

                            {/* Large Image (Right, Top) */}
                            <motion.div
                                style={{ y: yLargeImage }}
                                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
                                className="absolute right-0 top-4 w-[80%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(10,22,40,0.12)] border-4 border-white bg-slate-100 z-10"
                            >
                                <Image
                                    src="/collab.jpg"
                                    alt="About EHCDT - Creative Collaboration"
                                    fill
                                    priority
                                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </motion.div>

                            {/* Small Image (Left, Bottom) */}
                            <motion.div
                                style={{ y: ySmallImage }}
                                initial={{ opacity: 0, scale: 0.95, x: -30 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.9, delay: 0.15, cubicBezier: [0.16, 1, 0.3, 1] }}
                                className="absolute left-0 bottom-4 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(10,22,40,0.15)] border-4 border-white bg-slate-100 z-20"
                            >
                                <Image
                                    src="/team-2.jpg"
                                    alt="About EHCDT - Team Execution"
                                    fill
                                    priority
                                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </motion.div>

                            {/* Decorative Badge - Moved to bottom right of large image */}
                            <motion.div
                                style={{ rotate: rotateBadge }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute right-[5%] bottom-[10%] w-24 h-24 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center z-30 pointer-events-none hidden sm:flex select-none"
                            >
                                <div className="relative w-full h-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                                    <svg className="w-20 h-20 overflow-visible" viewBox="0 0 100 100">
                                        <path
                                            id="circlePath"
                                            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                            fill="none"
                                        />
                                        <text className="text-[9.5px] font-bold fill-[#0a1628] tracking-[0.22em]">
                                            <textPath href="#circlePath">
                                                EHCDT • EXCELLENCE • QUALITY •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="absolute w-3 h-3 bg-[#0d47a1] rounded-full" />
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}