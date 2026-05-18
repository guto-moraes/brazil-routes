import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import { cn, sanitizedData } from "@/lib/utils";
import { useQueryGoFurther } from "@/hooks/queries/pages-and-posts-queries";

export const Route = createFileRoute("/almanaque-digital/va-alem")({
  head: () => ({
    meta: [
      {
        title: "Referências | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Informações das fontes ou dos direitos autorais de obras ou imagens citadas ou incluídas no site do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/referencias",
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
  <div className="h-40 relative overflow-hidden flex justify-start items-center group">
    <div
      className={cn(
        "h-40 w-full absolute top-0 left-0 -translate-y-full bg-chocolate-900 group-hover:translate-y-0",
        "transition-tranform duration-500 will-change-transform z-8",
      )}
    ></div>
    <div className="h-full w-full flex gap-4 px-8 z-10">
      <div className="flex-2 h-full w-full flex justify-start items-center">
        <h2 className="text-terracotta-700 text-xl font-semibold font-cabinet group-hover:text-chocolate-300 transition-colors duration-500">
          {subject}
        </h2>
      </div>
      <div className="flex-3 h-full flex justify-center items-center">
        <p className="text-sm font-light group-hover:text-white px-6">{description}</p>
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
      <Main className="max-w-6xl mx-auto pb:12 xl:pb-24">
        <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
          Vá <span className="text-tan-400">Além</span>
        </Title>

        <div
          className="w-full mb-24 [&_p]:text-xl [&_p]:text-tan-800 [&_p]:text-justify [&_p]:hyphens-auto"
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
