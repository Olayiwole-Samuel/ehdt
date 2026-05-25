// src/app/about/_components/HowWeWork.jsx
'use client'

import { motion } from 'framer-motion'
import {
    Search,
    PenTool,
    Building,
    Heart,
    ArrowRight,
    Sparkles,
} from 'lucide-react'

const steps = [
    {
        icon: Search,
        title: 'Discover',
        description:
            'Understanding community needs through deep research, collaboration, and active listening.',
        color: '#0d47a1',
        bg: '#e8f0fe',
    },
    {
        icon: PenTool,
        title: 'Plan',
        description:
            'Designing tailored solutions that are innovative, sustainable, and future-focused.',
        color: '#ff6d00',
        bg: '#fff3e0',
    },
    {
        icon: Building,
        title: 'Execute',
        description:
            'Transforming ideas into reality through strategic implementation and teamwork.',
        color: '#4fc3f7',
        bg: '#e1f5fe',
    },
    {
        icon: Heart,
        title: 'Impact',
        description:
            'Creating measurable outcomes that improve lives and strengthen communities.',
        color: '#ffc107',
        bg: '#fff8e1',
    },
]

export default function HowWeWork() {
    return (
        <section className="relative overflow-hidden py-28 bg-[#f8fafc]">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d47a1]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffc107]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#ff6d00]" />
                        <span className="text-sm font-semibold text-[#0a1628]">
                            Our Process
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1628] leading-tight">
                        How We
                        <span className="relative inline-block text-[#0d47a1] ml-4">
                            Work
                            <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#ffc107]/20 rounded-full -z-10" />
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 text-lg text-[#64748b] leading-relaxed max-w-3xl mx-auto">
                        A transparent and community-driven approach focused on
                        collaboration, innovation, and creating long-lasting
                        impact through every stage of development.
                    </p>
                </motion.div>

                {/* PROCESS FLOW */}
                <div className="relative mt-24">
                    {/* Desktop Connecting Line */}
                    <div className="hidden lg:block absolute top-[90px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#dbeafe] to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="relative group"
                                >
                                    {/* Card */}
                                    <div className="relative overflow-hidden bg-white rounded-[2rem] p-8 border border-[#e2e8f0] shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                                        {/* Glow Hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: `radial-gradient(circle at top right, ${step.bg}, transparent 60%)`,
                                            }}
                                        />

                                        {/* Icon */}
                                        <div
                                            className="relative z-10 w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500"
                                            style={{
                                                backgroundColor: step.bg,
                                            }}
                                        >
                                            <Icon
                                                className="w-9 h-9"
                                                style={{
                                                    color: step.color,
                                                }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-black text-[#0a1628]">
                                                {step.title}
                                            </h3>
                                            <p className="mt-4 text-[#64748b] leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Bottom Line */}
                                        <div className="relative z-10 mt-8 flex items-center justify-between">
                                            <div
                                                className="w-14 h-1 rounded-full"
                                                style={{
                                                    backgroundColor: step.color,
                                                }}
                                            />
                                            <ArrowRight
                                                className="w-5 h-5 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                                                style={{
                                                    color: step.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* BOTTOM HIGHLIGHT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a1628] via-[#0d47a1] to-[#111827] p-10 lg:p-14 shadow-[0_30px_80px_rgba(13,71,161,0.25)]">
                        {/* Glow Effects */}
                        <div className="absolute top-0 right-0 w-56 h-56 bg-[#ffc107]/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                            {/* Left */}
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/70 mb-5">
                                    <Sparkles className="w-4 h-4 text-[#ffc107]" />
                                    Strategic Workflow
                                </div>
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                                    Every Step Is Designed
                                    <br />
                                    To Create Real Impact
                                </h3>
                                <p className="mt-6 text-lg text-white/70 leading-relaxed">
                                    We combine innovation, collaboration, and
                                    sustainable planning to ensure every project
                                    delivers measurable transformation and
                                    long-term value.
                                </p>
                            </div>

                            {/* Right Stats */}
                            <div className="grid grid-cols-2 gap-6 min-w-fit">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                                    <h4 className="text-4xl font-black text-white">
                                        100%
                                    </h4>
                                    <p className="mt-2 text-sm text-white/60">
                                        Transparency
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                                    <h4 className="text-4xl font-black text-white">
                                        24/7
                                    </h4>
                                    <p className="mt-2 text-sm text-white/60">
                                        Collaboration
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}