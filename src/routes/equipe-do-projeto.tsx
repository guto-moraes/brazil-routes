import { createFileRoute } from "@tanstack/react-router";
import { Title } from "@/components/title";
import CardStackScroll from "@/components/card-stack-scroll";

export const Route = createFileRoute("/equipe-do-projeto")({
  component: ProjectTeam,
});

function ProjectTeam() {
  return (
    <CardStackScroll>
      <div className="max-w-5xl mx-auto flex flex-col justify-start items-start uppercase px-4">
        <Title>
          Equipe do <span className="text-tan-400">Projeto</span>
        </Title>
      </div>
    </CardStackScroll>
  );
}
