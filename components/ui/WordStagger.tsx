'use client'
import React from 'react'

interface WordStaggerProps {
  children: React.ReactNode
  className?: string
}

export default function WordStagger({ children, className = '' }: WordStaggerProps) {
  const words = String(children).split(' ')
  return (
    <span className={`word-stagger ${className}`}>
      {words.map((w, i) => (
        <span key={i}><b>{w}</b></span>
      ))}
    </span>
  )
}
