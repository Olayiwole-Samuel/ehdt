// src/app/gallery/page.jsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Sparkles, Calendar, Heart, ArrowRight, X } from 'lucide-react'

// Sample gallery data — replace with Supabase later
const galleryItems = [
    {
        id: 1,
        title: 'School Opening Ceremony',
        description: 'Community members celebrate the opening of a new school built by EHCDT.',
        date: 'December 15, 2024',
        image: '/images/gallery/school-opening.jpg',
        category: 'Education',
    },
    {
        id: 2,
        title: 'Health Outreach Program',
        description: 'Free medical checkups and health education for over 500 community members.',
        date: 'December 1, 2024',
        image: '/images/gallery/health-outreach.jpg',
        category: 'Healthcare',
    },
    {
        id: 3,
        title: 'Clean Water Project',
        description: 'New borehole providing clean drinking water to 1,200 households.',
        date: 'November 20, 2024',
        image: '/images/gallery/water-project.jpg',
        category: 'Water & Sanitation',
    },
    {
        id: 4,
        title: 'Annual Community Gathering',
        description: 'Over 1,000 community members gather to celebrate achievements and plan for the future.',
        date: 'November 10, 2024',
        image: '/images/gallery/community-gathering.jpg',
        category: 'Community',
    },
    {
        id: 5,
        title: 'Youth Empowerment Workshop',
        description: '50 young leaders participate in a 3-day leadership and development workshop.',
        date: 'October 28, 2024',
        image: '/images/gallery/youth-workshop.jpg',
        category: 'Youth Development',
    },
    {
        id: 6,
        title: 'Partnership Signing Ceremony',
        description: 'EHCDT signs partnership agreement with local government to expand community projects.',
        date: 'October 15, 2024',
        image: '/images/gallery/partnership-signing.jpg',
        category: 'Partnerships',
    },
    {
        id: 7,
        title: 'Community Cleanup Drive',
        description: 'Community members come together for a cleanup drive to promote environmental sustainability.',
        date: 'September 30, 2024',
        image: '/images/gallery/cleanup-drive.jpg',
        category: 'Environment',
    },
    {
        id: 8,
        title: 'Women\'s Empowerment Program',
        description: 'A program dedicated to empowering women through skills training and entrepreneurship.',
        date: 'September 15, 2024',
        image: '/images/gallery/women-empowerment.jpg',
        category: 'Empowerment',
    },
    {
        id: 9,
        title: 'Tree Planting Initiative',
        description: 'Over 1,000 trees planted across the community to combat deforestation and promote a greener future.',
        date: 'August 20, 2024',
        image: '/images/gallery/tree-planting.jpg',
        category: 'Environment',
    },
]

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [activeCategory, setActiveCategory] = useState('All')

    // Get unique categories
    const categories = ['All', ...new Set(galleryItems.map(item => item.category))]

    // Filter items by category
    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory)

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="relative overflow-hidden pt-32 pb-16 bg-[#0d47a1]">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4fc3f7]/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <Camera className="w-4 h-4 text-[#ffc107]" />
                        <span className="text-sm font-semibold text-white">Photo Gallery</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                        Capturing <span className="text-[#ffc107]">Moments</span>
                    </h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                        Browse photos from our events, projects, and the communities we serve.
                    </p>
                </div>
            </section>

            {/* ===== GALLERY ===== */}
            <section className="py-20 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeCategory === category
                                        ? 'bg-[#0d47a1] text-white shadow-lg shadow-[#0d47a1]/25'
                                        : 'bg-white border border-gray-200 text-[#64748b] hover:border-[#0d47a1] hover:text-[#0d47a1]'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item)}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Hover overlay content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                        <p className="text-white/80 text-sm">{item.category}</p>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-[#0a1628]">{item.title}</h3>
                                        <span className="text-xs text-[#64748b] flex items-center gap-1">
                                            <Calendar size={12} />
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="text-[#64748b] text-sm mt-2 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="mt-3">
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#e8f0fe] text-[#0d47a1] text-xs font-medium">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 text-[#64748b] text-sm">
                            <Heart className="w-4 h-4 text-[#ff6d00]" />
                            <span>Every moment captured is a story of impact</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== LIGHTBOX ===== */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-[#ffc107] transition-colors z-50"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative max-w-6xl max-h-[90vh] w-full">
                            <div className="relative w-full h-[80vh]">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                                <p className="text-white/80">{selectedImage.description}</p>
                                <div className="flex items-center gap-2 mt-2 text-sm text-white/60">
                                    <Calendar size={14} />
                                    <span>{selectedImage.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{selectedImage.category}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}