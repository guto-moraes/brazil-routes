"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

const Title = ({ title, className, children }: { title?: string; className?: string; children: React.ReactNode }) => {
  
  useEffect(() => {
    if(title)
    document.title = `${title} | Projeto Caminhos do Brasil Central`;
  }, [title]);

  return (
    <h1
      className={cn(
        "text-[clamp(1.75rem,4vw,4.5rem)] text-tan-700 font-inter sm:font-cabinet font-black",
        "max-md:uppercase leading-none max-md:tracking-tighter", className,
      )}
    >
      {children}
    </h1>
  );
};

const TitleH2 = ({ title, className, children }: { title?: string; className?: string; children: React.ReactNode }) => {

  useEffect(() => {
    if(title)
    document.title = `${title} | Projeto Caminhos do Brasil Central`;
  }, [title]);
  
  return (
    <h2
      className={cn(
        "text-[clamp(1.5rem,4vw,4.5rem)] text-tan-700 font-inter sm:font-cabinet font-black",
        "max-md:uppercase leading-none max-md:tracking-tighter", className,
      )}
    >
      {children}
    </h2>
  );
};

export { Title, TitleH2 };
