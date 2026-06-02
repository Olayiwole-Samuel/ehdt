'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowRight,
    Sparkles,
    HeartHandshake,
    Users,
    Globe2,
    BookOpen,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/* =====================================================
   COUNT UP COMPONENT
===================================================== */
function CountUp({ end, duration = 2000 }) {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.4 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!hasStarted) return
        let start = 0
        const endValue = parseInt(end.replace(/,/g, ''))
        const incrementTime = 16
        const totalSteps = duration / incrementTime
        const increment = endValue / totalSteps

        const counter = setInterval(() => {
            start += increment
            if (start >= endValue) {
                setCount(endValue)
                clearInterval(counter)
            } else {
                setCount(Math.floor(start))
            }
        }, incrementTime)

        return () => clearInterval(counter)
    }, [hasStarted, end, duration])

    return (
        <div ref={ref} className="flex gap-1 flex-wrap justify-center">
            {count
                .toString()
                .split('')
                .map((char, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        className="w-10 h-12 rounded-xl bg-[#0a1628] text-white flex items-center justify-center text-xl font-bold shadow-lg"
                    >
                        {char}
                    </motion.div>
                ))}
        </div>
    )
}

/* =====================================================
   HERO SECTION
===================================================== */
export default function Hero() {
    const stats = [
        {
            number: '391',
            label: 'Beneficiaries Reached',
            icon: HeartHandshake,
            sub: 'And counting...',
        },
        {
            number: '6',
            label: 'Programs Delivered',
            icon: BookOpen,
            sub: 'Growing daily...',
        },
        {
            number: '21',
            label: 'Leadership Team',
            icon: Users,
            sub: 'Dedicated professionals',
        },
        {
            number: '2',
            label: 'Communities Reached',
            icon: Globe2,
            sub: 'Expanding more...',
        },
    ]

    return (
        <section className="relative overflow-hidden min-h-screen bg-[#f8fafc] pt-20">
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffc107]/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4fc3f7]/20 blur-[120px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0d47a1_1px,transparent_1px),linear-gradient(to_bottom,#0d47a1_1px,transparent_1px)] bg-[size:70px_70px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* MAIN HERO CONTENT */}
                <div className="flex-grow flex items-center">
                    <div className="w-full px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
                            {/* LEFT COLUMN */}
                            <div className="relative z-10 flex flex-col justify-center p-12 lg:py-12">
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="inline-flex items-center gap-3 w-fit px-5 py-3 rounded-full border border-[#ffc107] bg-[#fff8e1] mb-8"
                                >
                                    <Sparkles size={16} className="text-[#ff6d00]" />
                                    <span className="text-sm font-medium text-[#0d47a1]">
                                        Empowering Lives. Building Futures.
                                    </span>
                                </motion.div>

                                {/* Heading */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-[3.2rem] sm:text-[4rem] lg:text-[5.2rem] leading-[0.95] font-black tracking-[-0.04em] text-[#0a1628]"
                                >
                                    Together,<br />
                                    We Create<br />
                                    <span className="text-[#ff6d00]">Lasting Impact</span>
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9 }}
                                    className="mt-8 text-lg leading-relaxed text-[#64748b] max-w-xl"
                                >
                                    The Exhdo Host Community Development Trust (EHCDT) is committed to transforming communities through compassion, education, and sustainable development. Together, we create meaningful change that truly lasts.
                                </motion.p>

                                {/* Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    className="mt-10 flex flex-wrap gap-4"
                                >
                                    <Link href="/about">
                                        <motion.button
                                            whileHover={{ scale: 1.04, y: -2 }}
                                            whileTap={{ scale: 0.96 }}
                                            className="group px-8 py-4 rounded-2xl bg-[#0d47a1] text-white font-semibold shadow-lg"
                                        >
                                            <span className="flex items-center gap-3">
                                                Get Involved
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </motion.button>
                                    </Link>

                                    <button className="px-8 py-4 rounded-2xl border border-[#4fc3f7] bg-[#e1f5fe] text-[#0a1628] font-semibold hover:bg-[#b3e5fc] transition-all">
                                        Learn More
                                    </button>
                                </motion.div>

                                {/* Social Proof */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-12 flex items-center gap-5"
                                >
                                    <div className="flex -space-x-3">
                                        {['/images/u1.jpg', '/images/u2.jpg', '/images/u3.jpg', '/images/u4.jpg'].map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt=""
                                                className="w-12 h-12 rounded-full border-4 border-white object-cover"
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0a1628] text-lg">1000+ people joined us</h4>
                                        <p className="text-[#64748b] text-sm">Be part of the change</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* RIGHT COLUMN - Creative Visual */}
                            <div className="relative flex items-center justify-center h-full overflow-hidden">
                                {/* Orbit Rings */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                                    className="absolute w-[540px] h-[540px] rounded-full border border-[#4fc3f7]"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                    className="absolute w-[420px] h-[420px] rounded-full border border-[#ffc107]"
                                />
                                <div className="absolute w-[420px] h-[420px] bg-[#ffc107]/30 blur-[120px] rounded-full" />

                                {/* Hero Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="relative z-10 w-full h-full flex items-end justify-center"
                                >
                                    <img
                                        src="/woman.png"
                                        alt="Hero"
                                        className="w-full h-auto max-h-[calc(100vh-80px)] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)]"
                                    />
                                </motion.div>

                                {/* Floating Cards */}
                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute top-20 left-6 lg:left-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl p-5 flex items-center gap-4 z-20"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                                        <HeartHandshake className="text-[#0d47a1]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0a1628]">Community Impact</h4>
                                        <p className="text-sm text-[#64748b]">Inspiring change daily</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 14, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute bottom-20 right-6 lg:right-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl p-5 flex items-center gap-4 z-20"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                                        <Users className="text-[#0d47a1]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0a1628]">Strong Community</h4>
                                        <p className="text-sm text-[#64748b]">People united together</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* STATS BAR - Fixed at bottom with clean cutoff */}
                <div className="relative mt-auto">
                    <div className="bg-white rounded-tr-[4rem] lg:rounded-tr-[6rem] pt-10 pb-8 px-6 md:px-10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {stats.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -6 }}
                                        className="text-center group"
                                    >
                                        <div className="flex items-center justify-center gap-3 mb-4">
                                            <div className="w-11 h-11 rounded-2xl bg-[#e8f0fe] flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <Icon className="text-[#0d47a1] w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-[#0a1628] text-sm leading-tight text-left">
                                                {item.label}
                                            </h4>
                                        </div>
                                        <CountUp end={item.number} />
                                        <p className="text-xs text-[#64748b] mt-3">{item.sub}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}