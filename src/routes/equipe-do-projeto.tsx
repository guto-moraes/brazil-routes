import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import CardStackScroll from "@/components/card-stack-scroll";

export const Route = createFileRoute("/equipe-do-projeto")({
  component: ProjectTeam,
});

function ProjectTeam() {
  return (
    <Main className="mb-16 lg:pb-32 px-4">
      <Title className="max-w-6xl mx-auto">
        Equipe do <span className="text-tan-400">Projeto</span>
      </Title>

      <CardStackScroll />
    </Main>
  );
}
