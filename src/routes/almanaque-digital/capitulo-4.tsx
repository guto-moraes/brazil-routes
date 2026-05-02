import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/almanaque-digital/capitulo-4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/almanaque-digital/capitulo-4"!</div>
}
