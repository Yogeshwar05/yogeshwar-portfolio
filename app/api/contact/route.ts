import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, msg } = body as Record<string, string>

    if (!name || !email || !msg) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"YJS Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'yogeshwarjhariya2@gmail.com',
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ''}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#05080f;color:#f0f6fb;border-radius:12px;">
          <h2 style="color:#6fffe9;font-size:24px;margin-bottom:8px;">New project enquiry</h2>
          <p style="color:#b4c5d7;font-size:13px;margin-bottom:32px;font-family:monospace;letter-spacing:0.1em;">
            via YJS Portfolio · ${new Date().toISOString()}
          </p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#7d92aa;font-size:11px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;width:120px;">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:16px;">${name}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#7d92aa;font-size:11px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:16px;"><a href="mailto:${email}" style="color:#6fffe9;">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#7d92aa;font-size:11px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;">Company</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:16px;">${company}</td></tr>` : ''}
          </table>
          <div style="margin-top:24px;">
            <div style="color:#7d92aa;font-size:11px;font-family:monospace;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:12px;">The Brief</div>
            <div style="font-size:16px;line-height:1.65;color:#f0f6fb;background:rgba(28,37,65,0.55);padding:20px;border-radius:8px;border:1px solid rgba(255,255,255,0.08);">${msg.replace(/\n/g, '<br/>')}</div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact route]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
