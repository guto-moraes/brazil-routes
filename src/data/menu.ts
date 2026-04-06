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
    title: "Fale Conosco",
    url: "/fale-conosco",
    transition: ['slide-right']
  },
];

const secondaryLinks: LinkTypes[] = [
  {
    title: "Apoio Financeiro",
    url: "https://caminhosdobrasilcentral.com/apoio-financeiro",
    transition: ['slide-left']
  },
  {
    title: "Créditos",
    url: "/creditos",
    transition: ['slide-right']
  },
  {
    title: "Referências",
    url: "https://caminhosdobrasilcentral.com/referencias",
    transition: ['slide-left']
  },
];

export { socials, legals, primaryLinks, secondaryLinks };
