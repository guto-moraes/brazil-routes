import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import CardStacking from "@/components/card-stacking";

export const Route = createFileRoute("/referencias")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Main>
        <CardStacking />
      </Main>
    </>
  );
}
