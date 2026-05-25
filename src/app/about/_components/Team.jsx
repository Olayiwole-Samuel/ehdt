// src/app/about/_components/Team.jsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Team() {
    const team = [
        { name: 'Jane Cooper', role: 'Marketing Coordinator' },
        { name: 'Darlene Robertson', role: 'Marketing Coordinator' },
        { name: 'Darrell Steward', role: 'Marketing Coordinator' },
        { name: 'Jenny Wilson', role: 'Marketing Coordinator' },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1628]">
                        Crafting Excellence as a <span className="text-[#0d47a1]">Team</span>
                    </h2>
                    <p className="text-[#64748b] mt-2 max-w-2xl mx-auto">
                        Our success is built on the dedication and expertise of our team. Together, we bring innovative ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative h-[250px] rounded-2xl overflow-hidden mb-3">
                                <Image
                                    src={`/images/team-${index + 1}.jpg`}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h4 className="font-bold text-[#0a1628]">{member.name}</h4>
                            <p className="text-sm text-[#64748b]">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}