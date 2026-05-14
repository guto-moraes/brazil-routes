"use client";

import { useQueryTeam } from "@/hooks/queries/custom-posts-queries";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Instagram from "./instagram";
import { Mail } from "lucide-react";
import { sanitizedData } from "@/lib/utils";
import type { MemberCardDetailsTypes, TeamItemTypes, TeamSocialTypes } from "@/types/components-types";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MemberDetails = ({ memberName, memberRole, memberDescription }: MemberCardDetailsTypes) => (
  <div className="flex flex-col">
    <h2 className="member-name text-4xl text-terracotta-700 font-cabinet font-bold uppercase">{memberName}</h2>
    <h3 className="text-chocolate-400 font-medium uppercase tracking-tight">{memberRole}</h3>
    <div
      className="member-curriculum text-base text-bone-800 [&_p]:text-justify [&_p]:not-last:mb-4 [&_p]:hyphens-auto mt-6"
      dangerouslySetInnerHTML={sanitizedData(memberDescription)}
    />
  </div>
);

type SocialsTypes = TeamSocialTypes & {
  memberName: string;
};

const SocialMedia = ({ socialUrl, socialName, socialAt, memberName }: SocialsTypes) => {
  const title =
    socialName[0] === "Email" ? `Entre em contato com ${memberName}` : `Siga ${memberName} no ${socialName}`;
  return (
    <li>
      <a
        href={socialUrl}
        title={title}
        className="flex gap-x-1 text-blue-retro-600 hover:text-bone-300 transition-colors duration-300"
      >
        {socialName[0] === "Email" ? <Mail className="size-5" /> : <Instagram className="size-5" />}
        {socialAt}
      </a>
    </li>
  );
};

type CardStackTypes = {
  image: string;
  title: string;
  content: string;
  role: string;
  socials: TeamSocialTypes[];
};

const CardStack = ({ image, title, content, role, socials }: CardStackTypes) => {
  return (
    <div className="team-member bg-white rounded-2xl drop-shadow-2xl absolute top-0 left-1/2 -translate-x-1/2 xl:h-2/3 xl:w-2/3">
      <div className="relative h-full w-full flex justify-center items-center gap-8 p-6">
        <figure className="member-photo flex-1 xl:h-full xl:w-full rounded-2xl overflow-hidden">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </figure>
        <div className="flex-2 h-full w-full flex flex-col justify-between items-start gap-y-4">
          <MemberDetails memberName={title} memberRole={role} memberDescription={content} />
          <ul className="text-sm flex gap-x-4">
            {socials.map((social, index) => (
              <SocialMedia
                key={index}
                socialUrl={social.socialUrl}
                socialName={social.socialName}
                socialAt={social.socialAt ? social.socialAt : social.socialUrl}
                memberName={title}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CardStackScroll = ({ children }: { children: React.ReactNode }) => {
  const cardStackRef = useRef<HTMLElement | null>(null);
  const { equipes } = useQueryTeam().data || {};

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".team-member");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardStackRef.current,
          start: "top top",
          end: `"+=${window.innerHeight}`,
          pin: true,
          scrub: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index !== 0) {
          gsap.set(card, {
            xPercent: 200,
            rotate: 30,
            duration: 0.75,
            ease: "expo.inOut",
          });
        }
      });

      cards.forEach((card, index) => {
        if (index !== 0) {
          tl.to(card, {
            xPercent: -50,
            rotate: 0,
          });
        }
      });
    },
    { scope: cardStackRef },
  );

  return (
    <>
        <section className="team-wrapper h-svh w-full flex flex-col" ref={cardStackRef}>
{children}

        <div className="team-member-container grow container mx-auto relative overflow-hidden">
      {equipes.nodes.map((member: TeamItemTypes) => (
        <CardStack
          key={member.id}
          image={member.featuredImage.node.sourceUrl}
          title={member.title}
          role={member.team.role}
          content={member.content}
          socials={member.team.socials}
        />
      ))}
        </div>
      </section>

    </>
  );
};

export default CardStackScroll;
