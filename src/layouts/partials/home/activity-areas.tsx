"use client";

import { cn } from "@/lib/utils";
import type { FieldActivityTypes, FieldsActivityCardItem } from "@/types/theme-types";
import { useQueryFieldsActivityOfProject } from "@/hooks/queries/theme-queries";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brush from "@/assets/images/brush.webp";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ color, title, description, tags, number, className }: FieldsActivityCardItem) => {
  const splitTags = tags.split(",");
  const num = typeof number === "number" ? String(number).padStart(2, "0") : number;
  const background = color
    ? `
      radial-gradient(ellipse 120% 95% at 14% -8%, ${color} 0%, transparent 52%),
      linear-gradient(176deg, ${color} 0%, ${color} 46%, ${color} 100%)
    `
        .replace(/\s+/g, " ")
        .trim()
    : `linear-gradient(176deg, ${color} 0%, ${color} 100%)`;

  return (
    <article
      className={cn(
        "activity-card rounded-2xl h-120 w-120 absolute top-1/2 left-1/2",
        "-translate-1/2 py-8 px-10 flex flex-col justify-between items-start",
        className,
      )}
      style={{ background }}
    >
      <div className="text-tan-800 flex flex-col justify-items-start gap-y-10">
        <h2 className="text-[clamp(1.5rem,3.75vw,2.25rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em]">
          {title}
        </h2>
        <p className="text-base md:text-[1.2rem font-medium leading-snug]">{description}</p>
      </div>
      <ul className="text-lg md:text-xl text-tan-800 font-bold uppercase tracking-[-0.02em]">
        {splitTags && splitTags.map((tag: string) => <li key={tag}>{tag}</li>)}
      </ul>
      <span
        className={cn(
          "text-[clamp(2.5rem,8vw,5rem)] text-tan-800/20 font-extrabold leading-none",
          "tracking-[-0.04em] tabular-nums absolute bottom-4 right-8",
        )}
      >
        {num}
      </span>
    </article>
  );
};

const ActivityAreas = () => {
  const activitiesCardsRef = useRef<HTMLElement | null>(null);
  const { data, isLoading } = useQueryFieldsActivityOfProject();
  const {
    projectName: project,
    fieldsActivityTitle: title,
    fieldsActivityPresentation: presentation,
    fieldsActivities: activities,
  } = data?.project.theming || {};

  useGSAP(
    () => {
      if (!isLoading && activities) {
        const container = activitiesCardsRef.current;
        if (!container) return;

        const cardsContainer = container.querySelector<HTMLDivElement>(".activities-cards");
        if (!cardsContainer) return;

        const cards = gsap.utils.toArray<HTMLElement>(".activity-card");
        if (!cards.length) return;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: activitiesCardsRef.current,
            start: "top top",
            end: `${(window.innerHeight * activities.length) / activities.length}%`,
            pin: true,
            scrub: 1,
          },
        });

        cards.forEach((card, i) => {
          const cardItem = activities[i];
          gsap.set(card, {
            yPercent: 100 + 1 * 50,
            opacity: 1,
            scale: 1.25,
            rotate: cardItem.fieldActivityRotateFrom,
          });
          tl.to(card, {
            yPercent: -50,
            scale: 0.9,
            rotate: cardItem.fielActivityRotateTo,
            duration: 0.5,
          });
        });
      }
    },
    { scope: activitiesCardsRef, dependencies: [isLoading] },
  );

  return (
    <>
      <section
        className="activities-container relative bg-tan-300/50 h-svh w-full overflow-hidden"
        ref={activitiesCardsRef}
      >
        {project && title && presentation && (
          <div className="activities-heading h-full w-full flex flex-col justify-center items-center gap-y-8">
            <hgroup className="flex flex-col gap-y-1 text-center">
              <h3 className="text-xl text-bone-600 uppercase">{project}</h3>
              <h2 className="text-8xl text-bone-600 font-cabinet font-black">{title}</h2>
            </hgroup>
            <p className="text-2xl text-bone-600 text-center text-balance font-medium w-1/2">{presentation}</p>
            <img className="absolute top-0 left-0 -z-2 opacity-25" src={brush} alt="" />
          </div>
        )}

        <div className={cn("activities-cards fixed inset-0 overflow-hidden flex flex-col")}>
          {activities &&
            activities.map((activity: FieldActivityTypes, index: number) => (
              <Card
                key={index}
                color={activity.fieldActivityColor}
                title={activity.fieldActivity}
                description={activity.fieldActivityDescription}
                tags={activity.fieldActivityTags}
                number={index + 1}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default ActivityAreas;