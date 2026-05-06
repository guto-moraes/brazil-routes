"use client";

import { cn, sanitizedData, stripHtml } from "@/lib/utils";
import { HorizontalSlideItem } from "./horizontal-slide-scroll";
import { useQueryTimeline } from "@/hooks/queries/custom-posts-queries";

const ColHeader = ({ color, className, text }: { color: string; className: string; text: string }) => (
  <div className={cn("text-sm font-medium uppercase flex items-center px-8", className)} style={{ color }}>
    {text}
  </div>
);

const Badge = ({ color, text }: { color: string; text: string }) => (
  <span
    className={cn("rounded-2xl border text-[0.625rem]", "font-medium uppercase leading-[1.125] w-max py-1 px-2.5")}
    style={{ color, borderColor: color }}
  >
    {stripHtml(text)}
  </span>
);

const Heading2 = ({ text, textColor }: { text: string; textColor: string }) => (
  <h2 className="text-[clamp(2rem,5vw,3rem)] font-cabinet font-bold leading-[1.125]" style={{ color: textColor }}>
    {text}
  </h2>
);

const Heading3 = ({ text, textColor }: { text: string; textColor: string }) => (
  <h3 className="text-[clamp(1.5rem,5vw,2rem)] font-cabinet font-bold leading-[1.125]" style={{ color: textColor }}>
    {text}
  </h3>
);

const Figure = ({
  height,
  image,
  imageAlt,
  caption,
}: {
  height: number;
  image: string;
  imageAlt: string;
  caption: string;
}) => (
  <figure className="relative rounded-3xl h-80 w-full" style={{ height: `${height}px` }}>
    <img className="rounded-3xl h-full w-full object-cover object-top" src={image} alt={imageAlt} />
    <figcaption
      className={cn(
        "rounded-tr-3xl rounded-bl-3xl bg-black/60 text-[0.625rem] text-white",
        "font-medium absolute top-0 right-0 py-1 px-3.5",
      )}
    >
      {stripHtml(caption)}
    </figcaption>
  </figure>
);

const Paragraph = ({ content }: { content: string }) => {
  return <div className="text-bone-800 text-balance hyphens-auto" dangerouslySetInnerHTML={sanitizedData(content)} />;
};

const TimelineSlide = () => {
  const { data } = useQueryTimeline();
  const { nodes: timelines } = data.timelines || {};

  return (
    timelines &&
    timelines.map((timeline) => {
      const events = timeline.info.eventsDate.split(",");

      return (
        <HorizontalSlideItem
          id={timeline.title}
          bgColor={timeline.info.bgColor}
          className="h-svh w-full flex flex-col"
          key={timeline.id}
        >
          <div
            className="h-7 w-full flex divide-x divide-bone-800/20 divide-dashed"
            style={{ backgroundColor: timeline.info.theadBgColor }}
          >
            {events.map((date, idx) => (
              <ColHeader className={idx === 1 ? "flex-4" : "flex-2"} text={date} key={idx} color={timeline.info.textColor} />
            ))}
            <ColHeader className="flex-1 justify-center" text="Ano" color={timeline.info.textColor} />
          </div>
          <div className="grow w-full flex divide-x divide-dashed divide-bone-900/20">
            <div className="flex-2 flex flex-col justify-end gap-y-8 px-8 pb-32">
              <hr className="h-px border-px border-dashed border-bone-800/20 bg-none" />
              <div className="w-full flex flex-col gap-y-4">
                <Badge text={timeline.info.firstCol.tagText} color={timeline.info.textColor} />
                <Heading3 text={timeline.info.firstCol.heading} textColor={timeline.info.textColor} />
              </div>
              <Figure
                height={timeline.info.firstCol.heightImage}
                image={timeline.info.firstCol.image.node.guid}
                imageAlt={timeline.info.firstCol.image.node.altText}
                caption={timeline.info.firstCol.image.node.caption}
              />
            </div>
            <div className="flex-4 flex flex-col justify-end gap-y-8 px-8 pb-32">
              <hr className="h-px border-px border-dashed border-bone-800/20 bg-none" />
              <div className="w-full flex flex-col gap-y-4">
                <Badge text={timeline.info.secondCol.tagText} color={timeline.info.textColor} />
                <Heading2 text={timeline.info.secondCol.heading} textColor={timeline.info.textColor} />
              </div>
              <Figure
                height={timeline.info.secondCol.heightImage}
                image={timeline.info.secondCol.image.node.guid}
                imageAlt={timeline.info.secondCol.image.node.altText}
                caption={timeline.info.secondCol.image.node.caption}
              />
            </div>
            <div className="flex-2 flex flex-col justify-end gap-y-8 px-8 pb-32">
              <hr className="h-px border-px border-dashed border-bone-800/20 bg-none" />
              <div className="w-full flex flex-col gap-y-4">
                <Badge text={timeline.info.thirdCol.textTag} color={timeline.info.textColor} />
                <Heading3 text={timeline.info.thirdCol.title} textColor={timeline.info.textColor} />
              </div>
              {timeline.info.thirdCol.heightImage && timeline.info.thirdCol.image && (
                <Figure
                  height={timeline.info.thirdCol.heightImage}
                  image={timeline.info.thirdCol.image.node.guid}
                  imageAlt={timeline.info.thirdCol.image.node.altText}
                  caption={timeline.info.thirdCol.image.node.caption}
                />
              )}
              <Paragraph content={timeline.info.thirdCol.lead} />
            </div>
            <div className="flex-1 relative flex flex-col justify-end gap-y-8 px-8 pb-8">
              <h2
                className={cn(
                  "text-[clamp(2rem,10vw,18rem)] font-mono font-black leading-[1.125] -tracking-[0.085em]",
                  "absolute top-28 left-1/2 -translate-x-1/2 rotate-90 will-change-transform",
                )}
                style={{ color: timeline.info.textColor, opacity: 0.2 }}
              >
                {timeline.title}
              </h2>
            </div>
          </div>
        </HorizontalSlideItem>
      );
    })
  );
};

export default TimelineSlide;
