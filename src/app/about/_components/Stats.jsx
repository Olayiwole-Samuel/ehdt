// src/app/about/_components/Stats.jsx
'use client'
import { motion } from 'framer-motion'

export default function Stats() {
    const stats = [
        { number: '391', label: 'Total Beneficiaries' },
        { number: '7', label: 'Board of Trustees' },
        { number: '10', label: 'Management Committee' },
        { number: '4', label: 'Advisory Committee' },
    ]

    return (
        <section className="py-12 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl lg:text-4xl font-bold text-[#0d47a1]">
                                {stat.number}
                            </div>
                            <div className="text-sm text-[#64748b] mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}