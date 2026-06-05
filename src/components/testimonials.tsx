"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useQuerySocialImpactPage } from "@/hooks/queries/pages-and-posts-queries";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const { testimonials } = useQuerySocialImpactPage().data.page.socialImpact;

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
            {testimonials.map(({ name, role, text, image }, index) => (
              <CarouselItem key={index}>
                <div className="relative flex gap-8 rounded-lg bg-tan-100 dark:bg-dark-900 border border-tan-200 dark:border-dark-950 p-8 pt-16 pr-8 md:pt-8">
                  {/* Quote */}
                  <span className="absolute top-3 left-6.5 font-cabinet text-[12rem] text-tan-400 dark:text-dark-700 leading-[0.8] md:hidden">
                    &ldquo;
                  </span>

                  <div className="flex flex-col gap-2">
                    <p className="grow font-medium text-lg text-bone-600 dark:text-white leading-relaxed tracking-tight sm:text-xl sm:leading-[1.45] lg:text-2xl">
                      {text}
                    </p>
                    <div className="mt-6 flex items-center gap-2 md:mt-0">
                      <div className="flex flex-col">
                        <p className="text-blue-retro-700 dark:text-dark-contrast-100 text-lg font-medium leading-none">{name}</p>
                        <p className="text-sm text-bone-400 dark:text-dark-300">{role}</p>
                      </div>
                    </div>
                  </div>
                  <figure className="hidden size-60 min-w-60 max-w-60 rounded-lg md:flex overflow-hidden">
                    <img
                      alt=""
                      className="h-full w-full object-cover object-top"
                      src={image.node.sourceUrl}
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
