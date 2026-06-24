'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { useState, useRef } from 'react'

const testimonials = [
    {
        id: 1,
        quote: '"This is a direct path to youth empowerment. Greater participation will improve employment and reduce social vulnerability."',
        name: 'Edidem E. C. D. Abia',
        role: 'Paramount Ruler of Eket LGA',
    },
    {
        id: 2,
        quote: '"We didn\'t want to just train and abandon them. We invested in quality tools and long training periods so they can compete, employ others, and lift their communities."',
        name: 'Pastor Ita Udoh',
        role: 'Spokesperson, Ekid HCDT',
    },
    {
        id: 3,
        quote: '"It reflects not only a strategic investment in human capital, but also a deliberate effort to empower individuals with practical skills for economic independence."',
        name: 'Mr. Wole Adefila',
        role: 'Operations Director, Frontier Oil Ltd.',
    },
]

export default function Testimonials() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const scrollContainerRef = useRef(null)

    const scroll = (direction) => {
        const container = scrollContainerRef.current
        if (!container) return

        const scrollAmount = 340
        const newPosition = direction === 'left'
            ? Math.max(0, scrollPosition - scrollAmount)
            : scrollPosition + scrollAmount

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth',
        })
        setScrollPosition(newPosition)
    }

    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d47a1]/5 to-transparent" />
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffc107_1px,transparent_1px)] bg-[length:50px_50px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#ffc107]/30 mb-6">
                        <Sparkles className="text-[#ff6d00]" size={20} />
                        <span className="text-sm font-medium tracking-widest text-[#0d47a1]">REAL VOICES</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black text-[#0a1628] tracking-[-1.2px] mb-4">
                        Real <span className="text-[#ff6d00]">Voices</span>, Real Impact
                    </h2>

                    <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                        Hear directly from community leaders, Trust officials, and partners on the impact of EHCDT's work.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start"
                    >
                        <div className="text-[#0d47a1]/10 mb-8">
                            <Quote size={120} strokeWidth={0.8} />
                        </div>

                        <h3 className="text-4xl font-bold text-[#0a1628] leading-tight mb-6">
                            Real voices.<br />Real impact.
                        </h3>

                        <p className="text-[#64748b] text-lg leading-relaxed mb-10">
                            Don’t just take our word for it — hear directly from the people and communities we serve.
                        </p>

                        {/* Navigation */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-14 h-14 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#0d47a1] hover:text-white hover:border-[#0d47a1] transition-all group"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-14 h-14 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-[#0d47a1] hover:text-white hover:border-[#0d47a1] transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Testimonials Scroll Area */}
                    <div className="lg:w-2/3 overflow-hidden">
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 no-scrollbar snap-x snap-mandatory"
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0 w-full max-w-[340px] snap-start"
                                >
                                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col relative">
                                        {/* Subtle Gold Accent */}
                                        <div className="absolute top-6 right-6 text-[#ffc107]/10">
                                            <Quote size={48} />
                                        </div>

                                        <p className="text-[#64748b] leading-relaxed text-[15.5px] flex-grow">
                                            {testimonial.quote}
                                        </p>

                                        <div className="mt-8 flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-[#0a1628]">{testimonial.name}</p>
                                                <p className="text-sm text-[#64748b]">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollbar Hide */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}