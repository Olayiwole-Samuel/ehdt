'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Mission() {
    const items = [
        'Managing and administering funds for host community development',
        'Ensuring active participation of host communities in all initiatives',
        'Implementing the 5-year Community Development Plan (CDP)',
        'Promoting sustainable development in Eket and Esit Eket communities',
    ]

    // Animation presets for premium stagger reveals
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Ambient Background Element */}
            <div className="absolute -left-16 bottom-0 w-80 h-80 bg-slate-50 rounded-full blur-2xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left - Screenshot Layout Matched Overlapping Media Canvas (Spans 6 Columns) */}
                    <div className="lg:col-span-6 relative w-full h-[480px] sm:h-[540px]">

                        {/* Main Blueprint/Draft Image Card (Left & Top Aligned) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="absolute left-0 top-0 w-[72%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 bg-slate-50 group z-0"
                        >
                            <Image
                                src="/team.jpg"
                                alt="Our Mission - Community Development"
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                        </motion.div>

                        {/* Overlapping Foreground Image Card (Right & Bottom Aligned) */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="absolute right-0 bottom-0 w-[50%] h-[60%] rounded-[2rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(13,71,161,0.15)] border-4 border-white bg-slate-100 group z-10"
                        >
                            <Image
                                src="/outreach.jpg"
                                alt="Our Mission - Community Outreach"
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </motion.div>

                    </div>

                    {/* Right - Typography & Animated Checklist Content (Spans 6 Columns) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-6 space-y-6"
                    >
                        {/* Section Header Line */}
                        <div className="space-y-3">
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl sm:text-4xl font-black text-[#0a1628] tracking-tight"
                            >
                                Our <span className="text-[#0d47a1] relative inline-block">Mission</span>
                            </motion.h2>
                            <div className="w-12 h-1 bg-[#0d47a1] rounded-full" />
                        </div>

                        {/* Refined Descriptive Body Copy */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg text-[#64748b] font-normal leading-relaxed text-justify"
                        >
                            To manage and administer funds contributed by Frontier Oil Limited (FOL) and Savannah Uquo Gas Limited (SEUGL) for the benefit and sustainable development of the Exhdo host communities in Eket and Esit Eket Local Government Areas. We are committed to the active participation of host communities in all initiatives, ensuring that development is community-driven and aligned with the 5-year Community Development Plan (CDP).
                        </motion.p>

                        {/* Interactive Premium Checklist */}
                        <motion.ul
                            variants={containerVariants}
                            className="space-y-4 pt-2"
                        >
                            {items.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 group"
                                >
                                    {/* Matching Custom Green-Tinted Icon Ring from the Screenshot */}
                                    <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-300 shadow-sm">
                                        <svg
                                            className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>

                                    {/* Text Content */}
                                    <span className="text-[#0a1628] text-base font-semibold group-hover:text-[#0d47a1] transition-colors duration-200">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}