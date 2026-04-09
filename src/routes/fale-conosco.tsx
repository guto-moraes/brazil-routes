import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fale-conosco')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fale-conosto"!</div>
}
