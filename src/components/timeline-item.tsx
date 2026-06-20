import { useQueryTimeline } from "@/hooks/queries/custom-posts-queries";
import { cn, sanitizedData } from "@/lib/utils";
import { stripHtml } from "@/lib/client-utils";
import { ScrollArea } from "./ui/scroll-area";

const ColHeader = ({ color, className, text }: { color: string; className: string; text: string }) => (
  <div className={cn("text-sm font-medium uppercase flex items-center px-8", className)} style={{ color }}>
    {text}
  </div>
);

const BadgeDate = ({ bgColor, color, eventDate }: { bgColor: string; color: string; eventDate: string }) => (
  <div
    className="xl:hidden text-sm font-medium uppercase leading-none py-1 px-1.5"
    style={{ backgroundColor: bgColor, color: color }}
  >
    {eventDate}
  </div>
);

const Badge = ({ color, text }: { color: string; text: string }) => (
  <span
    className={cn(
      "rounded-2xl border text-[0.625rem] font-medium uppercase leading-[1.125]",
      "w-max py-1 px-2.5 dark:text-blue-retro-300! dark:border-blue-retro-300!",
    )}
    style={{ color, borderColor: color }}
  >
    {stripHtml(text)}
  </span>
);

const Heading2 = ({ text, textColor }: { text: string; textColor: string }) => (
  <h2
    className={cn("text-2xl md:text-3xl font-cabinet font-bold leading-[1.125] dark:text-dark-contrast-100!")}
    style={{ color: textColor }}
  >
    {text}
  </h2>
);

const Heading3 = ({ text, textColor }: { text: string; textColor: string }) => (
  <h3
    className={cn(
      "text-xl min-[425px]:text-2xl font-cabinet font-bold max-2xl",
      "leading-[1.125] dark:text-dark-contrast-100!",
    )}
    style={{ color: textColor }}
  >
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
  <figure
    className={cn(
      "relative rounded-3xl w-full",
      height === 480 ? "h-72 sm:h-80 2xl:h-120" : "h-52 sm:h-60 2xl:h-70 min-[120rem]:h-80",
    )}
  >
    <img className="rounded-3xl h-full w-full object-cover object-top" src={image} alt={imageAlt} />
    <figcaption
      className={cn(
        "rounded-tr-3xl rounded-bl-3xl bg-black/65 text-[0.525rem] text-white",
        "font-medium absolute top-0 right-0 py-1 px-3.5 hidden xl:block",
      )}
    >
      {stripHtml(caption)}
    </figcaption>
  </figure>
);

const Paragraph = ({ content }: { content: string }) => {
  return (
    <ScrollArea className="max-h-70">
      <div
        className={cn(
          "text-[0.75rem] md:text-sm text-bone-800 dark:text-white",
          "text-balance hyphens-auto max-2xl:leading-5",
        )}
        dangerouslySetInnerHTML={sanitizedData(content)}
      />
    </ScrollArea>
  );
};

const TimelineItem = () => {
  const { data } = useQueryTimeline();
  const { nodes: timelines } = data.timelines;

  return timelines.map((timeline) => {
    const events = timeline.info.eventsDate.split(",");

    return (
      <article
        key={timeline.id}
        id={`slide-${timeline.title}`}
        className="timeline-item h-[calc(100vh-64px)] lg:h-[calc(100vh-48px)] xl:h-[calc(100svh-64px)] w-full xl:w-svw flex flex-col dark:bg-dark-950!"
        style={{ backgroundColor: timeline.info.bgColor }}
      >
        <div
          className="hidden h-7 w-full xl:flex divide-x divide-bone-800/20 divide-dashed dark:bg-dark-900! dark:divide-dark-700!"
          style={{ backgroundColor: timeline.info.theadBgColor }}
        >
          {events.map((date, idx) => (
            <ColHeader
              className={idx === 1 ? "flex-4 dark:text-dark-200!" : "flex-2 dark:text-dark-200!"}
              text={date}
              key={idx}
              color={timeline.info.textColor}
            />
          ))}
          <ColHeader className="flex-1 justify-center dark:text-dark-200!" text="Ano" color={timeline.info.textColor} />
        </div>
        <div className="h-full xl:grow min-w-5xl w-full flex divide-x divide-dashed divide-bone-900/20 dark:divide-dark-700">
          <div className="w-svw md:w-96 xl:w-screen xl:flex-2 flex flex-col justify-end gap-y-8 px-8 pb-8">
            <hr className="h-px border-px border-dashed border-bone-800/20 dark:border-dark-700 bg-none" />
            <div className="w-full flex flex-col gap-y-4">
              <Badge text={timeline.info.firstCol.tagText} color={timeline.info.textColor} />
              <Heading3 text={timeline.info.firstCol.heading} textColor={timeline.info.textColor} />
            </div>
            <Figure
              height={timeline.info.firstCol.heightImage}
              image={timeline.info.firstCol.image.node.sourceUrl}
              imageAlt={timeline.info.firstCol.image.node.altText}
              caption={timeline.info.firstCol.image.node.caption}
            />
            <BadgeDate
              bgColor={timeline.info.theadBgColor}
              color={timeline.info.textColor}
              eventDate={timeline.info.eventsDate.split(",")[0]}
            />
          </div>
          <div className="w-svw md:w-120 xl:w-svw xl:flex-4 flex flex-col justify-end gap-y-8 px-8 py-8 xl:pt-8 xlpb-8">
            <hr className="h-px border-px border-dashed border-bone-800/20 dark:border-dark-700 bg-none" />
            <div className="w-full flex flex-col gap-y-4">
              <Badge text={timeline.info.secondCol.tagText} color={timeline.info.textColor} />
              <Heading2 text={timeline.info.secondCol.heading} textColor={timeline.info.textColor} />
            </div>
            <Figure
              height={timeline.info.secondCol.heightImage}
              image={timeline.info.secondCol.image.node.sourceUrl}
              imageAlt={timeline.info.secondCol.image.node.altText}
              caption={timeline.info.secondCol.image.node.caption}
            />
            <BadgeDate
              bgColor={timeline.info.theadBgColor}
              color={timeline.info.textColor}
              eventDate={timeline.info.eventsDate.split(",")[1]}
            />
          </div>
          <div className="w-svw md:w-96 xl:w-svw xl:flex-2 flex flex-col justify-end gap-y-8 px-8 pb-8">
            <hr className="h-px border-px border-dashed border-bone-800/20 dark:border-dark-700 bg-none" />
            <div className="w-full flex flex-col gap-y-4">
              <Badge text={timeline.info.thirdCol.textTag} color={timeline.info.textColor} />
              <Heading3 text={timeline.info.thirdCol.title} textColor={timeline.info.textColor} />
            </div>
            {timeline.info.thirdCol.heightImage && timeline.info.thirdCol.image && (
              <Figure
                height={timeline.info.thirdCol.heightImage}
                image={timeline.info.thirdCol.image.node.sourceUrl}
                imageAlt={timeline.info.thirdCol.image.node.altText}
                caption={timeline.info.thirdCol.image.node.caption}
              />
            )}
            <Paragraph content={timeline.info.thirdCol.lead} />
            <BadgeDate
              bgColor={timeline.info.theadBgColor}
              color={timeline.info.textColor}
              eventDate={timeline.info.eventsDate.split(",")[2]}
            />
          </div>
          <div className="flex-1 relative md:w-32 xl:w-full flex flex-col justify-end gap-y-8 px-8 pb-8">
            <h2
              className={cn(
                "text-[clamp(1.5rem,10vw,18rem)] font-mono font-black leading-[1.125] tracking-[-0.085em]",
                "absolute top-28 left-1/2 -translate-x-1/2 rotate-90 will-change-transform dark:text-dark-700! dark:opacity-100!",
              )}
              style={{ color: timeline.info.textColor, opacity: 0.2 }}
            >
              {timeline.title}
            </h2>
          </div>
        </div>
      </article>
    );
  });
};

export default TimelineItem;
