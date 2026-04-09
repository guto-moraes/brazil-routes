import { createFileRoute, Link } from "@tanstack/react-router";
import AlmanaqueOrganization from "@/components/almanaque-organization";
import Main from "@/layouts/main";

export const Route = createFileRoute("/creditos")({
  component: Credits,
});

function Credits() {
  return (
    <>
      <Main>
        <AlmanaqueOrganization />
        <Link to="/apoio-financeiro" viewTransition={{ types: ["slide-left"] }}>Apoio Financeiro</Link>
      </Main>
    </>
  );
}
