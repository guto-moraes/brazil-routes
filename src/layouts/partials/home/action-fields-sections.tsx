"use client";

import { useQueryFieldsActivityOfProject } from "@/queries/theme-settings";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ActionSection, Card } from "@/components/actions-fields-parts";
import type { FieldsActivity } from "@/types/theme-graphql";

const ActionFieldsSection = () => {
  const introContainerRef = useRef<HTMLDivElement>(null);
  const SCROLL_VH = 80;
  const STAGGER = 0.55;

  const { data, isLoading, isError, error } = useQueryFieldsActivityOfProject();
  const {
    fieldsActivities: sections,
    projectName: project,
    fieldsActivityTitle: title,
    fieldsActivityPresentation: presentation,
  } = data?.project.theming || {};

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
          end: `${SCROLL_VH * sections!.length}%`,
          scrub: 1.2,
          pin: true,
        },
      });

      if(sections){
        cards.forEach((card, i) => {
        const item = sections[i];
        gsap.set(card, {
          yPercent: 350 + i * 50,
          rotate: item.fieldActivityRotateFrom,
          opacity: 1,
          scale: 1.25,
        });
        tl.to(
          card,
          {
            yPercent: -50,
            rotate: item.fielActivityRotateTo,
            scale: 0.9,
            duration: 2,
            ease: "none",
          },
          i * STAGGER,
        );
      });
      }
    },
    { scope: introContainerRef },
  );

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  if (isError) {
    return (
      <h1>
        Ocorreu o seguinte erro: <strong>{error.message}</strong>
      </h1>
    );
  }

  return (
    <div className="intro-container bg-amber-200 relative h-svh w-full overflow-hidden" ref={introContainerRef}>
      <div data-scroll-spacer className="w-full" style={{ height: `${SCROLL_VH}vh` }} />

      <div className="absolute inset-0 z-0">
        <div className="h-svh w-full">
          {project && title && presentation && <ActionSection project={project} title={title} description={presentation} />}
        </div>
      </div>

      <section data-card-deck className="pointer-events-none fixed inset-0 z-10">
        {sections &&
          sections.map((card: FieldsActivity, index: number) => (
            <Card
              key={index}
              color={card.fieldActivityColor}
              title={card.fieldActivity}
              description={card.fieldActivityDescription}
              tags={card.fieldActivityTags}
              number={index + 1}
              className="card pointer-events-auto fixed top-1/2 left-1/2 -translate-1/2 opacity-0"
            />
          ))}
      </section>
    </div>
  );
};

export default ActionFieldsSection;
