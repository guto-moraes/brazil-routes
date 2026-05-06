import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionScrollRotate } from "@/components/test";

export const Route = createFileRoute("/mascara")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SectionScrollRotate>
      <Section>
        <h2 className="text-6xl text-muted">Olá, Mundo!</h2>
      </Section>
      <Section>
        <h2 className="text-6xl text-muted">Seção 1</h2>
      </Section>
    </SectionScrollRotate>
  );
}
