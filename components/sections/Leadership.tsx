function KV({ n, l }: { n: number; l: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--f-display)', fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>
        <span data-count={n}>0</span><span style={{ color: 'var(--c-cyan)' }}>+</span>
      </div>
      <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--c-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 8 }}>{l}</div>
    </div>
  )
}

export default function Leadership() {
  const cards = [
    { h: 'Hiring & culture', p: 'Designed the interview loop, leveling rubric and onboarding. First five hires still there.' },
    { h: 'Architecture',     p: 'Set Next.js + tRPC + Postgres as the canonical stack. Type-safe end to end.' },
    { h: 'Review standard',  p: 'Every PR reviewed against perf budgets and accessibility checklist before merge.' },
    { h: 'Client strategy',  p: 'Sat in pitches; translated client outcomes into engineering scope.' },
  ]

  return (
    <section className="section" id="leadership">
      <span className="big-num">§ 09 / LEADERSHIP</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">09</span>Leadership</span>
            <h2 className="h-section reveal" data-delay="1">
              Built like a founder.<br/>Operates like a senior engineer.
            </h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Eight months as Chief Technology Officer — I designed the
            engineering org from first principles, not from a playbook.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32 }} className="lead-grid">
          <div className="glass reveal" style={{ padding: '44px 40px', borderRadius: 24 }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--c-cyan)', textTransform: 'uppercase', marginBottom: 24 }}>
              CTO · Nexture Services · May 2025 — Jan 2026
            </div>
            <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>
              From zero to engineering org in eight months.
            </h3>
            <p style={{ color: 'var(--c-muted)', fontSize: 16, lineHeight: 1.65, marginBottom: 24 }}>
              I joined as the first technical hire and exited as CTO with a
              team of seven engineers, a working design system, a shipping
              cadence, and 30+ live client projects across three verticals.
              Owned hiring, architecture, code review, and client strategy.
            </p>
            <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', marginTop: 8 }}>
              <KV n={7}  l="Engineers hired" />
              <KV n={30} l="Client projects shipped" />
              <KV n={3}  l="Verticals served" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {cards.map((x, i) => (
              <div key={x.h} className="glass reveal" data-delay={i + 1} style={{ padding: '18px 20px', borderRadius: 14 }}>
                <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{x.h}</h4>
                <p style={{ fontSize: 13, color: 'var(--c-muted)' }}>{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
