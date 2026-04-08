import { createFileRoute } from "@tanstack/react-router";
import AlmanaqueChapters from "@/components/almanaque-chapters";

export const Route = createFileRoute("/apoio-financeiro")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AlmanaqueChapters />;
}
