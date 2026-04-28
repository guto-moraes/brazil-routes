import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { CalendarClock, MapPin, Tag, User } from "lucide-react";
import { cn, sanitizedData } from "@/lib/utils";
import { useQueryNews } from "@/hooks/queries/posts-queries";

export const Route = createFileRoute("/blog-de-noticias/{-$slug}")({
  head: () => ({
    meta: [
      {
        title: "{-$slug} | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Noticias das atividades realizadas pelo Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/blog-de-noticias/{-$slug}",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams()
  const { data } = useQueryNews(slug ?? "");

  return (
    <Main className="bg-tan-100 w-full xl:py-24">
      <div className="w-full max-w-6xl mx-auto">
        {
          data && (
            <article className="flex flex-col lg:flex-row gap-16">
              <aside className="flex-2">
                <ul className="text-sm text-bone-400 font-mono leading-none h-5 flex flex-col gap-y-4">
                  <li className="flex items-center gap-x-2">
                    <CalendarClock /> {new Intl.DateTimeFormat("pt-BR").format(new Date(data.post.date))}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <User /> {data.post.news.author ? data.post.news.author : data.post.author.node.name}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Tag /> {data.post.tags.nodes[0].name}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <MapPin /> {data.post.news.location}
                  </li>
                </ul>
              </aside>
              <div
                className={cn(
                  "flex-5 flex flex-col gap-y-8 ",
                )}
              >
                <h1 className="text-[clamp(3rem,4vw,3.5rem)] text-tan-700 font-black leading-15 -mt-2 mb-16">
                  {data.post.title}
                </h1>
                <div className={cn(
                  "[&_p]:text-xl [&_p]:text-tan-700 [&_p]:leading-7 [&_p]:text-justify [&_p]:hyphens-auto [&_p]:not-last:mb-12",
                  "[&_.image]:not-last:mb-12 [&_blockquote_p]:text-[1.75rem] [&_blockquote_p]:leading-8 [&_blockquote_p]:text-left",
                  "[&_blockquote]:pl-4 [&_blockquote]:mb-12 [&_blockquote]:border-l-5 [&_blockquote]:border-mate-500"
                )}
                  dangerouslySetInnerHTML={sanitizedData(data.post.content)}
                />
              </div>
            </article>

          )
        }
      </div>
    </Main>
  );
}
