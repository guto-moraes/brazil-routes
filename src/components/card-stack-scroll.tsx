"use client";

import { useQueryTeam } from "@/hooks/queries/custom-posts-queries";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Instagram from "./instagram";
import { Mail } from "lucide-react";
import { cn, sanitizedData } from "@/lib/utils";
import type {
  CardStackTypes,
  MemberCardDetailsTypes,
  SocialsAndNameTypes,
  TeamItemTypes,
} from "@/types/components-types";
import { ScrollArea } from "./ui/scroll-area";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MemberDetails = ({ memberName, memberRole, memberDescription }: MemberCardDetailsTypes) => (
  <>
    <hgroup>
      <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] text-terracotta-800 font-cabinet font-bold leading-none">
        {memberName}
      </h2>
      <h3 className="text-chocolate-400 font-medium mt-1">{memberRole}</h3>
    </hgroup>
    <ScrollArea className="h-48">
      <div
        className="h-full w-full [&_p]:not-last:mb-5 [&_p]:text-[clamp(0.85rem,1.25vw,1rem)] [&_p]:hyphens-auto"
        dangerouslySetInnerHTML={sanitizedData(memberDescription)}
      />
    </ScrollArea>
  </>
);

const SocialMedia = ({ socialUrl, socialName, socialAt, memberName }: SocialsAndNameTypes) => {
  const title =
    socialName[0] === "Email" ? `Entre em contato com ${memberName}` : `Siga ${memberName} no ${socialName}`;
  return (
    <li>
      <a
        href={socialUrl}
        title={title}
        className="flex gap-x-1.5 items-center text-terracotta-700 hover:text-bone-300 transition-colors duration-300"
        rel="noopener noreferrer"
        target="_blank"
      >
        {socialName[0] === "Email" ? <Mail className="size-4 sm:size-5" /> : <Instagram className="size-4 sm:size-5" />}
        {socialAt}
      </a>
    </li>
  );
};

const CardStack = ({ image, name, description, role, socials }: CardStackTypes) => {
  return (
    <div
      className={cn(
        "team-card-member h-full w-96 max-w-full mx-auto md:w-6xl bg-tan-100 rounded-2xl p-4",
        "flex flex-col sm:flex-row gap-6 sm:absolute sm:inset-0",
      )}
    >
      <figure className="team-member-photo min-h-64 md:flex-1 rounded-xl overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover object-top aspect-[1]" />
      </figure>
      <div className="team-member-details md:flex-2 h-full w-full flex flex-col gap-6">
        <MemberDetails memberName={name} memberRole={role} memberDescription={description} />
        <ul className="text-[clamp(0.725rem,1.25vw,1rem)] flex flex-col gap-2">
          {socials.map((social, index) => (
            <SocialMedia
              key={index}
              socialUrl={social.socialUrl}
              socialName={social.socialName}
              socialAt={social.socialAt ? social.socialAt : social.socialUrl}
              memberName={name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const CardStackScroll = () => {
  const { equipes } = useQueryTeam().data || {};
  const teamContainerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = gsap.utils.toArray<HTMLDivElement>(".team-card-member");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () => {
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
            start: "top 30%",
            end: `+=${teamContainerRef!.current!.offsetWidth}`,
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
                duration: 1,
                stagger: 0.5,
                ease: "power2.out",
              },
              `+=${index + 1}`,
            );
          }
        });
      });
    },
    { scope: teamContainerRef },
  );

  return (
    <>
      <section className="team-card-wrapper relative overflow-hidden" ref={teamContainerRef}>
        <div
          className={cn(
            "team-card-container relative max-sm:min-h-svh md:h-100 w-96 max-w-full mx-auto md:w-6xl",
            "max-sm:flex max-sm:flex-col max-sm:gap-y-6",
          )}
        >
          {equipes.nodes.map((member: TeamItemTypes) => (
            <CardStack
              key={member.id}
              image={member.featuredImage.node.sourceUrl}
              name={member.title}
              role={member.team.role}
              description={member.content}
              socials={member.team.socials}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CardStackScroll;
