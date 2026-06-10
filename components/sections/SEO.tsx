export default function SEO() {
  const kw = [
    { kw: 'best dentist near me',           from: 47, to: 2 },
    { kw: 'corporate law firm mumbai',       from: 31, to: 1 },
    { kw: 'b2b saas onboarding software',   from: 84, to: 6 },
    { kw: 'luxury interior designer pune',  from: 22, to: 1 },
    { kw: 'wedding photographer raipur',    from: 19, to: 1 },
  ]

  return (
    <section className="section" id="seo">
      <span className="big-num">§ 05 / SEO</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">05</span>SEO &amp; Growth</span>
            <h2 className="h-section reveal" data-delay="1">
              Ranked, not just{' '}
              <span className="it" style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', color: 'var(--c-cyan)' }}>
                shipped
              </span>.
            </h2>
          </div>
          <p className="lead reveal" data-delay="2">
            50+ organizations moved from page three to top-three. Here&apos;s the
            scoreboard — and the system behind it.
          </p>
        </div>

        <div className="seo-grid">
          <div className="seo-card glass reveal" data-tilt="4">
            <div className="seo-stat">
              <div className="big"><span data-count="312">0</span>%</div>
              <div className="l">Avg. organic uplift<br/>across 50+ accounts</div>
            </div>

            <div className="seo-rows">
              {kw.map(r => (
                <div className="seo-row" key={r.kw}>
                  <div className="kw">{r.kw}</div>
                  <div className="pos">#{r.from} → <b>#{r.to}</b></div>
                  <svg className="arr" viewBox="0 0 80 22" fill="none" stroke="var(--c-cyan)" strokeWidth="1.5">
                    <path
                      d={`M2 ${20 - r.from * 0.25} Q 40 14, 78 ${20 - r.to * 4}`}
                      strokeDasharray="120"
                      strokeDashoffset="120"
                      style={{ animation: 'draw 1.8s var(--ease-out) forwards' }}
                    />
                    <circle cx="78" cy={20 - r.to * 4} r="2.5" fill="var(--c-cyan)" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="seo-features">
            <div className="seo-feat glass reveal" data-delay="1">
              <div className="num">01</div>
              <div><h4>Neuromarketing-led campaigns</h4><p>Campaigns engineered around cognitive biases, social proof, and urgency triggers that convert at the subconscious level.</p></div>
            </div>
            <div className="seo-feat glass reveal" data-delay="2">
              <div className="num">02</div>
              <div><h4>Programmatic SEO at scale</h4><p>Templated landing pages with real value — not doorways.</p></div>
            </div>
            <div className="seo-feat glass reveal" data-delay="3">
              <div className="num">03</div>
              <div><h4>Google My Business systems</h4><p>Review velocity, geo content, and operational rhythm.</p></div>
            </div>
            <div className="seo-feat glass reveal" data-delay="4">
              <div className="num">04</div>
              <div><h4>Schema &amp; technical SEO</h4><p>Structured data, sitemaps, edge-rendered metadata.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
