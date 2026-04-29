import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn, sanitizedData } from "@/lib/utils";
import { useQueryGlossary } from "@/hooks/queries/custom-posts-queries";

export const Route = createFileRoute("/almanaque-digital/glossario")({
  head: () => ({
    meta: [
      {
        title: "Glossário | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Glossário de termos utilizados no site e no Alamanque Digital",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/alamanaque-digital/glossario",
      },
    ],
  }),
  component: Glossary,
});

function Glossary() {
  const { data } = useQueryGlossary();
  const { glossarios: terms } = data;

  return (
    <Main className="max-w-5xl mx-auto pb-12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Glos<span className="text-tan-300">sário</span>
      </Title>
      <section className="glossary-container">
        <Accordion multiple={false} className="space-y-2 border-0">
          {terms.nodes.map((term) => (
            <AccordionItem
              key={term.id}
              value={term.id}
              className="rounded-lg border px-0 not-last:border-b border-tan-100"
            >
              <AccordionTrigger
                className={cn(
                  "bg-tan-100 hover:bg-tan-200 aria-expanded:bg-mate-400/50 rounded-b-none text-xl",
                  "text-tan-700 font-inter font-semibold uppercase tracking-tighter hover:no-underline",
                  "px-4 py-3 items-center transition-colors duration-300 cursor-pointer",
                )}
              >
                {term.title}
              </AccordionTrigger>
              <AccordionContent className="bg-white/55 rounded-b-lg text-base text-justify text-muted-foreground hyphens-auto w-full p-4">
                <div dangerouslySetInnerHTML={sanitizedData(term.content)} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Main>
  );
}
