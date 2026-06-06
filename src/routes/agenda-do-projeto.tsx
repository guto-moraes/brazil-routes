"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useQueryState } from "nuqs";
import { useQueryAppointment } from "@/hooks/queries/pages-and-posts-queries";
import { cn } from "@/lib/utils";
import { calendarDateFormat } from "@/lib/client-utils";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import AppointmentCard from "@/components/appointment-card";
import Pagination from "@/components/pagination";

export const Route = createFileRoute("/agenda-do-projeto")({
  head: () => ({
    meta: [
      {
        title: "Agenda do Projeto | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Lista de atividades realizadas ou agendas para a divulgação do Projeto Caminhos do Brasil Central, como palestras, debates e mesas redondas.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/agenda-do-projeto",
      },
    ],
  }),
  loader: () => ({
    crumb: "Agenda do Projeto"
  }),
  component: Appointment,
});

const MAX_ITEMS = 5; // Número máximo de página listadas
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const LIMIT = 8; // Número de posts por requisição

function Appointment() {
 const [offset, setOffset] = useQueryState("offset");
  const { posts } = useQueryAppointment(LIMIT, offset ? Number(offset) : 0).data;

  const pages = Math.ceil((posts.pageInfo.offsetPagination.total) / LIMIT); // Check if total pages is bigger that LIMIT

  const handlePagination = (page: number) => {
    setOffset(String(Number((page - 1) * LIMIT)));
  };

  return (
    <>
      <Header className="shadow-md" />
      <Main className="min-h-[calc(100svh-280px)] xl:min-h-[100svh-384px] py-8 md:py-16">
          <Title 
            title="Agenda | Projeto do Caminhos do Brasil Central"
            className={cn(
              "container max-w-5xl mx-auto text-[clamp(2.75rem,4vw,4.25rem)] text-bone-700",
              "dark:text-dark-contrast-100 font-cabinet font-black max-md:leading-[0.9] pb-8 sm:pb-16"
            )}
          >
            Agenda <span className="text-bone-400 dark:text-dark-contrast-50">do Projeto</span>
          </Title>
        <section className="container max-w-5xl mx-auto flex flex-col items-center gap-y-6">
          {
            posts.nodes.map((post, index) => {
              return(
                <AppointmentCard
                  key={index}
                  eventTime={post.date}
                  eventDay={calendarDateFormat(post.appointment.eventDate).day}
                  eventMonth={calendarDateFormat(post.appointment.eventDate).month}
                  eventImageUrl={post.featuredImage.node.sourceUrl}
                  eventUrl={post.uri}
                  eventTitle={post.title}
                  eventPlace={post.appointment.eventPlace}
                />
              )}
            )
          }
        </section>

        {pages > 1 && (
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
