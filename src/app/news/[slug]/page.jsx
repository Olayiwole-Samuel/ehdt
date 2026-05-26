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

// All 6 articles with full content and gallery images
const newsData = [
    {
        id: 1,
        title: 'New School Built in Host Community',
        excerpt:
            'We successfully completed the construction of a new primary school, benefiting over 300 children in the community.',
        content:
            'We are thrilled to announce the successful completion of a new primary school in the host community. This project, which began in early 2024, has been a collaborative effort between EHCDT, local community members, and our dedicated partners. The school features six classrooms, a library, a playground, and clean water facilities. Over 300 children will now have access to quality education in a safe and inspiring environment. This is just one of many projects we are undertaking to ensure sustainable development in our communities. The school was officially opened in a ceremony attended by community leaders, parents, and local government officials. We extend our deepest gratitude to everyone who made this possible.',
        date: 'December 15, 2024',
        image: '/school.png',
        category: 'Education',
        slug: 'new-school-built-in-host-community',
        gallery: [
            '/images/gallery/school-1.jpg',
            '/images/gallery/school-2.jpg',
            '/images/gallery/school-3.jpg',
            '/images/gallery/school-4.jpg',
            '/images/gallery/school-5.jpg',
        ],
    },
    {
        id: 2,
        title: 'Community Health Outreach Program',
        excerpt:
            'Over 500 community members received free medical checkups and health education during our latest outreach.',
        content:
            'Our latest community health outreach program was a resounding success, providing free medical services to over 500 community members. The program offered general health screenings, malaria testing, blood pressure checks, and health education sessions. We partnered with local health professionals and volunteers to ensure that every individual received quality care. Many community members expressed gratitude for the services, noting that they had not had access to such care in months. This outreach is part of our ongoing commitment to improving health outcomes in underserved communities. We plan to organize similar programs every quarter to ensure continuous access to healthcare.',
        date: 'December 1, 2024',
        image: '/outreach-2.jpg',
        category: 'Healthcare',
        slug: 'community-health-outreach-program',
        gallery: [
            '/images/gallery/health-1.jpg',
            '/images/gallery/health-2.jpg',
            '/images/gallery/health-3.jpg',
            '/images/gallery/health-4.jpg',
        ],
    },
    {
        id: 3,
        title: 'Water Project Brings Clean Water',
        excerpt:
            'New borehole installed providing clean drinking water to over 1,200 households in the region.',
        content:
            'Clean water is now flowing in the community! We are proud to announce the completion of a new borehole project that is providing clean, safe drinking water to over 1,200 households. This project addresses a critical need in the region, where residents previously had to travel long distances to access water. The borehole is equipped with a solar-powered pump, ensuring sustainable and reliable water supply throughout the year. Community members no longer have to worry about waterborne diseases or the daily struggle of fetching water. This project was made possible through the generous support of our donors and partners. We remain committed to ensuring that every community has access to clean water.',
        date: 'November 20, 2024',
        image: '/water.jpg',
        category: 'Water & Sanitation',
        slug: 'water-project-brings-clean-water',
        gallery: [
            '/images/gallery/water-1.jpg',
            '/images/gallery/water-2.jpg',
            '/images/gallery/water-3.jpg',
        ],
    },
    {
        id: 4,
        title: 'Annual Community Gathering 2024',
        excerpt:
            'Over 1,000 community members gathered to celebrate our shared achievements and plan for the future.',
        content:
            'The 2024 Annual Community Gathering was a landmark event, bringing together over 1,000 community members to celebrate our shared achievements and plan for the future. The event featured speeches from community leaders, performances by local artists, and interactive sessions where residents shared their vision for sustainable development. It was a day of joy, unity, and renewed commitment to building a better future together. We also used the opportunity to recognize outstanding volunteers and community partners who have contributed significantly to our projects. The gathering reinforced our belief that meaningful change happens when communities come together. We look forward to an even bigger gathering next year.',
        date: 'November 10, 2024',
        image: '/collab.jpg',
        category: 'Community',
        slug: 'annual-community-gathering-2024',
        gallery: [
            '/images/gallery/gathering-1.jpg',
            '/images/gallery/gathering-2.jpg',
            '/images/gallery/gathering-3.jpg',
            '/images/gallery/gathering-4.jpg',
        ],
    },
    {
        id: 5,
        title: 'Youth Empowerment Workshop',
        excerpt:
            '50 young leaders participated in a 3-day workshop focused on leadership and sustainable development.',
        content:
            'Empowering the next generation of leaders is one of our core missions. This year, we hosted a 3-day Youth Empowerment Workshop that brought together 50 young leaders from across the community. The workshop covered topics such as leadership skills, project management, sustainable development, and community engagement. Participants engaged in interactive sessions, group projects, and real-world case studies. By the end of the workshop, participants had developed actionable plans for community projects they intend to lead. Many of them expressed a renewed sense of purpose and commitment to giving back to their communities. We are excited to continue supporting these young leaders as they grow into change-makers.',
        date: 'October 28, 2024',
        image: '/community.jpg',
        category: 'Youth Development',
        slug: 'youth-empowerment-workshop',
        gallery: [
            '/images/gallery/youth-1.jpg',
            '/images/gallery/youth-2.jpg',
            '/images/gallery/youth-3.jpg',
        ],
    },
    {
        id: 6,
        title: 'Partnership with Local Government',
        excerpt:
            'EHCDT signs a new partnership agreement with the local government to expand community development projects.',
        content:
            'We are excited to announce a new partnership agreement between EHCDT and the local government. This partnership will expand our community development projects, allowing us to reach more communities and deliver greater impact. The agreement focuses on key areas such as education, healthcare, water and sanitation, and infrastructure development. Under this partnership, we will work closely with government agencies to ensure that our projects are aligned with broader development goals and that resources are used efficiently. We believe that collaboration between NGOs and government is essential for creating lasting change. This partnership marks a new chapter in our journey, and we are confident that it will lead to even more meaningful outcomes for the communities we serve.',
        date: 'October 15, 2024',
        image: '/team-2.jpg',
        category: 'Partnerships',
        slug: 'partnership-with-local-government',
        gallery: [
            '/images/gallery/partnership-1.jpg',
            '/images/gallery/partnership-2.jpg',
            '/images/gallery/partnership-3.jpg',
        ],
    },
]

export default async function NewsArticle({ params }) {
    const { slug } = await params
    const article = newsData.find((item) => item.slug === slug)
    const relatedArticles = newsData.filter((item) => item.slug !== slug).slice(0, 3)

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
                <div className="text-center">
                    <h1 className="text-5xl font-black text-[#0a1628] mb-4">Article Not Found</h1>
                    <p className="text-[#64748b] mb-8">The article you're looking for doesn't exist.</p>
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0d47a1] text-white font-semibold"
                    >
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
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-3 text-[#0d47a1] font-semibold hover:gap-4 transition-all mb-10"
                    >
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
                                <div
                                    key={index}
                                    className="relative h-64 rounded-2xl overflow-hidden shadow-lg group"
                                >
                                    <Image
                                        src={image}
                                        alt={`${article.title} - Photo ${index + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
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
                                Related <span className="text-[#0d47a1]">Articles</span>
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {relatedArticles.map((item) => (
                            <article
                                key={item.id}
                                className="group relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500"
                            >
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