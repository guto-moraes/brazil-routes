"use client";

import { useEffect, useState } from "react";
import { useQueryTimeline } from "@/hooks/queries/custom-posts-queries";
import {
  TimelineWrapper,
  TimelineNavigationBar,
  TimelineNavigationButton,
  TimelineEventYear,
  TimelineEventCol,
  TimelineEventDate,
  TimelineEventDetails,
  TimelineBadge,
  TimelineSecondaryHeading,
  TimelinePrimaryHeading,
  TimelineFigure,
  TimelineImage,
  TimelineParagraph,
} from "@/components/timeline-item";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Timeline = () => {
  const { data } = useQueryTimeline();
  const { nodes: timelines } = data.timelines;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const min = 1930;
  const skipInterval = 1;
  const years = Array.from(
    { length: (timelines ? timelines.length - 1 : 1950 - min) / skipInterval + 1 },
    (_, index) => min + index * skipInterval,
  );

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
    <section className="max-h-max w-full max-w-screen flex flex-col items-start overflow-hidden">
      <TimelineNavigationBar bgColor={timelines[current].info.textColor}>
        <TimelineNavigationButton
          changeSlide={() => api?.scrollPrev()}
          disabled={!api?.canScrollPrev()}
          aria-label="Linha do Tempo Anterior"
          color={timelines[current].info.bgColor}
        >
          <ChevronLeft className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
        </TimelineNavigationButton>
        <TimelineEventYear color={timelines[current].info.bgColor} year={String(1930 + current)} />
        <TimelineNavigationButton
          changeSlide={() => api?.scrollNext()}
          disabled={!api?.canScrollNext()}
          aria-label="Próxima Linha do Tempo"
          color={timelines[current].info.bgColor}
        >
          <ChevronRight className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
        </TimelineNavigationButton>
      </TimelineNavigationBar>

      <section className="relative bg-dark-800 w-full hidden xl:flex justify-center items-center py-2 xl:py-3">
        <ul
          className={cn(
            "border-t border-chocolate-300 dark:border-t-dark-contrast-100 w-[95%] mx-auto flex flex-row",
            "items-center justify-between gap-0.5 transition-transform duration-300",
          )}
        >
          {years.map((year, index) => (
            <li key={year} className="flex w-0 flex-col items-center justify-center gap-1">
              <span
                className={cn(
                  "hidden xl:block bg-chocolate-300 dark:bg-dark-contrast-100 h-1.5 w-px",
                  year % skipInterval !== 0 && "h-1",
                )}
              />
              <button
                className={cn(
                  "text-xs origin-center cursor-pointer transition-all duration-500 ease-in-out",
                  index === current ? "text-chocolate-300 dark:text-dark-contrast-100 font-black scale-115" : "text-white scale-100",
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para o ano ${index + 1}`}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Carousel setApi={setApi} className="h-[inherit]!">
        <CarouselContent className="h-[inherit]! max-w-dvw ml-0">
          {timelines.map((timeline) => {
            const events = timeline.info.eventsDate.split(", ");
            return (
              <CarouselItem key={timeline.id} className="max-w-full pl-0">
                <TimelineWrapper bgColor={timeline.info.bgColor}>
                  <TimelineEventCol className="xl:flex-2">
                    <TimelineEventDate
                      bgColor={timeline.info.theadBgColor}
                      color={timeline.info.textColor}
                      text={events[0]}
                    />
                    <TimelineEventDetails>
                      <TimelineBadge color={timeline.info.textColor} text={timeline.info.firstCol.tagText} />
                      <TimelineSecondaryHeading color={timeline.info.textColor} text={timeline.info.firstCol.heading} />
                      <TimelineFigure caption={timeline.info.firstCol.image.node.caption}>
                        <TimelineImage
                          imageSourceUrl={timeline.info.firstCol.image.node.sourceUrl}
                          altImage={timeline.info.firstCol.image.node.altText}
                        />
                      </TimelineFigure>
                    </TimelineEventDetails>
                  </TimelineEventCol>
                  <TimelineEventCol className="xl:flex-3">
                    <TimelineEventDate
                      bgColor={timeline.info.theadBgColor}
                      color={timeline.info.textColor}
                      text={events[1]}
                    />
                    <TimelineEventDetails>
                      <TimelineBadge color={timeline.info.textColor} text={timeline.info.secondCol.tagText} />
                      <TimelinePrimaryHeading color={timeline.info.textColor} text={timeline.info.secondCol.heading} />
                      <TimelineFigure caption={timeline.info.secondCol.image.node.caption}>
                        <TimelineImage
                          imageSourceUrl={timeline.info.secondCol.image.node.sourceUrl}
                          altImage={timeline.info.secondCol.image.node.altText}
                        />
                      </TimelineFigure>
                    </TimelineEventDetails>
                  </TimelineEventCol>
                  <TimelineEventCol className="xl:flex-2">
                    <TimelineEventDate
                      bgColor={timeline.info.theadBgColor}
                      color={timeline.info.textColor}
                      text={events[2]}
                    />
                    <TimelineEventDetails>
                      <TimelineBadge color={timeline.info.textColor} text={timeline.info.thirdCol.textTag} />
                      <TimelineSecondaryHeading color={timeline.info.textColor} text={timeline.info.thirdCol.title} />
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
                  <TimelineEventCol className="hidden xl:block xl:flex-1 xl:justify-center xl:items-center">
                    <TimelineEventDate
                      bgColor={timeline.info.theadBgColor}
                      color={timeline.info.textColor}
                      text="Ano"
                    />
                    <h1
                      className={cn(
                        "[writing-mode:vertical-rl] text-[9rem] font-mono dark:text-white/75!",
                        "font-black leading-none -tracking-widest mt-8 opacity-25",
                      )}
                      style={{ color: timeline.info.textColor }}
                    >
                      {timeline.title}
                    </h1>
                  </TimelineEventCol>
                </TimelineWrapper>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <TimelineNavigationBar bgColor={timelines[current].info.textColor}>
        <TimelineNavigationButton
          changeSlide={() => api?.scrollPrev()}
          disabled={!api?.canScrollPrev()}
          aria-label="Linha do Tempo Anterior"
          color={timelines[current].info.bgColor}
        >
          <ChevronLeft className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
        </TimelineNavigationButton>
        <TimelineEventYear color={timelines[current].info.bgColor} year={String(1930 + current)} />
        <TimelineNavigationButton
          changeSlide={() => api?.scrollNext()}
          disabled={!api?.canScrollNext()}
          aria-label="Próxima Linha do Tempo"
          color={timelines[current].info.bgColor}
        >
          <ChevronRight className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
        </TimelineNavigationButton>
      </TimelineNavigationBar>

      <section className="relative bg-dark-800 w-full hidden xl:flex justify-center items-center py-2 xl:py-3">
        <ul
          className={cn(
            "border-t border-chocolate-300 dark:border-t-dark-contrast-100 w-[95%] mx-auto flex flex-row",
            "items-center justify-between gap-0.5 transition-transform duration-300",
          )}
        >
          {years.map((year, index) => (
            <li key={year} className="flex w-0 flex-col items-center justify-center gap-1">
              <span
                className={cn(
                  "hidden xl:block bg-chocolate-300 dark:bg-dark-contrast-100 h-1.5 w-px",
                  year % skipInterval !== 0 && "h-1",
                )}
              />
              <button
                className={cn(
                  "text-xs origin-center cursor-pointer transition-all duration-500 ease-in-out",
                  index === current ? "text-chocolate-300 dark:text-dark-contrast-100 font-black scale-115" : "text-white scale-100",
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para o ano ${index + 1}`}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Timeline;
