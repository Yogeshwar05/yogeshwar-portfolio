'use client'
import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, dpr = 1
    let animId: number

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = cv!.getBoundingClientRect()
      w = r.width; h = r.height
      cv!.width = w * dpr; cv!.height = h * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const N = Math.min(70, Math.floor((w * h) / 22000))
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.4,
    }))

    let mxL = -9999, myL = -9999
    const onMove = (e: MouseEvent) => {
      const r = cv!.getBoundingClientRect()
      mxL = e.clientX - r.left
      myL = e.clientY - r.top
    }
    const onLeave = () => { mxL = -9999; myL = -9999 }
    cv.addEventListener('mousemove', onMove)
    cv.addEventListener('mouseleave', onLeave)

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dx = p.x - mxL, dy = p.y - myL
        const dM = Math.sqrt(dx * dx + dy * dy)
        if (dM < 140) {
          const f = (140 - dM) / 140 * 0.6
          p.x += dx / dM * f
          p.y += dy / dM * f
        }
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(111, 255, 233, ${0.4 + p.r * 0.3})`
        ctx!.shadowColor = 'rgba(111, 255, 233, 0.9)'
        ctx!.shadowBlur = 8
        ctx!.fill()
      }
      ctx!.shadowBlur = 0
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            const a = (1 - d / 130) * 0.18
            ctx!.beginPath()
            ctx!.moveTo(pts[i].x, pts[i].y)
            ctx!.lineTo(pts[j].x, pts[j].y)
            ctx!.strokeStyle = `rgba(91, 192, 190, ${a})`
            ctx!.lineWidth = 1
            ctx!.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      cv.removeEventListener('mousemove', onMove)
      cv.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} id="heroCanvas" className="hero-canvas" aria-hidden="true" />
}
