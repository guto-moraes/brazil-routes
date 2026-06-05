import { ErrorComponent } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const ErrorComponentTheme = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <main>
      <h1>Algo deu errado!</h1>
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
    </main>
  );
};

export default ErrorComponentTheme;
