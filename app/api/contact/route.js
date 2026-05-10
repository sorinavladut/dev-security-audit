import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Mesaj nou Dev Security Audit',
      text: `Nume: ${body.name}\nEmail: ${body.email}\nMesaj: ${body.message}`,
    });

    return Response.json({ message: 'Mesaj trimis cu succes!' });
  } catch (err) {
    return Response.json({ message: 'Eroare la trimitere.' }, { status: 500 });
  }
}
