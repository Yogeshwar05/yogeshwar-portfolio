import type { Metadata } from 'next'
import { Space_Grotesk, Manrope, JetBrains_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import MobileDrawer from '@/components/MobileDrawer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio — Engineering Digital Experiences That Scale',
  description:
    'Premium portfolio of a senior web developer, SEO strategist, and technology leader. 500+ websites built, 50+ organizations scaled, 6+ years of experience.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'YJS Portfolio — Engineering Digital Experiences That Scale',
    description:
      'Senior web architect, SEO strategist and technology leader. 500+ websites shipped.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YJS Portfolio',
    description: 'Engineering digital experiences that scale.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${jetBrainsMono.variable} ${instrumentSerif.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        {/* ====== Global background layers ====== */}
        <div className="bg-layers" aria-hidden="true">
          <div className="aurora"></div>
          <div className="grid-bg"></div>
          <div className="noise"></div>
        </div>
        <div className="spotlight" id="spotlight" aria-hidden="true"></div>

        {/* ====== Custom cursor ====== */}
        <Cursor />

        {/* ====== Loader ====== */}
        <Loader />

        {/* ====== Nav — orb morph ====== */}
        <Nav />

        {/* ====== Mobile drawer ====== */}
        <MobileDrawer />

        {/* ====== Main content ====== */}
        <main id="app">
          {children}
        </main>
      </body>
    </html>
  )
}
