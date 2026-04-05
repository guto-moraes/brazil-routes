import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  return(
    <div className="h-svh w-full grid place-content-center">
      <h1 className="text-8xl text-stone-800 font-black">Olá, Mundo!</h1>
    </div>
  )
}