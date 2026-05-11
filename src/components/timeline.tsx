import { HorizontalSlidesScroll } from "./horizontal-slide-scroll";
import TimelineSlide from "./timeline-slide";
import * as z from "zod";

export const CurrentSlideSchema = z.object({
  year: z.number().min(4).max(4),
  setYear: z.function({
    input: [z.number().min(4).max(4)],
    output: z.void(),
  }),
});

type CurrentSlideTypes = z.infer<typeof CurrentSlideSchema>;

const Timeline = ({ year, setYear }: CurrentSlideTypes) => {
  return (
    <HorizontalSlidesScroll year={year} setYear={setYear}>
      <TimelineSlide />
    </HorizontalSlidesScroll>
  );
};

export default Timeline;
