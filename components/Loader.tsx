'use client'
import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('loader')
    const loaderPct = document.getElementById('loaderPct')
    let pct = 0
    const timer = setInterval(() => {
      pct = Math.min(100, pct + 6 + Math.random() * 8)
      if (loaderPct) loaderPct.textContent = `Initializing — ${Math.floor(pct)}%`
      if (pct >= 100) {
        clearInterval(timer)
        setTimeout(() => {
          loader?.classList.add('done')
          setTimeout(() => {
            const stage = document.getElementById('navStage')
            if (stage) stage.classList.add('ready')
          }, 250)
        }, 350)
      }
    }, 90)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="loader" id="loader">
      <div className="loader-mark">
        <span className="dot"></span>System Boot · v.2026
      </div>
      <div className="loader-bar"></div>
      <div className="loader-pct" id="loaderPct">Initializing — 0%</div>
    </div>
  )
}
