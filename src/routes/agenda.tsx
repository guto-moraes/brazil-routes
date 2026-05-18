import { createFileRoute } from "@tanstack/react-router";
import { useQueryState } from "nuqs";
import { useQueryCalendar } from "@/hooks/queries/pages-and-posts-queries";
import { Title } from "@/components/title";
import Main from "@/layouts/main";
import EventCard from "@/components/event-card";
import Pagination from "@/components/pagination";
import { calendarDateFormat } from "@/lib/utils";

export const Route = createFileRoute("/agenda")({
  component: Events,
});

const MAX_ITEMS = 5; // Max pages listing in pagination
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const LIMIT = 1; // Number of posts to fetch per request

function Events() {
  const [offset, setOffset] = useQueryState("offset");
  const { posts } = useQueryCalendar(LIMIT, offset ? Number(offset) : 0).data || {};

  const pages = posts ? Math.ceil((posts.pageInfo.offsetPagination.total ?? 0) / LIMIT) : 0; // Check if total pages is bigger that LIMIT

  const handlePagination = (page: number) => {
    setOffset(String(Number((page - 1) * LIMIT)));
  };

  return (
    <>
      <Main className="max-w-5xl mx-auto mb-12 xl:pb-24 px-4 lg:px-0">
        <Title>
          Agenda <span className="text-tan-400">de Eventos</span>
        </Title>
        <section className="flex flex-col items-center gap-y-6">
          {
            posts.nodes.map((calendar, index) => {
              // console.log(calendar.agenda.eventDate.split("-"))
              return(
                <EventCard
                  key={index}
                  eventTime={calendar.date}
                  eventDay={calendarDateFormat(calendar.agenda.eventDate).day}
                  eventMonth={calendarDateFormat(calendar.agenda.eventDate).month}
                  eventImageUrl={calendar.featuredImage.node.sourceUrl}
                  eventUrl={calendar.link}
                  eventTitle={calendar.title}
                  eventPlace={calendar.agenda.eventPlace}
                />
              )}
            )
          }
        </section>

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
      </Main>
    </>
  );
}
