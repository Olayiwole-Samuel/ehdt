// src/app/contact/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// SVG Icons
const SparklesIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
    </svg>
)

const PhoneIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)

const MailIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
    </svg>
)

const MapPinIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.5" />
    </svg>
)

const ClockIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>
)

const SendIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9 22 2z" />
    </svg>
)

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })

        setTimeout(() => {
            setIsSubmitted(false)
        }, 5000)
    }

    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden pt-32 pb-16 bg-[#0d47a1]">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4fc3f7]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <SparklesIcon className="w-4 h-4 text-[#ffc107]" />
                        <span className="text-sm font-semibold text-white">
                            Get In Touch
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                        Let&apos;s <span className="text-[#ffc107]">Connect</span>
                    </h1>

                    <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                        Have a question, partnership opportunity, or want to
                        volunteer? Reach out to us — we&apos;d love to hear from
                        you.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* LEFT */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
                                    Get in{' '}
                                    <span className="text-[#0d47a1]">
                                        Touch
                                    </span>
                                </h2>

                                <p className="text-[#64748b] leading-relaxed">
                                    We&apos;re here to help and answer any
                                    questions you might have. Reach out to us
                                    through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* PHONE */}
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                                        <PhoneIcon className="w-5 h-5 text-[#0d47a1]" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-[#64748b]">
                                            Phone
                                        </p>

                                        <p className="font-semibold text-[#0a1628]">
                                            +234 803 000 0000
                                        </p>
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 rounded-2xl bg-[#fff3e0] flex items-center justify-center">
                                        <MailIcon className="w-5 h-5 text-[#ff6d00]" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-[#64748b]">
                                            Email
                                        </p>

                                        <p className="font-semibold text-[#0a1628]">
                                            info@ehcdt.org
                                        </p>
                                    </div>
                                </div>

                                {/* ADDRESS */}
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 rounded-2xl bg-[#e1f5fe] flex items-center justify-center">
                                        <MapPinIcon className="w-5 h-5 text-[#4fc3f7]" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-[#64748b]">
                                            Address
                                        </p>

                                        <p className="font-semibold text-[#0a1628]">
                                            Uquo Plaza, Uquo, Esit Eket LGA,
                                            Akwa Ibom State
                                        </p>
                                    </div>
                                </div>

                                {/* OFFICE HOURS */}
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 rounded-2xl bg-[#fff8e1] flex items-center justify-center">
                                        <ClockIcon className="w-5 h-5 text-[#ffc107]" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-[#64748b]">
                                            Office Hours
                                        </p>

                                        <p className="font-semibold text-[#0a1628]">
                                            Mon - Fri, 9:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold text-[#0a1628] mb-6">
                                    Send Us a{' '}
                                    <span className="text-[#0d47a1]">
                                        Message
                                    </span>
                                </h3>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center"
                                    >
                                        <div className="text-4xl mb-3">✅</div>

                                        <h4 className="text-xl font-bold text-green-800">
                                            Message Sent!
                                        </h4>

                                        <p className="text-green-600">
                                            Thank you for reaching out.
                                            We&apos;ll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-[#0a1628] mb-1.5">
                                                    Your Name
                                                </label>

                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d47a1] focus:ring-2 focus:ring-[#0d47a1]/20 outline-none transition-all"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-[#0a1628] mb-1.5">
                                                    Email Address
                                                </label>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d47a1] focus:ring-2 focus:ring-[#0d47a1]/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#0a1628] mb-1.5">
                                                Subject
                                            </label>

                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="How can we help you?"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d47a1] focus:ring-2 focus:ring-[#0d47a1]/20 outline-none transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#0a1628] mb-1.5">
                                                Message
                                            </label>

                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                placeholder="Tell us more about your inquiry..."
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d47a1] focus:ring-2 focus:ring-[#0d47a1]/20 outline-none transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#0d47a1] text-white font-semibold hover:bg-[#0a3a85] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <SendIcon className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}