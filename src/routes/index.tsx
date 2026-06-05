import { createFileRoute } from "@tanstack/react-router";
import HeroIntro from "@/layouts/partials/home/hero-intro";
import CitiesMarquee from "@/layouts/partials/home/cities-marquee";
import FlipCardScrollReveal from "@/layouts/partials/home/flip-cards-scroll";
import ActivityAreas from "@/layouts/partials/home/activity-areas";
import Press from "@/layouts/partials/home/press";

export const Route = createFileRoute("/")({
    head: () => ({
    meta: [
      {
        title: "Página Inicial | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Site do Projeto Caminhos do Brasil Central, dedicado à divulgação das história da Expedição Roncador-Xingu e da Fundação Brasil Central no leste de Mato Grosso",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroIntro />
      <CitiesMarquee />
      <FlipCardScrollReveal />
      <ActivityAreas />
      <Press />
    </>
  );
}
