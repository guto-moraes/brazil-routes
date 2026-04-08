import { createFileRoute } from "@tanstack/react-router";
import AlmanaqueOrganization from "@/components/almanaque-organization";

export const Route = createFileRoute("/creditos")({
  component: Credits,
});

function Credits() {
  return <AlmanaqueOrganization />;
}
