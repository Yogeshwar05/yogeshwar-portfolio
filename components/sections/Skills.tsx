export default function Skills() {
  const data = [
    { n: 'Frontend Architecture',  pct: 97, p: 'React, Next.js App Router, RSC, type-safe data layers, design systems.' },
    { n: 'SEO & Content Strategy', pct: 95, p: 'Topical authority, internal linking, schema, programmatic SEO at scale.' },
    { n: 'Google My Business',     pct: 96, p: 'Local pack domination, review velocity, geo-targeted content systems.' },
    { n: 'Performance Engineering',pct: 94, p: 'Sub-second LCP, edge caching, image pipelines, RUM/Vitals observability.' },
    { n: 'Digital Marketing',      pct: 92, p: 'Full-funnel growth strategy with a neuromarketing edge — cognitive bias triggers, social proof systems, attention-led funnels that convert.' },
    { n: 'Backend & APIs',         pct: 88, p: 'Node, edge runtimes, tRPC/GraphQL, Postgres, queues, observability.' },
  ]

  return (
    <section className="section" id="skills">
      <span className="big-num">§ 03 / SKILLS</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">03</span>Capabilities</span>
            <h2 className="h-section reveal" data-delay="1">What I&apos;m dangerously good at.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Six disciplines that compound on each other. The portfolio sites
            rank because the engineering is fast; the engineering is fast because
            the design system is honest.
          </p>
        </div>

        <div className="skills-grid">
          {data.map((s, i) => (
            <div
              className="skill glass"
              key={s.n}
              style={{ ['--w' as string]: s.pct / 100 }}
              data-tilt="6"
            >
              <div className="top">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="pct">{s.pct}%</span>
              </div>
              <h4>{s.n}</h4>
              <p>{s.p}</p>
              <div className="bar"><i></i></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
