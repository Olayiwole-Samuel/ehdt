// src/app/about/_components/Vision.jsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Vision() {
    const items = [
        'Inspiring Modern Architecture',
        'Pioneering Sustainable Construction',
    ]

    return (
        <section id="vision" className="py-20 bg-[#f8fafc] relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute left-0 top-1/4 w-96 h-96 bg-[#0d47a1]/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-[#0d47a1]/10 text-[#0d47a1] text-sm font-semibold tracking-widest rounded-full mb-3">
                                OUR FUTURE
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-[#0a1628] leading-tight tracking-tighter">
                                Our <span className="text-[#0d47a1]">Vision</span>
                            </h2>
                        </div>

                        <p className="text-lg text-[#64748b] leading-relaxed">
                            At Renovex, our vision is to redefine the future of construction through innovation,
                            sustainability, and excellence. We aim to create spaces that not only meet today’s needs
                            but also inspire communities and empower generations to come.
                        </p>

                        <div className="pt-4">
                            <ul className="space-y-5">
                                {items.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="mt-1 w-7 h-7 rounded-2xl bg-[#0d47a1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d47a1] transition-colors duration-300">
                                            <div className="w-3 h-3 rounded-full bg-[#0d47a1] group-hover:scale-110 transition-transform"></div>
                                        </div>
                                        <span className="text-[#0a1628] font-medium leading-relaxed text-[17px]">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right - Enhanced Overlapping Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[520px] lg:h-[560px] flex justify-center lg:justify-end"
                    >
                        {/* Large Image (Front) */}
                        <div className="absolute right-0 top-0 w-[88%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 ring-1 ring-white/60">
                            <Image
                                src="/vision.jpg"
                                alt="Renovex Vision - Modern Architecture"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
                        </div>

                        {/* Secondary Image (Overlapping) */}
                        <div className="absolute left-8 bottom-12 w-[58%] aspect-square rounded-3xl overflow-hidden shadow-xl z-20 border-[10px] border-white">
                            <Image
                                src="/child.jpg"
                                alt="Renovex Community Impact"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -right-8 top-12 w-32 h-32 border-4 border-[#0d47a1]/20 rounded-full hidden lg:block"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}