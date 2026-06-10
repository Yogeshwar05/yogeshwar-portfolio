'use client'
import Assemble from '@/components/ui/Assemble'
import { Ico } from '@/components/ui/Icons'

type MockKind = 'dashboard' | 'site' | 'map' | 'shop' | 'workshop'

function ProjectMock({ kind }: { kind: MockKind }) {
  if (kind === 'dashboard') {
    // AI Agent — email / message inbox UI
    return (
      <div className="dev-mock">
        <div className="dev-screen" style={{ background: 'linear-gradient(180deg, #0b132b, #0d1a35)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '10px 10px', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6fffe9', boxShadow: '0 0 8px #6fffe9' }} />
              <div style={{ height: 4, width: 80, background: 'rgba(111,255,233,0.5)', borderRadius: 2 }} />
            </div>
            {[['Email', '#6fffe9', '— Auto-replied'], ['WhatsApp', '#4ade80', '— Handled'], ['Support', '#a78bfa', '— Escalated'], ['Sales', '#6fffe9', '— Replied']].map(([label, color, status], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 6px', background: 'rgba(255,255,255,0.04)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <div style={{ fontSize: 0, flex: 1, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
                <div style={{ fontFamily: 'monospace', fontSize: 6, color: color, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{status}</div>
              </div>
            ))}
            <div style={{ marginTop: 'auto', height: 18, background: 'rgba(111,255,233,0.12)', borderRadius: 6, border: '1px solid rgba(111,255,233,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 6, color: '#6fffe9', letterSpacing: '0.1em' }}>AI AGENT · ACTIVE</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'map') {
    // JEE/NEET — local rank #1 map
    return (
      <div className="dev-mock">
        <div className="dev-screen" style={{ background: 'radial-gradient(circle at 50% 60%, #1c2541, #0b132b)' }}>
          <svg width="100%" height="100%" viewBox="0 0 200 110">
            <g stroke="rgba(91,192,190,0.15)" fill="none">
              {Array.from({ length: 6 }).map((_, i) => <line key={'h' + i} x1="0" x2="200" y1={i * 20} y2={i * 20}/>)}
              {Array.from({ length: 10 }).map((_, i) => <line key={'v' + i} x1={i * 22} x2={i * 22} y1="0" y2="110"/>)}
            </g>
            {/* City markers */}
            {[[40,60,true],[80,40,false],[120,70,false],[160,50,false],[60,85,false]].map(([x, y, top], i) => (
              <g key={i}>
                <circle cx={x as number} cy={y as number} r={top ? 10 : 7} fill={top ? 'rgba(111,255,233,0.15)' : 'rgba(111,255,233,0.06)'}/>
                <circle cx={x as number} cy={y as number} r="3" fill={top ? '#6fffe9' : '#5bc0be'}/>
                {top && (
                  <>
                    <text x={x as number} y={(y as number) - 14} textAnchor="middle" fill="#6fffe9" fontSize="6" fontFamily="monospace" letterSpacing="0.05em">#1 LOCAL</text>
                    <circle cx={x as number} cy={y as number} r="14" fill="none" stroke="#6fffe9" strokeWidth="0.5" strokeDasharray="3,2" opacity="0.6"/>
                  </>
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>
    )
  }
  if (kind === 'site') {
    // Dental Web — clean clinical site mock
    return (
      <div className="dev-mock">
        <div className="dev-screen" style={{ background: 'linear-gradient(180deg, #0b132b, #0e1e3a)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: 10, height: '100%' }}>
            <div style={{ height: 4, width: 40, background: 'rgba(111,255,233,0.6)', borderRadius: 2 }} />
            <div style={{ height: 12, width: '75%', background: 'rgba(255,255,255,0.88)', borderRadius: 2 }} />
            <div style={{ height: 8, width: '55%', background: 'rgba(111,255,233,0.35)', borderRadius: 2 }} />
            <div style={{ height: 5, width: '80%', background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
            <div style={{ height: 5, width: '65%', background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, marginTop: 4 }}>
              {['Cleaning', 'Implants', 'Braces'].map(s => (
                <div key={s} style={{ background: 'rgba(91,192,190,0.1)', border: '1px solid rgba(111,255,233,0.2)', borderRadius: 4, padding: '4px 2px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 5, color: '#6fffe9' }}>{s}</div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', gap: 5 }}>
              <div style={{ height: 12, width: 60, background: 'rgba(111,255,233,0.8)', borderRadius: 6 }} />
              <div style={{ height: 12, width: 45, background: 'rgba(255,255,255,0.08)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'workshop') {
    // AI Trainer — workshop / presentation mock
    return (
      <div className="dev-mock">
        <div className="dev-screen" style={{ background: 'linear-gradient(135deg, #0b132b 0%, #1a1040 100%)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 10, height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 6, color: '#a78bfa', letterSpacing: '0.15em' }}>WORKSHOP 01 / 03</div>
            </div>
            <div style={{ height: 10, width: '70%', background: 'rgba(167,139,250,0.5)', borderRadius: 2 }} />
            <div style={{ height: 5, width: '90%', background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
            <div style={{ height: 5, width: '75%', background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
            <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
              {['Prompt Eng.', 'Research', 'Automation'].map((t, i) => (
                <div key={i} style={{ padding: '3px 5px', background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)', borderRadius: 3 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: 5, color: '#a78bfa' }}>{t}</div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 6, color: 'rgba(255,255,255,0.3)' }}>3 institutes · 120+ students</div>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(167,139,250,0.2)', border: '1px solid rgba(167,139,250,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid #a78bfa', marginLeft: 1 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // fallback shop
  return (
    <div className="dev-mock">
      <div className="dev-screen" style={{ background: '#0b132b' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, padding: 10, height: '100%' }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{
              borderRadius: 4,
              background: i % 2 ? 'rgba(111,255,233,0.08)' : 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const projs = [
    {
      tag: 'AI Automation',
      h: 'Email & WhatsApp AI Agent',
      p: 'Built an autonomous AI agent that reads, categorises, and replies to inbound emails and WhatsApp messages — slashing response time from hours to seconds for a service business.',
      stack: 'GPT-4o · Node.js · Twilio',
      year: '2026',
      kind: 'dashboard' as MockKind,
    },
    {
      tag: 'Ed-Tech · Marketing',
      h: 'JEE / NEET Coaching · 3× Revenue',
      p: 'Led the marketing function for a competitive JEE/NEET institute. Secured #1 local pack on Google My Business across the city and tripled revenue through neuromarketing-led lead funnels.',
      stack: 'GMB · Meta Ads · Neuromarketing',
      year: '2025',
      kind: 'map' as MockKind,
    },
    {
      tag: 'Healthcare Web · SEO',
      h: 'Raipur Dental Network',
      p: 'Designed and ranked websites for multiple dental practices in Raipur. Each site hits Lighthouse 100 and consistently holds page-one positions for high-intent local keywords.',
      stack: 'Next.js · SEO · GMB',
      year: '2026',
      kind: 'site' as MockKind,
    },
    {
      tag: 'AI Education',
      h: 'AI Literacy Workshops',
      p: 'Designed and led 3 hands-on workshops across local institutes — teaching students how to leverage AI for research, writing, and automation. 120+ students trained.',
      stack: '3 institutes · 120+ students',
      year: '2026',
      kind: 'workshop' as MockKind,
    },
  ]

  return (
    <section className="section" id="work">
      <span className="big-num">§ 06 / WORK</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">06</span>Selected work</span>
            <h2 className="h-section reveal" data-delay="1">Things I&apos;ve built.<br/>Things still ranking.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Four pieces from a much longer ledger — chosen for the variety of
            disciplines they pull on.
          </p>
        </div>

        <div className="projects">
          {projs.map((p, i) => (
            <Assemble key={p.h} count={20} data-delay={Math.min(i + 1, 4)}>
              <article className="project glass" data-tilt="4">
                <div className="project-cover">
                  <div className="grid"></div>
                  <div className="shade"></div>
                  <ProjectMock kind={p.kind} />
                  <div className="streak"></div>
                </div>
                <a href="#" className="project-link" aria-label="Open case study"><Ico.Arrow /></a>
                <div className="project-body">
                  <div className="project-tag">{p.tag}</div>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                  <div className="project-meta">
                    <span><b>Stack</b> · {p.stack}</span>
                    <span><b>Year</b> · {p.year}</span>
                    <span><b>Role</b> · Lead</span>
                  </div>
                </div>
              </article>
            </Assemble>
          ))}
        </div>
      </div>
    </section>
  )
}
