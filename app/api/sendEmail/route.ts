// src/app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handler for POST requests
export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please fill in all fields' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'realbdotjdot@gmail.com', // Your email address
        pass: 'xbfj fpuh xlle njgw', // Your email password
      },
    });
    

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'realbdotjdot@gmail.com', // Your email address
      subject: 'Message from Portfolio Contact Form',
      text: message,
    });

    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
