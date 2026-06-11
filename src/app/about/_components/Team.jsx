'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Team() {
    const leadership = [
        { name: 'Dr. Macaulay Akpan', role: 'Chairman, Board of Trustees (Esit Eket)' },
        { name: 'Mrs. Nelly Ukpong', role: 'Vice Chairman, Board of Trustees (Eket)' },
        { name: 'Bassey Essien, Esq.', role: 'Member, Board of Trustees (Esit Eket)' },
        { name: 'Pastor Ita Umo Udoh', role: 'Member, Board of Trustees (Eket)' },
        { name: 'Dr. Umana Sam Umana', role: 'Member, Board of Trustees (Esit Eket)' },
        { name: 'Yvonne Oluyede, Esq.', role: 'Member, Board of Trustees (Esit Eket)' },
        { name: 'Chief Etukudo Albert Etukudo', role: 'Member, Board of Trustees (Eket)' },
        { name: 'Mr. Sam Atara', role: 'Secretary, Board of Trustees (FOL)' },
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
                        Our <span className="text-[#0d47a1]">Leadership</span>
                    </h2>
                    <p className="text-[#64748b] mt-2 max-w-2xl mx-auto">
                        Guided by experienced leaders committed to the sustainable development of our host communities. The Board of Trustees comprises <strong>3 members from Eket</strong> and <strong>4 members from Esit Eket</strong>, along with a Secretary appointed by the settler.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {leadership.map((member, index) => (
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
                                    src={`/images/leadership-${index + 1}.jpg`}
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