"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { toast } from "sonner";

type CopyButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    toastTitle: string;
    toastMessage: string;
    value: string;
    children?: React.ReactNode;
  };

export function CopyButton({ toastTitle, toastMessage, value, className, children, ...props }: CopyButtonProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      // Trigger success toast
      toast.success(toastTitle, {
        description: toastMessage,
        className: cn(
          "border-darkgreen-500! dark:border-dark-contrast-100! bg-darkgreen-500! dark:bg-dark-contrast-100!",
          "[&>div>div:nth-child(1)]:data-[title]:font-bold! [&>div>div:nth-child(1)]:data-[title]:text-white!",
          "dark:[&>div>div:nth-child(1)]:data-[title]:text-dark-950! [&>div>div:nth-child(2)]:data-[description]:text-white!",
          "dark:[&>div>div:nth-child(2)]:data-[description]:text-dark-950! [&_svg]:text-white!",
          "[&>*>svg]:text-white! dark:[&_svg]:text-dark-950! dark:[&>*>svg]:text-dark-950!",
        )
      });
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
      <div className={cn("transition-all duration-300 b", isCopied ? "scale-0" : "scale-100")}>
        {children ? children : <Copy className="size-8" />}
      </div>
      <div className={cn("absolute transition-all duration-200", isCopied ? "scale-100" : "scale-0")}>
        <Check className="size-8 text-darkgreen-500 dark:text-dark-contrast-100!" />
      </div>
    </Button>
  );
}
