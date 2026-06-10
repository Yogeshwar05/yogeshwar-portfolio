export default function Process() {
  const steps = [
    { s: 'STEP 01', h: 'Listen',    p: 'A working session to map the business — not just the brief. We diagnose, not assume.' },
    { s: 'STEP 02', h: 'Architect', p: 'Information architecture, technical stack, performance budget, SEO topical map. The blueprint.' },
    { s: 'STEP 03', h: 'Ship',      p: 'Design and engineering held in one head. Weekly demos, no dark periods, no surprises.' },
    { s: 'STEP 04', h: 'Compound',  p: 'Launch is day one. We instrument, learn, and iterate against the rank ladder.' },
  ]

  return (
    <section className="section" id="process">
      <span className="big-num">§ 11 / PROCESS</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">11</span>Process</span>
            <h2 className="h-section reveal" data-delay="1">
              Four phases. No{' '}
              <span className="it" style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', color: 'var(--c-cyan)' }}>
                theater
              </span>.
            </h2>
          </div>
          <p className="lead reveal" data-delay="2">
            How a typical engagement flows — designed for clarity, weekly visible
            progress, and ranked outcomes on the other side.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="proc reveal" key={s.h} data-delay={Math.min(i + 1, 4)}>
              <span className="step">{s.s}</span>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
