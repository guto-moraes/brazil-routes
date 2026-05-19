import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import gabriel from "@/assets/images/luiz-gabriel.webp";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Instagram from "@/components/instagram";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Route = createFileRoute("/teste")({
  component: RouteComponent,
});

function RouteComponent() { 
  const teamContainerRef = useRef<HTMLElement | null >(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLDivElement>(".member-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: teamContainerRef.current,
        start: "top top",
        end: `"+=${window.innerHeight * cards.length}px`,
        pin: true,
        scrub: 1,
      }
    });

      cards.forEach((card, index) => {
        if (index !== 0) {
          gsap.set(card, {
            xPercent: 250,
            rotate: 30,
            duration: 1,
            ease: "expo.inOut",
          });
        }
      });

      cards.forEach((card, index) => {
        if (index !== 0) {
          tl.to(card, {
            xPercent: 50,
            rotate: 0,
          });
        }
      });

  }, { scope: teamContainerRef})

  return (
    <Main className="h-full w-svw px-4 pb-8 flex flex-col">
      <Title>
        Equipe do <span className="text-tan-400">Projeto</span>
      </Title>
      <section className="relative min-h-svh h-full overflow-hidden" ref={teamContainerRef}>
        <div className="member-card flex flex-col gap-y-4 min-h-120 bg-tan-100 rounded-2xl drop-shadow-xl p-4 absolute top-0 left-1/2 -translate-x-1/2">
          <figure className="rounded-xl h-48 w-full overflow-hidden">
            <img src={gabriel} alt="Luiz Gabriel" />
          </figure>
          <ScrollArea className="h-72">
            <div className="member-curriculum text-base text-bone-800 [&_p]:text-justify [&_p]:not-last:mb-4 [&_p]:hyphens-auto flex flex-col gap-y-4">
              <hgroup>
                <h2
                  className={cn(
                    "member-name text-[clamp(1.5rem,5vw,2.25rem)] text-terracotta-700 font-cabinet",
                    "font-bold uppercase max-md:leading-none",
                  )}
                >
                  Luiz Gabriel de Souza Nogueira
                </h2>
                <h3 className="text-chocolate-400 text-sm sm:text-base font-medium uppercase tracking-tight mt-2">
                  Líder do Projeto
                </h3>
              </hgroup>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus officiis voluptatum eligendi
                eos voluptatem. Voluptatibus ea fugit excepturi voluptatum rem labore voluptate natus ipsa cupiditate
                asperiores. Libero sed veniam perspiciatis, voluptate praesentium error distinctio ipsam facilis
                voluptatibus, id nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus officiis voluptatum eligendi
                eos voluptatem. Voluptatibus ea fugit excepturi voluptatum rem labore voluptate natus ipsa cupiditate
                asperiores. Libero sed veniam perspiciatis, voluptate praesentium error distinctio ipsam facilis
                voluptatibus, id nisi.
              </p>
              <ul className="flex flex-col md:flex-row gap-2 sm:gap-4">
                <li>
                  <a
                    href="/"
                    title=""
                    className="flex gap-x-1 text-[clamp(0.725rem,2.5vw,1.15rem)] text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                  >
                    <Mail className="size-4 sm:size-8 md:size-10" />
                    luiz@caminhosdobrasilcentral.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    title=""
                    className="flex gap-x-1 text-[clamp(0.725rem,2.5vw,1.15rem)] text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                  >
                    <Instagram className="size-4 sm:size-8 md:size-10" />
                    @luizgrabriel
                  </a>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>

        <div className="member-card flex flex-col gap-y-4 min-h-120 bg-tan-300 rounded-2xl drop-shadow-xl p-4 absolute top-0 left-1/2 -translate-x-1/2">
          <figure className="rounded-xl h-48 w-full overflow-hidden">
            <img src={gabriel} alt="Luiz Gabriel" />
          </figure>
          <ScrollArea className="h-72">
            <div className="member-curriculum text-base text-bone-800 [&_p]:text-justify [&_p]:not-last:mb-4 [&_p]:hyphens-auto flex flex-col gap-y-4">
              <hgroup>
                <h2
                  className={cn(
                    "member-name text-[clamp(1.5rem,5vw,2.25rem)] text-terracotta-700 font-cabinet",
                    "font-bold uppercase max-md:leading-none",
                  )}
                >
                  Luiz Gabriel de Souza Nogueira
                </h2>
                <h3 className="text-chocolate-400 text-sm sm:text-base font-medium uppercase tracking-tight mt-2">
                  Líder do Projeto
                </h3>
              </hgroup>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus officiis voluptatum eligendi
                eos voluptatem. Voluptatibus ea fugit excepturi voluptatum rem labore voluptate natus ipsa cupiditate
                asperiores. Libero sed veniam perspiciatis, voluptate praesentium error distinctio ipsam facilis
                voluptatibus, id nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus officiis voluptatum eligendi
                eos voluptatem. Voluptatibus ea fugit excepturi voluptatum rem labore voluptate natus ipsa cupiditate
                asperiores. Libero sed veniam perspiciatis, voluptate praesentium error distinctio ipsam facilis
                voluptatibus, id nisi.
              </p>
              <ul className="flex flex-col md:flex-row gap-2 sm:gap-4">
                <li>
                  <a
                    href="/"
                    title=""
                    className="flex gap-x-1 text-[clamp(0.725rem,2.5vw,1.15rem)] text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                  >
                    <Mail className="size-4 sm:size-8 md:size-10" />
                    luiz@caminhosdobrasilcentral.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    title=""
                    className="flex gap-x-1 text-[clamp(0.725rem,2.5vw,1.15rem)] text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                  >
                    <Instagram className="size-4 sm:size-8 md:size-10" />
                    @luizgrabriel
                  </a>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>

        <div className="member-card flex flex-col gap-y-4 min-h-120 bg-tan-400 rounded-2xl drop-shadow-xl p-4 absolute top-0 left-1/2 -translate-x-1/2">
          <figure className="rounded-xl h-48 w-full overflow-hidden">
            <img src={gabriel} alt="Luiz Gabriel" />
          </figure>
          <ScrollArea className="h-72">
            <div className="member-curriculum text-base text-bone-800 [&_p]:text-justify [&_p]:not-last:mb-4 [&_p]:hyphens-auto flex flex-col gap-y-4">
              <hgroup>
                <h2
                  className={cn(
                    "member-name text-[clamp(1.5rem,5vw,2.25rem)] text-terracotta-700 font-cabinet",
                    "font-bold uppercase max-md:leading-none",
                  )}
                >
                  Luiz Gabriel de Souza Nogueira
                </h2>
                <h3 className="text-chocolate-400 text-sm sm:text-base font-medium uppercase tracking-tight mt-2">
                  Líder do Projeto
                </h3>
              </hgroup>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus officiis voluptatum eligendi
                eos voluptatem. Voluptatibus ea fugit excepturi voluptatum rem labore voluptate natus ipsa cupiditate
                asperiores. Libero sed veniam perspiciatis, voluptate praesentium error distinctio ipsam facilis
                voluptatibus, id nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus officiis voluptatum eligendi
                eos voluptatem. Voluptatibus ea fugit excepturi voluptatum rem labore voluptate natus ipsa cupiditate
                asperiores. Libero sed veniam perspiciatis, voluptate praesentium error distinctio ipsam facilis
                voluptatibus, id nisi.
              </p>
              <ul className="flex flex-col md:flex-row gap-2 sm:gap-4">
                <li>
                  <a
                    href="/"
                    title=""
                    className="flex gap-x-1 text-[clamp(0.725rem,2.5vw,1.15rem)] text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                  >
                    <Mail className="size-4 sm:size-8 md:size-10" />
                    luiz@caminhosdobrasilcentral.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    title=""
                    className="flex gap-x-1 text-[clamp(0.725rem,2.5vw,1.15rem)] text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                  >
                    <Instagram className="size-4 sm:size-8 md:size-10" />
                    @luizgrabriel
                  </a>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </section>
    </Main>
  );
}
