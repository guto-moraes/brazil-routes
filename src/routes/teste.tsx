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
  const teamContainerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray<HTMLDivElement>(".team-card-member");

      cards.forEach((card, idx) => {
        if (idx !== 0) {
          gsap.set(card, {
            xPercent: 500,
            autoAlpha: 0,
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamContainerRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 2,
        },
      });

      cards.forEach((card, index) => {
        if (index !== 0) {
          tl.to(
            card,
            {
              xPercent: 0,
              autoAlpha: 1,
              duration: 1.5,
              ease: "power2.out",
            },
            `+=${index + 1}`,
          );
        }
      });
    },
    { scope: teamContainerRef },
  );

  return (
    <Main className="mb-16 lg:pb-32 px-4" ref={teamContainerRef}>
      <Title className="max-w-6xl mx-auto">
        Equipe do <span className="text-tan-400">Projeto</span>
      </Title>

      <section className="team-card-wrapper relative overflow-hidden">
        <div className="team-card-container relative max-sm:min-h-svh md:h-100 w-96 max-w-full mx-auto md:w-6xl">
          <div
            className={cn(
              "team-card-member h-full w-96 max-w-full mx-auto md:w-6xl bg-tan-100 rounded-2xl p-4",
              "flex flex-col md:flex-row gap-6 absolute inset-0",
            )}
          >
            <figure className="team-member-photo md:flex-1 rounded-xl overflow-hidden">
              <img src={gabriel} alt="" className="h-full w-full object-cover object-top aspect-[1]" />
            </figure>
            <div className="team-member-details md:flex-2 h-full w-full flex flex-col gap-6">
              <hgroup>
                <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] text-terracotta-800 font-cabinet font-bold leading-none">
                  Luiz Gabriel de Souza Nogueira
                </h2>
                <h3 className="text-chocolate-400 font-medium mt-1">Líder do Projeto</h3>
              </hgroup>
              <ScrollArea className="h-48">
                <div className="h-full w-full [&_p]:not-last:mb-5 [&_p]:text-[clamp(0.85rem,1.25vw,1rem)]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus sint. Fugit ad nostrum
                    perferendis, in ratione suscipit cupiditate perspiciatis. Quaerat, dignissimos laboriosam. Officiis
                    repellendus odit beatae, atque eaque nemo pariatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus sint. Fugit ad nostrum
                    perferendis, in ratione suscipit cupiditate perspiciatis. Quaerat, dignissimos laboriosam. Officiis
                    repellendus odit beatae, atque eaque nemo pariatur.
                  </p>
                </div>
              </ScrollArea>
              <ul className="text-[clamp(0.725rem,1.25vw,1rem)] flex flex-col gap-2">
                <li>
                  <a
                    href=""
                    title=""
                    className="flex gap-x-1.5 items-center text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Mail className="size-4 sm:size-5" />
                    luizgabriel@caminhosdobrasilcentra.com
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    title=""
                    className="flex gap-x-1.5 items-center text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram className="size-4 sm:size-5" />
                    @luizgabriel
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={cn(
              "team-card-member h-full w-96 max-w-full mx-auto md:w-6xl bg-tan-200 rounded-2xl p-4",
              "flex flex-col md:flex-row gap-6 absolute inset-0",
            )}
          >
            <figure className="team-member-photo md:flex-1 rounded-xl overflow-hidden">
              <img src={gabriel} alt="" className="h-full w-full object-cover object-top aspect-[1]" />
            </figure>
            <div className="team-member-details md:flex-2 h-full w-full flex flex-col gap-6">
              <hgroup>
                <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] text-terracotta-800 font-cabinet font-bold leading-none">
                  Luiz Gabriel de Souza Nogueira
                </h2>
                <h3 className="text-chocolate-400 font-medium mt-1">Líder do Projeto</h3>
              </hgroup>
              <ScrollArea className="h-48">
                <div className="h-full w-full [&_p]:not-last:mb-5 [&_p]:text-[clamp(0.85rem,1.25vw,1rem)]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus sint. Fugit ad nostrum
                    perferendis, in ratione suscipit cupiditate perspiciatis. Quaerat, dignissimos laboriosam. Officiis
                    repellendus odit beatae, atque eaque nemo pariatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus sint. Fugit ad nostrum
                    perferendis, in ratione suscipit cupiditate perspiciatis. Quaerat, dignissimos laboriosam. Officiis
                    repellendus odit beatae, atque eaque nemo pariatur.
                  </p>
                </div>
              </ScrollArea>
              <ul className="text-[clamp(0.725rem,1.25vw,1rem)] flex flex-col gap-2">
                <li>
                  <a
                    href=""
                    title=""
                    className="flex gap-x-1.5 items-center text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Mail className="size-4 sm:size-5" />
                    luizgabriel@caminhosdobrasilcentra.com
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    title=""
                    className="flex gap-x-1.5 items-center text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram className="size-4 sm:size-5" />
                    @luizgabriel
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={cn(
              "team-card-member h-full w-96 max-w-full mx-auto md:w-6xl bg-tan-300 rounded-2xl p-4",
              "flex flex-col md:flex-row gap-6 absolute inset-0",
            )}
          >
            <figure className="team-member-photo md:flex-1 rounded-xl overflow-hidden">
              <img src={gabriel} alt="" className="h-full w-full object-cover object-top aspect-[1]" />
            </figure>
            <div className="team-member-details md:flex-2 h-full w-full flex flex-col gap-6">
              <hgroup>
                <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] text-terracotta-800 font-cabinet font-bold leading-none">
                  Luiz Gabriel de Souza Nogueira
                </h2>
                <h3 className="text-chocolate-400 font-medium mt-1">Líder do Projeto</h3>
              </hgroup>
              <ScrollArea className="h-48">
                <div className="h-full w-full [&_p]:not-last:mb-5 [&_p]:text-[clamp(0.85rem,1.25vw,1rem)]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus sint. Fugit ad nostrum
                    perferendis, in ratione suscipit cupiditate perspiciatis. Quaerat, dignissimos laboriosam. Officiis
                    repellendus odit beatae, atque eaque nemo pariatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, possimus sint. Fugit ad nostrum
                    perferendis, in ratione suscipit cupiditate perspiciatis. Quaerat, dignissimos laboriosam. Officiis
                    repellendus odit beatae, atque eaque nemo pariatur.
                  </p>
                </div>
              </ScrollArea>
              <ul className="text-[clamp(0.725rem,1.25vw,1rem)] flex flex-col gap-2">
                <li>
                  <a
                    href=""
                    title=""
                    className="flex gap-x-1.5 items-center text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Mail className="size-4 sm:size-5" />
                    luizgabriel@caminhosdobrasilcentra.com
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    title=""
                    className="flex gap-x-1.5 items-center text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Instagram className="size-4 sm:size-5" />
                    @luizgabriel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
}
