import { Suspense } from "react";
import logo from "@/assets/images/logo-icon.webp";

type QueryLoadingBoundaryProps = {
  children: React.ReactNode;
};

const QueryLoadingBoundary = ({ children }: QueryLoadingBoundaryProps) => {
  return (
    <Suspense
      fallback={
        <div className="bg-tan-950 h-svh w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-y-4 animate-pulse">
            <img className="size-40" src={logo} alt="Projeto Caminhos do Brasil Central" />
            <h3 className="text-xl text-chocolate-300">Carregando...</h3>
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default QueryLoadingBoundary;
