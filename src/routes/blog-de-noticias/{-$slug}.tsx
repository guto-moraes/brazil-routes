import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/blog-de-noticias/{-$slug}")({
  head: () => ({
    meta: [
      {
        title: "{-$slug} | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Noticias das atividades realizadas pelo Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/blog-de-noticias/{-$slug}",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main className="bg-tan-100 w-full xl:py-24">
      <Title text="Notícia do Projeto" />
    </Main>
  );
}
