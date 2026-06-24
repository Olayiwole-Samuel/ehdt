// src/app/news/[slug]/page.jsx
import Link from 'next/link'
import Image from 'next/image'
import {
    Calendar,
    ArrowLeft,
    Sparkles,
    Newspaper,
    Share2,
    Clock3,
    Camera,
} from 'lucide-react'

// Only one real news story now
const newsData = [
    {
        id: 1,
        title: 'Frontier Oil/Savannah Energy HCDT Turns 80 Indigenes to Business CEOs',
        excerpt: '80 graduates of the Ekid HCDT skills program have officially become CEOs of their own small-scale businesses, receiving starter packs and ₦200,000 seed funding each.',
        content: 'No less than Eighty graduates of the Ekid Host Community Development Trust (HCDT) skills program have officially become Chief Executive Officers of their small scale business owners after receiving starter packs and N200,000 seed funding each. The empowerment ceremony held Tuesday, 14/04/26, at De Xchange Hotels, Eket. The initiative aligns with the Federal Government\'s Petroleum Industry Act (PIA), which mandates sustainable development in oil-producing host communities. Ekid HCDT is funded by Frontier Oil Ltd and Savannah Energy Uquo Gas Ltd. This marks the fourth batch of trainees produced under the Trust\'s skills acquisition scheme, part of its ongoing drive to create SME CEOs through high-impact human capital development. Mr. Samuel Atara of Frontier Oil\'s Public Affairs unit, who moderated the event, said the ceremony was centered on equipping graduates to foster entrepreneurship, cut unemployment, and promote self-reliance across the communities. After a welcome address by BOT Chairman Dr. Macaulay Akpan, Trust Spokesperson Pastor Ita Udoh explained that the starter packs and kick-off funds are designed to stimulate local economic growth. He noted that the 80 beneficiaries completed three years of training across 10 vocational areas: Welding & Fabrication, Aluminum Fabrication, Automobile Mechanics, Electrical Installation, Fashion Design, Photography & Cinematography, Hairdressing/Makeup Artistry, Barbing, and Hotel & Catering Management. Of the 80 new SME CEOs, 48 are from Esit Eket LGA, 24 from Eket LGA, and 8 from other LGAs. Speaking for the Settlors, Frontier Oil Operations Director Mr. Wole Adefila described the event as "a significant milestone in our collective commitment to sustainable development and inclusive growth within our host communities." "It reflects not only a strategic investment in human capital, but also a deliberate effort to empower individuals with the practical skills and resources required to achieve economic independence," he said. Adefila praised Ekid HCDT for its foresight and effective implementation, and pledged continued collaboration to ensure development benefits remain impactful, inclusive, and sustainable.',
        date: 'April 14, 2026',
        image: '/community.jpg',
        category: 'Empowerment',
        slug: 'frontier-oil-savannah-energy-hcdt-turns-80-indigenes-to-business-ceos',
        gallery: [
            '/images/gallery/empowerment-1.jpg',
            '/images/gallery/empowerment-2.jpg',
            '/images/gallery/empowerment-3.jpg',
        ],
    },
]

export default async function NewsArticle({ params }) {
    const { slug } = await params
    const article = newsData.find((item) => item.slug === slug)
    const relatedArticles = newsData.filter((item) => item.slug !== slug)

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
                <div className="text-center">
                    <h1 className="text-5xl font-black text-[#0a1628] mb-4">Article Not Found</h1>
                    <p className="text-[#64748b] mb-8">The article you're looking for doesn't exist.</p>
                    <Link href="/news" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0d47a1] text-white font-semibold">
                        <ArrowLeft size={18} />
                        Back to News
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="relative overflow-hidden bg-[#f8fafc]">
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffc107]/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4fc3f7]/20 blur-[120px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0d47a1_1px,transparent_1px),linear-gradient(to_bottom,#0d47a1_1px,transparent_1px)] bg-[size:70px_70px]" />
            </div>

            {/* ===== HERO ===== */}
            <section className="relative pt-36 pb-20">
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/news" className="inline-flex items-center gap-3 text-[#0d47a1] font-semibold hover:gap-4 transition-all mb-10">
                        <ArrowLeft size={18} />
                        Back to News
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#ffc107] bg-[#fff8e1] mb-8">
                                <Sparkles size={16} className="text-[#ff6d00]" />
                                <span className="text-sm font-medium text-[#0d47a1]">{article.category}</span>
                            </div>
                            <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-[0.95] tracking-[-0.05em] font-black text-[#0a1628]">
                                {article.title}
                            </h1>
                            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-[#64748b]">
                                {article.excerpt}
                            </p>
                            <div className="mt-10 flex flex-wrap gap-5">
                                <div className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-lg px-5 py-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                                        <Calendar className="text-[#0d47a1]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#64748b]">Published</p>
                                        <h4 className="font-bold text-[#0a1628]">{article.date}</h4>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-lg px-5 py-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#fff3e0] flex items-center justify-center">
                                        <Clock3 className="text-[#ff6d00]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#64748b]">Read Time</p>
                                        <h4 className="font-bold text-[#0a1628]">5 min read</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 z-20 hidden md:flex items-center gap-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl px-5 py-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                                    <Newspaper className="text-[#0d47a1]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0a1628]">Latest Story</h4>
                                    <p className="text-sm text-[#64748b]">EHCDT News Update</p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-[3rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] p-5">
                                <div className="relative h-[520px] rounded-[2rem] overflow-hidden">
                                    <Image src={article.image} alt={article.title} fill className="object-cover" priority />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ARTICLE CONTENT ===== */}
            <section className="relative pb-28">
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[3rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_25px_80px_rgba(0,0,0,0.06)] p-8 md:p-14">
                        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#ffc107]/10 blur-[80px] rounded-full" />
                        <div className="relative z-10 flex items-center justify-between flex-wrap gap-4 mb-10">
                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-[#64748b]">Article Story</p>
                                <h2 className="text-3xl font-black text-[#0a1628] mt-2">Full Story</h2>
                            </div>
                            <button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#f8fafc] border border-gray-200 text-[#0a1628] font-semibold hover:bg-white transition-all">
                                <Share2 size={18} />
                                Share Article
                            </button>
                        </div>
                        <div className="relative z-10 text-[#475569] text-lg leading-[2] space-y-8">
                            {article.content.split('. ').map((paragraph, index) => (
                                <p key={index}>{paragraph}.</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== GALLERY SECTION ===== */}
            <section className="relative pb-28">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap gap-6 mb-10">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b] mb-4">Event Photos</p>
                            <h2 className="text-[2.5rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em] font-black text-[#0a1628]">
                                Gallery
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 text-[#64748b]">
                            <Camera size={18} />
                            <span>{article.gallery?.length || 0} photos</span>
                        </div>
                    </div>

                    {article.gallery && article.gallery.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {article.gallery.map((image, index) => (
                                <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                                    <Image src={image} alt={`${article.title} - Photo ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-3xl border border-gray-100">
                            <Camera className="w-12 h-12 text-[#e2e8f0] mx-auto mb-4" />
                            <p className="text-[#64748b]">No photos available for this event.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ===== RELATED ARTICLES ===== */}
            <section className="relative pb-28">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-[#64748b] mb-4">Continue Reading</p>
                            <h2 className="text-[2.5rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em] font-black text-[#0a1628]">
                                Related Articles
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {relatedArticles.map((item) => (
                            <article key={item.id} className="group relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
                                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#0a1628]">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-7">
                                    <div className="flex items-center gap-2 text-sm text-[#64748b] mb-5">
                                        <Calendar size={15} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-[#0a1628]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 text-[#64748b] leading-relaxed">{item.excerpt}</p>
                                    <div className="mt-8">
                                        <Link href={`/news/${item.slug}`}>
                                            <div className="inline-flex items-center gap-3 text-[#0d47a1] font-bold">
                                                Read Story
                                                <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] flex items-center justify-center">
                                                    <ArrowLeft size={18} className="rotate-180 text-[#0d47a1]" />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}