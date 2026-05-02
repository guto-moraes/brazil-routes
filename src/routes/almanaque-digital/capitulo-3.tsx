import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/almanaque-digital/capitulo-3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/almanaque-digital/capitulo-3"!</div>
}
