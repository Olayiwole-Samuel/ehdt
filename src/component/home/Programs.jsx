// src/components/Home/Programs.jsx
'use client'

import { motion } from 'framer-motion'
import {
    BookOpen,
    HeartPulse,
    Droplet,
    Building2,
    ArrowRight,
    Sparkles,
} from 'lucide-react'

import Link from 'next/link'

const programs = [
    {
        icon: BookOpen,
        title: 'Education',
        description:
            'Building schools, providing scholarships, and supporting teachers to ensure every child has access to quality education.',
        color: '#0d47a1',
        bg: '#e8f0fe',
    },
    {
        icon: HeartPulse,
        title: 'Healthcare',
        description:
            'Mobile clinics, health education, and medical outreach programs to bring essential healthcare to remote communities.',
        color: '#ff6d00',
        bg: '#fff3e0',
    },
    {
        icon: Droplet,
        title: 'Water & Sanitation',
        description:
            'Borehole projects, clean water initiatives, and sanitation education to improve health and quality of life.',
        color: '#4fc3f7',
        bg: '#e1f5fe',
    },
    {
        icon: Building2,
        title: 'Infrastructure',
        description:
            'Community centers, roads, and public facilities that strengthen the foundation for sustainable development.',
        color: '#ffc107',
        bg: '#fff8e1',
    },
]

export default function Programs() {
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
                            Transforming Communities Through Action
                        </span>
                    </div>

                    <h2 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-[0.95] tracking-[-0.04em] font-black text-[#0a1628]">
                        Our <span className="text-[#ff6d00]">Impactful</span> Programs
                    </h2>

                    <p className="mt-7 text-[#64748b] text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                        We focus on strategic initiatives that empower communities, improve lives, and create sustainable development for future generations.
                    </p>
                </motion.div>

                {/* PROGRAMS LAYOUT */}
                <div className="grid lg:grid-cols-2 gap-7">
                    {programs.map((program, index) => {
                        const Icon = program.icon

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-7 lg:p-9"
                            >
                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-52 h-52 blur-3xl rounded-full opacity-20" style={{ backgroundColor: program.color }} />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 8, scale: 1.05 }}
                                    className="relative w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg"
                                    style={{ backgroundColor: program.bg }}
                                >
                                    <div className="absolute inset-0 rounded-[2rem] opacity-20" style={{ backgroundColor: program.color }} />
                                    <Icon className="w-9 h-9 relative z-10" style={{ color: program.color }} />
                                </motion.div>

                                {/* Content */}
                                <div className="mt-8">
                                    <h3 className="text-3xl font-black tracking-[-0.03em] text-[#0a1628]">
                                        {program.title}
                                    </h3>
                                    <p className="mt-5 text-[#64748b] leading-relaxed text-base lg:text-lg">
                                        {program.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA */}
            </div>
        </section>
    )
}