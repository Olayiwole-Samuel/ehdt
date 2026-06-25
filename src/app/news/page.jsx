// src/app/news/page.jsx
import Link from 'next/link'
import Image from 'next/image'
import {
    Calendar,
    ArrowRight,
    Sparkles,
    Newspaper,
    TrendingUp,
} from 'lucide-react'

// Only one real news story now
const newsData = [
    {
        id: 1,
        title: 'Frontier Oil/Savannah Energy HCDT Turns 80 Indigenes to Business CEOs',
        excerpt: '80 graduates of the Ekid HCDT skills program have officially become CEOs of their own small-scale businesses, receiving starter packs and ₦200,000 seed funding each.',
        content: 'No less than Eighty graduates of the Ekid Host Community Development Trust (HCDT) skills program have officially become Chief Executive Officers of their small scale business owners after receiving starter packs and N200,000 seed funding each. The empowerment ceremony held Tuesday, 14/04/26, at De Xchange Hotels, Eket. The initiative aligns with the Federal Government\'s Petroleum Industry Act (PIA), which mandates sustainable development in oil-producing host communities. Ekid HCDT is funded by Frontier Oil Ltd and Savannah Energy Uquo Gas Ltd. This marks the fourth batch of trainees produced under the Trust\'s skills acquisition scheme, part of its ongoing drive to create SME CEOs through high-impact human capital development. Mr. Samuel Atara of Frontier Oil\'s Public Affairs unit, who moderated the event, said the ceremony was centered on equipping graduates to foster entrepreneurship, cut unemployment, and promote self-reliance across the communities. After a welcome address by BOT Chairman Dr. Macaulay Akpan, Trust Spokesperson Pastor Ita Udoh explained that the starter packs and kick-off funds are designed to stimulate local economic growth. He noted that the 80 beneficiaries completed three years of training across 10 vocational areas: Welding & Fabrication, Aluminum Fabrication, Automobile Mechanics, Electrical Installation, Fashion Design, Photography & Cinematography, Hairdressing/Makeup Artistry, Barbing, and Hotel & Catering Management. Of the 80 new SME CEOs, 48 are from Esit Eket LGA, 24 from Eket LGA, and 8 from other LGAs. Speaking for the Settlors, Frontier Oil Operations Director Mr. Wole Adefila described the event as "a significant milestone in our collective commitment to sustainable development and inclusive growth within our host communities." "It reflects not only a strategic investment in human capital, but also a deliberate effort to empower individuals with the practical skills and resources required to achieve economic independence," he said. Adefila praised Ekid HCDT for its foresight and effective implementation, and pledged continued collaboration to ensure development benefits remain impactful, inclusive, and sustainable.',
        date: 'April 14, 2026',
        image: '/team-2.jpg',
        category: 'Empowerment',
        slug: 'frontier-oil-savannah-energy-hcdt-turns-80-indigenes-to-business-ceos',
    },
]

export const metadata = {
    title: 'News & Updates | EKID',
    description:
        'Stay updated with the latest programs, projects, and community impact stories from EKID.',
}

export default function NewsPage() {
    const featuredNews = newsData[0]

    return (
        <main className="relative overflow-hidden bg-[#f8fafc]">
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffc107]/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4fc3f7]/20 blur-[120px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0d47a1_1px,transparent_1px),linear-gradient(to_bottom,#0d47a1_1px,transparent_1px)] bg-[size:70px_70px]" />
            </div>

            {/* ================= HERO ================= */}
            <section className="relative pt-36 pb-20">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#ffc107] bg-[#fff8e1] mb-8">
                        <Sparkles size={16} className="text-[#ff6d00]" />
                        <span className="text-sm font-medium text-[#0d47a1]">
                            Empowerment • Skills • Community Impact
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        {/* LEFT */}
                        <div>
                            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.92] tracking-[-0.05em] font-black text-[#0a1628]">
                                News &
                                <br />
                                <span className="text-[#ff6d00]">Updates</span>
                            </h1>

                            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-[#64748b] max-w-2xl">
                                Discover inspiring stories of empowerment,
                                impactful community projects, and important updates
                                from EKID as we continue empowering lives and
                                building sustainable futures.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">
                                <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-lg px-6 py-5">
                                    <h3 className="text-3xl font-black text-[#0a1628]">80</h3>
                                    <p className="text-sm text-[#64748b] mt-1">New SME CEOs</p>
                                </div>
                                <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-lg px-6 py-5">
                                    <h3 className="text-3xl font-black text-[#0a1628]">10</h3>
                                    <p className="text-sm text-[#64748b] mt-1">Skill Areas</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative">
                            <div className="absolute top-10 -left-6 z-20 hidden md:flex items-center gap-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl px-5 py-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                                    <Newspaper className="text-[#0d47a1]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0a1628]">Latest Story</h4>
                                    <p className="text-sm text-[#64748b]">Updated regularly</p>
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-0 z-20 hidden md:flex items-center gap-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl px-5 py-4">
                                <div className="w-14 h-14 rounded-2xl bg-[#fff3e0] flex items-center justify-center">
                                    <TrendingUp className="text-[#ff6d00]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0a1628]">Growing Impact</h4>
                                    <p className="text-sm text-[#64748b]">More lives empowered</p>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-[3rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] p-5">
                                <div className="relative h-[500px] rounded-[2rem] overflow-hidden">
                                    <Image src={featuredNews.image} alt={featuredNews.title} fill className="object-cover" priority />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/10 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffc107] text-[#0a1628] text-sm font-bold mb-5">
                                            {featuredNews.category}
                                        </div>
                                        <h2 className="text-3xl font-black text-white leading-tight">
                                            {featuredNews.title}
                                        </h2>
                                        <div className="mt-4 flex items-center gap-2 text-white/80">
                                            <Calendar size={16} />
                                            <span className="text-sm">{featuredNews.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= NEWS GRID ================= */}
            <section className="relative pb-28">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
                        <div>
                            <h2 className="text-[2.5rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em] font-black text-[#0a1628]">
                                Latest Story
                            </h2>
                            <p className="mt-5 text-lg text-[#64748b] max-w-2xl">
                                Explore our latest impactful community project.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {newsData.map((news, index) => (
                            <article key={news.id} className="group relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={news.image} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
                                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#0a1628]">
                                        {news.category}
                                    </div>
                                </div>
                                <div className="p-7">
                                    <div className="flex items-center gap-2 text-sm text-[#64748b] mb-5">
                                        <Calendar size={15} />
                                        <span>{news.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-[#0a1628]">
                                        {news.title}
                                    </h3>
                                    <p className="mt-5 text-[#64748b] leading-relaxed">
                                        {news.excerpt}
                                    </p>
                                    <div className="mt-8">
                                        <Link href={`/news/${news.slug}`}>
                                            <div className="inline-flex items-center gap-3 text-[#0d47a1] font-bold group/link">
                                                Read Full Story
                                                <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] flex items-center justify-center group-hover/link:bg-[#0d47a1] transition-all">
                                                    <ArrowRight size={18} className="text-[#0d47a1] group-hover/link:text-white transition-all" />
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