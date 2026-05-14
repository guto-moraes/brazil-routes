import { type LinkTypes } from "@/types/data-types";

const socials: LinkTypes[] = [
  {
    title: "Instagram",
    url: "https://instagram.com/caminhosdobrasilcentral",
    transition: ["slide-right"],
  },
];

const legals: LinkTypes[] = [
  {
    title: "Accessibilidade",
    url: "/acessibilidade",
    transition: ["slide-left"],
  },
  {
    title: "Política de Privacidade",
    url: "/politica-de-privacidade",
    transition: ["slide-left"],
  },
];

const primaryLinks: LinkTypes[] = [
  {
    title: "Página Inicial",
    url: "/",
    transition: ["slide-left"],
  },
  {
    title: "Sobre o Projeto",
    url: "/sobre-o-projeto",
    transition: ["slide-right"],
  },
  {
    title: "Agenda do Projeto",
    url: "/agenda",
    transition: ["slide-left"],
  },
  {
    title: "Blog do Conhecimento",
    url: "/blog-do-conhecimento/",
    transition: ["slide-right"],
  },
  {
    title: "Alamanaque Digital",
    url: "/almanaque-digital",
    transition: ["slide-left"],
  },
  {
    title: "Linha do Tempo",
    url: "/almanaque-digital/linha-do-tempo",
    transition: ["slide-right"],
  },
  {
    title: "Mapa Interativo",
    url: "/almanaque-digital/mapa-interativo",
    transition: ["slide-left"],
  },
  {
    title: "Fale Conosco",
    url: "/fale-conosco",
    transition: ["slide-right"],
  },
];

const secondaryLinks: LinkTypes[] = [
  {
    title: "Equipe do Projeto",
    url: "/equipe-do-projeto",
    transition: ["slide-left"],
  },
  {
    title: "Apoio Financeiro",
    url: "/apoio-financeiro",
    transition: ["slide-right"],
  },
  {
    title: "Créditos",
    url: "/creditos",
    transition: ["slide-left"],
  },
  {
    title: "Glossário",
    url: "/almanaque-digital/glossario",
    transition: ["slide-left"],
  },
  {
    title: "Referências",
    url: "/referencias",
    transition: ["slide-right"],
  },
];

export { socials, legals, primaryLinks, secondaryLinks };
