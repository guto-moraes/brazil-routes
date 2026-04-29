import Title from "@/components/title";
import Main from "@/layouts/main";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/acessibilidade")({
  component: Accessibility,
});

function Accessibility() {
  return (
    <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Acessi<span className="text-tan-400">bilidade</span>
      </Title>
    </Main>
  );
}
