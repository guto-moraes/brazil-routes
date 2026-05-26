import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import { cn, sanitizedData } from "@/lib/utils";
import { useQueryGoFurther } from "@/hooks/queries/pages-and-posts-queries";

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
        href: "https://caminhosdobrasilcentral.com/va-alem",
      },
    ],
  }),
  component: GoFurther,
});

const GoFurtherItem = ({
  subject,
  description,
  title,
  link,
}: {
  subject: string;
  description: string;
  title: string;
  link: string;
}) => (
  <div className="h-auto lg:h-40 relative overflow-hidden flex justify-start items-center group max-sm:py-4">
    <div
      className={cn(
        "h-full lg:h-40 w-full absolute top-0 left-0 -translate-y-full bg-chocolate-900 group-hover:translate-y-0",
        "transition-tranform duration-500 will-change-transform z-8",
      )}
    ></div>
    <div className="h-full w-full flex flex-col md:flex-row gap-4 px-4 md:px-8 z-10">
      <div className="flex-2 h-full w-full flex justify-start items-center">
        <h2 className="text-terracotta-700 text-xl font-semibold font-cabinet group-hover:text-chocolate-300 transition-colors duration-500">
          {subject}
        </h2>
      </div>
      <div className="flex-3 h-full flex justify-center items-center">
        <p className="text-sm font-light group-hover:text-white md:px-6">{description}</p>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <a
          className={cn(
            "text-xs font-semibold text-terracotta-700 bg-transparent group-hover:bg-chocolate-300",
            "group-hover:text-blue-retro-950 uppercase py-1.5 px-5 rounded-full border border-terracotta-700",
            "hover:border-chocolate-300 group-hover:border-chocolate-300 transition-colors duration-500",
          )}
          href={link}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar o site
        </a>
      </div>
    </div>
  </div>
);

function GoFurther() {
  const { nodeByUri: page } = useQueryGoFurther().data || {};

  return (
    <>
      <Main className="max-w-6xl mx-auto py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
        <Title className="text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700 font-cabinet font-black pb-8 sm:pb-16">
          Vá <span className="text-tan-400">Além</span>
        </Title>

        <div
          className={cn(
            "w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24 [&_p]:text-[clamp(1rem,3vw,1.25)]",
            "[&_p]:text-tan-800 sm:[&_p]:text-justify [&_p]:text-pretty [&_p]:hyphens-auto"
          )}
          dangerouslySetInnerHTML={sanitizedData(page.content)}
        />

        <section className="border-y border-terracotta-700 divide-y divide-terracotta-700">
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
      </Main>
    </>
  );
}
