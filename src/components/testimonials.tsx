"use client";

import React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import dico from "@/assets/images/historias-de-pessoas/raimundo-pereira-dos-santos.webp";
import porto from "@/assets/images/historias-de-pessoas/jose-batista-porto.webp";
import adao from "@/assets/images/historias-de-pessoas/adao-de-souza-gomes.webp";
import abraao from "@/assets/images/historias-de-pessoas/abraao-barros-dos-santos_.webp";

type TestimonialsTypes = {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
}

const testimonials: TestimonialsTypes[] = [
  {
    name: "Raimundo Pereira dos Santos (Seu Dico)",
    role: "Ex-funcionário da FBC",
    avatar: dico,
    testimonial:
      "A gente tem um interesse muito grande que não 'acaba' a história da Expedição Roncador-Xingu. Aquela coisa foi tão fantástica que você não pode deixar acabar.",
  },
  {
    name: "José Batista Porto",
    role: "Ex-funcionário da FBC",
    avatar: porto,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolores placeat repellat fugit neque, aliquid animi deleniti iste velit, fugiat distinctio.",
  },
  {
    name: "Adão Gomes de Souza",
    role: "Ex-funcionário da FBC",
    avatar: adao,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione inventore voluptatibus laudantium voluptates nam.",
  },
  {
    name: "Abrão Barros dos Santos",
    role: "Ex-funcionário da FBC",
    avatar: abraao,
    testimonial:
      "Iste, veritatis in laudantium ratione deserunt saepe sit maxime mollitia praesentium eos aperiam. Id quos eius eos officia obcaecati!",
  },
];

console.log(testimonials.length)

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <div className="mx-auto mt-20 max-w-248 md:mt-16 md:px-12">
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map(({ name, avatar, role, testimonial }, index) => (
              <CarouselItem key={index}>
                <div className="relative flex gap-8 rounded-lg border border-tan-200 bg-tan-100 p-8 pt-16 pr-8 md:pt-8">
                  {/* Quote */}
                  <span className="absolute top-3 left-6.5 font-satoshi text-8xl md:hidden">
                    &ldquo;
                  </span>

                  <div className="flex flex-col gap-2">
                    <p className="grow font-medium text-lg text-bone-600 leading-relaxed tracking-tight sm:text-xl sm:leading-[1.45] lg:text-2xl">
                      {testimonial}
                    </p>
                    <div className="mt-6 flex items-center gap-2 md:mt-0">
                      <div className="flex flex-col">
                        <p className="text-bone-700 text-lg font-medium leading-none">{name}</p>
                        <p className="text-sm text-bone-400">{role}</p>
                      </div>
                    </div>
                  </div>
                  <figure className="hidden size-60 min-w-60 max-w-60 rounded-lg md:flex overflow-hidden">
                    <img
                      alt=""
                      className="h-full w-full object-cover object-top"
                      src={avatar}
                    />
                  </figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className={cn(
            "-top-2.5 right-2 ml-auto -translate-x-full -translate-y-full md:top-1/2 cursor-pointer",
            "md:-left-12 md:m-0 md:translate-x-0 md:-translate-y-1/2 lg:md:-left-16"
          )} />
          <CarouselNext className={cn(
            "-top-2.5 right-0 ml-auto -translate-y-full md:top-1/2 cursor-pointer",
            "md:-right-12 md:m-0 md:-translate-y-1/2 lg:md:-right-16"
          )} />
        </Carousel>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              className={cn("h-3.5 w-3.5 rounded-full border-2 border-bone-200 cursor-pointer", {
                "border-bone-500": current === index + 1,
              })}
              key={index}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
