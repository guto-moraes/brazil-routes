import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Página Inicial | Caminhos do Brasil Central",
      }
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <Main className="flex justify-center items-center">
      <h1 className="text-8xl text-tan-700 font-cabinet font-black">Página Inicial</h1>
    </Main>
  );
}