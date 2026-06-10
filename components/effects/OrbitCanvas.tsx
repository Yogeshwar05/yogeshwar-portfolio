'use client'
import { useEffect, useRef } from 'react'

export default function OrbitCanvas() {
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
      if (w === 0) return
      cv!.width = w * dpr; cv!.height = h * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 12
    const cols = Math.floor((w || 400) / fontSize)
    const drops = Array.from({ length: cols }, () => Math.random() * -50)
    const chars = '01ABCDEF{}<>/=*+_-#$'

    function draw() {
      if (!w) return
      ctx!.fillStyle = 'rgba(5, 8, 15, 0.18)'
      ctx!.fillRect(0, 0, w, h)
      ctx!.font = `${fontSize}px 'JetBrains Mono', monospace`
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize
        const y = drops[i] * fontSize
        const ch = chars[Math.floor(Math.random() * chars.length)]
        const alpha = 0.15 + Math.random() * 0.35
        ctx!.fillStyle = `rgba(111, 255, 233, ${alpha})`
        ctx!.fillText(ch, x, y)
        if (Math.random() < 0.04) {
          ctx!.fillStyle = `rgba(255, 255, 255, 0.85)`
          ctx!.fillText(ch, x, y)
        }
        drops[i] += 0.5 + Math.random() * 0.3
        if (y > h && Math.random() > 0.985) drops[i] = Math.random() * -20
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="orbitCanvas" className="orbit-canvas" aria-hidden="true" />
}
