"use server";

import { createFileRoute } from "@tanstack/react-router";
import { resend } from "@/lib/resend";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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
            from: `${fullName} <${email}>`,
            to: "luiz.nogueira@ifmt.edu.br",
            subject: `${subject} - Contado via Caminhos do Brasil Central`,
            html: `<p>Nome: ${fullName}</p><p>/e-mail: ${email}</p><p>Mensagem: ${message}</p>`,
          });

          toast.message("Mensagem Enviada", {
            description: "Sua mensagem de contato foi enviada com sucesso!",
            className: cn(
              "border-darkgreen-500! dark:border-dark-contrast-100! bg-darkgreen-500! dark:bg-dark-contrast-100!",
              "[&>div>div:nth-child(1)]:data-[title]:font-bold! [&>div>div:nth-child(1)]:data-[title]:text-white!",
              "dark:[&>div>div:nth-child(1)]:data-[title]:text-dark-950! [&>div>div:nth-child(2)]:data-[description]:text-white!",
              "dark:[&>div>div:nth-child(2)]:data-[description]:text-dark-950! [&_svg]:text-white!",
              "[&>*>svg]:text-white! dark:[&_svg]:text-dark-950! dark:[&>*>svg]:text-dark-950!",
            )
          })

          return Response.json({ success: true, data });
        } catch (error) {
          toast.error("Mensagem não enviada!", {
            description: "Ocorreu um erro durante a tentativa de enviar sua mensagem.",
            className: cn(
              "border-darkgreen-500! dark:border-rose-500! bg-darkgreen-500! dark:bg-rose-500!",
              "[&>div>div:nth-child(1)]:data-[title]:font-bold! [&>div>div:nth-child(1)]:data-[title]:text-white!",
              "dark:[&>div>div:nth-child(1)]:data-[title]:text-white! [&>div>div:nth-child(2)]:data-[description]:text-white!",
              "dark:[&>div>div:nth-child(2)]:data-[description]:text-white! [&_svg]:text-white!",
              "[&>*>svg]:text-white! dark:[&_svg]:text-white! dark:[&>*>svg]:white!",
            )
          })
          return Response.json({ error }, { status: 500 });
        }
      },
    };
  },
});
