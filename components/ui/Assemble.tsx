'use client'
import React, { useMemo } from 'react'

interface AssembleProps {
  children: React.ReactNode
  count?: number
  className?: string
  [key: string]: unknown
}

export default function Assemble({ children, count = 24, className = '', ...rest }: AssembleProps) {
  // Use useMemo with fixed values to avoid hydration mismatch
  const blocks = useMemo(() => {
    // Use deterministic pseudo-random values seeded by index
    return Array.from({ length: count }, (_, i) => {
      const seed = (i * 2654435761) >>> 0
      const r1 = ((seed ^ (seed >>> 16)) * 0x45d9f3b) >>> 0
      const r2 = ((r1 ^ (r1 >>> 16)) * 0x45d9f3b) >>> 0
      const r3 = r2 ^ (r2 >>> 16)

      const dx = ((r1 % 220) - 110)
      const dy = ((r2 % 220) - 110)
      const rot = ((r3 % 90) - 45)
      const d = (i * 25) % 600
      const w = 8 + (r1 % 18)
      const top = (r2 % 100)
      const left = (r3 % 100)

      return { dx, dy, rot, d, w, top, left }
    })
  }, [count])

  return (
    <div className={`assemble-wrap reveal ${className}`} {...rest}>
      <div className="assemble-blocks" aria-hidden="true">
        {blocks.map((b, i) => (
          <i key={i} style={{
            width: b.w,
            height: b.w,
            top: b.top + '%',
            left: b.left + '%',
            ['--dx' as string]: b.dx + 'px',
            ['--dy' as string]: b.dy + 'px',
            ['--rot' as string]: b.rot + 'deg',
            ['--d' as string]: b.d + 'ms',
          }} />
        ))}
      </div>
      <div className="assemble-content">{children}</div>
    </div>
  )
}
