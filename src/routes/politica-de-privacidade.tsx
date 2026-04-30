import ArticleContent from "@/components/article-content";
import Title from "@/components/title";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import Main from "@/layouts/main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const { data: policy } = useQueryPage("politica-de-privacidade")

  return (
    <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Política de <span className="text-tan-400">Privacidade</span>
      </Title>
      <ArticleContent content={policy.page.content} 
      className="[&_.wp-block-heading]:text-mate-500! [&_.wp-block-heading]:font-semibold!" />
    </Main>
  );
}
