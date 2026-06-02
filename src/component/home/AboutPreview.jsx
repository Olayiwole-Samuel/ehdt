// src/components/Home/AboutPreview.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowRight,
    Users,
    Sparkles,
    HeartHandshake,
    Globe2,
} from 'lucide-react'

export default function AboutPreview() {
    const images = [
        '/community.jpg',
        '/team.jpg',
        '/outreach.jpg',
        '/education.jpg',
    ]

    const miniStats = [
        {
            icon: HeartHandshake,
            title: 'Community',
        },
        {
            icon: Globe2,
            title: 'Outreach',
        },
        {
            icon: Users,
            title: 'Impact',
        },
    ]

    return (
        <section className="relative overflow-hidden py-28 bg-[#f8fafc]">
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffc107]/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4fc3f7]/20 blur-[120px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0d47a1_1px,transparent_1px),linear-gradient(to_bottom,#0d47a1_1px,transparent_1px)] bg-[size:70px_70px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#ffc107] bg-[#fff8e1] mb-7">
                        <Sparkles size={16} className="text-[#ff6d00]" />
                        <span className="text-sm font-medium text-[#0d47a1]">
                            About Our Organization
                        </span>
                    </div>

                    <h2 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-[0.95] font-black tracking-[-0.04em] text-[#0a1628]">
                        Building
                        <span className="text-[#ff6d00]"> Sustainable </span>
                        Futures
                    </h2>

                    <p className="mt-7 text-[#64748b] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                        The Exhdo Host Community Development Trust (EHCDT) is a community-driven organization dedicated to building sustainable futures through compassion, education, and purposeful action — funded by Frontier Oil Limited (FOL) and Savannah Uquo Gas Limited (SEUGL).
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 lg:p-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/20 blur-3xl rounded-full" />

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f0fe] border border-[#4fc3f7]/30 mb-7">
                                <Users size={16} className="text-[#0d47a1]" />
                                <span className="text-sm font-semibold text-[#0d47a1]">
                                    Community Driven Impact
                                </span>
                            </div>

                            <h3 className="text-3xl lg:text-5xl font-black leading-[1] tracking-[-0.04em] text-[#0a1628]">
                                A Team
                                <br />
                                Committed To
                                <br />
                                <span className="text-[#ff6d00]">
                                    Real Change
                                </span>
                            </h3>

                            <p className="mt-7 text-[#64748b] leading-relaxed text-lg">
                                EHCDT is built by a diverse team of thinkers, builders, and community advocates who care deeply about helping host communities grow. With a focus on sustainability, transparency, and people, we're creating solutions that truly make a difference.
                            </p>

                            <div className="mt-10 grid grid-cols-3 gap-4">
                                {miniStats.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5 }}
                                            className="rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-5 text-center"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-[#e8f0fe] flex items-center justify-center mx-auto mb-3">
                                                <Icon className="text-[#0d47a1] w-5 h-5" />
                                            </div>
                                            <h4 className="font-bold text-[#0a1628] text-sm">
                                                {item.title}
                                            </h4>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            <div className="mt-10">
                                <Link href="/about">
                                    <motion.button
                                        whileHover={{ scale: 1.04, y: -2 }}
                                        whileTap={{ scale: 0.96 }}
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0d47a1] text-white font-semibold shadow-lg"
                                    >
                                        See More About Us
                                        <ArrowRight size={20} />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE LAYOUT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 right-8 z-20 rounded-3xl bg-white/90 backdrop-blur-xl border border-white shadow-xl px-6 py-5 flex items-center gap-4"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                                <HeartHandshake className="text-[#0d47a1]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0a1628]">Compassion First</h4>
                                <p className="text-sm text-[#64748b]">Helping communities thrive</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-5">
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="relative rounded-[2rem] overflow-hidden h-[500px] group shadow-xl"
                            >
                                <img
                                    src={images[0]}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                            </motion.div>

                            <div className="flex flex-col gap-5">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="relative rounded-[2rem] overflow-hidden h-[240px] group shadow-xl"
                                >
                                    <img
                                        src={images[1]}
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="relative rounded-[2rem] overflow-hidden h-[240px] group shadow-xl"
                                >
                                    <img
                                        src={images[2]}
                                        alt=""
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-10 left-10 w-[260px] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl"
                        >
                            <img src={images[3]} alt="" className="w-full h-[220px] object-cover" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}