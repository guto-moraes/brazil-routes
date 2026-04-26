import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";

export const Route = createFileRoute("/sobre-o-projeto")({
  component: About,
});

function About() {
    return (
      <>
        <Title text="Sobre o Projeto" className="container mx-auto" />
      </>
    );
}
