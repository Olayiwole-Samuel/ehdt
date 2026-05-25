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
                    At EHCDT, we are committed to transforming communities through innovative, sustainable, and cost-effective solutions. With a proven track record of delivering exceptional projects, we combine state-of-the-art technology, skilled expertise, and community-centric approaches to bring visions to life.
                </motion.p>
            </div>
        </section>
    )
}