'use client'
import useEffects from '@/components/effects/useEffects'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import Skills from '@/components/sections/Skills'
import Services from '@/components/sections/Services'
import SEO from '@/components/sections/SEO'
import Projects from '@/components/sections/Projects'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import Leadership from '@/components/sections/Leadership'
import Stack from '@/components/sections/Stack'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

function EffectsInit() {
  useEffects()
  return null
}

export default function Home() {
  return (
    <>
      <EffectsInit />
      <Hero />
      <Marquee />
      <About />
      <Timeline />
      <Skills />
      <Services />
      <SEO />
      <Projects />
      <Stats />
      <Testimonials />
      <Leadership />
      <Stack />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
