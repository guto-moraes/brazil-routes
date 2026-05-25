import { createFileRoute } from "@tanstack/react-router";
import { useQueryQuestions } from "@/hooks/queries/custom-posts-queries";
import { cn, sanitizedData } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

export const Route = createFileRoute("/quiz")({
  component: RouteComponent,
});

const indexes: string[] = ["A", "B", "C", "D", "E"];

function RouteComponent() {
  const { nodes: questions } = useQueryQuestions().data.questions;

  return (
    <div className="h-[calc(100svh-104px)] w-full py-16">
      <div className="h-full w-full md:w-[40%] mx-auto flex gap-8 px-8">
        <section className="flex-3 max-w-full flex flex-col justify-start items-center gap-y-8">
          {questions.map((question, index) => (
            <Fragment key={index}>
              <div
                className={cn(
                  "[&_p]:text-[clamp(1rem,4vw,1.45rem)] [&_p]:text-tan-700 [&_p]:font-medium [&_p]:leading-7",
                )}
                dangerouslySetInnerHTML={sanitizedData(question.excerpt)}
              />
              <ul className="w-full flex flex-col gap-y-5 z-10">
                {question.answers.answersOptions.map((option, idx) => (
                  <li
                    className={cn(
                      "rounded-xs outline-2  outline-offset-2 bg-bege-50 flex justify-between items-center p-0.5 group",
                      "outline-tan-600 data-[correct=true]:outline-darkgreen-500 data-[selected=true]:outline-terracotta-700",
                    )}
                    key={idx}
                  >
                    <button
                      role="radio"
                      className={cn(
                        "w-full flex justify-start items-center gap-x-1.5 cursor-pointer text-tan-600",
                        "group-data-[correct=true]:text-darkgreen-500 group-data-[selected=true]:text-terracotta-700",
                      )}
                    >
                      <span
                        className={cn(
                          "rounded-xs h-full size-10 text-xl text-white font-medium bg-tan-600 flex justify-center items-center",
                          "group-data-[correct=true]:bg-darkgreen-500 group-data-[selected=true]:bg-terracotta-700",
                        )}
                      >
                        {indexes[idx]}
                      </span>
                      {option.answer}
                    </button>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </section>
      </div>
    </div>
  );
}
