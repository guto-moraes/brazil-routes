import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useQueryFieldsActivityOfProject } from "@/queries/theme-settings";
import type { FieldsActivity } from "@/types/theme-graphql";
import { ActionSection, Card } from "@/components/actions-fields-parts";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/sobre-o-projeto")({
  component: About,
});

function About() {
  const actionsContainerRef = useRef<HTMLDivElement | null>(null);
  const STAGGER = 0.55;

  const { data } = useQueryFieldsActivityOfProject();
  const {
    fieldsActivities: sections,
    projectName: project,
    fieldsActivityTitle: title,
    fieldsActivityPresentation: presentation,
  } = data?.project.theming || {};

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".cards-container .card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: actionsContainerRef.current,
        start: "top top",
        end: `+=${8 * window.innerHeight}`,
        pin: true,
        scrub: 1,
        markers: true,
      },
    });

    cards.forEach((card, i) => {
      tl.fromTo(
        card,
        {
            yPercent: 350 + i * 50,
        },
        {
          yPercent: -50,
          duration: 2,
        },
        STAGGER * i,
      );
    });

    ScrollTrigger.refresh();
  });

  return (
    <>
      <Main className="container mx-auto">
        <Title text="Sobre o Projeto" />
      </Main>
      <div
        className="actions-card-container relative bg-tan-100 h-svh w-full overflow-hidden"
        ref={actionsContainerRef}
      >
        {/* <div className="w-full" style={{ height: `${SCROLL_VH}vh` }}></div> */}

        <div className="h-svh w-full">
          {project && title && presentation && (
            <ActionSection project={project} title={title} description={presentation} />
          )}
        </div>

        {/* <section className="pointer-events-none absolute inset-0 overflow-hidden">
          {sections &&
            sections.map((card: FieldsActivity, index: number) => { //Math.floor(Math.random() * (15 - (-15) + 1)) + (-15)
              return(
                <Card
                  key={index}
                  color={card.fieldActivityColor}
                  title={card.fieldActivity}
                  description={card.fieldActivityDescription}
                  tags={card.fieldActivityTags}
                  number={index + 1}
                  className={cn("card pointer-events-auto absolute top-1/2 left-1/2 -translate-1/2 opacity-0", `z-${index+20}`)}
                />
              )
            }
            )} 
        </section> */}
      </div>
    </>
  );
}
