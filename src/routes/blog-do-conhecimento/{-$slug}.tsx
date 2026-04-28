import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { CalendarClock, CalendarSync, MapPin, Tag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQueryNews } from "@/hooks/queries/pages-and-posts-queries";
import ArticleContent from "@/components/article-content";
import Title from "@/components/title";
import { dateFormat } from "@/lib/dateFormatting";

export const Route = createFileRoute("/blog-do-conhecimento/{-$slug}")({
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
        href: "https://caminhosdobrasilcentral.com/blog-do-conhecimento/{-$slug}",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const { data } = useQueryNews(slug ?? "");

  const isUpdadatedPost = data?.post.modified !== data?.post.date ? true : false;

  return (
    <Main className="w-full xl:py-24">
      <div className="w-full max-w-6xl mx-auto">
        {data && (
          <article className="flex flex-col lg:flex-row gap-16">
            <aside className="min-w-72.5">
              <ul className="text-sm font-mono leading-none h-5 flex flex-col gap-y-4">
                <li className="flex items-center gap-x-2">
                  <CalendarClock className="text-bone-300" />{" "}
                  <span className="text-mate-600/60 tracking-tighter">
                    {dateFormat(data.post.date)}
                  </span>
                </li>
                {isUpdadatedPost && (
                  <li className="flex items-center gap-x-2">
                    <CalendarSync className="text-bone-300" />{" "}
                    <span className="text-mate-600/60 tracking-tighter">
                      Atualizada em {dateFormat(data.post.modified)}
                    </span>
                  </li>
                )}
                <li className="flex items-center gap-x-2">
                  <User className="text-bone-300" />{" "}
                  <span className="text-mate-600/60 tracking-tighter">
                    {data.post.news.author ? data.post.news.author : data.post.author.node.name}
                  </span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Tag className="text-bone-300" />{" "}
                  <span className="text-mate-600/60 tracking-tighter">{data.post.tags.nodes[0].name}</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <MapPin className="text-bone-300" />{" "}
                  <span className="text-mate-600/60 tracking-tighter">{data.post.news.location}</span>
                </li>
              </ul>
            </aside>
            <div className={cn("flex-5 flex flex-col items-start gap-y-8 max-w-195!")}>
              <Title className="text-[clamp(3rem,4vw,3.5rem)] text-tan-700 font-black leading-15 py-0! -mt-2 mb-8">
                {data.post.title}
              </Title>
              <ArticleContent content={data.post.content} />
            </div>
          </article>
        )}
      </div>
    </Main>
  );
}
