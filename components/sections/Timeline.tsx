export default function Timeline() {
  const rows = [
    {
      when: '2026 — Present',
      role: 'Digital Marketing Lead',
      org: 'JEE Coaching Institute',
      copy: 'Leading the full digital growth function for a competitive JEE coaching brand. Drove a 4× increase in GMB visibility and secured top-3 local pack positions across target cities. Applied neuromarketing principles — social proof frameworks, cognitive bias triggers, and attention-led content hierarchies — to boost inquiry-to-enrollment conversion by 60%+ within the first quarter.',
      chips: ['Neuromarketing', 'GMB', 'Local SEO', 'Lead Gen', 'Conversion Optimisation'],
    },
    {
      when: '2025 — 2026',
      role: 'Chief Technology Officer',
      org: 'Nexture Services',
      copy: 'Founded and led the engineering function for a fast-moving digital agency. Owned the technical roadmap, hired the team, set design and review standards, and delivered enterprise-grade SaaS, marketing platforms, and lead-gen experiences for 30+ clients.',
      chips: ['Engineering leadership', 'Hiring', 'Architecture', 'Client strategy'],
    },
    {
      when: '2023 — 2026',
      role: 'B.Tech, Electronics & Communication',
      org: 'NIT Raipur · prev. NIT Rourkela',
      copy: 'Currently pursuing a B.Tech in ECE while running a parallel engineering practice. Active in design and developer communities on campus; focus areas in signal processing, embedded systems, and applied ML.',
      chips: ['ECE', 'DSP', 'Embedded', 'Applied ML'],
    },
    {
      when: '2022 — Present',
      role: 'Senior Web Developer & SEO Strategist',
      org: 'Freelance · 50+ organizations',
      copy: 'Designed, shipped, and ranked 500+ websites across SaaS, ecommerce, local business and creator economy. Specialist in Google My Business optimization and topical-cluster SEO — typical client lifts from page 3 → top-3 in 60–90 days.',
      chips: ['Next.js', 'SEO', 'GMB', 'Performance', 'CRO'],
    },
    {
      when: '2020 — 2022',
      role: 'Web Developer · Foundations',
      org: 'Self-directed practice',
      copy: 'Started building at 16 — landing pages, WordPress, then React. First ten clients taught me what no course can: shipping is the skill, everything else is preference.',
      chips: ['React', 'WordPress', 'JS', 'CSS'],
    },
  ]

  return (
    <section className="section" id="experience">
      <span className="big-num">§ 02 / EXPERIENCE</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">02</span>Experience</span>
            <h2 className="h-section reveal" data-delay="1">
              A timeline of{' '}
              <span className="it" style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', color: 'var(--c-cyan)' }}>
                compounding
              </span>{' '}
              craft.
            </h2>
          </div>
          <p className="lead reveal" data-delay="2">
            From first portfolio site at sixteen to running an engineering
            organization at twenty-four — every chapter pointed in the same
            direction.
          </p>
        </div>

        <div className="timeline">
          {rows.map((r, i) => (
            <div className="tl-row reveal" key={i} data-delay={Math.min(i + 1, 4)}>
              <div className="tl-when">{r.when}</div>
              <div className="tl-body">
                <h3>{r.role}</h3>
                <div className="org">{r.org}</div>
                <p>{r.copy}</p>
                <div className="chips">
                  {r.chips.map(c => <span key={c}>{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
