"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type CopyButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    value: string;
    children?: React.ReactNode;
  };

export function CopyButton({
  value,
  className,
  children,
  ...props
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Falha ao copiar o conteúdo: ", error);
    }
  };

  return (
    <Button
      className={cn("relative", className)}
      onClick={copy}
      disabled={isCopied}
      aria-label="Copiar para a área de transferência"
      {...props}
    >
      <div className={cn("transition-all duration-300", isCopied ? "scale-0" : "scale-100")}>
        {children ? children : <Copy className="size-8" />}
      </div>
      <div className={cn("absolute transition-all duration-200", isCopied ? "scale-100" : "scale-0")}>
        <Check className="size-8 text-darkgreen-500 dark:text-dark-contrast-100" />
      </div>
    </Button>
  );
}
