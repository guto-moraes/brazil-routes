import Main from "@/layouts/main";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, MapPin, Tag } from "lucide-react";

export const Route = createFileRoute("/blog-de-noticias/{-$slug}")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Main className="bg-tan-100 w-full xl:py-24">
      <div className="w-full max-w-6xl mx-auto">
        <article className="flex flex-col lg:flex-row gap-16">
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
          <div
            className={cn(
              "flex-4 [&_p]:text-xl [&_p]:text-tan-700 [&_p]:leading-7 [&_p]:text-justify",
              "[&_p]:hyphens-auto [&_p]:not-last:mb-12 [&_.image]:not-last:mb-12",
            )}
          >
            <h1 className="text-[clamp(3rem,4vw,3.5rem)] text-tan-700 font-black leading-15 -mt-2 mb-16">
              Equipe do Projeto Caminhos do Brasil Central participa do encontro dos pioneiros em Nova Xavantina - MT
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium eaque magnam nesciunt
              necessitatibus inventore ducimus, quaerat soluta voluptates omnis, officia voluptate tempora in! Nulla,
              dolore suscipit! Inventore culpa, voluptatem, eaque iusto repudiandae totam dolores, dolorum quod ipsa
              aliquid hic. Ad ipsa, modi nemo maxime, debitis ipsum suscipit nam numquam nisi fugiat, corporis
              perspiciatis! Rerum rem commodi sunt quae quia! Cupiditate aliquid nesciunt similique aliquam laboriosam
              illum enim voluptates tenetur blanditiis inventore asperiores sed corporis culpa, distinctio sit suscipit
              eveniet.
            </p>

            <div className="image w-full h-1/3">
              <img src="/images/experiments/2.webp" alt="" className="w-full h-full object-cover" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium eaque magnam nesciunt
              necessitatibus inventore ducimus, quaerat soluta voluptates omnis, officia voluptate tempora in! Nulla,
              dolore suscipit! Inventore culpa, voluptatem, eaque iusto repudiandae totam dolores, dolorum quod ipsa
              aliquid hic. Ad ipsa, modi nemo maxime, debitis ipsum suscipit nam numquam nisi fugiat, corporis
              perspiciatis! Rerum rem commodi sunt quae quia! Cupiditate aliquid nesciunt similique aliquam laboriosam
              illum enim voluptates tenetur blanditiis inventore asperiores sed corporis culpa, distinctio sit suscipit
              eveniet.
            </p>
          </div>
        </article>
      </div>
    </Main>
  );
}
