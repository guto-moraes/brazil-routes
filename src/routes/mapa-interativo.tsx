import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mapa-interativo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mapa-interativo"!</div>
}
