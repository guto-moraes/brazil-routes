import CookieConsentBanner from "@/components/cookies-consent";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teste")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
        <div className="h-svh w-full bg-rose-500 grid place-content-center">
            <h1 className="text-8xl text-white font-cabinet font-black">Cookie Consent Banner</h1>
        </div>
        <CookieConsentBanner />
    </>
  );
}
