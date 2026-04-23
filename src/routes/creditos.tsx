import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";

export const Route = createFileRoute("/creditos")({
  component: Credits,
});

function Credits() {
  return (
    <>
      <Title text="Créditos" />
    </>
  );
}
