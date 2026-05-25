// app/page.jsx
import Hero from '../component/home/Hero'
import AboutPreview from "../component/home/AboutPreview";
import Programs from "../component/home/Programs";
import Testimonials from "../component/home/Testimonials";
import CTA from "../component/home/CTA";
import NewsSection from "../component/home/NewsSection";

export default function HomePage() {
  return (
      <>
          <Hero />
          <AboutPreview/>
          <Programs/>
          <Testimonials/>
          <NewsSection/>
          <CTA/>
      </>
  )
}