import { createFileRoute } from "@tanstack/react-router";
import InfiniteMarquee from "@/components/infinite-marquee";
export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      {
        title: "Fale Conosco",
      },
      {
        name: "description",
        content: "Página de contato do site",
      },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  return (
    <>
      {/* <InstagramCarousel /> */}
      {/* <ScrollableSections /> */}
      {/* <TextNewSectionReveal /> */}
      <InfiniteMarquee />
    </>
  );
}
