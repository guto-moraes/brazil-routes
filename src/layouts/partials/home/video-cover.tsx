import { cn } from "@/lib/utils";

const Video = ({ height = "h-full", videoUrl  }: { height?: string; videoUrl: string }) => {
  return (
    <>
      <div className={cn("relative w-full bg-linear-to-b from-darkgreen-500 to-darkgreen-500 z-0", height)}>
        <div className="isolate w-full h-full absolute inset-0">
          <video
            src={videoUrl}
            muted
            loop
            autoPlay
            className="absolute top-0 left-0 object-cover opacity-50 w-full h-full"
          />
        </div>
      </div>
      <div className="absolute bg-hero inset-0 bg-darkgreen-500/20 z-1"></div>
    </>
  );
};

export default Video;