import { cn } from "@/lib/utils";

const Video = ({ className, videoSrc }: { className?: string; videoSrc: string }) => {
  return (
    <>
      <div
        className={cn(
          "video-container bg-hero h-[40%] w-[62%] absolute top-1/2 left-1/2 -translate-1/2",
          className,
        )}
      >
        <div className="absolute inset-0 bg-hero bg-bege-200"></div>
        <div className="isolate w-full h-full absolute inset-0">
          <video
            src={videoSrc}
            muted
            loop
            autoPlay
            className="absolute top-0 left-0 object-cover opacity-50 w-full h-full z-3"
          />
        </div>
        <div className="absolute inset-0 bg-hero bg-bege-200/35"></div>
      </div>
    </>
  );
};

export default Video;
