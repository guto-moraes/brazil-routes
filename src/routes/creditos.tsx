import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/creditos")({
  head: () => ({
    meta: [
      {
        title: "Créditos | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Créditos da atuação dos integrantes do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/creditos",
      },
    ],
  }),
  component: Credits,
});

const CreditItem = ({ text }: { text: string }) => (
  <div className="h-20 relative overflow-hidden flex justify-start items-center group px-8">
    <div
      className={cn(
        "h-20 w-full absolute top-0 left-0 -translate-y-full bg-tan-950 group-hover:translate-y-0",
        "transition-tranform duration-500 will-change-transform z-8",
      )}
    ></div>
    <h2 className="text-tan-900 text-lg group-hover:text-tan-100 uppercase z-10 transition-colors duration-500">
      {text}
    </h2>
  </div>
);

function Credits() {
  return (
    <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Cré<span className="text-tan-400">ditos</span>
      </Title>

      <section>
        <div role="list" className="flex flex-col border-y border-dashed border-tan-300 divide-y divide-dashed divide-tan-300">
          <CreditItem text="APMPO – Associação dos Pioneiros da “Marcha Para o Oeste”. Nova Xavantina - MT" />
          <CreditItem text="APMPO – Associação dos Pioneiros da “Marcha Para o Oeste”. Nova Xavantina - MT" />
          <CreditItem text="APMPO – Associação dos Pioneiros da “Marcha Para o Oeste”. Nova Xavantina - MT" />
        </div>
      </section>
    </Main>
  );
}
