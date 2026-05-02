import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/almanaque-digital/capitulo-1')({
  component: FirstChapter,
})

function FirstChapter() {
  return <div>Hello "/almanaque-digital/capitulo-1"!</div>
}
