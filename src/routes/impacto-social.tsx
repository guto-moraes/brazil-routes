import { createFileRoute } from "@tanstack/react-router";
import { useQuerySocialImpactPage } from "@/hooks/queries/pages-and-posts-queries";
import { cn } from "@/lib/utils";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import { ScrollRotateContent, ScrollRotateSection, ScrollRotateWrapper } from "@/components/section-scroll-rotate";
import { SocialImpactStatsCard } from "@/components/social-impact-stats-card";
import Testimonials from "@/components/testimonials";
import Article from "@/components/article";
import { useEffect } from "react";

export const Route = createFileRoute("/impacto-social")({
  head: () => ({
    meta: [
      {
        title: "Impacto Social | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Informações sobre os impactos na sociedade sobre as ações do Projeto Caminhos do Brasil Central.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/impacto-social",
      },
    ],
  }),
  loader: () => ({
    crumb: "Impacto Social",
  }),
  component: SocialImpact,
});

function SocialImpact() {
  const { page } = useQuerySocialImpactPage().data;

  useEffect(() => {
    if(page)
    document.title = `${page.title} | Projeto Caminhos do Brasil Central`;
  }, [page]);

  return (
    <>
      <Header className="shadow-md" />
      <Main className="p-0! overflow-hidden">
        <ScrollRotateWrapper className="min-h-[calc(100svh-280px)] lg:min-h-[100svh-104px]">
          <ScrollRotateSection className="h-full">
            <ScrollRotateContent className="bg-[#d8d9bc] dark:bg-dark-950 py-8 md:py-16">
              <div className="container max-w-7xl mx-auto h-full px-4 lg:px-0">
                <Title
                  className={cn(
                    "w-full text-[clamp(2.75rem,4vw,4.25rem)] text-bone-700 text-center",
                    "dark:text-dark-contrast-100 max-md:leading-[0.9] pb-8 sm:pb-16",
                  )}
                >
                  Alcance <span className="text-bone-400 dark:text-dark-contrast-50">do Projeto</span>
                </Title>

                <Article
                  className={cn(
                    "w-5xl! mx-auto [&_p]:text-[clamp(1rem,5vw,1.25rem)]! mb-10 xl:mb-20",
                    "[&_p_strong]:text-terracotta-800 dark:[&_p_strong]:text-mate-200",
                  )}
                  content={page.content}
                />
                <div
                  className={cn(
                    "grid grid-cols-1 xl:grid-cols-3 gap-8 divide-y md:divide-y-0",
                    "md:divide-x divide-mate-50 bg-mate-700 dark:bg-dark-900 py-10 px-8 rounded-4xl",
                  )}
                >
                  {page.socialImpact.stats.map((stat, index) => (
                    <SocialImpactStatsCard
                      key={index}
                      value={stat.amount}
                      title={stat.label}
                      description={stat.description}
                    />
                  ))}
                </div>
              </div>
            </ScrollRotateContent>
          </ScrollRotateSection>
          <ScrollRotateSection className="h-svh">
            <ScrollRotateContent className="bg-tan-300 dark:bg-dark-800 flex items-center">
              <div className="max-w-7xl mx-auto pb-24">
                <Title
                  className={cn(
                    "w-full text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700 dark:text-dark-contrast-100",
                    "text-center font-cabinet font-black max-md:leading-[0.9]",
                  )}
                >
                  O que dizem <span className="text-tan-500 dark:text-dark-contrast-50">sobre o Projeto</span>
                </Title>
                <Testimonials />
              </div>
            </ScrollRotateContent>
          </ScrollRotateSection>
        </ScrollRotateWrapper>
      </Main>
    </>
  );
}
