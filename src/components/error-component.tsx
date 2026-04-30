import { ErrorComponent } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "./title";
import { cn } from "@/lib/utils";

const ErrorComponentTheme = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <Main className="container mx-auto h-svh w-full flex flex-col justify-center items-center gap-y-6">
      <Title>Algo deu errado!</Title>
      <ErrorComponent error={error} />
      <button
        className={cn(
            "rounded-lg bg-mate-400 hover:bg-mate-600 text-white font-medium",
            "uppercase py-2 px-4 mt-6 transition-colors duration-300 cursor-pointer"
        )}
        onClick={() => reset()}
      >
        Tente novamente
      </button>
    </Main>
  );
};

export default ErrorComponentTheme;
