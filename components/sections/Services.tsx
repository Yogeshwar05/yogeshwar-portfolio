import { Ico } from '@/components/ui/Icons'
import React from 'react'

export default function Services() {
  const svc = [
    { ic: <Ico.Layout/>, h: 'Premium Web Experiences', p: 'Cinematic marketing sites, product surfaces and interactive landing pages — engineered from the design system up.', tags: ['Next.js', 'GSAP', 'Three.js', 'Motion'] },
    { ic: <Ico.Search/>, h: 'SEO & Topical Authority', p: 'From audit to ranked. Programmatic SEO, content systems, internal linking and schema engineered for compounding traffic.', tags: ['Tech SEO', 'Content Ops', 'Schema'] },
    { ic: <Ico.Pin/>,    h: 'Google My Business Growth', p: 'Local pack domination for service businesses. Review systems, geo-content, and the operational rhythm to keep you there.', tags: ['GMB', 'Local SEO', 'Reviews'] },
    { ic: <Ico.Wave/>,   h: 'Marketing Strategist', p: 'Full-funnel digital marketing powered by neuromarketing — crafting campaigns that speak to the subconscious, drive urgency, and convert browsers into buyers. From brand positioning to paid growth.', tags: ['Neuromarketing', 'Funnels', 'Brand', 'Growth'] },
    { ic: <Ico.Code/>,   h: 'SaaS & Product Engineering', p: 'Type-safe, testable, scalable products. From schema to UI, with the design and engineering held in one head.', tags: ['SaaS', 'tRPC', 'Postgres'] },
    { ic: <Ico.Cpu/>,    h: 'Fractional CTO & Audits', p: 'Stack reviews, hiring scaffolds, architecture decisions. For founders who need a technical co-pilot, not a vendor.', tags: ['Fractional', 'Architecture', 'Hiring'] },
  ]

  return (
    <section className="section" id="services">
      <span className="big-num">§ 04 / SERVICES</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">04</span>Services</span>
            <h2 className="h-section reveal" data-delay="1">Six ways I move the needle.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Strategy, design, engineering and growth — held by one operator who
            ships. No handoffs, no diluted vision.
          </p>
        </div>

        <div className="services-grid">
          {svc.map((s, i) => (
            <div className="service glass reveal" key={s.h} data-tilt="4" data-delay={Math.min(i + 1, 5)}>
              <div className="svc-ico">{s.ic}</div>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <div className="tags">
                  {s.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="svc-arrow"><Ico.Arrow /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
