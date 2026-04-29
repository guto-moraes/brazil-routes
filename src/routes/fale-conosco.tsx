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
    <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Fale <span className="text-tan-400">Conosco</span>
      </Title>
    </Main>
  );
}
