import { cn } from "@/lib/utils";
import videoSrc from "@/assets/video-background.mp4";

const Video = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn("video-container bg-hero h-[40%] w-[62%] absolute top-1/2 left-1/2 -translate-1/2", className)}
      >
        <div className="absolute inset-0 bg-hero bg-bege-200 dark:bg-dark-950"></div>
        <div className="isolate w-full h-full absolute inset-0">
          <video
            src={videoSrc}
            muted
            loop
            autoPlay
            className={cn(
                "h-full w-full absolute top-0 left-0 object-cover opacity-50 z-3"
            )}
          />
        </div>
        <div className="absolute inset-0 bg-hero bg-bege-200/35 dark:bg-dark-950"></div>
      </div>
    </>
  );
};

export default Video;
