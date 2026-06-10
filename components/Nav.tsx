'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav-stage" id="navStage" aria-label="Primary">
      <div className="nav-orb" id="navOrb" aria-hidden="true">
        <span className="nav-orb-core"></span>
        <span className="nav-orb-halo"></span>
        <span className="nav-orb-ring"></span>
      </div>
      <div className="nav-shell" id="navShell">
        <Link href="#top" className="nav-brand" aria-label="YJS — Yogeshwar Jhariya">
          <span className="nav-brand-dot" aria-hidden="true"></span>
          <span className="nav-brand-text">
            <span>Y</span><span>J</span><span>S</span>
          </span>
          <span className="nav-brand-sub">/26</span>
        </Link>
        <div className="nav-links" id="navLinks">
          <Link href="#work"         className="nav-link"><span>Work</span></Link>
          <Link href="#about"        className="nav-link"><span>About</span></Link>
          <Link href="#services"     className="nav-link"><span>Services</span></Link>
          <Link href="#testimonials" className="nav-link"><span>Testimonials</span></Link>
          <Link href="#stack"        className="nav-link"><span>Stack</span></Link>
        </div>
        <Link href="#contact" className="nav-cta magnetic" data-cursor="big" data-mag="0.18">
          <span>Get in touch</span>
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 19L19 5M9 5h10v10"/>
          </svg>
        </Link>
        <button className="nav-burger" id="navBurger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
