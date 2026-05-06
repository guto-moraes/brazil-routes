import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const ChaptersMenu = () => {
  const [open, setOpen] = useState(false);
  const indexRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (indexRef.current) {
      setOpen(!open);
      indexRef.current.classList.toggle("open");
    }
  };

  return (
    <div
      className={cn(
        "bg-bone-100 h-full w-140 flex fixed top-26 left-0 -translate-x-122.5",
        "data-[open=true]:translate-0 origin-left transition-transform duration-500 z-20",
      )}
      data-open={open}
      ref={indexRef}
    >
      <div className="flex-7 flex flex-col gap-y-8 justify-center items-start">
        <h3 className="text-2xl text-bone-400 uppercase tracking-tighter pl-4 lg:pl-8 xl:pl-16">Índice</h3>
        <ul
          role="menu"
          className={cn(
            "w-full flex flex-col pl-4 lg:pl-8 xl:pl-12",
            "[&_a]:text-[clamp(1.8rem,5vw,2.75rem)] [&_li]:text-bone-600 [&_li:hover]:text-bone-100",
            "[&_a]:font-black [&_a]:font-cabinet [&_a]:leading-12 [&_li]:transition-all [&_li]:duration-500",
            "[&_li:hover]:bg-bone-400 [&_li]:py-2 [&_li:hover]:translate-x-4 [&_li_a]:pl-4",
          )}
        >
          <li role="presentation">
            <Link role="menuitem" to="/almanaque-digital/capitulo-1" title="Capítulo 1">
              Capítulo 1
            </Link>
          </li>
          <li role="presentation">
            <Link role="menuitem" to="/almanaque-digital/capitulo-2" title="Capítulo 2">
              Capítulo 2
            </Link>
          </li>
          <li role="presentation">
            <Link role="menuitem" to="/almanaque-digital/capitulo-3" title="Capítulo 3">
              Capítulo 3
            </Link>
          </li>
          <li role="presentation">
            <Link role="menuitem" to="/almanaque-digital/capitulo-4" title="Capítulo 4">
              Capítulo 4
            </Link>
          </li>
          <li role="presentation">
            <Link role="menuitem" to="/almanaque-digital/capitulo-5" title="Capítulo 5">
              Capítulo 5
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 relative h-full w-full">
        <button
          className={cn(
            "h-17.5 w-[calc(100svh-104px)] text-2xl text-bone-600 hover:text-bone-500",
            "font-semibold uppercase absolute top-1/2 left-0 -translate-y-1/2",
            "-translate-x-98 -rotate-90 scale-100 data-[open=true]:scale-0",
            "ease-in cursor-pointer transition-all duration-500",
          )}
          data-open={open}
          onClick={handleOpen}
        >
          Abrir índice
        </button>
        <button
          className={cn(
            "bg-black/30 hover:bg-black/50 rounded-full size-10 absolute top-4 left-1/2",
            "-translate-x-1/2 grid place-content-center scale-0 data-[open=true]:scale-100",
            "transition-all delay-300 duration-300 ease-in cursor-pointer",
          )}
          data-open={open}
          onClick={handleOpen}
        >
          <X className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChaptersMenu;
