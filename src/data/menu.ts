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
    title: "Blog do Conhecimento",
    url: "/blog-do-conhecimento/",
    transition: ["slide-left"],
  },
  {
    title: "Alamanaque Digital",
    url: "/almanaque-digital",
    transition: ["slide-right"],
  },
  {
    title: "Linha do Tempo",
    url: "/linha-do-tempo",
    transition: ["slide-left"],
  },
  {
    title: "Mapa Interativo",
    url: "/mapa-interativo",
    transition: ["slide-right"],
  },
  {
    title: "Fale Conosco",
    url: "/fale-conosco",
    transition: ["slide-left"],
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
