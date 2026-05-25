// src/app/about/page.jsx
import Hero from './_components/Hero'
import IntroText from './_components/IntroText'
import Stats from './_components/Stats'
import Mission from './_components/Mission'
import Vision from './_components/Vision'
import History from './_components/History'
import HowWeWork from './_components/HowWeWork'
import Team from './_components/Team'

export const metadata = {
    title: 'About EHCDT - Exhdo Host Community Development Trust',
    description: 'Learn about EHCDT\'s mission, vision, history, and the team behind our community development work.',
}

export default function AboutPage() {
    return (
        <>
            <Hero />
            <Mission />
            <Vision />
            <History />
            <HowWeWork />
        </>
    )
}