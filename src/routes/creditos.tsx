import { createFileRoute } from "@tanstack/react-router";
// import AlmanaqueOrganization from "@/components/almanaque-organization";
import Main from "@/layouts/main";
import ScrollRevelText from "@/components/scroll-reveal-text-into-card";

export const Route = createFileRoute("/creditos")({
  component: Credits,
});

function Credits() {
  return (
    <>
      <Main>
        {/* <AlmanaqueOrganization /> */}
        {/* <Link to="/apoio-financeiro" viewTransition={{ types: ["slide-left"] }}>Apoio Financeiro</Link> */}

        <ScrollRevelText />
      </Main>
    </>
  );
}
