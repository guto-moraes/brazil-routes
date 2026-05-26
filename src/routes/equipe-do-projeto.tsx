"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQueryTeam } from "@/hooks/queries/custom-posts-queries";
import { Title } from "@/components/title";
import Main from "@/layouts/main";
import {
  TeamCard,
  TeamMemberDetails,
  TeamMemberDetailsContainer,
  TeamMemberPhoto,
  TeamMemberSocialItem,
  TeamMemberSocialList,
} from "@/components/team-cards";

export const Route = createFileRoute("/equipe-do-projeto")({
  component: ProjectTeam,
});

function ProjectTeam() {
  const { equipes } = useQueryTeam().data || {};
  const teamCardRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      const cards = gsap.utils.toArray<HTMLDivElement>(".team-card");

      mm.add("(max-width: 640px)", () => {
        cards.forEach((card) => {
          gsap.set(card, {
            y: 0,
          });
        });
      });

      cards.forEach((card, index) => {
        if (index !== 0) {
          gsap.set(card, {
            x: () => window.innerWidth + 100,
            autoAlpha: 1,
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamCardRef.current,
          start: "top top",
          end: `+=${cards.length * 250}%`,
          pin: true,
          scrub: window.innerWidth < 768 ? 1 : 2,
        },
      });

      cards.forEach((card, index) => {
        const memberPhoto = card.querySelector(".team-card-image");
        const isMobile = window.innerWidth < 768;

        const cardTimeline = gsap.timeline({});

        mm.add("(min-width: 1280px)", () => {
          cardTimeline.to(card, {
            y: "15%",
          });
        });

        if (index !== 0) {
          cardTimeline
            .to(card, {
              x: index * 3,
              duration: 2.5,
              ease: "power2.out",
              force3D: true,
            })
            .to(
              memberPhoto,
              {
                y: isMobile ? 0 : -10,
                scale: isMobile ? 1 : 1.1,
                duration: 1,
                ease: "power1.out",
              },
              "-=1",
            );
        }

        tl.add(cardTimeline, "+=0.5");
      });
    },
    { scope: teamCardRef },
  );

  return (
    <Main className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
      <Title className="max-w-300 mx-auto max-sm:mb-12">
        Equipe do <span className="text-tan-400">Projeto</span>
      </Title>
      <section className="team-card-wrapper relative h-svh lg:h-[calc(100svh-280px)] overflow-hidden" ref={teamCardRef}>
        <div className="team-card-container h-170 sm:h-125 lg:max-h-140 w-full lg:max-w-300 m-[auto_auto] absolute top-1/2 left-1/2 -translate-1/2">
          {equipes.nodes.map((member, index) => (
            <TeamCard key={index}>
              <TeamMemberPhoto imgSrc={member.featuredImage.node.sourceUrl} altText={member.title} />
              <TeamMemberDetailsContainer>
                <TeamMemberDetails name={member.title} role={member.team.role} resume={member.content} />
                <TeamMemberSocialList>
                  {member.team.socials.map((social, index) => (
                    <TeamMemberSocialItem
                      key={index}
                      socialUrl={social.socialUrl}
                      socialName={social.socialName}
                      socialAt={social.socialAt ? social.socialAt : social.socialUrl}
                      memberName={member.title}
                    />
                  ))}
                </TeamMemberSocialList>
              </TeamMemberDetailsContainer>
            </TeamCard>
          ))}
        </div>
      </section>
    </Main>
  );
}
