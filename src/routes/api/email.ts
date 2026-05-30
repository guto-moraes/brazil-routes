"use server";

import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

const RESENDE_API_KEY = import.meta.env.VITE_RESEND_APY_KEY;
const resend = new Resend(RESENDE_API_KEY);

export const Route = createFileRoute("/api/email")({
  server: {
    handlers: {
      POST: async (request: Request) => {
        try {
          const body = await request.json();
          const { subject, fullName, email, message } = body;

          const data = await resend.emails.send({
            from: `Nome: ${fullName} <${email}>`,
            to: "joseaugusto.teo@gmail.com",
            subject: `${subject} - Contado via Caminhos do Brasil Central`,
            html: `<p>Nome: ${fullName}</p><p>/e-mail: ${email}</p><p>Mensagem: ${message}</p>`,
          });

          return Response.json({ success: true, data });
        } catch (error) {
          return Response.json({ error }, { status: 500 });
        }
      },
    },
  },
});
