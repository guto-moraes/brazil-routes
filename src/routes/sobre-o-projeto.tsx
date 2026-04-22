import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useQueryFieldsActivityOfProject } from "@/queries/theme-settings";
// import type { FieldsActivity } from "@/types/theme-graphql";
import { ActionSection } from "@/components/actions-fields-parts";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/sobre-o-projeto")({
  component: About,
});

function About() {
  const actionsContainerRef = useRef<HTMLDivElement | null>(null);
  const SCROLL_VH = 80;
  const STAGGER = 0.55;

  const { data } = useQueryFieldsActivityOfProject();
  const {
    // fieldsActivities: sections,
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
        end: window.innerHeight * 4,
        scrub: 1.2,
        pin: true,
        markers: true,
      },
    });

    cards.forEach((card, i) => {
      gsap.set(card, {
        yPercent: 350 + i * 50,
      });
      tl.to(
        card,
        {
          xPercent: 90,
          yPercent: 30,
          scale: 0.8,
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
      <div className="actions-card-container relative h-svh w-full overflow-hidden" ref={actionsContainerRef}>
        <div data-scroll-spacer className="w-full" style={{ height: `${window.innerHeight * 4}vh` }}></div>

        <div className="absolute inset-0 z-0">
          <div className="h-svh w-full">
            {project && title && presentation && (
              <ActionSection project={project} title={title} description={presentation} />
            )}
          </div>
        </div>

        <section data-card-deck className="cards-container pointer-events-none fixed inset-0 z-10">
          <article
            className={cn(
              "card bg-darkgreen-500 flex min-h-112 w-full min-w-0 max-w-[min(42rem,calc(100vw-3rem))] flex-col justify-between gap-12",
              "overflow-hidden rounded-2xl p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:min-h-144 md:gap-14 md:p-12 lg:min-h-152 lg:p-14",
            )}
          ></article>
          <article
            className={cn(
              "card bg-chocolate-500 flex min-h-112 w-full min-w-0 max-w-[min(42rem,calc(100vw-3rem))] flex-col justify-between gap-12",
              "overflow-hidden rounded-2xl p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:min-h-144 md:gap-14 md:p-12 lg:min-h-152 lg:p-14",
            )}
          ></article>
          {/* {sections &&
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
            )}  */}
        </section>
      </div>
    </>
  );
}
