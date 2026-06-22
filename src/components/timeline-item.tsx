import { cn, sanitizedData } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { stripHtml } from "@/lib/client-utils";

const TimelineWrapper = ({ bgColor, children }: { bgColor: string; children: React.ReactNode }) => (
  <article
    className="h-full w-full max-w-screen flex flex-col md:flex-row justify-start items-start md:divide-x divide-dashed"
    style={{ backgroundColor: bgColor }}
  >
    {children}
  </article>
);

const TimelineNavigationBar = ({ bgColor, children }: { bgColor: string; children: React.ReactNode }) => (
  <div
    className="xl:hidden h-15 w-full flex justify-center items-center gap-x-2 opacity-50"
    style={{ backgroundColor: bgColor }}
  >
    {children}
  </div>
);

const TimelineEventYear = ({ color, year }: { color: string; year: string }) => (
  <h1 className="text-5xl font-mono font-black -tracking-widest opacity-90 mt-2" style={{ color: color }}>{year}</h1>
);

const TimelineNavigationButton = ({
  color,
  changeSlide,
  disabled,
  children,
  ...props
}: {
  color: string;
  changeSlide: () => void;
  disabled: boolean | undefined;
  children: React.ReactNode;
}) => (
  <button
    style={{ color: color }}
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

const TimelineEventCol = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("h-full w-full flex flex-col justify-start items-start gap-6 pb-4", className)}>{children}</div>
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
  <div className="w-full max-w-full flex flex-col gap-4 min-[425px]:gap-8 px-4">{children}</div>
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
  <h2 className="text-[1.35rem] min-[425px]:text-[1.5rem] font-bold leading-6 min-[425px]:leading-7" style={{ color: color }}>
    {text}
  </h2>
);

const TimelineSecondaryHeading = ({ color, text }: { color: string; text: string }) => (
  <h2 className="text-[1.25rem] min-[425px]:text-[1.35rem] font-bold leading-6 min-[425px]:leading-7" style={{ color: color }}>
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
          "text-sm 2xl:text-base text-bone-800 dark:text-white",
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
