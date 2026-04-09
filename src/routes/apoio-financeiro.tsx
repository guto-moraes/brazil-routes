import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import SectionScrollAnimation from "@/components/sections-scroll-animation";
// import AlmanaqueChapters from "@/components/almanaque-chapters";

export const Route = createFileRoute("/apoio-financeiro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      {/* <AlmanaqueChapters /> */}
      <SectionScrollAnimation />
    </Main>
  );
}
