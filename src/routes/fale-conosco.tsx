import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      {
        title: "Fale Conosco",
      },
      {
        name: "description",
        content: "Página de contato do site",
      },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  return(
    <>
      <div className="relative bg-mate-600 h-[calc(100svh-104px)] w-full overflow-hidden">
        
      </div>
    </>
  )
}
