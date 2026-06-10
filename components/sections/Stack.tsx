'use client'
import OrbitCanvas from '@/components/effects/OrbitCanvas'

export default function Stack() {
  const nodes = [
    { x: 50, y: 2,  l: 'Next' },
    { x: 75, y: 10, l: 'RSC'  },
    { x: 94, y: 26, l: 'TS'   },
    { x: 98, y: 50, l: 'R3F'  },
    { x: 94, y: 74, l: 'GSAP' },
    { x: 78, y: 92, l: 'Node' },
    { x: 50, y: 100,l: 'API'  },
    { x: 22, y: 92, l: 'PG'   },
    { x: 6,  y: 74, l: 'TW'   },
    { x: 2,  y: 50, l: 'Edge' },
    { x: 6,  y: 26, l: 'SEO'  },
    { x: 22, y: 10, l: 'GMB'  },
  ]

  const rows = [
    { n: 'Next.js / React',         y: '5 years' },
    { n: 'TypeScript',              y: '4 years' },
    { n: 'Tailwind CSS',            y: '4 years' },
    { n: 'Node.js / Edge runtimes', y: '5 years' },
    { n: 'Three.js / R3F',          y: '3 years' },
    { n: 'GSAP / Framer Motion',    y: '4 years' },
    { n: 'SEO / GMB / Schema',      y: '6 years' },
    { n: 'Postgres / Prisma',       y: '3 years' },
    { n: 'Performance / Vitals',    y: '5 years' },
  ]

  return (
    <section className="section" id="stack">
      <span className="big-num">§ 10 / STACK</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">10</span>Tech Stack</span>
            <h2 className="h-section reveal" data-delay="1">The orbit I live in.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Tools I reach for daily — chosen for type-safety, edge performance
            and design fluency, not for fashion.
          </p>
        </div>

        <div className="stack">
          <div className="orbit-wrap reveal" data-tilt="6">
            <div className="orbit-bg"></div>
            <OrbitCanvas />

            <div className="orbit-readout tl"><i></i>NODE_MAP · 12 · ACTIVE</div>
            <div className="orbit-readout br"><i></i>SYNC · 99.9%</div>

            <div className="orbit-ring r4">
              <span className="marker"></span>
              <span className="marker b"></span>
            </div>
            <div className="orbit-ring r1"></div>
            <div className="orbit-ring r2"></div>
            <div className="orbit-ring r3"></div>
            <div className="orbit-ring r5"></div>

            {nodes.map((n, i) => (
              <div
                className="orbit-node magnetic"
                key={n.l + i}
                style={{ left: n.x + '%', top: n.y + '%' }}
                data-mag="0.25"
              >
                {n.l}
              </div>
            ))}

            <div className="orbit-core">
              <span className="core-glyph">YJS</span>
              <span className="core-lbl">CORE · v26</span>
            </div>
          </div>

          <div className="stack-list">
            {rows.map((r, i) => (
              <div className="stack-row reveal" key={r.n} data-delay={Math.min(i + 1, 6)}>
                <div className="name">{r.n}</div>
                <div className="yrs">{r.y}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
