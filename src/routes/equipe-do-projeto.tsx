"use client";

import { createFileRoute } from "@tanstack/react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef, useState } from "react";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import TeamCard from "@/components/team-card";
import { useQueryTeam } from "@/hooks/queries/custom-posts-queries";
import Article from "@/components/article";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import { cn } from "@/lib/utils";
import LiquidImageReveal from "@/components/liquid-image-reveal";
import SmoothScroller from "@/components/smooth-scroller";
import type { TeamItemTypes } from "@/types/components-types";

gsap.registerPlugin(ScrollTrigger);
export const Route = createFileRoute("/equipe-do-projeto")({
  head: () => ({
    meta: [
      {
        title: "Equipe do Projeto | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Informações sobre os integrantes do projeto, suas funções e seus currículos.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/equipe-do-projeto",
      },
    ],
  }),
  loader: () => ({
    crumb: "Equipe do Projeto",
  }),
  component: ProjectTeam,
});

function ProjectTeam() {
  const teamSectionRef = useRef<HTMLElement | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data } = useQueryPage("equipe-do-projeto");
  const { equipes: team } = useQueryTeam().data;
  const targetPositions = [1, 0, 2];
  const reorderedMembers: TeamItemTypes[] = [];

  for (let i = 0; i < team.nodes.length; i++) {
    const newPosition = targetPositions[i];
    reorderedMembers[newPosition] = team.nodes[i];
  }

  const handleToggleDialog = () => {
    setIsOpenModal(!isOpenModal);
  };

  useGSAP(
    () => {
      const teamSection = document.querySelector<HTMLElement>(".team");
      const teamMembers = gsap.utils.toArray<HTMLDivElement>(".team-member");
      const teamMemberCards = gsap.utils.toArray<HTMLDivElement>(".team-member-card");

      let cardPlaceholderEntrance: ScrollTrigger | null = null;
      let cardSlideInAnimation: ScrollTrigger | null = null;

      function initTeamAnimations() {
        if (window.innerWidth < 1024) {
          if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
          if (cardSlideInAnimation) cardSlideInAnimation.kill();

          teamMemberCards.forEach((member) => {
            gsap.set(member, { clearProps: "all" });
            const teamMemberInitial = member.querySelector(".team-member-initial-name h2");
            gsap.set(teamMemberInitial, { clearProps: "all" });
          });

          teamMemberCards.forEach((card) => {
            gsap.set(card, { clearProps: "all" });
          });

          return;
        }

        if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
        if (cardSlideInAnimation) cardSlideInAnimation.kill();

        cardPlaceholderEntrance = ScrollTrigger.create({
          trigger: teamSection,
          start: "top bottom",
          end: "top top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            teamMembers.forEach((member, index) => {
              const entranceDelay = 0.15;
              const entranceDuration = 0.7;
              const entranceStart = index * entranceDelay;
              const entranceEnd = entranceStart + entranceDuration;

              if (progress >= entranceStart && progress <= entranceEnd) {
                const memberEntranceProgress = (progress - entranceStart) / entranceDuration;

                const entranceY = 125 - memberEntranceProgress * 125;
                gsap.set(member, { y: `${entranceY}%` });

                const teamMemberInitial = member.querySelector(".team-member-initial-name h2");
                const initialLetterScaleDelay = 0.4;
                const initialLetterScaleProgress = Math.max(
                  0,
                  (memberEntranceProgress - initialLetterScaleDelay) / (1 - initialLetterScaleDelay),
                );

                gsap.set(teamMemberInitial, { scale: initialLetterScaleProgress });
              } else if (progress > entranceEnd) {
                gsap.set(member, { y: "0%" });
                const teamMemberInitial = member.querySelector(".team-member-initial-name h2");
                gsap.set(teamMemberInitial, { scale: 1 });
              }
            });
          },
        });

        cardSlideInAnimation = ScrollTrigger.create({
          trigger: teamSection,
          start: "top top",
          end: `+=${window.innerHeight * 3}`,
          pin: true,
          scrub: 1,
          toggleActions: "play none none reset",
          onUpdate: (self) => {
            const progress = self.progress;

            teamMemberCards.forEach((card, index) => {
              const slideInStagger = 0.075;
              const xRotationDuration = 0.4;
              const xRotationStart = index * slideInStagger;
              const xRotationEnd = xRotationStart + xRotationDuration;

              if (progress >= xRotationStart && progress <= xRotationEnd) {
                const cardProgress = (progress - xRotationStart) / xRotationDuration;

                const cardInitialX = 300 - index * 100;
                const cardTargetX = -50;
                const cardSlideInRotation = 20 - cardProgress * 20;
                const cardSlideInX = cardInitialX + cardProgress * (cardTargetX - cardInitialX);

                gsap.set(card, {
                  x: `${cardSlideInX}%`,
                  rotation: cardSlideInRotation,
                });
              } else if (progress > xRotationEnd) {
                gsap.set(card, {
                  x: "-50%",
                  rotation: 0,
                });
              }

              const cardScaleStagger = 0.12;
              const cardScaleStart = 0.4 + index * cardScaleStagger;
              const cardScaleEnd = 1;

              if (progress >= cardScaleStart && progress <= cardScaleEnd) {
                const scaleProgress = (progress - cardScaleStart) / (cardScaleEnd - cardScaleStart);
                const scaleValue = 0.75 + scaleProgress * 0.25;

                gsap.set(card, { scale: scaleValue });
              } else if (progress > cardScaleEnd) {
                gsap.set(card, { scale: 1 });
              }
            });
          },
        });
      }

      let resizeTimer: ReturnType<typeof setTimeout>;

      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          initTeamAnimations();
          ScrollTrigger.refresh();
        }, 250);
      });

      initTeamAnimations();
    },
    { scope: teamSectionRef },
  );

  return (
    <>
      <Header className="shadow-md z-20" />

      <Main className="bg-tan-100 dark:bg-dark-700 p-0!">
        <section className="bg-bone-200 dark:bg-dark-900 min-h-[calc(100svh-280px)] lg:min-h-[100svh-104px] w-full py-8 md:py-16 px-4">
          <Title
            className={cn(
              "container max-w-6xl mx-auto text-[clamp(2.75rem,4vw,4.25rem)] text-bone-700",
              "dark:text-dark-contrast-100 font-cabinet font-black max-md:leading-[0.9] pb-8 sm:pb-16",
            )}
          >
            Equipe <span className="text-bone-400 dark:text-dark-contrast-50">do Projeto</span>
          </Title>

          <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16">
            <div className="col-span-1 md:col-span-3 h-full flex items-center">
              <Article className="[&_p]:text-[clamp(1rem,5vw,1.275rem)]!" content={data.page.content} />
            </div>
            <div
              className={cn(
                "col-span-1 md:col-span-2 relative hidden md:flex justify-center items-center",
                "*:nth-[1]:-left-20 *:nth-[1]:-translate-y-1/2 *:nth-[1]:-rotate-15 *:nth-[1]:z-1",
                "*:nth-[2]:left-1/2 *:nth-[2]:-translate-1/2 *:nth-[2]:z-3",
                "*:nth-[3]:-right-20 *:nth-[3]:-translate-y-1/2 *:nth-[3]:rotate-15 *:nth-[3]:z-2",
              )}
            >
              {reorderedMembers.map((member, index) => (
                <div className="w-full flex justify-center absolute top-1/2" key={index}>
                  <figure className="rounded-2xl shadow-sm bg-bone-100 dark:bg-dark-200 h-85.5 w-63 p-4 aspect-9/6 overflow-hidden">
                    <LiquidImageReveal
                      src={member.featuredImage.node.sourceUrl}
                      height={308}
                      width={220}
                      alt={member.title}
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SmoothScroller>
          <div className="bg-tan-200 dark:bg-dark-950 w-full">
            <section
              className={cn(
                "team relative h-[250svh] lg:h-svh container mx-auto flex flex-col",
                "lg:flex-row items-center gap-8 p-4 max-md:py-16 overflow-hidden",
              )}
              ref={teamSectionRef}
            >
              {team.nodes.map((member, index) => (
                <TeamCard
                  key={index}
                  imageSrc={member.featuredImage.node.sourceUrl}
                  memberName={member.title}
                  role={member.team.role}
                  synopsis={member.content}
                  socials={member.team.socials}
                  handleToggle={handleToggleDialog}
                />
              ))}
            </section>
          </div>
        </SmoothScroller>
      </Main>
    </>
  );
}
