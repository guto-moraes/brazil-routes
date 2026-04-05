import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// Import Custom CSS
import themeStyle from "../index.css?url";

export const Route = createRootRoute({ 
  head: () => ({
    links: [
      { rel: 'stylesheet', href: themeStyle },
    ],
  }),
  component: RootLayout 
});

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/sobre-o-projeto" className="[&.active]:font-bold">
          Sobre o Projeto
        </Link>{" "}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
