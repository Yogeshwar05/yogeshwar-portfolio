import { Ico } from '@/components/ui/Icons'

export default function Marquee() {
  const items = [
    'Next.js', 'React 19', 'TypeScript', 'GSAP', 'Three.js',
    'Tailwind CSS', 'Framer Motion', 'Node.js', 'Edge Runtime',
    'Lighthouse 100', 'Google My Business', 'Core Web Vitals',
  ]
  const all = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {all.map((it, i) => (
          <div className="item" key={i}>
            <Ico.Star className="star" />
            {it}
          </div>
        ))}
      </div>
    </div>
  )
}
