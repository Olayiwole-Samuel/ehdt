'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    Mail,
    Sparkles,
    Users,
    Award,
    Heart,
    ArrowRight,
    ChevronRight,
    ShieldCheck,
    Star,
} from 'lucide-react'

// Custom LinkedIn SVG
const LinkedInSVG = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.13V24h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.37 0-2.73 1.85-2.73 3.77V24h-4V8z" />
    </svg>
)

const memberGroups = [
    {
        id: 'board',
        title: 'Board of Trustees (BoT)',
        icon: Users,
        description:
            "The 7-member Board of Trustees inaugurated on 19th October 2023 in accordance with the Petroleum Industry Act (PIA) 2021.",
        members: [
            {
                name: 'Dr. Macaulay Akpan',
                role: 'Chairman',
                bio: 'Senior Lawyer, Chief Lecturer, and Head of Crime Management at Akwa Ibom State Polytechnic. Holds LL.B, BL, LL.M, and Ph.D. in Environmental Law. Author of over 70 journal articles and 4 textbooks. Led EHCDT to win 1st and 3rd prizes in Gender Inclusivity and Good Governance (2026). Currently serves as Chairman of Akwa Ibom State Multi-Stakeholders\' Partnership (MSP) Committee.',
                image: '/akpan.jpg',
                linkedin: '#',
                email: 'macaulay@ehcdt.org',
            },
            {
                name: 'Mrs. Nelly Ukpong',
                role: 'Vice Chairman',
                bio: 'Public health professional and community development leader with over 30 years of experience. Holds B.A. in History, MBA, and MSc.PH. Passionate about youth and women empowerment, and serves as a mentor to young women across Akwa Ibom State.',
                image: '/nelly.jpg',
                linkedin: '#',
                email: 'nelly@ehcdt.org',
            },
            {
                name: 'Essentia Koffi',
                role: 'Member',
                bio: 'Certified National Accountant (CNA) with HND, MBA, and MSc. Former Director of Finance in Akwa Ibom State Local Government Service for over 10 years. Brings extensive expertise in budgeting, development planning, revenue generation, and auditing.',
                image: '/kofi.jpg',
                linkedin: '#',
                email: 'koffi@ehcdt.org',
            },
            {
                name: 'Mr. Etukudo Albert',
                role: 'Member',
                bio: 'Seasoned HR and community relations professional with over 18 years experience in the oil and gas industry. Holds a Master\'s degree in Business Management. Previously chaired the Uquo Field Marginal Implementation Committee (UFMIC).',
                image: '/albert.png',
                linkedin: '#',
                email: 'etukudo@ehcdt.org',
            },
            {
                name: 'Pastor Ita Umo Udoh',
                role: 'Member',
                bio: 'Pastor, community mobilizer, and administrator. Holds B.Ed and MPA from University of Calabar. Former member of Akwa Ibom State Executive Council (Ministry of Youth and Sports, Ministry of Culture and Tourism). Lead pastor of Trinity Gospel Mission, Eket.',
                image: '/udho.jpg',
                linkedin: '#',
                email: 'ita@ehcdt.org',
            },
            {
                name: 'Dr. Umana Sam Umana',
                role: 'Member',
                bio: 'Philanthropist and community leader with a Ph.D. in Environmental Resources Management. Former member of Akwa Ibom State Polytechnic Governing Council and Chairman of State Secondary Education Board (SSEB). Fellow of the Institute of Leadership/Mentorship.',
                image: '/umana.jpg',
                linkedin: '#',
                email: 'umana@ehcdt.org',
            },
            {
                name: 'Yvonne Oluyede, Esq.',
                role: 'Member',
                bio: 'Company Secretary at ABAI Contractors Limited and Associate Partner at TXG Solicitors. Founder of Esit Eket Lawyers Association and lead of Ndito Mbaba Esit Eket (women empowerment group). Holds LL.B from Middlesex University, UK, and a Master\'s in Commercial and Maritime Law.',
                image: '/yede.jpeg',
                linkedin: '#',
                email: 'yvonne@ehcdt.org',
            },
        ],
    },
    {
        id: 'management',
        title: 'Management Committee (MC)',
        icon: ShieldCheck,
        description:
            "The 10-member Management Committee comprising four (4) executive members and six (6) non-executive members.",
        members: [
            {
                name: 'Engr. Moses Tobby Ekpe',
                role: 'Head M.C. / Project Manager (Executive)',
                bio: 'Master\'s degree holder in electrical engineering with over 25 years experience at NEPA and PHCN. Held multiple managerial roles including Manager of Operations & Maintenance and Manager of Planning & Construction. Member of COREN, NSE, and NIEEE.',
                image: '/ekpe.jpg',
                linkedin: '#',
                email: 'moses@ehcdt.org',
            },
            {
                name: 'Emmanuel Akpan Smith, Esq.',
                role: 'Secretary to M.C.',
                bio: 'Legal luminary with over 10 years practice experience. Former Youth President of Ekpene Obo Group of Villages. Current Legal Adviser of APC, Esit Eket Chapter. Holds LL.B from University of Jos. Passionate about accountability and socio-economic development.',
                image: '/smith.jpg',
                linkedin: '#',
                email: 'emmanuel@ehcdt.org',
            },
            {
                name: 'Aniefiok Peter Ekwere Esq.',
                role: 'Legal Officer (Executive)',
                bio: 'Distinguished private senior legal practitioner with 24 years post-call experience. Based in Eket. Former Chairman of Nigeria Bar Association (NBA), Eket Branch (term ended July 2024). Brings legal expertise to policy formulation and Trust administration.',
                image: '/peter.jpg',
                linkedin: '#',
                email: 'aniefiok@ehcdt.org',
            },
            {
                name: 'Obonganwan (Mrs.) Mariatherese Adiakpan',
                role: 'Non-Executive Member',
                bio: 'Entrepreneur, fashion designer, filmmaker, and chef. Founder of Mariatherese Productions Limited and CEO of Soulminds Entertainment. Established Uyai College of Creative Arts (2020). Awarded Hospitality Entrepreneur of the Year (2021).',
                image: '/rese.png',
                linkedin: '#',
                email: 'mariatherese@ehcdt.org',
            },
            {
                name: 'Pastor Bills Oduok Ene',
                role: 'Non-Executive Member',
                bio: 'Educationist and grassroots politician with over 35 years experience in stakeholder relations and community development. Former Supervisory Councillor for Culture and Tourism in Esit Eket LGA. Holds B.Sc. Ed in Accounting Education from University of Uyo.',
                image: '/ene.jpg',
                linkedin: '#',
                email: 'bills@ehcdt.org',
            },
            {
                name: 'Hon. (Deaconess) Inyang Victor Akpawan',
                role: 'Non-Executive Member',
                bio: 'Vice Chairman of Eket Local Government Council. Retired Principal General with B.Sc. (Education) from Abia State University. Member of NUT, NCWS, and AKIWOL. Advocate of Girl Child Education and Women Empowerment.',
                image: '/inyang.png',
                linkedin: '#',
                email: 'inyang@ehcdt.org',
            },
            {
                name: 'Isaac Ubong Ataudim',
                role: 'Non-Executive Member',
                bio: 'Holds B.Sc. in Political Science from Akwa Ibom State University. Currently pursuing MPA at University of Uyo. Public Relations Officer (PRO) of National Youth Council of Nigeria, Esit Eket Chapter. Advocates for accountability and transparency.',
                image: '/ubong.png',
                linkedin: '#',
                email: 'isaac@ehcdt.org',
            },
            {
                name: 'Hon. David Sam Udo',
                role: 'Non-Executive Member',
                bio: 'Pastor, politician, and philanthropist. Former chief whip of Eket legislative council. Holds HND in Computer Science and ND in Electrical/Electronics Engineering. Experienced community builder and peacemaker with over 20 years in leadership.',
                image: '/sam.jpg',
                linkedin: '#',
                email: 'david@ehcdt.org',
            },
        ],
    },
    {
        id: 'advisory',
        title: 'Advisory Committee (AC)',
        icon: Award,
        description:
            "The 4-member Advisory Committee providing strategic guidance and insights to the Trust.",
        members: [
            {
                name: 'Elder Emmanuel Sunday Jack',
                role: 'Non-Executive Member',
                bio: 'Young politician and school administrator with over 17 years experience. Former member of Nigerian Youth Parliament (NYP), 4th session. Served as Chairman, Committee on Solid Minerals and Natural Resources (2019-2022). Holds PGDE and B.Sc. in Educational Administration.',
                image: '/jack.png',
                linkedin: '#',
                email: 'emmanuel.jack@ehcdt.org',
            },
            {
                name: 'Hon. Emem John Ikot',
                role: 'Non-Executive Member',
                bio: 'Pastor and community leader with B.Sc. in Accountancy from Imo State University. Former Supervisory Councillor for Finance (2004-2005) and Works (2005-2007) for Esit Eket LGA. Appointed to the Advisory Committee in 2024 by Esit Eket community leaders.',
                image: '/ikot.png',
                linkedin: '#',
                email: 'emem@ehcdt.org',
            },
        ],
    },
]

export default function MembersPage() {
    return (
        <main className="bg-[#f8fafc] overflow-hidden">
            {/* ===== HERO ===== */}
            <section className="relative overflow-hidden pt-36 pb-24 bg-[#0d47a1]">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4fc3f7]/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
                            <Sparkles className="w-4 h-4 text-[#ffc107]" />
                            <span className="text-white font-medium text-sm">
                                Leadership & Governance
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-[-0.05em]">
                            Meet The
                            <span className="block text-[#ffc107]">
                                People Behind EKID
                            </span>
                        </h1>

                        <p className="mt-8 text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Dedicated leaders, managers, and advisors working together to transform communities and create lasting impact.
                        </p>

                        {/* Stats */}
                        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {[
                                {
                                    label: 'Board of Trustees',
                                    value: '7',
                                    icon: Users,
                                },
                                {
                                    label: 'Management Committee',
                                    value: '10',
                                    icon: ShieldCheck,
                                },
                                {
                                    label: 'Advisory Committee',
                                    value: '4',
                                    icon: Award,
                                },
                            ].map((stat, index) => {
                                const Icon = stat.icon

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.15,
                                        }}
                                        className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                                            <Icon className="text-[#ffc107]" />
                                        </div>
                                        <h3 className="text-4xl font-black text-white">
                                            {stat.value}
                                        </h3>
                                        <p className="text-white/70 mt-2">
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== MEMBERS ===== */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {memberGroups.map((group, groupIndex) => {
                        const Icon = group.icon

                        return (
                            <div
                                key={group.id}
                                id={group.id}
                                className="mb-28"
                            >
                                {/* Section Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
                                >
                                    <div>
                                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#e8f0fe] text-[#0d47a1] mb-6">
                                            <Icon size={18} />
                                            <span className="font-semibold text-sm">
                                                {group.title}
                                            </span>
                                        </div>

                                        <h2 className="text-4xl lg:text-5xl font-black text-[#0a1628] tracking-[-0.04em]">
                                            {group.title}
                                        </h2>

                                        <p className="mt-4 text-[#64748b] text-lg max-w-2xl">
                                            {group.description}
                                        </p>
                                    </div>

                                    <div className="hidden lg:flex items-center gap-3 text-[#64748b]">
                                        <ChevronRight />
                                        <span>
                                            {group.members.length} Members
                                        </span>
                                    </div>
                                </motion.div>

                                {/* Members Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {group.members.map((member, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                y: 30,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -10 }}
                                            className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.06)]"
                                        >
                                            {/* Glow */}
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffc107]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Image */}
                                            <div className="relative h-80 overflow-hidden">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />

                                                <div className="absolute bottom-6 left-6">
                                                    <h3 className="text-2xl font-black text-white">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-[#ffc107] font-medium">
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-7">
                                                <p className="text-[#64748b] leading-relaxed">
                                                    {member.bio}
                                                </p>

                                                {/* Socials */}
                                                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                                                    <div className="flex items-center gap-3">
                                                        <a
                                                            href={
                                                                member.linkedin
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-11 h-11 rounded-2xl bg-[#f8fafc] flex items-center justify-center text-[#64748b] hover:bg-[#0d47a1] hover:text-white transition-all"
                                                        >
                                                            <LinkedInSVG className="w-5 h-5" />
                                                        </a>

                                                        <a
                                                            href={`mailto:${member.email}`}
                                                            className="w-11 h-11 rounded-2xl bg-[#fff3e0] flex items-center justify-center text-[#ff6d00] hover:bg-[#ff6d00] hover:text-white transition-all"
                                                        >
                                                            <Mail size={18} />
                                                        </a>
                                                    </div>

                                                    <button className="flex items-center gap-2 text-[#0d47a1] font-semibold text-sm hover:gap-3 transition-all">
                                                        Profile
                                                        <ArrowRight
                                                            size={16}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Divider */}
                                {groupIndex <
                                    memberGroups.length - 1 && (
                                        <div className="flex justify-center mt-20">
                                            <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent rounded-full" />
                                        </div>
                                    )}
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-[3rem] bg-[#0d47a1] px-8 py-16 lg:px-16">
                        {/* Background */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ffc107]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4fc3f7]/10 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                Want To Join
                                <span className="block text-[#ffc107]">
                                    Our Mission?
                                </span>
                            </h2>

                            <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                                Become part of a movement dedicated to
                                transforming lives and building stronger
                                communities.
                            </p>

                            <div className="mt-10">
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0a1628] text-white font-semibold shadow-xl"
                                    >
                                        Get In Touch
                                        <ArrowRight size={18} />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}