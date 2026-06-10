'use client'
import { useEffect } from 'react'

export default function useEffects() {
  useEffect(() => {
    // ---------- Magnetic buttons ----------
    const magnetics = document.querySelectorAll<HTMLElement>('.magnetic')
    const magneticCleanup: (() => void)[] = []

    magnetics.forEach(el => {
      const strength = parseFloat(el.dataset.mag || '0.35')
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const x = e.clientX - (r.left + r.width / 2)
        const y = e.clientY - (r.top + r.height / 2)
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      }
      const onLeave = () => { el.style.transform = '' }
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      magneticCleanup.push(() => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    })

    // ---------- 3D tilt ----------
    const tilts = document.querySelectorAll<HTMLElement>('[data-tilt]')
    const tiltCleanup: (() => void)[] = []

    tilts.forEach(el => {
      const max = parseFloat(el.dataset.tilt || '8')
      el.style.transformStyle = 'preserve-3d'
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `perspective(1200px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`
      }
      const onLeave = () => { el.style.transform = '' }
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      tiltCleanup.push(() => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    })

    // ---------- Reveal on scroll ----------
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.reveal, .skill, .assemble-wrap').forEach(el => io.observe(el))

    // ---------- Counter ----------
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        const target = parseFloat(el.dataset.count || '0')
        const dur = 1600
        const t0 = performance.now()
        function step(t: number) {
          const k = Math.min(1, (t - t0) / dur)
          const v = Math.floor(target * (1 - Math.pow(1 - k, 3)))
          el.textContent = v.toLocaleString()
          if (k < 1) requestAnimationFrame(step)
          else el.textContent = target.toLocaleString()
        }
        requestAnimationFrame(step)
        cio.unobserve(el)
      })
    }, { threshold: 0.4 })

    document.querySelectorAll('[data-count]').forEach(el => cio.observe(el))

    // ---------- Stack-row hover indicator ----------
    // (handled purely via CSS :hover)

    document.body.setAttribute('data-ready', '1')

    return () => {
      magneticCleanup.forEach(fn => fn())
      tiltCleanup.forEach(fn => fn())
      io.disconnect()
      cio.disconnect()
    }
  }, [])
}
