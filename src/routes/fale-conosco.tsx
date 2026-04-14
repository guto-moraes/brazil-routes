import InstagramCarousel from "@/components/carousel";
import { createFileRoute } from "@tanstack/react-router";

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
      <InstagramCarousel />
    </>
  )
}
