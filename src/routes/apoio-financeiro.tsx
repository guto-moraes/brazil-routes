import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/apoio-financeiro")({
  head: () => ({
    meta: [
      {
        title: "Apoio Financeiro | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Instituições e fundos de apoio que viabilizaram a realização do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/apoio-financeiro",
      },
    ],
  }),
  component: FinancialSupport,
});

function FinancialSupport() {
  return (
    <Main className="container mx-auto">
      <Title text="Apoio Financeiro" />
    </Main>
  );
}
