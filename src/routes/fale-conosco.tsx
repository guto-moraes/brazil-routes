import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      {
        title: "Fale Conosco | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Página de contato com a equipe do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/fale-conosco",
      },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  return (
    <Main className="container mx-auto">
      <Title text="Fale Conosco" />
    </Main>
  );
}
