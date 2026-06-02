// src/app/about/_components/IntroText.jsx
'use client'
import { motion } from 'framer-motion'

export default function IntroText() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg lg:text-xl text-[#64748b] leading-relaxed text-center"
                >
                    The Exhdo Host Community Development Trust (EHCDT) was incorporated with the Corporate Affairs Commission (CAC) on <strong>27th September 2023</strong> with registration number <strong>7153605</strong>. Funded by <strong>Frontier Oil Limited (FOL)</strong> and <strong>Savannah Uquo Gas Limited (SEUGL)</strong> — the settlers in PML 10 — the Trust is dedicated to managing and administering funds for the benefit and sustainable development of the Exhdo host communities.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg lg:text-xl text-[#64748b] leading-relaxed text-center mt-6"
                >
                    The name "Exhdo" was coined by the stakeholders of Eket and Esit Eket Local Government Areas to enthrone ownership and active participation of the host communities. A 5-year Community Development Plan (CDP) and fund matrix were prepared in collaboration with the host communities, ensuring that every initiative is community-driven and sustainable.
                </motion.p>
            </div>
        </section>
    )
}