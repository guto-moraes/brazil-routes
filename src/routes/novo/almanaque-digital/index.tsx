import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/novo/almanaque-digital/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/novo/almanaque-digital/"!</div>
}
