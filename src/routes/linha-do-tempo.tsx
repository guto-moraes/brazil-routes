import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";
import { cn } from "@/lib/utils";
import TextLoader from "@/components/text-loader";

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

const Badge = ({ text }: { text: string }) => (
  <span
    className={cn(
      "rounded-2xl border border-tan-700 text-[0.625rem] text-tan-700",
      "font-medium uppercase leading-[1.125] w-max py-1 px-2.5",
    )}
  >
    {text}
  </span>
);

const Heading2 = ({ text }: { text: string }) => (
  <h2 className="text-[clamp(2rem,5vw,3rem)] text-tan-800 font-semibold leading-[1.125]">{text}</h2>
);

const Heading3 = ({ text }: { text: string }) => (
  <h2 className="text-[clamp(1.5rem,5vw,2rem)] text-tan-800 font-semibold leading-[1.125]">{text}</h2>
);

const Figure = ({
  height,
  image,
  altImage,
  caption,
}: {
  height: number;
  image: string;
  altImage: string;
  caption: string;
}) => (
  <figure className="relative rounded-3xl h-80 w-full" style={{ height: `${height}px` }}>
    <img className="rounded-3xl h-full w-full object-cover object-top" src={image} alt={altImage} />
    <figcaption
      className={cn(
        "rounded-tr-3xl rounded-bl-3xl bg-black/60 text-[0.625rem] text-white",
        "font-medium absolute top-0 right-0 py-1 px-3.5",
      )}
    >
      {caption}
    </figcaption>
  </figure>
);

function Timeline() {
  return (
    <Main>
      <div className="h-[calc(100svh-104px)] container mx-auto px-4">
        <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
          Linha do <span className="text-tan-400">Tempo</span>
        </Title>
      </div>
      <div className="h-svh w-full relative">
        <TextLoader text="1930" />
      </div>
      <section className="h-svh w-full flex flex-col bg-tan-200">
        <div className="bg-tan-400/60 h-7 w-full flex divide-x divide-tan-400">
          <div className="text-sm text-tan-800 font-medium uppercase flex-2 flex items-center px-8">24 de Outubro</div>
          <div className="text-sm text-tan-800 font-medium uppercase flex-4 flex items-center px-8">3 de Novembro</div>
          <div className="text-sm text-tan-800 font-medium uppercase flex-2 flex items-center px-8">8 de Novembro</div>
          <div className="text-sm text-tan-800 font-medium uppercase flex-1 flex justify-center items-center px-8">
            Ano
          </div>
        </div>
        <div className="grow w-full flex divide-x divide-tan-400/40">
          <div className="flex-2 flex flex-col justify-end gap-y-8 px-8 pb-8">
            <hr className="h-px bg-tan-400/40 border-none" />
            <div className="flex flex-col gap-y-4">
              <Badge text="Golpe de 1930" />
              <Heading3 text="Washington Luís é deposto da presidência" />
            </div>
            <Figure
              height={320}
              image="/images/timeline/deposicao-washington-luis__24-10-1930.jpeg"
              altImage="Washington Luís deixa o Palácio da Guanabara após ser deposto"
              caption="Fonte: O Globo (1930)"
            />
          </div>
          <div className="flex-4 flex flex-col justify-end gap-y-8 px-8 pb-8">
            <hr className="h-px bg-tan-400/40 border-none" />
            <div className="w-full flex flex-col gap-y-1.5">
              <Badge text="Posse de Getúlio" />
              <Heading2 text="Vargas assume a presidência após liderar golpe civil-militar" />
            </div>
            <Figure
              height={480}
              image="/images/posse-getulio.webp"
              altImage="Posse de Getúlio Vargas, Novembro de 1930"
              caption="Fonte: O Globo (1930)"
            />
          </div>
          <div className="flex-2 flex flex-col justify-end gap-y-8 px-8 pb-8">
            <hr className="h-px bg-tan-400/40 border-none" />
            <div className="w-full flex flex-col gap-y-1.5">
              <Badge text="Anistia" />
              <Heading3 text="Militares das Revoltas de 1922 e 1924 são anistiados" />
            </div>
            <p className="text-lg text-tan-800text-balance hyphens-auto">
              Participantes das revoltas de 1922 e 1924 têm suas promoções reparadas Logo após a assinatura do decreto,
              ministros militares ordenam a organização, com urgência, de uma relação de todos os oficiais que, por
              terem participado dos levantes de 1922 e 1924, haviam sido prejudicados em suas promoções. Para efeito de
              reparação, a relação deve incluir também os postos que esses oficiais deveriam ocupar atualmente.
            </p>
          </div>
          <div className="flex-1 relative flex flex-col justify-end gap-y-8 px-8 pb-8">
            <h2
              className={cn(
                "text-[clamp(2rem,10vw,18rem)] text-tan-800/20 font-mono font-black leading-[1.125] -tracking-[0.085em]",
                "absolute top-28 left-1/2 -translate-x-1/2 rotate-90 will-change-transform",
              )}
            >
              1930
            </h2>
          </div>
        </div>
      </section>
    </Main>
  );
}
