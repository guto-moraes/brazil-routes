"use client";

import { createFileRoute } from "@tanstack/react-router";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TextRevealHidden from "@/components/text-reveal-hidden";
import { Title } from "@/components/title";

import {
  TimelineWrapper,
  TimelineNavigationBar,
  TimelineNavigationButton,
  TimelineEventYear,
  TimelineEventCol,
  TimelineEventDate,
  TimelineEventDetails,
  TimelineHorizontalDashedLine,
  TimelineBadge,
  TimelineSecondaryHeading,
  TimelinePrimaryHeading,
  TimelineFigure,
  TimelineImage,
  TimelineParagraph,
} from "@/components/novo/timeline-item";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useQueryTimeline } from "@/hooks/queries/custom-posts-queries";

export const Route = createFileRoute("/novo/almanaque-digital/linha-do-tempo")({
  component: NewTimeline,
});

function NewTimeline() {
  const { data } = useQueryTimeline();
  const { nodes: timelines } = data.timelines;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <>
      <Header className="shadow-md" />
      <Main className="p-0">
        <section className="h-[calc(100dvh-80px)] 2xl:h-[calc(100dvh-104px)] max-w-7xl container mx-auto py-8 px-4">
          <Title>
            Desbravamento do <span className="text-tan-500">leste de Mato Grosso</span>
          </Title>
          <TextRevealHidden animateOnScroll={false} blockColor="#fbf6ea" className="my-8">
            <p className="text-tan-800 text-balance leading-5">
              Uma breve cronologia da história da colonização não indígena na região do Vale do Araguaia (1943-1967)
            </p>
          </TextRevealHidden>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            <div className="bg-blue-retro-400 min-h-34 flex flex-col justify-center items-center gap-2 p-4">
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] text-white font-inter font-black leading-none">1943-1949</h2>
              <p className="text-[clamp(1rem,3vw,1.5rem)] text-white font-inter font-semibold uppercase">
                Lançamento das bases
              </p>
            </div>
            <div className="bg-blue-retro-500 min-h-34 flex flex-col justify-center items-center gap-2 p-4">
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] text-white font-inter font-black leading-none">1950-1959</h2>
              <p className="text-[clamp(1rem,3vw,1.5rem)] text-white font-inter font-semibold uppercase">
                Período de consolidação
              </p>
            </div>
            <div className="bg-blue-retro-600 min-h-34 flex flex-col justify-center items-center gap-2 p-4">
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] text-white font-inter font-black leading-none">1960-1967</h2>
              <p className="text-[clamp(1rem,3vw,1.5rem)] text-white font-inter font-semibold uppercase">
                Expansão e declínio
              </p>
            </div>
          </div>
        </section>
        <section className="max-h-max w-full flex flex-col items-start overflow-hidden">
          <TimelineNavigationBar bgColor="#B7B89F">
            <TimelineNavigationButton
              changeSlide={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              aria-label="Linha do Tempo Anterior"
            >
              <ChevronLeft className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
            </TimelineNavigationButton>
            <TimelineEventYear year={String(1930 + current)} />
            <TimelineNavigationButton
              changeSlide={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              aria-label="Próxima Linha do Tempo"
            >
              <ChevronRight className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
            </TimelineNavigationButton>
          </TimelineNavigationBar>
          <Carousel setApi={setApi} className="h-[inherit]!">
            <CarouselContent className="h-[inherit]! max-w-dvw ml-0">
              {timelines.map((timeline) => {
                const events = timeline.info.eventsDate.split(", ");
                return (
                  <CarouselItem key={timeline.id} className="max-w-full pl-0">
                    <TimelineWrapper bgColor={timeline.info.bgColor}>
                      <TimelineEventCol>
                        <TimelineEventDate
                          bgColor={timeline.info.theadBgColor}
                          color={timeline.info.textColor}
                          text={events[0]}
                        />
                        <TimelineEventDetails>
                          <TimelineHorizontalDashedLine />
                          <TimelineBadge color={timeline.info.textColor} text={timeline.info.firstCol.tagText} />
                          <TimelineSecondaryHeading
                            color={timeline.info.textColor}
                            text={timeline.info.firstCol.heading}
                          />
                          <TimelineFigure caption={timeline.info.firstCol.image.node.caption}>
                            <TimelineImage
                              imageSourceUrl={timeline.info.firstCol.image.node.sourceUrl}
                              altImage={timeline.info.firstCol.image.node.altText}
                            />
                          </TimelineFigure>
                        </TimelineEventDetails>
                      </TimelineEventCol>
                      <TimelineEventCol>
                        <TimelineEventDate
                          bgColor={timeline.info.theadBgColor}
                          color={timeline.info.textColor}
                          text={events[1]}
                        />
                        <TimelineEventDetails>
                          <TimelineHorizontalDashedLine />
                          <TimelineBadge color={timeline.info.textColor} text={timeline.info.firstCol.tagText} />
                          <TimelinePrimaryHeading
                            color={timeline.info.textColor}
                            text={timeline.info.secondCol.heading}
                          />
                          <TimelineFigure caption={timeline.info.secondCol.image.node.caption}>
                            <TimelineImage
                              imageSourceUrl={timeline.info.secondCol.image.node.sourceUrl}
                              altImage={timeline.info.secondCol.image.node.altText}
                            />
                          </TimelineFigure>
                        </TimelineEventDetails>
                      </TimelineEventCol>
                      <TimelineEventCol>
                        <TimelineEventDate
                          bgColor={timeline.info.theadBgColor}
                          color={timeline.info.textColor}
                          text={events[1]}
                        />
                        <TimelineEventDetails>
                          <TimelineHorizontalDashedLine />
                          <TimelineBadge color={timeline.info.textColor} text={timeline.info.firstCol.tagText} />
                          <TimelinePrimaryHeading
                            color={timeline.info.textColor}
                            text={timeline.info.secondCol.heading}
                          />
                          {timeline.info.thirdCol.image && (
                            <TimelineFigure caption={timeline.info.thirdCol.image.node.caption}>
                              <TimelineImage
                                imageSourceUrl={timeline.info.thirdCol.image.node.sourceUrl}
                                altImage={timeline.info.thirdCol.image.node.altText}
                              />
                            </TimelineFigure>
                          )}
                          <TimelineParagraph content={timeline.info.thirdCol.lead} />
                        </TimelineEventDetails>
                      </TimelineEventCol>
                    </TimelineWrapper>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <TimelineNavigationBar bgColor="#B7B89F">
            <TimelineNavigationButton
              changeSlide={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              aria-label="Linha do Tempo Anterior"
            >
              <ChevronLeft className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
            </TimelineNavigationButton>
            <TimelineEventYear year={String(1930 + current)} />
            <TimelineNavigationButton
              changeSlide={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              aria-label="Próxima Linha do Tempo"
            >
              <ChevronRight className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
            </TimelineNavigationButton>
          </TimelineNavigationBar>
        </section>
      </Main>
    </>
  );
}
