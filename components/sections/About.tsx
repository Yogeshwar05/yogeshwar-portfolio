import { Ico } from '@/components/ui/Icons'
import React from 'react'

function AboutPill({ icon, h, p }: { icon: React.ReactNode; h: string; p: string }) {
  return (
    <div className="about-pill glass reveal" data-tilt="6">
      <div className="ico">{icon}</div>
      <h4>{h}</h4>
      <p>{p}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <span className="big-num">§ 01 / ABOUT</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">01</span>About</span>
            <h2 className="h-section reveal" data-delay="1">
              A technologist who builds, ranks,<br/>
              and <span className="grad" style={{
                background: 'linear-gradient(120deg, #fff 10%, #6fffe9 60%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>scales</span>.
            </h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Six years deep in production engineering — half a thousand websites,
            fifty organizations on page one of Google, and a stint as CTO
            before finishing my degree.
          </p>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <p className="about-copy">
              I treat the web as a <strong>compounding asset</strong>. Every line of
              code, every keyword cluster, every millisecond of TTFB — they
              accumulate. The portfolios I&apos;m proudest of weren&apos;t the prettiest
              launches; they were the ones still ranking and converting three
              years later.
            </p>
            <p className="about-copy">
              Currently studying Electronics &amp; Communication Engineering at
              <strong> NIT Raipur</strong> (previously <strong>NIT Rourkela</strong>) while
              shipping production work for clients across continents. Former CTO
              at Nexture Services — built the engineering org from the ground up.
            </p>
            <p className="about-copy">
              My interest is at the seam where <strong>systems engineering meets
              brand</strong> — making technical things feel inevitable, premium and
              alive.
            </p>
          </div>

          <div className="about-side">
            <AboutPill icon={<Ico.Bolt/>} h="Performance-first" p="Sub-second LCP. 100 Lighthouse on every shipped surface." />
            <AboutPill icon={<Ico.Search/>} h="SEO obsessed" p="Schema, topical authority, GMB, and a measurable rank ladder." />
            <AboutPill icon={<Ico.Cpu/>}  h="Systems mindset" p="Design systems, type-safe APIs, observability from day one." />
            <AboutPill icon={<Ico.Layout/>} h="Design-fluent" p="From token to screen. I work with designers in the same file." />
          </div>
        </div>
      </div>
    </section>
  )
}
