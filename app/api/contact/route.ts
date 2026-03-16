import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  const body = await req.json();

  const { nume, telefon, email, mesaj, serviciu } = body;

  try {

    await resend.emails.send({
      from: "Formular Website <onboarding@resend.dev>",
      to: ["siacleaning@gmail.com"],
      subject: "Mesaj nou de pe site",
      html: `
        <h2>Mesaj nou din formular</h2>

        <p><strong>Nume:</strong> ${nume}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Serviciu:</strong> ${serviciu}</p>

        <p><strong>Mesaj:</strong></p>
        <p>${mesaj}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {

    return Response.json({ success: false });

  }
}