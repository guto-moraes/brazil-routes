import { createFileRoute } from "@tanstack/react-router";
import Intro from "@/layouts/partials/home/intro";
import AlamanaquePresentation from "@/layouts/partials/home/almanaque-presentation";
import PioneersTribute from "@/layouts/partials/home/pioneers-tribute";
import ActivityAreas from "@/layouts/partials/home/activity-areas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Página Inicial | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Página de apresentação do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/",
      },
    ],
  }),
  component: Index,
});

function Index() {

  return (
    <>
      <Intro />
      <AlamanaquePresentation />
      <PioneersTribute />
      <ActivityAreas />
    </>
  );
}
