import { createRootRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import applyGoogleTranslateDOMPatch from "@/lib/applyGoogleTranslateDOMPatch";

// Import Tanstack Query Provider and Initialize QueryClient
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Import Static Layout Components
import QueryLoadingBoundary from "@/components/query-loading-boundary";
import SmoothScroller from "@/components/smooth-scroller";
import NotFound from "@/components/not-found";
import ErrorComponentTheme from "@/components/error-component";
import Navigation from "@/components/navigation";
import Footer from "@/layouts/footer";
import Partners from "@/layouts/partners";

// Import Custom CSS
import appCss from "../index.css?url";

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
  shellComponent: App,
  errorComponent: ({ error, reset }) => <ErrorComponentTheme error={error} reset={reset} />,
  notFoundComponent: () => <NotFound />,
});

function App({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isHome = pathname === "/";

  useEffect(() => {
    applyGoogleTranslateDOMPatch();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <QueryLoadingBoundary>
          <SmoothScroller>
            {!isHome && <Navigation />}
            {children}
            <Partners />
            <Footer />
          </SmoothScroller>
        </QueryLoadingBoundary>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
