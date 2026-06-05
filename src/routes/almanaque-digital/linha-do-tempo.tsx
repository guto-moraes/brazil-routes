import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import TextRevealHidden from "@/components/text-reveal-hidden";
import Timeline from "@/components/timeline";

export const Route = createFileRoute("/almanaque-digital/linha-do-tempo")({
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
        href: "https://caminhosdobrasilcentral.com/almanaque-digital/linha-do-tempo",
      },
    ],
  }),
  component: TimelinePage,
});

const TimelineBoxResume = ({ period, text }: { period: string; text: string }) => (
  <div
    className={cn(
      "timeline-boxes-item bg-darkgreen-500 dark:bg-dark-900 h-auto xl:h-72 py-6 xl:py-0 flex",
      "flex-col justify-center gap-y-3 max-sm:border max-sm:border-terracotta-950 max-sm:dark:border-dark-contrast-100",
    )}
  >
    <h2
      className={cn(
        "text-5xl sm:text-[clamp(1.25rem,4.5vw,4.5rem)] text-center",
        "text-terracotta-950 dark:text-dark-200 font-black md:tracking-tighter",
      )}
    >
      {period}
    </h2>
    <p className="text-2xl text-center text-terracotta-950 dark:text-dark-200 uppercase font-semibold tracking-tighter sm:font-black">
      {text}
    </p>
  </div>
);

function TimelinePage() {
  return (
    <>
      <Header className="shadow-md" />
      <Main className="p-0 overflow-hidden">
        <section className="px-4 xl:px-0 xl:h-[calc(100vh-6.5rem)] xl:py-16 w-full flex flex-col gap-y-8 xl:gap-y-16 overflow-hidden">
          <div className="hero-title relative container mx-auto mt-10 xl:mt-0">
            <h1
              className={cn(
                "text-[clamp(2rem,6vw,7.5rem)] text-terracotta-950 dark:text-dark-contrast-100 max-sm:font-inter",
                "font-cabinet font-black uppercase leading-10 xl:leading-24 max-sm:tracking-tighter",
              )}
            >
              Desbravamento
              <br />
              do leste de
              <br />
              Mato Grosso
            </h1>
            <div className="mt-6 lg:md:mt-0 lg:md:absolute lg:md:bottom-2.5 lg:right-0 w-full max-w-80 md:hidden lg:block lg:max-w-120">
              <TextRevealHidden animateOnScroll={false} blockColor="#fbf6ea">
                <p className="resume min-[350px]:text-lg xl:text-3xl text-right text-balance">
                  Uma breve cronologia da história da colonização não indígena na região do Vale do Araguaia (1943-1967)
                </p>
              </TextRevealHidden>
            </div>
          </div>

          <div
            className={cn(
              "timeline-boxes relative xl:h-72.5 xl:min-h-72.5 container mx-auto sm:border",
              "dark:border-dark-contrast-100 grid grid-rows-3 gap-y-4 grid-cols-1 md:grid-rows-1 md:grid-cols-3",
              "md:divide-x md:divide-terracotta-950 dark:md:divide-dark-contrast-100 overflow-y-hidden mb-12 xl:mb-0",
            )}
          >
            <TimelineBoxResume period="1943-1949" text="Lançamento das bases" />
            <TimelineBoxResume period="1950-1959" text="Período de consolidação" />
            <TimelineBoxResume period="1960-1967" text="Expansão e declínio" />
          </div>
        </section>
        <Timeline />
      </Main>
    </>
  );
}
