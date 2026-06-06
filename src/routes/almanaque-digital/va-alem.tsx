import { createFileRoute } from "@tanstack/react-router";
import { useQueryGoFurther } from "@/hooks/queries/pages-and-posts-queries";
import { cn, sanitizedData } from "@/lib/utils";
import Header from "@/layouts/header";
import { Title } from "@/components/title";
import Main from "@/layouts/main";
import GoFurtherItem from "@/components/go-further-item";

export const Route = createFileRoute("/almanaque-digital/va-alem")({
  head: () => ({
    meta: [
      {
        title: "Vá Além | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Aprofunde seus conhecimentos acessando sites externos com vídeos, fotos, textos e diversos outros materiais",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/almanaque-digital/va-alem",
      },
    ],
  }),
  loader: () => ({
    crumb: "Vá Além",
  }),
  component: GoFurther,
});

function GoFurther() {
  const { nodeByUri: page } = useQueryGoFurther().data;

  return (
    <>
      <Header className="shadow-md" />
      <Main className="min-h-[calc(100svh-280px)] xl:min-h-[100svh-384px] py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <Title
            title={page.title}
            className={cn(
              "container max-w-6xl mx-auto text-[clamp(2.75rem,4vw,4.25rem)] text-bone-700",
              "dark:text-dark-contrast-100 font-cabinet font-black max-md:leading-[0.9] pb-8 sm:pb-16",
            )}
          >
            Vá <span className="text-bone-400 dark:text-dark-contrast-50">Além</span>
          </Title>

          <div
            className={cn(
              "w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24 [&_p]:text-[clamp(1rem,5vw,1.25rem)] [&_p]:text-tan-800",
              "dark:[&_p]:text-white sm:[&_p]:text-justify [&_p]:text-pretty [&_p]:hyphens-auto",
            )}
            dangerouslySetInnerHTML={sanitizedData(page.content)}
          />

          <section
            className={cn(
              "border-y border-terracotta-700 dark:border-dark-contrast-100 divide-y",
              "divide-terracotta-700 dark:divide-dark-contrast-100",
            )}
          >
            {page.goFurther.goFurther.map((item, index) => (
              <GoFurtherItem
                key={index}
                subject={item.subject}
                description={item.description}
                title={item.name}
                link={item.link}
              />
            ))}
          </section>
        </div>
      </Main>
    </>
  );
}
