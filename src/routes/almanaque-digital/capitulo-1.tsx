import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/almanaque-digital/capitulo-1")({
  component: FirstChapter,
});

function FirstChapter() {
  const [open, setOpen] = useState(false);
  const indexRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (indexRef.current) {
      setOpen(!open);
      indexRef.current.classList.toggle("open");
    }
  };

  return (
    <Main className="relative h-[calc(100svh-104px)] w-full overflow-x-hidden">
      <div
        className={cn(
          "bg-tan-100 h-full w-140 absolute top-0 left-0 -translate-x-130 data-[open=true]:translate-x-0",
          "transition-transform duration-500 ease-in-out z-5",
        )}
        ref={indexRef}
        data-open={open}
      >
        <div className="h-full w-110 absolute top-1/2 left-0 -translate-y-1/2 pl-8 flex justify-start items-center">
          <ul role="list" className={cn(
            "flex flex-col gap-y-2 [&_a]:text-[clamp(1.8rem,5vw,4rem)] [&_a]:text-bone-400",
            "[&_a:hover]:text-bone-500 [&_a]:font-cabinet [&_a]:font-black [&_a]:leading-none",
            "[&_a]:transition-colors [&_a]:duration-300"
          )}>
            <li role="presentation">
              <Link to="/almanaque-digital/capitulo-1" title="Capítulo 1">
                Capítulo 1
              </Link>
            </li>
            <li role="presentation">
              <Link to="/almanaque-digital/capitulo-1" title="Capítulo 2">
                Capítulo 2
              </Link>
            </li>
            <li role="presentation">
              <Link to="/almanaque-digital/capitulo-1" title="Capítulo 3">
                Capítulo 3
              </Link>
            </li>
            <li role="presentation">
              <Link to="/almanaque-digital/capitulo-1" title="Capítulo 4">
                Capítulo 4
              </Link>
            </li>
            <li role="presentation">
              <Link to="/almanaque-digital/capitulo-1" title="Capítulo 5">
                Capítulo 5
              </Link>
            </li>
          </ul>
        </div>
        <button
          className={cn(
            "text-xl text-bone-800 hover:text-bone-600 font-inter font-medium leading-[0.85] tracking-tighter uppercase",
            "absolute top-1/2 -right-65 translate-y-1/2 transform -rotate-90 cursor-pointer transition-color duration-300",
            "w-full h-10 bg-bone-200"
          )}
          onClick={handleOpen}
        >
          {!open ? "Abrir Índice" : "Fechar Índice"}
        </button>
      </div>

      <section className="h-full w-[calc(100%-40px)] ml-10">
          <Title className="text-8xl text-tan-600 max-w-6xl mx-auto">
            Capítulo <span className="text-tan-400">1</span>
          </Title>
      </section>
    </Main>
  );
}
