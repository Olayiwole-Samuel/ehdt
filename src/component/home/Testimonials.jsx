'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { useState, useRef } from 'react'

const testimonials = [
    {
        id: 1,
        name: 'Ryan Almeida',
        date: '1 day ago',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        stars: 5,
    },
    {
        id: 2,
        name: 'Blossom Menezes',
        date: '3 days ago',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        stars: 5,
    },
    {
        id: 3,
        name: 'Jason Doe',
        date: '1 week ago',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        stars: 5,
    },
    {
        id: 4,
        name: 'Sarah Johnson',
        date: '2 weeks ago',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        stars: 5,
    },
    {
        id: 5,
        name: 'Michael Okafor',
        date: '3 weeks ago',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        stars: 5,
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
                        <span className="text-sm font-medium tracking-widest text-[#0d47a1]">TESTIMONIALS</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black text-[#0a1628] tracking-[-1.2px] mb-4">
                        What Our <span className="text-[#0d47a1]">Community</span> Says
                    </h2>

                    <div className="flex items-center justify-center gap-4 text-[#64748b]">
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold text-[#0a1628]">4.9</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-[#ffc107] text-[#ffc107]" />
                                ))}
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="font-medium">Based on 3,987 real stories</p>
                            <p className="text-sm">from people whose lives we’ve touched</p>
                        </div>
                    </div>
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

                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-[#ffc107] text-[#ffc107]" />
                                            ))}
                                        </div>

                                        <p className="text-[#64748b] leading-relaxed text-[15.5px] flex-grow">
                                            “{testimonial.quote}”
                                        </p>

                                        <div className="mt-8 flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-[#0a1628]">{testimonial.name}</p>
                                                <p className="text-xs text-[#64748b]">{testimonial.date}</p>
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