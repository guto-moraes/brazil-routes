"use server";

import { createFileRoute } from "@tanstack/react-router";
import { resend } from "@/lib/resend";

export const Route = createFileRoute("/api/email")({
  beforeLoad: () => {},
  component: () => null,
  async loader() {
    return {
      POST: async (request: Request) => {
        try {
          const body = await request.json();
          const { subject, fullName, email, message } = body;

          const data = await resend.emails.send({
            from: `Nome: ${fullName} <${email}>`,
            to: "luiz.nogueira@ifmt.edu.br",
            subject: `${subject} - Contado via Caminhos do Brasil Central`,
            html: `<p>Nome: ${fullName}</p><p>/e-mail: ${email}</p><p>Mensagem: ${message}</p>`,
          });

          return Response.json({ success: true, data });
        } catch (error) {
          return Response.json({ error }, { status: 500 });
        }
      },
    };
  },
});
