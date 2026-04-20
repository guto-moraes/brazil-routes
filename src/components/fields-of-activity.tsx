"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type CardItem = {
  title: string;
  description: string;
  tags: string[];
  surface: string;
  rotateFrom: number;
  rotateTo: number;
};

const CARD_ITEMS: CardItem[] = [
  {
    title: "Circulação Literária",
    description:
      "Publicização do Almanaque desbravando o sertão, conquistando o Brasil, texto que trata e analisa os desdobramentos da Expedição Roncador-Xingu e da Fundação Brasil Central no leste de Mato Grosso, entre 1943 e 1967.",
    tags: ["Almanaque", "História", "Memória"],
    surface: "#c9d2bf",
    rotateFrom: 11,
    rotateTo: -3,
  },
  {
    title: "Divulgação Histórica",
    description:
      "A formação de uma sociedade reflete uma complexidade de processo históricos. Neste sentido, ao divulgar aspectos que deram os contornos do atual Vale do Araguaia (MT), buscamos viabilizar que mais pessoas conheçam os eventos históricos que ajudaram a formar aquele lugar.",
    tags: ["Expedição Roncador-Xingu", "Fundação Brasil Central", "Vale do Araguaia"],
    surface: "#efebde",
    rotateFrom: -9,
    rotateTo: 4,
  },
  {
    title: "Pesquisa no Espaço Escolar",
    description:
      "Como orienta a Base Nacional Comum Curricular (BNCC), a pesquisa pode e deve ser usada como princípio educativo. Assim, por meio de palestras, este projeto também visa o incentivo da realização de pesquisas no ambiente afim de impulsionar novos conhecimentos.",
    tags: ["Iniciação Científica", "Desenvolvimento crítico", "Educar pela pesquisa"],
    surface: "#dbcc94",
    rotateFrom: 8,
    rotateTo: -5,
  },
  {
    title: "Memória e Patrimônio",
    description:
      "Outra esfera de atuação deste projeto é a promoção da discussão das temáticas do patrimônio cultural e da memória e, em quais sentidos, eles são importantes para a constuição do patrimônio cultural brasileiro.",
    tags: ["Valorização da Memória", "Patrimônio Cultural", "Formação Social"],
    surface: "#b3f1bd",
    rotateFrom: -12,
    rotateTo: 3,
  },
];

type CardTypes = {
  title: string;
  number: string | number;
  tags: string[];
  surface: string;
  className?: string;
  children: React.ReactNode;
};

const Card = ({ title, number, tags, surface, className, children }: CardTypes) => {
  const num = typeof number === "number" ? String(number).padStart(2, "0") : number;
  const background = surface
    ? `
      radial-gradient(ellipse 120% 95% at 14% -8%, ${surface} 0%, transparent 52%),
      linear-gradient(176deg, ${surface} 0%, ${surface} 46%, ${surface} 100%)
    `
        .replace(/\s+/g, " ")
        .trim()
    : `linear-gradient(176deg, ${surface} 0%, ${surface} 100%)`;

  return (
    <article
      className={[
        "flex min-h-112 w-full min-w-0 max-w-[min(42rem,calc(100vw-3rem))] flex-col justify-between gap-12 overflow-hidden rounded-2xl p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:min-h-144 md:gap-14 md:p-12 lg:min-h-152 lg:p-14",
        className ?? "",
      ].join(" ")}
      style={{ background }}
    >
      <div className="max-w-[min(100%,26rem)]">
        <h2 className="text-[clamp(1.5rem,3.75vw,2.25rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] text-zinc-900">
          {title}
        </h2>
        <div className="mt-6 font-sans font-medium leading-snug text-base text-zinc-600 md:text-[1.2rem]">
          {children}
        </div>
      </div>

      <div className="flex items-end justify-between gap-8">
        {tags && tags.length > 0 ? (
          <ul className="flex flex-col gap-1 font-sans text-lg font-bold uppercase tracking-[-0.02em] text-zinc-800 md:text-2xl">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : (
          <span />
        )}

        <span className="shrink-0 font-sans text-[clamp(3.25rem,13vw,6rem)] font-extrabold leading-none tracking-[-0.04em] text-black/20 tabular-nums">
          {num}
        </span>
      </div>
    </article>
  );
};

const Intro = () => {
  return (
    <section className="intro-conver relative bg-tan-400 h-full w-full flex flex-col justify-center items-center gap-y-1">
      <p className="text-xl text-tan-600 font-medium uppercase mb-1.5">Projeto Caminhos do Brasil Central</p>
      <h2
        className={cn(
          "text-[clamp(2.5rem,10vw,5.5rem)] text-chocolate-900 font-extrabold",
          "leading-[0.85] -tracking-[0.02em] uppercase w-220 text-center",
        )}
      >
        Áreas de <span className="-tracking-widest">Atuação</span>
      </h2>
      <p className="text-2xl text-tan-800 text-center text-balance font-medium max-w-2/3 mx-auto mt-6">
        Evidentemente, como o tema deste projeto é muito amplo, repleto de complexidades e múltiplos fatores, não há como abranger
        todas as possibilidades de atuação que ele possibilita. Ainda assim, procuramos, o máximo possível, dar pistas e
        caminhos de algumas áreas a partir das quais o público-alvo poderá se aprofundar, quando desejar.
      </p>
    </section>
  );
};

const FieldsOfActivity = () => {
  const introContainerRef = useRef<HTMLDivElement>(null);
  const SCROLL_VH = 80;
  const STAGGER = 0.55;

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const root = introContainerRef.current;
      if (!root) return;

      const spacer = root.querySelector<HTMLElement>("[data-scroll-spacer]");
      const deck = root.querySelector<HTMLElement>("[data-card-deck]");
      if (!spacer || !deck) return;

      const cards = gsap.utils.toArray<HTMLElement>(".card", deck);
      if (!cards.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introContainerRef.current,
          start: "top top",
          end: `${SCROLL_VH * CARD_ITEMS.length}%`,
          scrub: 1.2,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        const item = CARD_ITEMS[i]!;
        gsap.set(card, {
          yPercent: 350 + i * 50,
          rotate: item.rotateFrom,
          opacity: 1,
          scale: 1.25,
        });
        tl.to(
          card,
          {
            yPercent: -50,
            rotate: item.rotateTo,
            scale: 0.9,
            duration: 2,
            ease: "none",
          },
          i * STAGGER,
        );
      });
    },
    { scope: introContainerRef },
  );

  return (
    <>
      <div className="intro-container relative h-svh w-full bg-[#12100e] overflow-hidden" ref={introContainerRef}>
        <div data-scroll-spacer className="w-full" style={{ height: `${SCROLL_VH}vh` }} />

        <div className="absolute inset-0 z-0">
          <div className="h-dvh w-full">
            <Intro />
          </div>
        </div>

        <section data-card-deck className="pointer-events-none fixed inset-0 z-10">
          {CARD_ITEMS.map((item, index) => (
            <Card
              key={item.title}
              number={index + 1}
              title={item.title}
              tags={item.tags}
              surface={item.surface}
              className="card pointer-events-auto fixed top-1/2 left-1/2 -translate-1/2 opacity-0"
            >
              {item.description}
            </Card>
          ))}
        </section>
      </div>
    </>
  );
};

export default FieldsOfActivity;
