// src/app/about/_components/History.jsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Clock3, Trophy, ShieldCheck, Sparkles, Calendar, Users } from 'lucide-react'

export default function History() {
    const items = [
        'Incorporation & Registration (27th Sept 2023)',
        'Inauguration of Board of Trustees (19th Oct 2023)',
        'Seamless Transition from MoU to PIA Implementation',
        'Building a Legacy of Trust & Sustainable Development',
    ]

    return (
        <section className="relative overflow-hidden py-28 bg-white">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0d47a1]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#f59e0b]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT SIDE IMAGES */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] w-full flex items-center justify-center"
                    >
                        {/* Decorative Ring */}
                        <div className="absolute top-8 right-0 w-32 h-32 border-[20px] border-[#f59e0b]/20 rounded-full z-0" />

                        {/* Background Image */}
                        <div className="absolute top-10 left-0 w-[78%] h-[78%] rounded-[2.5rem] overflow-hidden shadow-xl z-0 group">
                            <Image
                                src="/team-3.jpg"
                                alt="Our History"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Main Front Image */}
                        <div className="absolute bottom-0 right-0 w-[82%] h-[82%] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] z-20 group">
                            <Image
                                src="/moment.jpg"
                                alt="EHCDT History"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Floating Experience Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute top-14 left-6 z-30 bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#0d47a1]/10 flex items-center justify-center">
                                    <Clock3 className="w-6 h-6 text-[#0d47a1]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-[#0a1628]">Years of Growth</h4>
                                    <p className="text-sm text-[#64748b] mt-0.5">Building trust through excellence</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="absolute bottom-10 left-6 z-30 bg-[#0d47a1] rounded-[2rem] p-6 shadow-2xl shadow-[#0d47a1]/25"
                        >
                            <div className="flex items-center gap-6">
                                <div>
                                    <h3 className="text-4xl font-black text-white">15+</h3>
                                    <p className="text-sm text-white/70 mt-0.5">Years Legacy</p>
                                </div>
                                <div className="w-px h-14 bg-white/20" />
                                <div>
                                    <h3 className="text-4xl font-black text-white">200+</h3>
                                    <p className="text-sm text-white/70 mt-0.5">Completed Initiatives</p>
                                </div>
                            </div>
                        </motion.div>
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
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e2e8f0] bg-[#f8fafc] shadow-sm mb-6">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                            <span className="text-sm font-semibold text-[#0a1628]">Our History</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0a1628]">
                            Rooted In{' '}
                            <span className="relative inline-block text-[#0d47a1]">
                                Purpose
                                <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#f59e0b]/20 rounded-full -z-10" />
                            </span>
                            , Driven By Impact
                        </h2>

                        {/* Paragraph - Updated with key historical facts */}
                        <p className="mt-5 text-lg leading-relaxed text-[#64748b] max-w-2xl">
                            The Exhdo Host Community Development Trust (EHCDT) was incorporated with the Corporate Affairs Commission (CAC) on <strong>27th September 2023</strong> with registration number <strong>7153605</strong>. The Trust is funded by <strong>Frontier Oil Limited (FOL)</strong> and <strong>Savannah Uquo Gas Limited (SEUGL)</strong> — the settlers in PML 10.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-[#64748b] max-w-2xl">
                            The Trust's seven (7) member Board of Trustees (BoT) was inaugurated on <strong>19th October 2023</strong> in accordance with the Petroleum Industry Act (PIA) 2021. The Trust aims to manage and administer funds contributed by the two settlers operating in the Exhdo host communities, for the benefit and sustainable development of the communities.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed text-[#64748b] max-w-2xl">
                            There was a seamless transition from the MoU era to the implementation of the PIA, made possible by the fact that the settlers were practicing a Sustainable Community Development model known as the <strong>Community Development Foundation (CDF)</strong> before the enactment of the PIA 2021 — similar to the Host Community Development Trust enshrined in Chapter Three (3) of the PIA 2021.
                        </p>

                        {/* Timeline Style Points - Updated with specific milestones */}
                        <div className="mt-10 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#e2e8f0]" />

                            <div className="space-y-6">
                                {items.map((item, index) => {
                                    const icons = [Calendar, Users, Trophy, Sparkles]
                                    const Icon = icons[index]

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative flex gap-6 group"
                                        >
                                            {/* Icon */}
                                            <div className="relative z-10 min-w-[52px] h-[52px] rounded-2xl bg-white border border-[#e2e8f0] shadow-md flex items-center justify-center group-hover:bg-[#0d47a1] transition-all duration-300">
                                                <Icon className="w-5 h-5 text-[#0d47a1] group-hover:text-white transition-colors duration-300" />
                                            </div>

                                            {/* Content */}
                                            <div className="pb-2">
                                                <h3 className="text-xl font-bold text-[#0a1628]">{item}</h3>
                                                <p className="mt-1.5 text-base text-[#64748b] leading-relaxed">
                                                    We continue to build a strong foundation through dedication, innovation, and impactful community development.
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