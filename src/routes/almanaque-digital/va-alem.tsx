import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";
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
  <div className="h-40 relative overflow-hidden flex justify-start items-center group px-8">
    <div
      className={cn(
        "h-40 w-full absolute top-0 left-0 -translate-y-full bg-tan-950 group-hover:translate-y-0",
        "transition-tranform duration-500 will-change-transform z-8",
      )}
    ></div>
    <div className="h-full w-full flex z-10">
      <div className="flex-2 h-full w-full flex justify-center items-center">
        <h2 className="text-tan-900 text-xl font-semibold font-cabinet group-hover:text-tan-100 transition-colors duration-500">
          {subject}
        </h2>
      </div>
      <div className="flex-2 h-full flex justify-center items-center">
        <p className="text-sm font-light group-hover:text-white px-6">{description}</p>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <a
          className={cn(
            "text-tan-950 hover:text-mate-200 group-hover:text-white uppercase py-1.5 px-5 rounded-full",
            "border border-tan-950 hover:border-mate-200 group-hover:border-white transition-colors duration-500",
          )}
          href={link}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar
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

        <section className="border-y border-tan-900 divide-y divide-tan-900">
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
