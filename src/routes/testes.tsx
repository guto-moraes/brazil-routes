import FlipCardScrollReveal from "@/components/flip-card-scroll";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testes")({
  component: Tests,
});

function Tests() {
  return <FlipCardScrollReveal />;
}
