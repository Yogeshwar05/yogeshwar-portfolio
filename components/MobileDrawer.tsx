'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function MobileDrawer() {
  useEffect(() => {
    const burger = document.getElementById('navBurger')
    const drawer = document.getElementById('navDrawer')

    function setDrawer(open: boolean) {
      if (!burger || !drawer) return
      burger.classList.toggle('open', open)
      drawer.classList.toggle('open', open)
      burger.setAttribute('aria-expanded', String(open))
      drawer.setAttribute('aria-hidden', String(!open))
      document.body.classList.toggle('drawer-open', open)
    }

    const onBurger = () => setDrawer(!burger?.classList.contains('open'))
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawer(false) }

    burger?.addEventListener('click', onBurger)
    drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setDrawer(false)))
    window.addEventListener('keydown', onKey)

    return () => {
      burger?.removeEventListener('click', onBurger)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className="nav-drawer" id="navDrawer" aria-hidden="true">
      <div className="nav-drawer-bg"></div>
      <div className="nav-drawer-inner">
        <div className="nav-drawer-meta">
          <span className="dot"></span>
          <span>Available · Q3 2026</span>
        </div>
        <nav className="nav-drawer-links" aria-label="Mobile">
          <Link href="#work"         data-i="1"><i>01</i><b>Work</b><u></u></Link>
          <Link href="#about"        data-i="2"><i>02</i><b>About</b><u></u></Link>
          <Link href="#services"     data-i="3"><i>03</i><b>Services</b><u></u></Link>
          <Link href="#testimonials" data-i="4"><i>04</i><b>Testimonials</b><u></u></Link>
          <Link href="#stack"        data-i="5"><i>05</i><b>Stack</b><u></u></Link>
          <Link href="#contact"      data-i="6"><i>06</i><b>Contact</b><u></u></Link>
        </nav>
        <div className="nav-drawer-foot">
          <a href="mailto:yogeshwarjhariya2@gmail.com">yogeshwarjhariya2@gmail.com</a>
          <span>YJS · v.2026</span>
        </div>
      </div>
    </div>
  )
}
