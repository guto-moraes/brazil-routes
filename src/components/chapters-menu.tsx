import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const chapterIndex = [
  {
    title: "Capítulo 1",
    link: "/almanaque-digital/capitulo-1",
  },
  {
    title: "Capítulo 2",
    link: "/almanaque-digital/capitulo-2",
  },
  {
    title: "Capítulo 3",
    link: "/almanaque-digital/capitulo-3",
  },
  {
    title: "Capítulo 4",
    link: "/almanaque-digital/capitulo-4",
  },
  {
    title: "Capítulo 5",
    link: "/almanaque-digital/capitulo-5",
  },
];

const ChaptersMenu = () => {
  return (
    <div className="flex-7 flex flex-col gap-y-8 justify-center items-start">
      <h3 className="text-2xl text-bone-400 uppercase tracking-tighter pl-4">Índice</h3>
      <ul
        role="menu"
        className={cn(
          "w-full flex flex-col",
          "[&_a]:text-[clamp(1.5rem,5vw,1.85rem)] [&_li]:text-bone-600 [&_li:hover]:text-bone-50",
          "[&_a]:font-semibold [&_a]:uppercase [&_a]:leading-8 [&_a]:tracking-tighter [&_li]:transition-all [&_li]:duration-500",
          "[&_li:hover]:bg-bone-400 [&_li]:py-2 [&_li:hover]:translate-x-4 [&_li_a]:pl-4",
        )}
      >
        {chapterIndex.map((item, index) => (
          <li role="presentation" key={index}>
            <Link role="menuitem" to={item.link} title={item.title}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaptersMenu;
