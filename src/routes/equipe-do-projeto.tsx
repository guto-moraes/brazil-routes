import { createFileRoute } from '@tanstack/react-router'
import ProjectTeam from '@/components/project-team'

export const Route = createFileRoute('/equipe-do-projeto')({
  component: Team,
})

function Team() {
  return <ProjectTeam />
}
