/* eslint-disable */
/* =========================================================
   SECTIONS — all page sections as composable components
   ========================================================= */
const { useState, useEffect, useRef } = React;

/* ---------- TypeWriter ---------- */
function TypeWriter({ words, typeMs = 70, eraseMs = 35, holdMs = 1400 }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState('');
  const [phase, setPhase] = useState('type'); // type | hold | erase

  useEffect(() => {
    const target = words[idx];
    let t;
    if (phase === 'type') {
      if (txt.length < target.length) {
        t = setTimeout(() => setTxt(target.slice(0, txt.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase('erase'), holdMs);
      }
    } else if (phase === 'erase') {
      if (txt.length > 0) {
        t = setTimeout(() => setTxt(target.slice(0, txt.length - 1)), eraseMs);
      } else {
        setIdx((idx + 1) % words.length);
        setPhase('type');
      }
    }
    return () => clearTimeout(t);
  }, [txt, phase, idx]);

  return (
    <span className="tw-wrap">
      <span className="word">{txt}</span>
      <span className="caret" aria-hidden="true"></span>
    </span>
  );
}

/* ---------- Word stagger reveal ---------- */
function WordStagger({ children, className = '' }) {
  const words = String(children).split(' ');
  return (
    <span className={`word-stagger ${className}`}>
      {words.map((w, i) => (
        <span key={i}><b>{w}</b></span>
      ))}
    </span>
  );
}

/* ---------- Block-assemble wrapper ---------- */
function Assemble({ children, count = 24, className = '', ...rest }) {
  const blocks = Array.from({ length: count }, (_, i) => {
    const dx = (Math.random() - 0.5) * 220;
    const dy = (Math.random() - 0.5) * 220;
    const rot = (Math.random() - 0.5) * 90;
    const d = Math.random() * 600;
    const w = 8 + Math.random() * 18;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    return (
      <i key={i} style={{
        width: w, height: w,
        top: top + '%', left: left + '%',
        '--dx': dx + 'px', '--dy': dy + 'px',
        '--rot': rot + 'deg', '--d': d + 'ms',
      }} />
    );
  });
  return (
    <div className={`assemble-wrap reveal ${className}`} {...rest}>
      <div className="assemble-blocks" aria-hidden="true">{blocks}</div>
      <div className="assemble-content">{children}</div>
    </div>
  );
}

/* ---------- Tiny inline icon set ---------- */
const Ico = {
  Arrow: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M5 19L19 5M9 5h10v10"/></svg>,
  ArrowDown: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 5v14M5 12l7 7 7-7"/></svg>,
  Spark: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}><path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z"/></svg>,
  Star: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" {...p}><path d="M12 2l2.6 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.4z"/></svg>,
  Bolt: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>,
  Code: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M8 4l-6 8 6 8M16 4l6 8-6 8M14 4l-4 16"/></svg>,
  Search: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  Layout: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  Cpu: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>,
  Wave: (p) => <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><path d="M2 12c2 0 2-4 4-4s2 8 4 8 2-12 4-12 2 8 4 8 2-4 4-4"/></svg>,
  Mail: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>,
  Phone: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7 12 12 0 00.6 2.6 2 2 0 01-.4 2.1L8 9.8a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4 12 12 0 002.6.6 2 2 0 011.7 2z"/></svg>,
  Pin: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Git: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5V15.5M8 18h7.5a2 2 0 002-2V14"/></svg>,
};

/* =========================================================
   HERO
========================================================= */
function Hero() {
  const roles = ['Web Developer', 'SEO Specialist', 'CTO', 'Digital Architect', 'Performance Engineer'];
  return (
    <section className="hero" id="top">
      <canvas id="heroCanvas" className="hero-canvas" aria-hidden="true"></canvas>
      <div className="wrap hero-inner">

        <div>
          <div className="hero-status reveal">
            <span className="live"></span>
            Available for select Q3 engagements
            <span className="div"></span>
            <span className="mono">Remote · Worldwide</span>
          </div>

          <h1 className="h-display reveal" data-delay="1" style={{marginBottom: 24}}>
            Engineering <span className="it">digital</span> experiences<br/>
            that <span className="grad">scale beyond limits.</span>
          </h1>

          <div className="hero-term reveal" data-delay="2">
            <div className="head"><i></i>session · whoami · live</div>
            <div>
              <span className="prompt">~ $</span>
              <span className="role">I am a </span>
              <TypeWriter words={roles} />
            </div>
          </div>

          <p className="hero-sub reveal" data-delay="3">
            Senior web architect, SEO strategist and technology leader.
            I build cinematic, performance-obsessed products and rank them on
            page one — the kind of work that compounds for years.
          </p>

          <div className="hero-ctas reveal" data-delay="4">
            <a href="#work" className="btn btn-primary magnetic" data-mag="0.2">
              View selected work
              <span className="arrow"><Ico.Arrow /></span>
            </a>
            <a href="#contact" className="btn btn-ghost magnetic" data-mag="0.2">
              Start a project
              <span className="arrow"><Ico.ArrowDown /></span>
            </a>
          </div>

          <div className="hero-meta reveal" data-delay="5">
            <HeroMeta n="500" label="Websites shipped" />
            <HeroMeta n="6"   label="Years in production" />
            <HeroMeta n="50"  label="Organizations scaled" />
          </div>
        </div>

        <div className="reveal" data-delay="2">
          <Assemble count={28} className="hero-card-assemble">
            <div className="hero-card glass" data-tilt="10">
              <div className="hero-card-bg"></div>
              <div className="hero-card-grid"></div>
              <div className="radar-sweep"></div>
              <div className="hero-card-rings">
                <div className="r r1"></div>
                <div className="r r2"></div>
                <div className="r r3"></div>
              </div>
              <div className="hero-card-monogram">YJS</div>
              <div className="scan"></div>

              <div className="hero-card-hud top">
                <span>ID · 0x42A · CTO</span>
                <span>NIT/2026</span>
              </div>
              <div className="hero-card-hud bot">
                <span>STATUS · ONLINE</span>
                <span>UPTIME 99.99</span>
              </div>

              <i className="hero-card-corner tl"></i>
              <i className="hero-card-corner tr"></i>
              <i className="hero-card-corner bl"></i>
              <i className="hero-card-corner br"></i>

              <div className="hero-tech-orbit t1">NEXT</div>
              <div className="hero-tech-orbit t2">R3F</div>
              <div className="hero-tech-orbit t3">TS</div>
              <div className="hero-tech-orbit t4">SEO</div>
            </div>
          </Assemble>
        </div>

      </div>
    </section>
  );
}

function HeroMeta({ n, label }) {
  return (
    <div className="hero-meta-cell">
      <div className="n">
        <span data-count={n}>0</span>
        <span className="plus">+</span>
      </div>
      <div className="l">{label}</div>
    </div>
  );
}

/* =========================================================
   MARQUEE
========================================================= */
function Marquee() {
  const items = [
    'Next.js', 'React 19', 'TypeScript', 'GSAP', 'Three.js',
    'Tailwind CSS', 'Framer Motion', 'Node.js', 'Edge Runtime',
    'Lighthouse 100', 'Google My Business', 'Core Web Vitals',
  ];
  const all = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {all.map((it, i) => (
          <div className="item" key={i}>
            <Ico.Star className="star" />{it}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT
========================================================= */
function About() {
  return (
    <section className="section" id="about">
      <span className="big-num">§ 01 / ABOUT</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">01</span>About</span>
            <h2 className="h-section reveal" data-delay="1">
              A technologist who builds, ranks,<br/>
              and <span className="grad" style={{
                background: 'linear-gradient(120deg, #fff 10%, #6fffe9 60%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>scales</span>.
            </h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Six years deep in production engineering — half a thousand websites,
            fifty organizations on page one of Google, and a stint as CTO
            before finishing my degree.
          </p>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <p className="about-copy">
              I treat the web as a <strong>compounding asset</strong>. Every line of
              code, every keyword cluster, every millisecond of TTFB — they
              accumulate. The portfolios I'm proudest of weren't the prettiest
              launches; they were the ones still ranking and converting three
              years later.
            </p>
            <p className="about-copy">
              Currently studying Electronics &amp; Communication Engineering at
              <strong> NIT Raipur</strong> (previously <strong>NIT Rourkela</strong>) while
              shipping production work for clients across continents. Former CTO
              at Nexture Services — built the engineering org from the ground up.
            </p>
            <p className="about-copy">
              My interest is at the seam where <strong>systems engineering meets
              brand</strong> — making technical things feel inevitable, premium and
              alive.
            </p>
          </div>

          <div className="about-side">
            <AboutPill icon={<Ico.Bolt/>} h="Performance-first" p="Sub-second LCP. 100 Lighthouse on every shipped surface." />
            <AboutPill icon={<Ico.Search/>} h="SEO obsessed" p="Schema, topical authority, GMB, and a measurable rank ladder." />
            <AboutPill icon={<Ico.Cpu/>}  h="Systems mindset" p="Design systems, type-safe APIs, observability from day one." />
            <AboutPill icon={<Ico.Layout/>} h="Design-fluent" p="From token to screen. I work with designers in the same file." />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPill({ icon, h, p }) {
  return (
    <div className="about-pill glass reveal" data-tilt="6">
      <div className="ico">{icon}</div>
      <h4>{h}</h4>
      <p>{p}</p>
    </div>
  );
}

/* =========================================================
   EXPERIENCE TIMELINE
========================================================= */
function Timeline() {
  const rows = [
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
  ];

  return (
    <section className="section" id="experience">
      <span className="big-num">§ 02 / EXPERIENCE</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">02</span>Experience</span>
            <h2 className="h-section reveal" data-delay="1">A timeline of <span className="it" style={{fontFamily:'Instrument Serif',fontStyle:'italic',color:'var(--c-cyan)'}}>compounding</span> craft.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            From first portfolio site at sixteen to running an engineering
            organization at twenty-four — every chapter pointed in the same
            direction.
          </p>
        </div>

        <div className="timeline">
          {rows.map((r, i) => (
            <div className="tl-row reveal" key={i} data-delay={Math.min(i+1, 4)}>
              <div className="tl-when">{r.when}</div>
              <div className="tl-body">
                <h3>{r.role}</h3>
                <div className="org">{r.org}</div>
                <p>{r.copy}</p>
                <div className="chips">{r.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SKILLS
========================================================= */
function Skills() {
  const data = [
    { n: 'Frontend Architecture', pct: 97, p: 'React, Next.js App Router, RSC, type-safe data layers, design systems.' },
    { n: 'SEO & Content Strategy', pct: 95, p: 'Topical authority, internal linking, schema, programmatic SEO at scale.' },
    { n: 'Google My Business', pct: 96, p: 'Local pack domination, review velocity, geo-targeted content systems.' },
    { n: 'Performance Engineering', pct: 94, p: 'Sub-second LCP, edge caching, image pipelines, RUM/Vitals observability.' },
    { n: 'UI/UX & Motion', pct: 90, p: 'Visual systems, accessibility, GSAP/Framer motion choreography.' },
    { n: 'Backend & APIs', pct: 88, p: 'Node, edge runtimes, tRPC/GraphQL, Postgres, queues, observability.' },
  ];
  return (
    <section className="section" id="skills">
      <span className="big-num">§ 03 / SKILLS</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">03</span>Capabilities</span>
            <h2 className="h-section reveal" data-delay="1">What I'm dangerously good at.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Six disciplines that compound on each other. The portfolio sites
            rank because the engineering is fast; the engineering is fast because
            the design system is honest.
          </p>
        </div>

        <div className="skills-grid">
          {data.map((s, i) => (
            <div className="skill glass" key={s.n} style={{ '--w': s.pct / 100 }} data-tilt="6">
              <div className="top">
                <span className="num">{String(i+1).padStart(2,'0')}</span>
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
  );
}

/* =========================================================
   SERVICES
========================================================= */
function Services() {
  const svc = [
    { ic: <Ico.Layout/>, h: 'Premium Web Experiences', p: 'Cinematic marketing sites, product surfaces and interactive landing pages — engineered from the design system up.', tags: ['Next.js', 'GSAP', 'Three.js', 'Motion'] },
    { ic: <Ico.Search/>, h: 'SEO & Topical Authority', p: 'From audit to ranked. Programmatic SEO, content systems, internal linking and schema engineered for compounding traffic.', tags: ['Tech SEO', 'Content Ops', 'Schema'] },
    { ic: <Ico.Pin/>,    h: 'Google My Business Growth', p: 'Local pack domination for service businesses. Review systems, geo-content, and the operational rhythm to keep you there.', tags: ['GMB', 'Local SEO', 'Reviews'] },
    { ic: <Ico.Bolt/>,   h: 'Performance & Core Vitals', p: 'I tear apart slow sites and rebuild them sub-second. Edge caching, image pipelines, RUM observability.', tags: ['LCP', 'CLS', 'Edge', 'CDN'] },
    { ic: <Ico.Code/>,   h: 'SaaS & Product Engineering', p: 'Type-safe, testable, scalable products. From schema to UI, with the design and engineering held in one head.', tags: ['SaaS', 'tRPC', 'Postgres'] },
    { ic: <Ico.Cpu/>,    h: 'Fractional CTO & Audits', p: 'Stack reviews, hiring scaffolds, architecture decisions. For founders who need a technical co-pilot, not a vendor.', tags: ['Fractional', 'Architecture', 'Hiring'] },
  ];
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
            <div className="service glass reveal" key={s.h} data-tilt="4" data-delay={Math.min(i+1, 5)}>
              <div className="svc-ico">{s.ic}</div>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
              <div className="svc-arrow"><Ico.Arrow /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SEO & GROWTH
========================================================= */
function SEO() {
  const kw = [
    { kw: 'best dentist near me',           from: 47, to: 2  },
    { kw: 'corporate law firm mumbai',      from: 31, to: 1  },
    { kw: 'b2b saas onboarding software',   from: 84, to: 6  },
    { kw: 'luxury interior designer pune',  from: 22, to: 1  },
    { kw: 'wedding photographer raipur',    from: 19, to: 1  },
  ];
  return (
    <section className="section" id="seo">
      <span className="big-num">§ 05 / SEO</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">05</span>SEO &amp; Growth</span>
            <h2 className="h-section reveal" data-delay="1">Ranked, not just <span className="it" style={{fontFamily:'Instrument Serif',fontStyle:'italic',color:'var(--c-cyan)'}}>shipped</span>.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            50+ organizations moved from page three to top-three. Here's the
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
              {kw.map((r) => (
                <div className="seo-row" key={r.kw}>
                  <div className="kw">{r.kw}</div>
                  <div className="pos">#{r.from} → <b>#{r.to}</b></div>
                  <svg className="arr" viewBox="0 0 80 22" fill="none" stroke="var(--c-cyan)" strokeWidth="1.5">
                    <path d={`M2 ${20 - r.from*0.25} Q 40 14, 78 ${20 - r.to*4}`} strokeDasharray="120" strokeDashoffset="120" style={{animation:'draw 1.8s var(--ease-out) forwards'}} />
                    <circle cx="78" cy={20 - r.to*4} r="2.5" fill="var(--c-cyan)" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="seo-features">
            <div className="seo-feat glass reveal" data-delay="1"><div className="num">01</div><div><h4>Topical authority maps</h4><p>Cluster planning around buyer intent, not vanity terms.</p></div></div>
            <div className="seo-feat glass reveal" data-delay="2"><div className="num">02</div><div><h4>Programmatic SEO at scale</h4><p>Templated landing pages with real value — not doorways.</p></div></div>
            <div className="seo-feat glass reveal" data-delay="3"><div className="num">03</div><div><h4>Google My Business systems</h4><p>Review velocity, geo content, and operational rhythm.</p></div></div>
            <div className="seo-feat glass reveal" data-delay="4"><div className="num">04</div><div><h4>Schema &amp; technical SEO</h4><p>Structured data, sitemaps, edge-rendered metadata.</p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
========================================================= */
function Projects() {
  const projs = [
    { tag: 'SaaS Platform',     h: 'Helio · Customer growth OS',         p: 'Edge-rendered SaaS for B2B marketers. RSC + tRPC.', stack: 'Next 15', year: '2026', kind: 'dashboard' },
    { tag: 'Marketing site',    h: 'Lumen Capital · Fund landing',       p: 'Cinematic brand site for a thesis-driven VC fund.',  stack: 'GSAP', year: '2025',   kind: 'site' },
    { tag: 'Local services',    h: 'Aerial Dental · GMB scale-up',       p: '7 locations, #1 local pack across 4 cities in 90d.',  stack: 'GMB',  year: '2025',   kind: 'map' },
    { tag: 'Commerce',          h: 'Atelier Noir · Headless storefront', p: 'Couture commerce. Sub-second TTFB on every PDP.',      stack: 'Shopify Hydrogen', year: '2024', kind: 'shop' },
  ];
  return (
    <section className="section" id="work">
      <span className="big-num">§ 06 / WORK</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">06</span>Selected work</span>
            <h2 className="h-section reveal" data-delay="1">Things I've built.<br/>Things still ranking.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Four pieces from a much longer ledger — chosen for the variety of
            disciplines they pull on.
          </p>
        </div>

        <div className="projects">
          {projs.map((p, i) => (
            <Assemble key={p.h} count={20} data-delay={Math.min(i+1, 4)}>
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
  );
}

function ProjectMock({ kind }) {
  if (kind === 'dashboard') {
    return (
      <div className="dev-mock">
        <div className="dev-screen">
          <div className="mock-dashboard">
            <div className="row head"><i/>helio.app / overview</div>
            <div className="row"></div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === 'site') {
    return (
      <div className="dev-mock">
        <div className="dev-screen" style={{ background: 'linear-gradient(180deg, #0b132b, #1c2541)' }}>
          <div style={{display:'flex',flexDirection:'column',gap:6,padding:12,height:'100%'}}>
            <div style={{height:6, width:50, background:'rgba(111,255,233,0.6)', borderRadius:2}}/>
            <div style={{height:16,width:'70%',background:'rgba(255,255,255,0.85)',borderRadius:3}}/>
            <div style={{height:16,width:'55%',background:'rgba(111,255,233,0.4)',borderRadius:3}}/>
            <div style={{flex:1}}/>
            <div style={{display:'flex',gap:6}}>
              <div style={{height:14,width:60,background:'rgba(111,255,233,0.8)',borderRadius:7}}/>
              <div style={{height:14,width:50,background:'rgba(255,255,255,0.1)',borderRadius:7}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === 'map') {
    return (
      <div className="dev-mock">
        <div className="dev-screen" style={{background: 'radial-gradient(circle at 50% 60%, #1c2541, #0b132b)'}}>
          <svg width="100%" height="100%" viewBox="0 0 200 110">
            <g stroke="rgba(91,192,190,0.15)" fill="none">
              {Array.from({length:6}).map((_,i)=>(<line key={'h'+i} x1="0" x2="200" y1={i*20} y2={i*20}/>))}
              {Array.from({length:10}).map((_,i)=>(<line key={'v'+i} x1={i*22} x2={i*22} y1="0" y2="110"/>))}
            </g>
            {[[40,60],[80,40],[120,70],[160,50],[60,85],[140,30]].map(([x,y],i)=>(
              <g key={i}>
                <circle cx={x} cy={y} r="8" fill="rgba(111,255,233,0.1)"/>
                <circle cx={x} cy={y} r="3" fill="#6fffe9"/>
              </g>
            ))}
          </svg>
        </div>
      </div>
    );
  }
  // shop
  return (
    <div className="dev-mock">
      <div className="dev-screen" style={{background: '#0b132b'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6, padding:10, height:'100%'}}>
          {Array.from({length:6}).map((_,i)=>(
            <div key={i} style={{
              borderRadius:4,
              background: i % 2 ? 'rgba(111,255,233,0.08)' : 'rgba(255,255,255,0.04)',
              border:'1px solid rgba(255,255,255,0.06)'
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STATS
========================================================= */
function Stats() {
  return (
    <section className="section" id="impact" style={{paddingTop: 40, paddingBottom: 40}}>
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
          <Stat n={500} l="Websites delivered" sub="across 12 industries" />
          <Stat n={50}  l="Organizations scaled" sub="page-three → top-three" />
          <Stat n={6}   l="Years in production" sub="started at sixteen" />
          <Stat n={312} l="% avg. organic uplift" sub="90-day median" plus="%" />
        </div>
      </div>
    </section>
  );
}
function Stat({ n, l, sub, plus = '+' }) {
  return (
    <div className="stat reveal">
      <div className="n"><span data-count={n}>0</span><span className="plus">{plus}</span></div>
      <div className="l">{l}</div>
      <div className="sub">{sub}</div>
    </div>
  );
}

/* =========================================================
   TESTIMONIALS
========================================================= */
function Testimonials() {
  const t = [
    { q: '"Shipped our entire marketing stack in six weeks. Three months later, we were ranking #1 for our hero term. It paid for itself by the second invoice."', n: 'Priya Menon', r: 'Founder · Helio Growth', a: 'PM' },
    { q: '"The level of polish is unreasonable. Every detail — the type, the motion, the structured data — felt considered. Best agency-of-one we have worked with."', n: 'Daniel Ashford', r: 'Partner · Lumen Capital', a: 'DA' },
    { q: '"Took our local visibility from invisible to dominant in three months. Booking calendar is now the bottleneck. Honestly hard to recommend more strongly."', n: 'Dr. Rohan Iyer', r: 'CEO · Aerial Dental Group', a: 'RI' },
  ];
  return (
    <section className="section" id="testimonials">
      <span className="big-num">§ 08 / VOICES</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">08</span>Testimonials</span>
            <h2 className="h-section reveal" data-delay="1">Receipts from the people<br/>who paid for the work.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            A small selection — full references available on request, including
            performance data and analytics dashboards.
          </p>
        </div>

        <div className="testis">
          {t.map((q, i) => (
            <div className="testi glass reveal" key={i} data-tilt="5" data-delay={Math.min(i+1, 3)}>
              <div className="quote">{q.q}</div>
              <div className="meta">
                <div className="av">{q.a}</div>
                <div>
                  <div className="nm">{q.n}</div>
                  <div className="ro">{q.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LEADERSHIP / STARTUP
========================================================= */
function Leadership() {
  return (
    <section className="section" id="leadership">
      <span className="big-num">§ 09 / LEADERSHIP</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">09</span>Leadership</span>
            <h2 className="h-section reveal" data-delay="1">Built like a founder.<br/>Operates like a senior engineer.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            Eight months as Chief Technology Officer — I designed the
            engineering org from first principles, not from a playbook.
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:32}} className="lead-grid">
          <div className="glass reveal" style={{padding:'44px 40px', borderRadius:24}}>
            <div style={{fontFamily:'var(--f-mono)', fontSize:11, letterSpacing:'0.2em', color:'var(--c-cyan)', textTransform:'uppercase', marginBottom:24}}>CTO · Nexture Services · May 2025 — Jan 2026</div>
            <h3 style={{fontFamily:'var(--f-display)', fontSize:32, fontWeight:500, letterSpacing:'-0.02em', marginBottom:18, lineHeight:1.1}}>From zero to engineering org in eight months.</h3>
            <p style={{color:'var(--c-muted)', fontSize:16, lineHeight:1.65, marginBottom:24}}>
              I joined as the first technical hire and exited as CTO with a
              team of seven engineers, a working design system, a shipping
              cadence, and 30+ live client projects across three verticals.
              Owned hiring, architecture, code review, and client strategy.
            </p>
            <div style={{display:'flex', gap:30, flexWrap:'wrap', marginTop:8}}>
              <KV n="7"  l="Engineers hired" />
              <KV n="30" l="Client projects shipped" />
              <KV n="3"  l="Verticals served" />
            </div>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:14}}>
            {[
              { h: 'Hiring & culture', p: 'Designed the interview loop, leveling rubric and onboarding. First five hires still there.' },
              { h: 'Architecture',     p: 'Set Next.js + tRPC + Postgres as the canonical stack. Type-safe end to end.' },
              { h: 'Review standard',  p: 'Every PR reviewed against perf budgets and accessibility checklist before merge.' },
              { h: 'Client strategy',  p: 'Sat in pitches; translated client outcomes into engineering scope.' },
            ].map((x, i) => (
              <div key={x.h} className="glass reveal" data-delay={i+1} style={{padding:'18px 20px', borderRadius:14}}>
                <h4 style={{fontFamily:'var(--f-display)', fontSize:16, fontWeight:500, marginBottom:4}}>{x.h}</h4>
                <p style={{fontSize:13, color:'var(--c-muted)'}}>{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function KV({ n, l }) {
  return (
    <div>
      <div style={{fontFamily:'var(--f-display)', fontSize:36, fontWeight:500, letterSpacing:'-0.02em', lineHeight:1}}>
        <span data-count={n}>0</span><span style={{color:'var(--c-cyan)'}}>+</span>
      </div>
      <div style={{fontFamily:'var(--f-mono)', fontSize:10, color:'var(--c-muted)', letterSpacing:'0.2em', textTransform:'uppercase', marginTop:8}}>{l}</div>
    </div>
  );
}

/* =========================================================
   TECH STACK ORBIT
========================================================= */
function Stack() {
  const nodes = [
    { x: 50, y: 2,  l: 'Next' },
    { x: 75, y: 10, l: 'RSC'  },
    { x: 94, y: 26, l: 'TS'   },
    { x: 98, y: 50, l: 'R3F'  },
    { x: 94, y: 74, l: 'GSAP' },
    { x: 78, y: 92, l: 'Node' },
    { x: 50, y: 100, l: 'API' },
    { x: 22, y: 92, l: 'PG'   },
    { x: 6,  y: 74, l: 'TW'   },
    { x: 2,  y: 50, l: 'Edge' },
    { x: 6,  y: 26, l: 'SEO'  },
    { x: 22, y: 10, l: 'GMB'  },
  ];
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
  ];
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
            <canvas id="orbitCanvas" className="orbit-canvas" aria-hidden="true"></canvas>

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
              <div className="orbit-node magnetic"
                   key={n.l + i}
                   style={{ left: n.x + '%', top: n.y + '%' }}
                   data-mag="0.25">
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
              <div className="stack-row reveal" key={r.n} data-delay={Math.min(i+1, 6)}>
                <div className="name">{r.n}</div>
                <div className="yrs">{r.y}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */
function Process() {
  const steps = [
    { s: 'STEP 01', h: 'Listen', p: 'A working session to map the business — not just the brief. We diagnose, not assume.' },
    { s: 'STEP 02', h: 'Architect', p: 'Information architecture, technical stack, performance budget, SEO topical map. The blueprint.' },
    { s: 'STEP 03', h: 'Ship', p: 'Design and engineering held in one head. Weekly demos, no dark periods, no surprises.' },
    { s: 'STEP 04', h: 'Compound', p: 'Launch is day one. We instrument, learn, and iterate against the rank ladder.' },
  ];
  return (
    <section className="section" id="process">
      <span className="big-num">§ 11 / PROCESS</span>
      <div className="wrap">
        <div className="section-head">
          <div className="section-head-left">
            <span className="eyebrow reveal"><span className="idx">11</span>Process</span>
            <h2 className="h-section reveal" data-delay="1">Four phases. No <span className="it" style={{fontFamily:'Instrument Serif',fontStyle:'italic',color:'var(--c-cyan)'}}>theater</span>.</h2>
          </div>
          <p className="lead reveal" data-delay="2">
            How a typical engagement flows — designed for clarity, weekly visible
            progress, and ranked outcomes on the other side.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="proc reveal" key={s.h} data-delay={Math.min(i+1, 4)}>
              <span className="step">{s.s}</span>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */
function Contact() {
  return (
    <section className="section" id="contact">
      <span className="big-num">§ 12 / CONTACT</span>
      <div className="wrap">
        <div className="contact-wrap glass reveal" data-tilt="2">
          <div className="contact-bg"></div>
          <div className="contact-grid">

            <div className="contact-side">
              <span className="eyebrow" style={{marginBottom: 24, display:'inline-flex'}}><span className="idx">12</span>Contact</span>
              <h3>Let's build the thing that ranks.</h3>
              <p>
                I take on a small number of engagements each quarter. If you're
                a founder, marketer, or operator with a project worth shipping
                well — send a note.
              </p>

              <div className="contact-list">
                <a href="mailto:yogeshwarjhariya2@gmail.com" className="magnetic" data-mag="0.1">
                  <div className="ico"><Ico.Mail/></div>
                  <div>
                    <span className="lbl">Email</span>
                    <div className="val">yogeshwarjhariya2@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+919754288664" className="magnetic" data-mag="0.1">
                  <div className="ico"><Ico.Phone/></div>
                  <div>
                    <span className="lbl">Call / WhatsApp</span>
                    <div className="val">+91 97542 88664</div>
                  </div>
                </a>
                <a href="#" className="magnetic" data-mag="0.1">
                  <div className="ico"><Ico.Pin/></div>
                  <div>
                    <span className="lbl">Based in</span>
                    <div className="val">Raipur, India · Remote worldwide</div>
                  </div>
                </a>
                <a href="#" className="magnetic" data-mag="0.1">
                  <div className="ico"><Ico.Git/></div>
                  <div>
                    <span className="lbl">Profiles</span>
                    <div className="val">GitHub · LinkedIn · Read.cv</div>
                  </div>
                </a>
              </div>
            </div>

            <form className="contact-form" id="contactForm">
              <div className="field">
                <label>Your name</label>
                <input type="text" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="jane@company.com" required />
              </div>
              <div className="field">
                <label>Company / Project</label>
                <input type="text" name="company" placeholder="Acme, Inc." />
              </div>
              <div className="field">
                <label>The brief</label>
                <textarea name="msg" placeholder="What are we building? What does success look like?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary magnetic" data-mag="0.15" style={{justifyContent:'space-between', width:'100%', marginTop:6}}>
                <span>Send transmission</span>
                <span className="arrow"><Ico.Arrow/></span>
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-mega">YJS·26</div>
        <div className="footer-bar">
          <div>© 2026 — Engineered &amp; ranked.</div>
          <div className="links">
            <a href="#top">Top</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
          <div>v.2026.05 · Built in Next.js</div>
        </div>
      </div>
    </footer>
  );
}

/* expose */
Object.assign(window, {
  Hero, Marquee, About, Timeline, Skills, Services, SEO,
  Projects, Stats, Testimonials, Leadership, Stack, Process, Contact, Footer,
});
