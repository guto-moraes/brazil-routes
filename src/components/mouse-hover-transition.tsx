import { cn } from "@/lib/utils";

const MouseHoverTransition = () => {
  return (
    <>
    <section className="transition-mouse-hover relative bg-card-accent-4 h-[calc(100svh-104px)] w-full overflow-hidden">
        <div className="transition-items absolute bg-card-accent-1 h-svh w-[30%] px-[2em] flex flex-col justify-center gap-y-1.5 z-2">
            <div className="transition-item">
                <p className={cn(
                    "rounded-3xl backdrop-blur-xl bg-black/10 border border-black/10",
                    "text-white font-inter font-light py-1.5 px-3 w-max duration-300 cursor-pointer",
                    "hover:bg-transparent hover:border-black/25"
                )}>Item 01</p>
            </div>
            <div className="transition-item">
                <p className={cn(
                    "rounded-3xl backdrop-blur-xl bg-black/10 border border-black/10",
                    "text-white font-inter font-light py-1.5 px-3 w-max duration-300 cursor-pointer",
                    "hover:bg-transparent hover:border-black/25"
                )}>Item 02</p>
            </div>
            <div className="transition-item">
                <p className={cn(
                    "rounded-3xl backdrop-blur-xl bg-black/10 border border-black/10",
                    "text-white font-inter font-light py-1.5 px-3 w-max duration-300 cursor-pointer",
                    "hover:bg-transparent hover:border-black/25"
                )}>Item 03</p>
            </div>
        </div>
        <div className="preview-bg opacity-35 absolute h-full w-full">
            <img src="/images/experiments/2.webp" alt="" />
        </div>
      </section>
    </>
  );
};

export default MouseHoverTransition;
