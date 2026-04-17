import { cn } from "@/lib/utils";

const Video = ({ className, videoSrc }: { className?: string; videoSrc: string }) => {
  return (
    <>
      <div className={cn("video-container h-[40%] w-[62%] absolute top-1/2 left-1/2 -translate-1/2", className)}>
        <div className="isolate w-full h-full absolute inset-0 bg-darkgreen-500/80">
          <video
            src={videoSrc}
            muted
            loop
            autoPlay
            className="absolute top-0 left-0 object-cover bg-darkgreen-500 opacity-50 w-full h-full z-3"
          />
        </div>
        {/* <div className="absolute bg-hero inset-0 bg-darkgreen-500/40"></div>  */}
      </div>
    </>
  );
};

export default Video;
