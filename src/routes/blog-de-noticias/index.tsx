import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/blog-de-noticias/")({
  head: () => ({
    meta: [
      {
        title: "Blog de Notícias | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Noticias das atividades realizadas pelo Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/blog-de-noticias/",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main className="bg-tan-100 w-full xl:py-24">
      <Title text="Blog de Notícias do Projeto" />
    </Main>
  );
}
