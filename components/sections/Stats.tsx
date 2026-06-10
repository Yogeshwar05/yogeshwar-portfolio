function Stat({ n, l, sub, plus = '+' }: { n: number; l: string; sub: string; plus?: string }) {
  return (
    <div className="stat reveal">
      <div className="n"><span data-count={n}>0</span><span className="plus">{plus}</span></div>
      <div className="l">{l}</div>
      <div className="sub">{sub}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section" id="impact" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <span className="big-num">§ 07 / IMPACT</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">07</span>Impact</span>
            <h2 className="h-section reveal" data-delay="1">Numbers that compound.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            A snapshot of six years of compounding work — websites shipped,
            organizations served, traffic moved, hours saved.
          </p>
        </div>

        <div className="stats">
          <Stat n={500} l="Websites delivered"   sub="across 12 industries" />
          <Stat n={50}  l="Organizations scaled"  sub="page-three → top-three" />
          <Stat n={6}   l="Years in production"   sub="started at sixteen" />
          <Stat n={312} l="% avg. organic uplift"  sub="90-day median" plus="%" />
        </div>
      </div>
    </section>
  )
}
