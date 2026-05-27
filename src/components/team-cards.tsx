import { Mail } from "lucide-react";
import Instagram from "./instagram";
import type { MemberCardDetailsTypes, SocialsAndNameTypes } from "@/types/components-types";
import { cn, sanitizedData } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

const TeamCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "team-card h-full sm:max-h-140 w-full lg:max-w-300 m-[auto_auto] absolute inset-0 flex flex-col sm:flex-row items-center",
        "gap-6 lg:gap-12 p-4 lg:p-8 xl:p-12.5 rounded-[12px] will-change-transform bg-tan-100 shadow-lg shadow-black/7.5",
      )}
    >
      {children}
    </div>
  );
};

const TeamMemberPhoto = ({ altText, imgSrc }: { altText: string; imgSrc: string }) => {
  return (
    <figure
      className={cn(
        "team-card-image min-h-64 w-full sm:max-w-72 sm:h-[90%] lg:h-full lg:w-[70%] xl:max-w-112.5",
        "aspect-[1] rounded-[24px] overflow-hidden",
      )}
    >
      <img className="h-full w-full object-cover object-top pointer-events-none" src={imgSrc} alt={altText} />
    </figure>
  );
};

const TeamMemberDetailsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="team-card-details flex-1 flex flex-col justify-center gap-y-6 h-90 sm:h-full">{children}</div>;
};

const TeamMemberDetails = ({ name, role, resume }: MemberCardDetailsTypes) => {
  return (
    <>
      <hgroup>
        <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] text-terracotta-700 font-cabinet font-bold tracking-tighter leading-none">
          {name}
        </h2>
        <h3 className="text-[clamp(0.8rem,3vw,1.25rem)] text-chocolate-500 font-semibold max-[400px]:mt-1">{role}</h3>
      </hgroup>
      <ScrollArea className="rounded-lg bg-tan-50/35 shadow-lg h-64">
        <div
          className="[&_p]:not-last:mb-6 [&_p]:text-[clamp(0.75rem,1.5vw,1rem)] [&_p]:text-tan-700 lg:[&_p]:leading-6 max-w-[90%] p-3"
          dangerouslySetInnerHTML={sanitizedData(resume)}
        />
      </ScrollArea>
    </>
  );
};

const TeamMemberSocialList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="text-[clamp(0.725rem,1.25vw,1rem)] flex flex-col gap-2">{children}</ul>;
};

const TeamMemberSocialItem = ({ socialUrl, socialName, socialAt, memberName }: SocialsAndNameTypes) => {
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

export {
  TeamCard,
  TeamMemberDetails,
  TeamMemberDetailsContainer,
  TeamMemberPhoto,
  TeamMemberSocialItem,
  TeamMemberSocialList,
};
