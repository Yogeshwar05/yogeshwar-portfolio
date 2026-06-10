import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-mega">YJS·26</div>
        <div className="footer-bar">
          <div>© 2026 — Engineered &amp; ranked.</div>
          <div className="links">
            <Link href="#top">Top</Link>
            <Link href="#work">Work</Link>
            <Link href="#contact">Contact</Link>
            <a href="https://github.com/Yogeshwar05">GitHub</a>
            <a href="https://www.linkedin.com/in/yogeshwar-jhariya-090977216/">LinkedIn</a>
          </div>
          <div>v.2026.05 · Built in Next.js</div>
        </div>
      </div>
    </footer>
  )
}
