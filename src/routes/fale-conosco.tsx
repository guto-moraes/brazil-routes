import { createFileRoute } from "@tanstack/react-router";

import FlipCardScroll from "@/components/flip-card-scroll.tsx";

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
      <FlipCardScroll />
    </>
  );
}
