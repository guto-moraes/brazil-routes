import { createFileRoute } from "@tanstack/react-router";
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
  const [value, setValue] = useState(min);

  return (
    <>
      <div className="bg-bone-900 h-20 w-full flex items-center fixed bottom-0 left-0 z-100 overflow-hidden">
        <div className="w-[95%] mx-auto py-20">
          <Slider
            defaultValue={value}
            min={min}
            max={max}
            step={skipInterval}
            onValueChange={(vals) => setValue(Number(vals))}
            className="timeline-range"
          />
          <span
            aria-hidden="true"
            className="text-bone-200 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
          >
            {ticks.map((tick) => (
              <span key={tick} className="flex w-0 flex-col items-center justify-center gap-2">
                <span className={cn("bg-bone-200 h-1.5 w-px", tick % skipInterval !== 0 && "h-1")} />
                <a
                  href={`#${tick}`}
                  className={cn(
                    "transition-all duration-200",
                    tick % skipInterval !== 0 && "opacity-0",
                    tick === value && "text-white font-bold scale-200",
                  )}
                  onClick={() => setValue(tick)}
                >
                  {tick}
                </a>
              </span>
            ))}
          </span>
        </div>
      </div>
      <Timeline />
    </>
  );
}
