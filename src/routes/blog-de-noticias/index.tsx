import { createFileRoute } from "@tanstack/react-router";
import { cn, sanitizedData } from "@/lib/utils";
import Main from "@/layouts/main";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import { CalendarClock, MapPin, Tag, User } from "lucide-react";
import Pagination from "@/components/pagination";
import { useQueryBlogNews } from "@/hooks/queries/posts-queries";

export const Route = createFileRoute("/blog-de-noticias/")({
  head: () => ({
    meta: [
      {
        title: "Blog de Notícias | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Noticias das atividades realizadas pelo Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/blog-de-noticias/",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { posts } = useQueryBlogNews().data;

  return (
    <Main className="bg-tan-100 w-full xl:py-24">
      <div className="max-w-6xl mx-auto xl:pb-16 px-4 xl:px-2">
        <h1 className="text-[clamp(5rem,5vw,5rem)] text-tan-700 font-cabinet font-black xl:pb-24">
          Blog <span className="text-tan-400">de Notícias</span>
        </h1>

        <div className="w-full flex flex-col gap-y-32 divide-y divide-dashed divide-tan-300">
          {posts.nodes.map((post) => (
            <article className="w-full flex gap-12 not-last:pb-32">
              <aside className="flex-2">
                <ul className="text-sm text-bone-400 font-mono leading-none h-5 flex flex-col gap-y-4">
                  <li className="flex items-center gap-x-2">
                    <CalendarClock /> {new Intl.DateTimeFormat("pt-BR").format(new Date(post.date))}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <User /> {post.news.author ? post.news.author : post.author.node.name}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <Tag /> {post.tags.nodes[0].name}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <MapPin /> {post.news.location}
                  </li>
                </ul>
              </aside>
              <div className="flex-5 flex-col gap-y-16">
                <h2 className="text-5xl text-tan-700 font-black leading-13 -mt-2">{post.title}</h2>
                <div className="mt-16 flex gap-8">
                  <div className="rounded-lg h-100 flex-2">
                    <img className="rounded-lg h-full w-full object-cover" src={post.featuredImage.node.guid} alt="" />
                  </div>
                  <div className="flex-4 flex flex-col gap-y-8 justify-between">
                    <div
                      className={cn(
                        "w-full flex flex-col gap-y-8 justify-between [&_p]:text-lg ",
                        "[&_p]:text-tan-700 [&_p]:font-medium [&_p]:leading-7 [&_p]:text-justify [&_p]:hyphens-auto [&_p]:line-clamp-10",
                      )}
                      dangerouslySetInnerHTML={sanitizedData(post.excerpt)}
                    />

                    <ButtonLinkWithIcon
                      textButton="Leia mais"
                      link={`./${post.slug}`}
                      bgColor="bg-chocolate-300 hover:bg-chocolate-500 text-white"
                      iconColor="bg-white text-chocolate-800"
                      target={false}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Pagination />
      </div>
    </Main>
  );
}
