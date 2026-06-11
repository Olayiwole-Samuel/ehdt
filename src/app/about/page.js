// src/app/about/page.jsx
import Hero from './_components/Hero'
import IntroText from './_components/IntroText'
import Stats from './_components/Stats'
import Mission from './_components/Mission'
import Vision from './_components/Vision'
import History from './_components/History'
import HowWeWork from './_components/HowWeWork'

export const metadata = {
    title: 'About Ekid Host Community Development Trust (EHCDT)',
    description: 'Learn about EHCDT\'s mission, vision, history, and our commitment to sustainable community development.',
}

export default function AboutPage() {
    return (
        <>
            <Hero />
            <IntroText />
            <Stats />
            <Mission />
            <Vision />
            <History />
            <HowWeWork />
        </>
    )
}