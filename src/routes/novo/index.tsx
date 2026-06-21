import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/novo/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/novo/"!</div>
}
