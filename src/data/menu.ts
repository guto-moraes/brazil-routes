import { type LinkTypes } from "@/types/data-types";

const socials: LinkTypes[] = [
  {
    title: "Instagram",
    url: "https://instagram.com/caminhosdobrasilcentral",
    transition: ['slide-right']
  },
  {
    title: "Facebook",
    url: "https://facebook.com/caminhosdobrasilcentral",
    transition: ['slide-right']
  },
  {
    title: "YouTube",
    url: "https://youtube.com/caminhosdobrasilcentral",
    transition: ['slide-right']
  },
];

const legals: LinkTypes[] = [
  {
    title: "Accessibilidade",
    url: "https://caminhosdobrasilcentral.com/acessibilidade",
    transition: ['slide-left']
  },
  {
    title: "Cookies",
    url: "https://caminhosdobrasilcentral.com/cookies",
    transition: ['slide-right']
  },
  {
    title: "Política de Privacidade",
    url: "https://caminhosdobrasilcentral.com/politica-de-privacidade",
    transition: ['slide-left']
  },
];

const primaryLinks: LinkTypes[] = [
  {
    title: "Página Inicial",
    url: "/",
    transition: ['slide-left']
  },
  {
    title: "Sobre o Projeto",
    url: "/sobre-o-projeto",
    transition: ['slide-right']
  },
  {
    title: "Alamanaque Digital",
    url: "/almanaque-digital",
    transition: ['slide-left']
  },
  {
    title: "Linha do Tempo",
    url: "/linha-do-tempo",
    transition: ['slide-right']
  },
  {
    title: "Mapa Interativo",
    url: "/mapa-interativo",
    transition: ['slide-left']
  },
  {
    title: "Fale Conosco",
    url: "/fale-conosco",
    transition: ['slide-right']
  },
];

const secondaryLinks: LinkTypes[] = [
  {
    title: "Equipe do Projeto",
    url: "/equipe-do-projeto",
    transition: ['slide-left']
  },
  {
    title: "Apoio Financeiro",
    url: "/apoio-financeiro",
    transition: ['slide-right']
  },
  {
    title: "Créditos",
    url: "/creditos",
    transition: ['slide-left']
  },
  {
    title: "Referências",
    url: "/referencias",
    transition: ['slide-right']
  },
];

export { socials, legals, primaryLinks, secondaryLinks };
