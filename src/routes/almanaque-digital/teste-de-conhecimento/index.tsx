import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { cn, sanitizedData } from "@/lib/utils";
import { useQueryQuizHome } from "@/hooks/queries/pages-and-posts-queries";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import quizz from "@/assets/images/quiz.webp";

export const Route = createFileRoute("/almanaque-digital/teste-de-conhecimento/")({
  head: () => ({
    meta: [
      {
        title: "Teste de Conhecimento | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Um sistema de perguntas e respostas com o objetivo de contribuir para que os usuários do site aprofundem seu conhecimento sobre a história da Expedição Roncador-Xingu e da Fundação Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/almanaque-digital/teste-de-conhecimento",
      },
    ],
  }),
  component: QuizzPage,
});

function QuizzPage() {
  const { data } = useQueryQuizHome("/almanaque-digital/teste-de-conhecimento");

  useEffect(() => {
    if (data) {
      document.title = `${data.page.title} | Projeto Caminhos do Brasil Central`;
    }
  }, [data]);

  return (
    <>
      <Header className="shadow-md" />
      <Main className="h-[calc(100vh-80px)] 2xl:h-[calc(100vh-104px)] flex flex-col justify-center items-center gap-10 dark:bg-dark-950">
        <div className="flex flex-col">
          <figure className="w-52 sm:w-72 max-w-full mx-auto">
            <img className="h-full w-full object-cover object-center" src={quizz} alt="" />
          </figure>
          <h1 className="text-[clamp(1.25rem,4vw,2rem)] text-tan-700 dark:text-dark-contrast-100 font-cabinet font-black text-center">
            Teste seu <span className="text-tan-500 dark:text-dark-contrast-50">Conhecimento</span>
          </h1>
          <div
            className={cn(
              "[&_p]:text-[clamp(0.85rem,2vw,1.05rem)] [&_p]:text-tan-800 dark:[&_p]:text-white",
              "[&_p]:text-justify [&_p]:text-pretty [&_p]:hyphens-auto max-w-2xl max-sm:px-4 mt-8 px-4",
            )}
            dangerouslySetInnerHTML={sanitizedData(data.page.content)}
          />
        </div>
        <Link
          to="/almanaque-digital/teste-de-conhecimento/quiz"
          title="Leia as informações para iniciar o questionário"
          className={cn(
            "bg-blue-retro-500 hover:bg-blue-retro-700 text-white transition-colors duration-300",
            "dark:bg-dark-contrast-100 dark:hover:bg-dark-contrast-100/70 dark:text-dark-950 py-4 px-6"
          )}
        >
          Leia as informações para iniciar o questionário
        </Link>
      </Main>
    </>
  );
}
