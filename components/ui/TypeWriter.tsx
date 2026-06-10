'use client'
import { useState, useEffect } from 'react'

interface TypeWriterProps {
  words: string[]
  typeMs?: number
  eraseMs?: number
  holdMs?: number
}

export default function TypeWriter({ words, typeMs = 70, eraseMs = 35, holdMs = 1400 }: TypeWriterProps) {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [phase, setPhase] = useState<'type' | 'erase'>('type')

  useEffect(() => {
    const target = words[idx]
    let t: ReturnType<typeof setTimeout>
    if (phase === 'type') {
      if (txt.length < target.length) {
        t = setTimeout(() => setTxt(target.slice(0, txt.length + 1)), typeMs)
      } else {
        t = setTimeout(() => setPhase('erase'), holdMs)
      }
    } else {
      if (txt.length > 0) {
        t = setTimeout(() => setTxt(target.slice(0, txt.length - 1)), eraseMs)
      } else {
        setIdx((idx + 1) % words.length)
        setPhase('type')
      }
    }
    return () => clearTimeout(t)
  }, [txt, phase, idx, words, typeMs, eraseMs, holdMs])

  return (
    <span className="tw-wrap">
      <span className="word">{txt}</span>
      <span className="caret" aria-hidden="true"></span>
    </span>
  )
}
