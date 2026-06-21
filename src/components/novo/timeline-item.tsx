import { cn, sanitizedData } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { stripHtml } from "@/lib/client-utils";

const TimelineWrapper = ({ bgColor, children }: { bgColor: string; children: React.ReactNode }) => (
  <article
    className="h-full w-full max-w-svw flex flex-col justify-start items-start lg:divide-y divide-dashed"
    style={{ backgroundColor: bgColor }}
  >
    {children}
  </article>
);

const TimelineNavigationBar = ({ bgColor, children }: { bgColor: string; children: React.ReactNode }) => (
  <div
    className="lg:hidden h-15 w-full flex justify-center items-center gap-x-2 opacity-50"
    style={{ backgroundColor: bgColor }}
  >
    {children}
  </div>
);

const TimelineEventYear = ({ year }: { year: string }) => (
  <h1 className="text-5xl text-[#777C6D] font-mono font-black -tracking-widest opacity-60 mt-2">{year}</h1>
);

const TimelineNavigationButton = ({
  changeSlide,
  disabled,
  children,
  ...props
}: {
  changeSlide: () => void;
  disabled: boolean | undefined;
  children: React.ReactNode;
}) => (
  <button
    className={cn(
      "grid place-content-center rounded-full size-10 bg-transparent group",
      "hover:bg-black/20 transition-colors duration-300 cursor-pointer",
    )}
    disabled={disabled}
    onClick={changeSlide}
    {...props}
  >
    {children}
  </button>
);

const TimelineEventCol = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full flex flex-col justify-between items-start gap-6 pb-4">{children}</div>
);

const TimelineEventDate = ({ bgColor, color, text }: { bgColor: string; color: string; text: string }) => (
  <div
    className="text-xs text-center font-semibold uppercase w-full py-1"
    style={{ backgroundColor: bgColor, color: color }}
  >
    {text}
  </div>
);

const TimelineEventDetails = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-full flex flex-col gap-4 px-4">{children}</div>
);

const TimelineHorizontalDashedLine = () => (
  <hr className="h-px border-px border-dashed border-bone-800/20 dark:border-dark-700 bg-none" />
);

const TimelineBadge = ({ color, text }: { color: string; text: string }) => (
  <span
    className="rounded-full border text-xs font-semibold uppercase leading-none w-max pt-1 pb-0.5 px-2"
    style={{ color: color, borderColor: color }}
  >
    {text}
  </span>
);

const TimelinePrimaryHeading = ({ color, text }: { color: string; text: string }) => (
  <h2 className="text-[clamp(1.35rem,5vw,2.25rem)] font-bold leading-6" style={{ color: color }}>
    {text}
  </h2>
);

const TimelineSecondaryHeading = ({ color, text }: { color: string; text: string }) => (
  <h2 className="text-[clamp(1.25rem,5vw,1.75rem)] font-bold leading-6" style={{ color: color }}>
    {text}
  </h2>
);

const TimelineFigure = ({ caption, children }: { caption: string; children: React.ReactNode }) => (
  <figure className="relative rounded-2xl overflow-hidden">
    {children}
    <figcaption className="bg-black/65 text-[0.575rem] text-white text-center font-medium w-full absolute bottom-0 left-0 py-1">
      {stripHtml(caption)}
    </figcaption>
  </figure>
);

const TimelineImage = ({ imageSourceUrl, altImage }: { imageSourceUrl: string; altImage: string }) => (
  <img className="h-full w-full object-cover" src={imageSourceUrl} alt={altImage} />
);

const TimelineParagraph = ({ content }: { content: string }) => {
  return (
    <ScrollArea className="max-h-60">
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

export {
  TimelineWrapper,
  TimelineNavigationBar,
  TimelineNavigationButton,
  TimelineEventYear,
  TimelineEventCol,
  TimelineEventDate,
  TimelineEventDetails,
  TimelineHorizontalDashedLine,
  TimelineBadge,
  TimelinePrimaryHeading,
  TimelineSecondaryHeading,
  TimelineFigure,
  TimelineImage,
  TimelineParagraph,
};
