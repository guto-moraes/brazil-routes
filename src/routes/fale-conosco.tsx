import { createFileRoute } from '@tanstack/react-router'
import ElasticTextIntro from '@/components/elastic-text-intro'

export const Route = createFileRoute('/fale-conosco')({
  head: () => ({
    meta: [
      {
        title: "Fale Conosco"
      },
      {
        name:"description",
        content: "Página de contato do site"
      }
    ],
  }),
  component: ContactUs,
})

function ContactUs() {
  return <ElasticTextIntro />
}
