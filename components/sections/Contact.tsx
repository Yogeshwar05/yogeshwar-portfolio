'use client'
import { useState } from 'react'
import { Ico } from '@/components/ui/Icons'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const btnLabel =
    status === 'sending' ? 'Transmitting…' :
    status === 'sent'    ? 'Message sent ✓' :
    status === 'error'   ? 'Error — try again' :
    'Send transmission'

  return (
    <section className="section" id="contact">
      <span className="big-num">§ 12 / CONTACT</span>
      <div className="wrap">
        <div className="contact-wrap glass reveal" data-tilt="2">
          <div className="contact-bg"></div>
          <div className="contact-grid">

            <div className="contact-side">
              <span className="eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>
                <span className="idx">12</span>Contact
              </span>
              <h3>Let&apos;s build the thing that ranks.</h3>
              <p>
                I take on a small number of engagements each quarter. If you&apos;re
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

            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="btn btn-primary magnetic"
                data-mag="0.15"
                style={{ justifyContent: 'space-between', width: '100%', marginTop: 6 }}
                disabled={status === 'sending'}
              >
                <span>{btnLabel}</span>
                <span className="arrow"><Ico.Arrow /></span>
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}
