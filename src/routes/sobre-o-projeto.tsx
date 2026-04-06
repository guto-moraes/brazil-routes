import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/sobre-o-projeto")({
  component: About,
});

function About() {

  return (
    <Main className="container mx-auto">
      <Title text="Sobre o Projeto" />
    </Main>
  );
}
