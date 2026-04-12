import { createFileRoute } from '@tanstack/react-router'
import ProjectTeam from '@/components/project-team'

export const Route = createFileRoute('/equipe-do-projeto')({
  head: () => ({
    meta: [
      {
        title: "Equipe do Projeto",
      },
      {
        name: "description",
        content:
          "Equipe multidisciplinar que atuou no desenvolvimento e na execução do Projeto Caminhos do Brasil Central",
      },
    ],
  }),
  component: Team,
})

function Team() {
  return <ProjectTeam />
}
