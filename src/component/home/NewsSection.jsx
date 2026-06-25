'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'

const newsItems = [
    {
        id: 1,
        title: 'Frontier Oil/Savannah Energy HCDT Turns 80 Indigenes to Business CEOs',
        excerpt: '80 graduates of the Ekid HCDT skills program have officially become CEOs of their own small-scale businesses, receiving starter packs and ₦200,000 seed funding each.',
        date: 'April 14, 2026',
        image: '/team-2.jpg', // Replace with your actual event photo
        category: 'Empowerment',
    },
]

export default function NewsSection() {
    return (
        <section className="relative overflow-hidden py-28 bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d47a1]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffc107]/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0d47a1_1px,transparent_1px),linear-gradient(to_bottom,#0d47a1_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-[#f8fafc] shadow-sm mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#ff6d00]" />
                            <span className="text-sm font-semibold text-[#0a1628]">
                                Latest Updates
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1628] leading-tight">
                            News & <span className="text-[#0d47a1]">Updates</span>
                        </h2>

                        <p className="mt-3 text-lg text-[#64748b] max-w-2xl">
                            Stay informed about our latest projects, community impact, and upcoming events.
                        </p>
                    </div>

                    <Link href="/news">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0d47a1] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            View Blog
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#0a1628]">
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-[#64748b] mb-3">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-[#0a1628] mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-[#64748b] leading-relaxed text-sm mb-4">
                                    {item.excerpt}
                                </p>

                                <Link href={`/news/${item.id}`}>
                                    <span className="inline-flex items-center gap-1 text-[#0d47a1] font-medium hover:text-[#ff6d00] transition-colors text-sm">
                                        Read More
                                        <ArrowRight size={14} />
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <Link href="/news">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-[#0d47a1] text-[#0d47a1] font-semibold hover:bg-[#0d47a1] hover:text-white transition-all"
                        >
                            View All News
                            <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}