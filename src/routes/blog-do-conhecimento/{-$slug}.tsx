import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { CalendarClock, MapPin, Tag, User } from "lucide-react";
import { cn, sanitizedData } from "@/lib/utils";
import { useQueryNews } from "@/hooks/queries/posts-queries";

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

  return (
    <Main className="bg-tan-100 w-full xl:py-24">
      <div className="w-full max-w-6xl mx-auto">
        {data && (
          <article className="flex flex-col lg:flex-row gap-16">
            <aside className="min-w-72.5">
              <ul className="text-sm font-mono leading-none h-5 flex flex-col gap-y-4">
                <li className="flex items-center gap-x-2">
                  <CalendarClock className="text-bone-300" />{" "}
                  <span className="text-mate-600/60 tracking-tighter">
                    {new Intl.DateTimeFormat("pt-BR").format(new Date(data.post.date))}
                  </span>
                </li>
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
            <div className={cn("flex-5 flex flex-col gap-y-8 max-w-195")}>
              <h1 className="text-[clamp(3rem,4vw,3.5rem)] text-tan-700 font-black leading-15 -mt-2 mb-16">
                {data.post.title}
              </h1>
              <div
                className={cn(
                  "[&_p]:text-base [&_p]:md:text-lg [&_p]:xl:text-xl [&_p]:text-tan-700 [&_p]:leading-7 [&_p]:text-justify [&_p]:hyphens-auto [&_p]:not-last:mb-8",
                  "[&_.image]:not-last:mb-8 [&_blockquote_p]:text-[1.75rem] [&_blockquote_p]:leading-8 [&_blockquote_p]:text-left [&_blockquote]:pl-4",
                  "[&_blockquote]:mb-12 [&_blockquote]:border-l-5 [&_blockquote]:border-mate-500 [&_hr.wp-block-separator]:border-tan-600/25",
                  "[&_sup.fn]:text-mate-500 [&_sup.fn]:font-semibold [&_hr.wp-block-separator]:mb-6 [&_ol.wp-block-footnotes]:text-tan-600",
                  "[&_ol.wp-block-footnotes]:list-decimal [&_ol.wp-block-footnotes]:text-sm [&_ol.wp-block-footnotes]:ml-4 [&_figure]:rounded-lg [&_figure]:relative",
                  "[&_figure]:w-max! [&_figure]:max-w-full! [&_figure]:mx-auto! [&_figure]:mb-16! [&_figure_img]:rounded-lg [&_figure_img]:h-full",
                  "[&_figure_img]:max-h-full [&_figure_img]:w-full [&_figure_img]:max-w-full [&_figure_img]:object-contain! [&_figure_figcaption]:absolute",
                  "[&_figure_figcaption]:bg-black/40 [&_figure_figcaption]:text-xs [&_figure_figcaption]:top-0 [&_figure_figcaption]:right-0",
                  "[&_figure_figcaption]:rounded-tr-lg [&_figure_figcaption]:rounded-bl-lg [&_figure_figcaption]:text-white [&_figure_figcaption]:p-2",
                  "[&_h2.wp-block-heading]:text-3xl [&_h2.wp-block-heading]:text-chocolate-500 [&_h2.wp-block-heading]:font-black [&_h2.wp-block-heading]:mb-8"
                )}
                dangerouslySetInnerHTML={sanitizedData(data.post.content)}
              />
            </div>
          </article>
        )}
      </div>
    </Main>
  );
}
