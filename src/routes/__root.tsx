import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";

// Import Tanstack Query Provider and Initialize QueryClient
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Import Static Layout Components
import QueryLoadingBoundary from "@/components/query-loading-boundary";
import NotFound from "@/components/not-found";
import ErrorComponentTheme from "@/components/error-component";
import Navigation from "@/components/navigation";
import Footer from "@/layouts/footer";

// Import Custom CSS
import appCss from "../index.css?url";
import Partners from "@/layouts/partials/partners";
import SmoothScroller from "@/components/smooth-scroller";
import { useEffect } from "react";
import applyGoogleTranslateDOMPatch from "@/lib/applyGoogleTranslateDOMPatch";

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
    title: "Projeto Caminhos do Brasil Central",
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  errorComponent: ({ error, reset }) => <ErrorComponentTheme error={error} reset={reset} />,
  notFoundComponent: () => <NotFound />,
});

function RootDocument() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isHome = pathname === "/";

  useEffect(() => {
    applyGoogleTranslateDOMPatch();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <QueryLoadingBoundary>
        <SmoothScroller>
          {!isHome && <Navigation />}
          <NuqsAdapter>
            <Outlet />
          </NuqsAdapter>
          <Partners />
          <Footer />
        </SmoothScroller>
      </QueryLoadingBoundary>
    </QueryClientProvider>
  );
}
