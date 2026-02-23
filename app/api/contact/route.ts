import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Dutch Lessons Website" <${process.env.GMAIL_USER}>`,
      to: 'thesaramark1992@gmail.com',
      subject: `Новая заявка с сайта от ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #3C88FF; border-bottom: 2px solid #3C88FF; padding-bottom: 10px;">
            📩 Новая заявка с сайта
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; width: 100px;">Имя:</td>
              <td style="padding: 10px; color: #222;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px; color: #222;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Сообщение:</td>
              <td style="padding: 10px; color: #222; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Это автоматическое сообщение с сайта Dutch Lessons.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
