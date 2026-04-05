import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sobre-o-projeto')({
  component: About,
})

// eslint-disable-next-line react-refresh/only-export-components
function About() {
  return <div>Hello "/sobre-o-projeto"!</div>
}
