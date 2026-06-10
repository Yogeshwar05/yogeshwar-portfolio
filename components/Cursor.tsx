'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cDot = document.getElementById('cursorDot')
    const cRing = document.getElementById('cursorRing')
    const spot = document.getElementById('spotlight')

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my
    let sx = mx, sy = my
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (cDot) {
        cDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      }
    }

    function tick() {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      sx += (mx - sx) * 0.06
      sy += (my - sy) * 0.06
      if (cRing) cRing.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      if (spot) {
        spot.style.left = sx + 'px'
        spot.style.top = sy + 'px'
      }
      rafId = requestAnimationFrame(tick)
    }
    tick()

    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element).closest('a, button, .magnetic, [data-cursor]')
      if (t && cRing) cRing.classList.add('hover')
    }
    const onOut = (e: MouseEvent) => {
      const t = (e.target as Element).closest('a, button, .magnetic, [data-cursor]')
      if (t && cRing) cRing.classList.remove('hover')
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div className="cursor-ring" id="cursorRing" aria-hidden="true"></div>
      <div className="cursor-dot" id="cursorDot" aria-hidden="true"></div>
    </>
  )
}
