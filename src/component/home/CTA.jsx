// src/components/Home/CTA.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Phone, Mail } from 'lucide-react'

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-16 bg-[#f8fafc]">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#ffc107]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4fc3f7]/20 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-[#0d47a1] p-8 md:p-12 shadow-2xl"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#ffc107]/20 blur-[80px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#4fc3f7]/20 blur-[80px] rounded-full" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left - Text */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                Ready to make an impact?
                            </h2>
                            <p className="text-white/80 text-base mt-2 max-w-md">
                                Join us in building stronger communities through sustainable development.
                            </p>
                        </div>

                        {/* Right - Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0d47a1] font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Contact Us
                                    <ArrowRight size={16} />
                                </motion.button>
                            </Link>
                            <Link href="/donate">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
                                >
                                    <Heart size={16} />
                                    Donate
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Contact info - small under text */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-sm text-white/70">
                        <div className="flex items-center gap-2">
                            <Phone size={14} />
                            <span>+234 000 000 0000</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={14} />
                            <span>hello@ehcdt.org</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}