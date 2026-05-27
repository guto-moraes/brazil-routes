import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import quizz from "@/assets/images/quiz.webp";
import { cn, sanitizedData } from "@/lib/utils";
import Quiz from "@/components/quiz";
import { useQueryQuizHome } from "@/hooks/queries/pages-and-posts-queries";

export const Route = createFileRoute("/almanaque-digital/teste-de-conhecimento")({
  component: QuizzPage,
});

function QuizzPage() {
  const { data } = useQueryQuizHome("/almanaque-digital/teste-de-conhecimento");
  console.log(data)
  return (
    <Main className="grid grid-cols-1 md:grid-cols-2 lg:h-[calc(100svh-104px)]">
      <div className="col-span-1 flex justify-center items-center py-16">
        <div className="flex flex-col">
          <figure className="w-52 sm:w-72 max-w-full mx-auto">
            <img className="h-full w-full object-cover object-center" src={quizz} alt="" />
          </figure>
          <h1 className="text-[clamp(1.25rem,4vw,2rem)] text-tan-700 font-cabinet font-black text-center">
            Teste seu <span className="text-tan-500">Conhecimento</span>
          </h1>
          <div
            className={cn(
              "[&_p]:text-[clamp(0.85rem,2vw,1.15rem)] [&_p]:text-tan-800 [&_p]:text-justify",
              "[&_p]:text-pretty [&_p]:hyphens-auto max-w-2xl max-sm:px-4 mt-8",
            )}
            dangerouslySetInnerHTML={sanitizedData(data.page.content)}
          />
        </div>
      </div>
      <div className="col-span1 bg-tan-200/50 flex justify-center items-center py-16 overflow-hidden">
        <Quiz />
      </div>
    </Main>
  );
}
