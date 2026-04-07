import { createFileRoute } from "@tanstack/react-router";
import SectionPinRotate from "@/components/section-pin-rotate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Página Inicial | Caminhos do Brasil Central",
      }
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SectionPinRotate />
    </>
  );
}