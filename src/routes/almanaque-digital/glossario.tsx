import { createFileRoute } from "@tanstack/react-router";
import { useQueryGlossary } from "@/hooks/queries/custom-posts-queries";
import { cn, sanitizedData } from "@/lib/utils";
import Header from "@/layouts/header";
import { Title } from "@/components/title";
import Main from "@/layouts/main";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/layouts/footer";

export const Route = createFileRoute("/almanaque-digital/glossario")({
  loader: () => ({
    crumb: "Glossário",
  }),
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
    <>
      <Header className="shadow-md" />
      <Main className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
        <div className="max-w-5xl mx-auto">
          <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 dark:text-dark-contrast-100 font-cabinet font-black pb-8 sm:pb-16">
            Glos<span className="text-tan-300 dark:text-dark-contrast-50">sário</span>
          </Title>
          <section className="glossary-container">
            <Accordion type="single" className="space-y-2 border-0">
              {terms.nodes.map((term) => (
                <AccordionItem
                  key={term.id}
                  value={term.id}
                  className="rounded-lg border px-0 not-last:border-b border-tan-100 dark:border-dark-950"
                >
                  <AccordionTrigger
                    className={cn(
                      "bg-tan-100 dark:bg-dark-800 hover:bg-tan-200 dark:hover:bg-dark-700 aria-expanded:bg-mate-400/50",
                      "dark:aria-expanded:bg-dark-contrast-100 rounded-b-none text-xl text-tan-700",
                      " dark:data-[state=closed]:text-white font-inter font-semibold uppercase tracking-tighter hover:no-underline",
                      "px-4 py-3 items-center transition-colors duration-300 cursor-pointer",
                    )}
                  >
                    {term.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white/55 dark:bg-dark-900 rounded-b-lg text-base text-justify text-muted-foreground hyphens-auto w-full p-4">
                    <div className="[&_p]:text-tan-700 dark:[&_p]:text-white" dangerouslySetInnerHTML={sanitizedData(term.content)} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </Main>
      <Footer />
    </>
  );
}
