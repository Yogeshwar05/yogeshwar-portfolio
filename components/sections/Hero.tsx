'use client'
import TypeWriter from '@/components/ui/TypeWriter'
import Assemble from '@/components/ui/Assemble'
import { Ico } from '@/components/ui/Icons'
import HeroCanvas from '@/components/effects/HeroCanvas'
import Link from 'next/link'

function HeroMeta({ n, label }: { n: number; label: string }) {
  return (
    <div className="hero-meta-cell">
      <div className="n">
        <span data-count={n}>0</span>
        <span className="plus">+</span>
      </div>
      <div className="l">{label}</div>
    </div>
  )
}

export default function Hero() {
  const roles = ['Web Developer', 'SEO Specialist', 'CTO', 'Digital Architect', 'Performance Engineer']
  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="wrap hero-inner">

        <div>
          <div className="hero-status reveal">
            <span className="live"></span>
            Available for select Q3 engagements
            <span className="div"></span>
            <span className="mono">Remote · Worldwide</span>
          </div>

          <h1 className="h-display reveal" data-delay="1" style={{ marginBottom: 24 }}>
            Engineering <span className="it">digital</span> experiences<br/>
            that <span className="grad">scale beyond limits.</span>
          </h1>

          <div className="hero-term reveal" data-delay="2">
            <div className="head"><i></i>session · whoami · live</div>
            <div>
              <span className="prompt">~ $</span>
              <span className="role">I am a </span>
              <TypeWriter words={roles} />
            </div>
          </div>

          <p className="hero-sub reveal" data-delay="3">
            Senior web architect, SEO strategist and technology leader.
            I build cinematic, performance-obsessed products and rank them on
            page one — the kind of work that compounds for years.
          </p>

          <div className="hero-ctas reveal" data-delay="4">
            <Link href="#work" className="btn btn-primary magnetic" data-mag="0.2">
              View selected work
              <span className="arrow"><Ico.Arrow /></span>
            </Link>
            <Link href="#contact" className="btn btn-ghost magnetic" data-mag="0.2">
              Start a project
              <span className="arrow"><Ico.ArrowDown /></span>
            </Link>
          </div>

          <div className="hero-meta reveal" data-delay="5">
            <HeroMeta n={500} label="Websites shipped" />
            <HeroMeta n={6}   label="Years in production" />
            <HeroMeta n={50}  label="Organizations scaled" />
          </div>
        </div>

        <div className="reveal" data-delay="2">
          <Assemble count={28} className="hero-card-assemble">
            <div className="hero-card glass" data-tilt="10">
              <div className="hero-card-bg"></div>
              <div className="hero-card-grid"></div>
              <div className="radar-sweep"></div>
              <div className="hero-card-rings">
                <div className="r r1"></div>
                <div className="r r2"></div>
                <div className="r r3"></div>
              </div>
              <div className="hero-card-monogram">YJS</div>
              <div className="scan"></div>

              <div className="hero-card-hud top">
                <span>ID · 0x42A · CTO</span>
                <span>NIT/2026</span>
              </div>
              <div className="hero-card-hud bot">
                <span>STATUS · ONLINE</span>
                <span>UPTIME 99.99</span>
              </div>

              <i className="hero-card-corner tl"></i>
              <i className="hero-card-corner tr"></i>
              <i className="hero-card-corner bl"></i>
              <i className="hero-card-corner br"></i>

              <div className="hero-tech-orbit t1">NEXT</div>
              <div className="hero-tech-orbit t2">R3F</div>
              <div className="hero-tech-orbit t3">TS</div>
              <div className="hero-tech-orbit t4">SEO</div>
            </div>
          </Assemble>
        </div>

      </div>
    </section>
  )
}
