import { createFileRoute, Link } from "@tanstack/react-router";
import AlmanaqueChapters from "@/components/almanaque-chapters";
import Main from "@/layouts/main";

export const Route = createFileRoute("/apoio-financeiro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main>
      <AlmanaqueChapters />
      <Link to="/creditos" viewTransition={{ types: ["slide-left"] }}>Apoio Financeiro</Link>
    </Main>
  );
}
