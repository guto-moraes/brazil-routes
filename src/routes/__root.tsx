import { createRootRoute, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import Navigation from "@/components/navigation";
import Footer from "@/layouts/footer";

// Import Custom CSS
import appCss from "../index.css?url";
import Partners from "@/layouts/partials/partners";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    title: "Caminhos do Brasil Central",
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isHome = pathname === "/"

  return (
    <>
      <Navigation logo="/images/logo.webp" logoWidth="w-36 sm:w-48 md:w-52" isHome={isHome} className={isHome ? "bg-mate-700" : "shadow-lg bg-white py-0" } />
      {children}
      <Partners />
      <Footer />
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
}
