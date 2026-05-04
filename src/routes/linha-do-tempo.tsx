import { createFileRoute } from "@tanstack/react-router"
import Main from "@/layouts/main";
import Title from "@/components/title";
// import TextLoader from "@/components/text-loader";
import TimelineSlide from "@/components/timeline-slide";

export const Route = createFileRoute("/linha-do-tempo")({
  head: () => ({
    meta: [
      {
        title: "Linha do Tempo Histórica | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Linha do tempo com alguns do principais eventos ocorridos no recorte temporal do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/linha-do-tempo",
      },
    ],
  }),
  component: Timeline,
});

function Timeline() {
  return (
    <Main>
      <div className="h-[calc(100svh-104px)] container mx-auto px-4">
        <Title className="text-[clamp(3rem,4vw,4.5rem)] text-bone-700 font-cabinet font-black">
          Linha do <span className="text-bone-400">Tempo</span>
        </Title>
      </div>
      <div className="h-svh w-full relative">
        {/* <TextLoader text="1921-1930" /> */}
      </div>
      <TimelineSlide />
    </Main>
  );
}
