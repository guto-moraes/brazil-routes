import { createFileRoute } from "@tanstack/react-router";
import AboveTheFold from "@/layouts/partials/home/above-the-fold";
// import TextNewSectionReveal from "@/components/text-new-section-reveal";
// import ScrollableSections from "@/components/scrollable-sections";
// import InstagramCarousel from "@/components/carousel";

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
  return(
    <>
      {/* <InstagramCarousel /> */}
      {/* <ScrollableSections /> */}
      {/* <TextNewSectionReveal /> */}
      <AboveTheFold />
    </>
  )
}
