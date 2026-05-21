import { createFileRoute } from "@tanstack/react-router";
import { useQueryState } from "nuqs";
import { cn, sanitizedData } from "@/lib/utils";
import Main from "@/layouts/main";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import { CalendarClock, CalendarSync, MapPin, Tag, User } from "lucide-react";
import Pagination from "@/components/pagination";
import { useQueryBlogNews } from "@/hooks/queries/pages-and-posts-queries";
import { dateFormat } from "@/lib/dateFormatting";
import { Title, TitleH2 } from "@/components/title";

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
    <Main className="w-full pb-12">
      <div className="max-w-6xl mx-auto xl:pb-16 px-4 xl:px-2">
        <Title>
          Blog do <span className="text-tan-400">Conhecimento</span>
        </Title>

        <div className="w-full flex flex-col gap-y-10 sm:gap-y-8 md:gap-y-12 lg:gap-y-16 divide-y divide-dashed divide-tan-300">
          {posts &&
            posts.nodes.map((post) => {
              const isUpdadatedPost = post.modified !== post.date ? true : false;
              return (
                <article className="w-full flex flex-col md:flex-row gap-12 not-last:pb-10 lg:not-last:pb-16" key={post.id}>
                  <aside className="flex md:flex-2">
                    <ul className="text-xs sm:text-sm font-mono leading-none h-5 flex flex-col gap-2 sm:gap-y-4">
                      <li className="flex items-center gap-x-2">
                        <CalendarClock className="size-5 sm:size-6 text-bone-400" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">{dateFormat(post.date)}</span>
                      </li>
                      {isUpdadatedPost && (
                        <li className="flex items-center gap-x-2">
                          <CalendarSync className="size-5 sm:size-6 text-bone-400" />{" "}
                          <span className="text-mate-600/60 tracking-tighter">
                            Atualizada em {dateFormat(post.modified)}
                          </span>
                        </li>
                      )}
                      <li className="flex items-center gap-x-2">
                        <User className="size-5 sm:size-6 text-bone-400" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">
                          {post.news.author ? post.news.author : post.author.node.name}
                        </span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <Tag className="size-5 sm:size-6 text-bone-400" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">{post.tags.nodes[0].name}</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        <MapPin className="size-5 sm:size-6 text-bone-400" />{" "}
                        <span className="text-mate-600/60 tracking-tighter">{post.news.location}</span>
                      </li>
                    </ul>
                  </aside>
                  <div className="flex-1: md:flex-5 flex-col gap-y-8 md:gap-y-16">
                    <TitleH2 className="text-[clamp(1.5rem,5vw,3.25rem)] leading-none max-sm:mt-16 py-0!">{post.title}</TitleH2>
                    <div className="md:mt-16 flex flex-col md:flex-row gap-8">
                      <figure className="rounded-lg h-40 md:h-80 flex-1 md:flex-3 overflow-hidden">
                        <img
                          className="h-full w-full object-cover"
                          src={post.featuredImage.node.guid}
                          alt=""
                        />
                      </figure>
                      <div className="flex-4 flex flex-col gap-y-8 justify-between">
                        <div
                          className={cn(
                            "w-full flex flex-col gap-y-8 justify-between text-[1rem,5vw,1.5rem] [&_p]:text-tan-700",
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
