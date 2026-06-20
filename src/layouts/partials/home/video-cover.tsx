import { cn } from "@/lib/utils";
import videoSrc from "@/assets/video-background.mp4";

const Video = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <div className="absolute inset-0 bg-hero bg-bege-200/55 dark:bg-dark-950"></div>
      <video
        src={videoSrc}
        muted
        loop
        autoPlay
        className={cn("absolute top-0 left-0 h-screen w-screen [clip-path:inset(0%_10%_0%_10%)] scale-125 object-cover opacity-50 z-1")}
      />
    </div>
  );
};

export default Video;
