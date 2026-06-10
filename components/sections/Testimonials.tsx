export default function Testimonials() {
  const cards = [
    {
      q: '"Yogeshwar completely transformed our online presence. Within two months we were getting 3× more calls from Google — and the website looks absolutely world-class."',
      n: 'Dr. Aditi Sharma',
      r: 'Owner · Smile Dental Clinic, Raipur',
      a: 'AS',
    },
    {
      q: '"Our admissions went through the roof. The neuromarketing approach he used for our JEE institute ads was unlike anything we had seen — students were calling us instead of competitors."',
      n: 'Rajesh Verma',
      r: 'Director · Apex IIT Academy',
      a: 'RV',
    },
    {
      q: '"The AI workshop he ran for our students was genuinely mind-opening. Practical, well-structured, and the students left with skills they could apply the same day."',
      n: 'Prof. Sunita Patel',
      r: 'HOD · GEC Raipur',
      a: 'SP',
    },
    {
      q: '"The AI agent he built for our business handles hundreds of WhatsApp messages a day without us lifting a finger. Our response time went from 4 hours to under 30 seconds."',
      n: 'Karan Mehta',
      r: 'Founder · QuickServe Solutions',
      a: 'KM',
    },
    {
      q: '"He does not just build websites — he engineers growth. Our Raipur clinic went from invisible to the #1 result in 60 days. Bookings are now the bottleneck, not leads."',
      n: 'Dr. Priya Nair',
      r: 'CEO · Nair Multispeciality Dental',
      a: 'PN',
    },
  ]

  // Duplicate for seamless infinite loop
  const all = [...cards, ...cards]

  return (
    <section className="section" id="testimonials">
      <span className="big-num">§ 08 / VOICES</span>
      <div style={{ marginBottom: 60 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-head-left">
              <span className="eyebrow reveal"><span className="idx">08</span>Testimonials</span>
              <h2 className="h-section reveal" data-delay="1">
                Receipts from the people<br/>who paid for the work.
              </h2>
            </div>
            <p className="lead reveal" data-delay="2">
              A small selection — full references available on request, including
              performance data and analytics dashboards.
            </p>
          </div>
        </div>

        {/* ── Marquee strip ── */}
        <div className="testi-marquee" aria-label="Testimonials">
          <div className="testi-track">
            {all.map((t, i) => (
              <div className="testi glass" key={i} data-tilt="3">
                <div className="quote">{t.q}</div>
                <div className="meta">
                  <div className="av">{t.a}</div>
                  <div>
                    <div className="nm">{t.n}</div>
                    <div className="ro">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
