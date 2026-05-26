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
    <Main className="w-full">
      <div className="max-w-6xl mx-auto  py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
        <Title className="text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700 font-cabinet font-black leading-9 pb-10 sm:pb-16">
          Blog do <span className="text-tan-400">Conhecimento</span>
        </Title>

        <div className="w-full flex flex-col gap-8 divide-y divide-dashed divide-tan-300">
          {posts &&
            posts.nodes.map((post) => {
              const isUpdadatedPost = post.modified !== post.date ? true : false;
              return (
                <article className="w-full flex flex-col gap-6 md:flex-row" key={post.id}>
                  <aside className="flex md:flex-2">
                    <ul className="text-xs sm:text-sm font-mono leading-none flex flex-col gap-2 sm:gap-y-4">
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
                  <div className="flex-1 md:flex-5 flex-col gap-y-8 md:mb-12">
                    <TitleH2 className="text-[clamp(1.5rem,5vw,2.5rem)] leading-none pb-4 sm:pb-8">{post.title}</TitleH2>
                    <div className="flex flex-col md:flex-row gap-4">
                      <figure className="rounded-lg max-md:max-h-60 md:h-80 flex-1 md:flex-3 overflow-hidden">
                        <img
                          className="h-full w-full object-cover md:object-top"
                          src={post.featuredImage.node.guid}
                          alt=""
                        />
                      </figure>
                      <div className="flex-4 flex flex-col gap-y-6 justify-between mb-8">
                        <div
                          className={cn(
                            "w-full flex flex-col gap-y-8 justify-between text-[clamp(0.85rem,4vw,1.05rem)] [&_p]:text-tan-700",
                            "[&_p]:font-medium [&_p]:leading-6 [&_p]:text-justify [&_p]:hyphens-auto",
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
