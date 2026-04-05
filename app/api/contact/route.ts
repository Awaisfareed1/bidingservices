// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs'; // ✅ force node runtime

export async function POST(req: Request) {
  try {
    const { name, email, message, service } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Biding Services" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `${service || 'General'} Inquiry from ${name}`,
      html: `
        <h2>New Lead 🚀</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('EMAIL ERROR:', error?.message, error);
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}