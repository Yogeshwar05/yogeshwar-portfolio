'use client'
import React from 'react'

type SvgProps = React.SVGProps<SVGSVGElement>

export const Ico = {
  Arrow: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M5 19L19 5M9 5h10v10"/>
    </svg>
  ),
  ArrowDown: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  ),
  Spark: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
      <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z"/>
    </svg>
  ),
  Star: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}>
      <path d="M12 2l2.6 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.4z"/>
    </svg>
  ),
  Bolt: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z"/>
    </svg>
  ),
  Code: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M8 4l-6 8 6 8M16 4l6 8-6 8M14 4l-4 16"/>
    </svg>
  ),
  Search: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-4.3-4.3"/>
    </svg>
  ),
  Layout: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  ),
  Cpu: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
    </svg>
  ),
  Wave: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M2 12c2 0 2-4 4-4s2 8 4 8 2-12 4-12 2 8 4 8 2-4 4-4"/>
    </svg>
  ),
  Mail: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 7 9-7"/>
    </svg>
  ),
  Phone: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7 12 12 0 00.6 2.6 2 2 0 01-.4 2.1L8 9.8a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4 12 12 0 002.6.6 2 2 0 011.7 2z"/>
    </svg>
  ),
  Pin: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Git: (p: SvgProps) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
      <circle cx="6" cy="6" r="2.5"/>
      <circle cx="6" cy="18" r="2.5"/>
      <circle cx="18" cy="12" r="2.5"/>
      <path d="M6 8.5V15.5M8 18h7.5a2 2 0 002-2V14"/>
    </svg>
  ),
}
