import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import Pagination from "@/components/pagination";
import Main from "@/layouts/main";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, MapPin, Tag } from "lucide-react";

export const Route = createFileRoute("/blog-de-noticias/")({
  component: Blog,
});

function Blog() {
  return (
    <>
      <Main className="bg-tan-100 w-full xl:py-24">
        <div className="max-w-6xl mx-auto xl:pb-16 px-4 xl:px-2">
          <h1 className="text-[clamp(5rem,5vw,5rem)] text-tan-700 font-cabinet font-black xl:pb-24">
            Blog <span className="text-tan-400">de Notícias</span>
          </h1>

          <div className="w-full flex flex-col gap-y-32 divide-y divide-dashed divide-tan-300">
            <article className="w-full flex gap-12 not-last:pb-32">
              <aside className="flex-1">
                <ul className="text-sm text-bone-400 font-mono leading-none h-5 flex flex-col gap-y-4">
                  <li className="flex items-center gap-x-2">
                    <CalendarClock /> 24 de abril de 2026
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Tag /> Atividades do Projeto
                  </li>
                  <li className="flex items-center gap-x-2">
                    <MapPin /> Nova Xavantina - MT
                  </li>
                </ul>
              </aside>
              <div className="flex-4 flex-col gap-y-16">
                <h2 className="text-5xl text-tan-700 font-black leading-13 -mt-2">
                  Equipe do Projeto Caminhos do Brasil Central participa do encontro dos pioneiros em Nova Xavantina -
                  MT
                </h2>
                <div className="mt-16 flex gap-8">
                  <div className="rounded-lg h-100 flex-2">
                    <img className="rounded-lg h-full w-full object-cover" src="/images/experiments/1.webp" alt="" />
                  </div>
                  <div
                    className={cn(
                      "flex-4 flex flex-col gap-y-8 justify-between [&_p]:text-lg [&_p]:text-tan-700",
                      "[&_p]:font-medium [&_p]:leading-7 [&_p]:text-justify [&_p]:hyphens-auto",
                    )}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium eaque magnam nesciunt
                      necessitatibus inventore ducimus, quaerat soluta voluptates omnis, officia voluptate tempora in!
                      Nulla, dolore suscipit! Inventore culpa, voluptatem, eaque iusto repudiandae totam dolores,
                      dolorum quod ipsa aliquid hic. Ad ipsa, modi nemo maxime, debitis ipsum suscipit nam numquam nisi
                      fugiat, corporis perspiciatis! Rerum rem commodi sunt quae quia! Cupiditate aliquid nesciunt
                      similique aliquam laboriosam illum enim voluptates tenetur blanditiis inventore asperiores sed
                      corporis culpa, distinctio sit suscipit eveniet.
                    </p>
                    <ButtonLinkWithIcon
                      textButton="Leia mais"
                      link="./caverna"
                      bgColor="bg-chocolate-300 hover:bg-chocolate-500 text-white"
                      iconColor="bg-white text-chocolate-800"
                      target={false}
                    />
                  </div>
                </div>
              </div>
            </article>

            <article className="w-full flex gap-12">
              <aside className="flex-1">
                <ul className="text-sm text-bone-400 font-mono leading-none h-5 flex flex-col gap-y-4">
                  <li className="flex items-center gap-x-2">
                    <CalendarClock /> 10 março de 2026
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Tag /> Atividades do Projeto
                  </li>
                  <li className="flex items-center gap-x-2">
                    <MapPin /> Água Boa - MT
                  </li>
                </ul>
              </aside>
              <div className="flex-4 flex-col gap-y-16">
                <h2 className="text-5xl text-tan-700 font-black leading-13 -mt-2">
                  Prof. Luiz Gabriel realiza palestra para estudantes secundaristas no município de Água Boa - MT
                </h2>
                <div className="mt-16 flex gap-8">
                  <div className="rounded-lg h-100 flex-2">
                    <img className="rounded-lg h-full w-full object-cover" src="/images/experiments/3.webp" alt="" />
                  </div>
                  <div
                    className={cn(
                      "flex-4 flex flex-col gap-y-8 justify-between [&_p]:text-lg [&_p]:text-tan-700",
                      "[&_p]:font-medium [&_p]:leading-7 [&_p]:text-justify [&_p]:hyphens-auto",
                    )}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium eaque magnam nesciunt
                      necessitatibus inventore ducimus, quaerat soluta voluptates omnis, officia voluptate tempora in!
                      Nulla, dolore suscipit! Inventore culpa, voluptatem, eaque iusto repudiandae totam dolores,
                      dolorum quod ipsa aliquid hic. Ad ipsa, modi nemo maxime, debitis ipsum suscipit nam numquam nisi
                      fugiat, corporis perspiciatis! Rerum rem commodi sunt quae quia! Cupiditate aliquid nesciunt
                      similique aliquam laboriosam illum enim voluptates tenetur blanditiis inventore asperiores sed
                      corporis culpa, distinctio sit suscipit eveniet.
                    </p>
                    <ButtonLinkWithIcon
                      textButton="Saiba mais"
                      link="Leia mais"
                      bgColor="bg-chocolate-300 hover:bg-chocolate-500 text-white"
                      iconColor="bg-white text-chocolate-800"
                      target={false}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>

          <Pagination />
        </div>
      </Main>
    </>
  );
}
