"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import Timeline from "@/components/timeline";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Route = createFileRoute("/testando")({
  component: Testing,
});

function Testing() {
  const min = 1930;
  const max = 1967;
  const skipInterval = 1;
  const ticks = Array.from({ length: (max - min) / skipInterval + 1 }, (_, index) => min + index * skipInterval);
  const [year, setYear] = useState(1930);

  return (
    <>
      <h3 className="text-5xl text-bone-600">{year}</h3>
      <div className="bg-bone-900 h-20 w-full flex items-center fixed bottom-0 left-0 z-100 overflow-hidden">
        <div className="w-[95%] mx-auto py-20">
          <Slider
            // defaultValue={year}
            min={min}
            max={max}
            step={skipInterval}
            onValueChange={(vals) => setYear(Number(vals))}
            className="timeline-range"
          />
          <span
            aria-hidden="true"
            className="text-bone-200 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
          >
            {ticks.map((tick) => (
              <span key={tick} className="flex w-0 flex-col items-center justify-center gap-2">
                <span className={cn("bg-bege-50 h-1.5 w-px", tick % skipInterval !== 0 && "h-1")} />
                <Link
                  to="/testando"
                  hash={String(tick)}
                  className={cn(
                    "hover:scale-150 transition-all duration-400 cursor-pointer",
                    tick % skipInterval !== 0 && "opacity-0",
                    tick === Number(year) && "text-white font-bold scale-200",
                  )}
                  onClick={() => setYear(tick)}
                >
                  {tick}
                </Link>
              </span>
            ))}
          </span>
        </div>
      </div>
      <Timeline />
    </>
  );
}
