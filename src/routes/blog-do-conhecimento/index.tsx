import { createFileRoute } from "@tanstack/react-router";
import { useQueryState } from "nuqs";
import { cn, sanitizedData } from "@/lib/utils";
import Main from "@/layouts/main";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import { CalendarClock, CalendarSync, MapPin, Tag, User } from "lucide-react";
import Pagination from "@/components/pagination";
import { useQueryBlogNews } from "@/hooks/queries/pages-and-posts-queries";
import { dateFormat } from "@/lib/dateFormatting";

export const Route = createFileRoute("/blog-do-conhecimento/")({
  head: () => ({
    meta: [
      {
        title: "Blog do Conhecimento | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Postagens sobre a temática da Expedição Roncador-Xingu, da Fundação Brasil Central e noticias das atividades realizadas pelo Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/blog-do-conhecimento/",
      },
    ],
  }),
  component: RouteComponent,
});

const MAX_ITEMS = 5; // Max pages listing in pagination
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const LIMIT = 1; // Number of posts to fetch per request

function RouteComponent() {
  const [offset, setOffset] = useQueryState("offset");
  const { posts } = useQueryBlogNews(LIMIT, offset ? Number(offset) : 0).data || {};

  const pages = posts ? Math.ceil((posts.pageInfo.offsetPagination.total ?? 0) / LIMIT) : 0; // Check if total pages is bigger that LIMIT

  const handlePagination = (page: number) => {
    setOffset(String(Number((page - 1) * LIMIT)));
  };

  return (
    <Main className="w-full xl:py-24">
      <div className="max-w-6xl mx-auto xl:pb-16 px-4 xl:px-2">
        <h1 className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black xl:pb-24">
          Blog do <span className="text-tan-400">Conhecimento</span>
        </h1>

        <div className="w-full flex flex-col gap-y-32 divide-y divide-dashed divide-tan-300">
          {posts &&
            posts.nodes.map((post) => {
              const isUpdadatedPost = post.modified !== post.date ? true : false;
              return (
                <article className="w-full flex gap-12 not-last:pb-32" key={post.id}>
                  <aside className="flex-2">
                    <ul className="text-sm font-mono leading-none h-5 flex flex-col gap-y-4">
                      <li className="flex items-center gap-x-2">
                        <CalendarClock className="text-bone-300" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">{dateFormat(post.date)}</span>
                      </li>
                      {isUpdadatedPost && (
                        <li className="flex items-center gap-x-2">
                          <CalendarSync className="text-bone-300" />{" "}
                          <span className="text-mate-600/60 tracking-tighter">
                            Atualizada em {dateFormat(post.modified)}
                          </span>
                        </li>
                      )}
                      <li className="flex items-center gap-x-2">
                        <User className="text-bone-300" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">
                          {post.news.author ? post.news.author : post.author.node.name}
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <Tag className="text-bone-300" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">{post.tags.nodes[0].name}</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <MapPin className="text-bone-300" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">{post.news.location}</span>
                      </li>
                    </ul>
                  </aside>
                  <div className="flex-5 flex-col gap-y-16">
                    <h2 className="text-5xl text-tan-700 font-black leading-13 -mt-2">{post.title}</h2>
                    <div className="mt-16 flex gap-8">
                      <div className="rounded-lg h-100 flex-2">
                        <img
                          className="rounded-lg h-full w-full object-cover"
                          src={post.featuredImage.node.guid}
                          alt=""
                        />
                      </div>
                      <div className="flex-4 flex flex-col gap-y-8 justify-between">
                        <div
                          className={cn(
                            "w-full flex flex-col gap-y-8 justify-between [&_p]:text-lg [&_p]:text-tan-700",
                            "[&_p]:font-medium [&_p]:leading-7 [&_p]:text-justify [&_p]:hyphens-auto",
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
              );
            })}
        </div>

        {posts && pages > 1 && (
          <Pagination
            hasPrevious={posts.pageInfo.offsetPagination.hasPrevious}
            hasNext={posts.pageInfo.offsetPagination.hasMore}
            offset={Number(offset)}
            total={posts.pageInfo.offsetPagination.total}
            limit={LIMIT}
            maxItems={MAX_ITEMS}
            maxLeft={MAX_LEFT}
            handlePagination={handlePagination}
          />
        )}
      </div>
    </Main>
  );
}
