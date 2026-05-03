import { createFileRoute } from "@tanstack/react-router";
import Intro from "@/layouts/partials/home/intro";
import AlamanaquePresentation from "@/layouts/partials/home/almanaque-presentation";
import ActivityAreas from "@/layouts/partials/home/activity-areas";
import FlipCardScrollReveal from "@/components/flip-card-scroll";
import CitiesMarquee from "@/components/cities-marquee";
import LogoSvg from "@/components/logo-svg";

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
      <CitiesMarquee />
      <FlipCardScrollReveal />
      <ActivityAreas />
      <section className="flex flex-col gap-y-16 py-32">
        <div className="container mx-auto flex flex-col justify-center items-center gap-y-8">
          <h2 className="text-7xl text-bone-600 font-cabinet font-black">Caminhos do Brasil Central na Imprensa</h2>
          <p className="max-w-5xl mx-auto text-2xl text-center text-bone-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ipsa quae placeat error dignissimos
            suscipit, labore impedit repellat in, esse autem sit quidem nesciunt culpa dolor corrupti ad! Optio ratione
            nihil assumenda dicta debitis veniam.{" "}
          </p>
        </div>

        <div className="container mx-auto flex justify-center items-center gap-16">
          <LogoSvg className="size-40 fill-mate-300" />
          <LogoSvg className="size-40 fill-tan-500" />
          <LogoSvg className="size-40 fill-mate-300" />
          <LogoSvg className="size-40 fill-tan-500" />
          <LogoSvg className="size-40 fill-mate-300" />
        </div>
      </section>
    </>
  );
}
