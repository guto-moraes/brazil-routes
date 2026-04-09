import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText);

const TextSplit = ({ className, children }: { className: string; children: React.ReactNode }) => {
  useGSAP(() => {
    const text = document.querySelector<HTMLParagraphElement>(".split-text");

    const splitText = SplitText.create(text, {
      type: "chars, words",
    });

    gsap.from(splitText.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.03,
    });
  });

  return (
    <>
      <p className={cn("split-text", className)}>{children}</p>
    </>
  );
};

export default TextSplit;
