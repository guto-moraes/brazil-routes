import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";

export const Route = createFileRoute("/sobre-o-projeto")({
  component: About,
});

function About() {
  return (
    <Main className="flex justify-center items-center">
      <h1 className="text-8xl text-tan-700 text-center font-cabinet font-black">Sobre o Projeto</h1>
    </Main>
  );
}
