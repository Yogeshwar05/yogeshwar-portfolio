/* ============================================
   INTERACTIVE EFFECTS — vanilla JS
   - Loader
   - Custom cursor + spotlight
   - Magnetic buttons
   - Tilt 3D hover
   - Scroll reveals
   - Counter animation
   - Hero particle canvas
   - Form
   ============================================ */
(function () {
  'use strict';

  // ---------- Loader ----------
  const loader = document.getElementById('loader');
  const loaderPct = document.getElementById('loaderPct');
  let pct = 0;
  const loaderTimer = setInterval(() => {
    pct = Math.min(100, pct + 6 + Math.random() * 8);
    if (loaderPct) loaderPct.textContent = `Initializing — ${Math.floor(pct)}%`;
    if (pct >= 100) {
      clearInterval(loaderTimer);
      setTimeout(() => {
        loader && loader.classList.add('done');
        // Trigger nav morph after loader fades
        setTimeout(() => {
          const stage = document.getElementById('navStage');
          if (stage) stage.classList.add('ready');
        }, 250);
      }, 350);
    }
  }, 90);

  // ---------- Mobile drawer ----------
  const burger = document.getElementById('navBurger');
  const drawer = document.getElementById('navDrawer');
  function setDrawer(open) {
    if (!burger || !drawer) return;
    burger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('drawer-open', open);
  }
  if (burger) {
    burger.addEventListener('click', () => {
      setDrawer(!burger.classList.contains('open'));
    });
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setDrawer(false));
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setDrawer(false);
  });

  // ---------- Custom cursor ----------
  const cDot  = document.getElementById('cursorDot');
  const cRing = document.getElementById('cursorRing');
  const spot  = document.getElementById('spotlight');

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let sx = mx, sy = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (cDot) {
      cDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }
  });

  function tickCursor() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    sx += (mx - sx) * 0.06;
    sy += (my - sy) * 0.06;
    if (cRing) cRing.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    if (spot)  spot.style.left = sx + 'px', spot.style.top = sy + 'px';
    requestAnimationFrame(tickCursor);
  }
  tickCursor();

  // hover sensors (delegated)
  document.addEventListener('mouseover', (e) => {
    const t = e.target.closest('a, button, .magnetic, [data-cursor]');
    if (t && cRing) cRing.classList.add('hover');
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target.closest('a, button, .magnetic, [data-cursor]');
    if (t && cRing) cRing.classList.remove('hover');
  });

  // ---------- Wait for React to render, then bind ----------
  function whenReady(cb) {
    const tryIt = () => {
      if (document.querySelector('[data-ready]')) cb();
      else requestAnimationFrame(tryIt);
    };
    tryIt();
  }

  whenReady(() => {

    // ---------- Magnetic buttons ----------
    document.querySelectorAll('.magnetic').forEach((el) => {
      const strength = parseFloat(el.dataset.mag || 0.35);
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });

    // ---------- 3D tilt ----------
    document.querySelectorAll('[data-tilt]').forEach((el) => {
      const max = parseFloat(el.dataset.tilt || 8);
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1200px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });

    // ---------- Reveal on scroll ----------
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .skill, .assemble-wrap').forEach((el) => io.observe(el));

    // ---------- Counter ----------
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const dur = 1600;
        const t0 = performance.now();
        function step(t) {
          const k = Math.min(1, (t - t0) / dur);
          const v = Math.floor(target * (1 - Math.pow(1 - k, 3)));
          el.textContent = v.toLocaleString();
          if (k < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString();
        }
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

    // ---------- Form ----------
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (!btn) return;
        const original = btn.innerHTML;
        btn.innerHTML = '<span>Transmitting…</span>';
        setTimeout(() => {
          btn.innerHTML = '<span>Message sent ✓</span>';
          setTimeout(() => { btn.innerHTML = original; form.reset(); }, 2200);
        }, 900);
      });
    }
  });

  // ---------- Hero particle canvas ----------
  function initHeroCanvas() {
    const cv = document.getElementById('heroCanvas');
    if (!cv) { requestAnimationFrame(initHeroCanvas); return; }
    const ctx = cv.getContext('2d');
    let w, h, dpr;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.getBoundingClientRect();
      w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const N = Math.min(70, Math.floor((w * h) / 22000));
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.4,
    }));

    let mxL = -9999, myL = -9999;
    cv.addEventListener('mousemove', (e) => {
      const r = cv.getBoundingClientRect();
      mxL = e.clientX - r.left;
      myL = e.clientY - r.top;
    });
    cv.addEventListener('mouseleave', () => { mxL = -9999; myL = -9999; });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // points
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mxL, dy = p.y - myL;
        const dM = Math.sqrt(dx*dx + dy*dy);
        if (dM < 140) {
          const f = (140 - dM) / 140 * 0.6;
          p.x += dx / dM * f;
          p.y += dy / dM * f;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(111, 255, 233, ${0.4 + p.r * 0.3})`;
        ctx.shadowColor = 'rgba(111, 255, 233, 0.9)';
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      // lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 130) {
            const a = (1 - d / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(91, 192, 190, ${a})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }
  setTimeout(initHeroCanvas, 100);

  // ---------- Orbit code-rain canvas ----------
  function initOrbitCanvas() {
    const cv = document.getElementById('orbitCanvas');
    if (!cv) { setTimeout(initOrbitCanvas, 200); return; }
    const ctx = cv.getContext('2d');
    let w, h, dpr;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.getBoundingClientRect();
      w = r.width; h = r.height;
      if (w === 0) { setTimeout(resize, 200); return; }
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 12;
    const cols = Math.floor(w / fontSize);
    const drops = Array.from({ length: cols }, () => Math.random() * -50);
    const chars = '01ABCDEF{}<>/=*+_-#$';

    function draw() {
      if (!w) return requestAnimationFrame(draw);
      // soft trailing fade
      ctx.fillStyle = 'rgba(5, 8, 15, 0.18)';
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const ch = chars[(Math.floor(Math.random() * chars.length))];
        const alpha = 0.15 + Math.random() * 0.35;
        ctx.fillStyle = `rgba(111, 255, 233, ${alpha})`;
        ctx.fillText(ch, x, y);
        // bright leading char
        if (Math.random() < 0.04) {
          ctx.fillStyle = `rgba(255, 255, 255, 0.85)`;
          ctx.fillText(ch, x, y);
        }
        drops[i] += 0.5 + Math.random() * 0.3;
        if (y > h && Math.random() > 0.985) drops[i] = Math.random() * -20;
      }
      requestAnimationFrame(draw);
    }
    draw();
  }
  setTimeout(initOrbitCanvas, 300);

})();
