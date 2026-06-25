'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Users, Trophy } from 'lucide-react'

export default function History() {
    const items = [
        'Incorporated on 27th September 2023 (RC 7153605)',
        'BoT inaugurated on 19th October 2023 (PIA 2021)',
        'Seamless transition from MoU to PIA via CDF model',
        'Assets & programmes transferred in January 2024',
    ]

    return (
        <section className="relative overflow-hidden py-20 bg-white">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#0d47a1]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#f59e0b]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT SIDE IMAGES */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full flex items-center justify-center"
                    >
                        {/* Main Front Image */}
                        <div className="absolute inset-0 w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] z-10 group">
                            <Image
                                src="/group.png"
                                alt="EHCDT History"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Background Image (Behind) */}
                        <div className="absolute inset-0 w-[70%] h-[70%] rounded-[2.5rem] overflow-hidden shadow-xl z-0 group">
                            <Image
                                src="/team-3.jpg"
                                alt="Our History"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        {/* Top Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-[#f8fafc] shadow-sm mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                            <span className="text-sm font-semibold text-[#0a1628]">Our History</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0a1628] mb-4">
                            Rooted in <span className="text-[#0d47a1]">Purpose</span>
                        </h2>

                        {/* Paragraph - Shortened */}
                        <p className="text-base text-[#64748b] leading-relaxed mb-6">
                            The <strong>Ekid</strong> Host Community Development Trust (EHCDT) was incorporated on <strong>27th September 2023</strong> (RC 7153605). Funded by <strong>FOL</strong> and <strong>SEUGL</strong> (PML 10), the Trust's 7-member BoT was inaugurated on <strong>19th October 2023</strong> under the PIA 2021. Assets and programmes were transferred in <strong>January 2024</strong>, with operations from <strong>Uquo Plaza, Esit Eket LGA</strong>.
                        </p>

                        {/* Timeline */}
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#e2e8f0]" />

                            <div className="space-y-4">
                                {items.map((item, index) => {
                                    const icons = [Calendar, Users, Trophy, Calendar]
                                    const Icon = icons[index]

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative flex gap-4 group"
                                        >
                                            <div className="relative z-10 w-10 h-10 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex items-center justify-center group-hover:bg-[#0d47a1] transition-all duration-300">
                                                <Icon className="w-4 h-4 text-[#0d47a1] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div className="pb-1">
                                                <p className="text-[#0a1628] text-sm font-medium leading-relaxed">
                                                    {item}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}