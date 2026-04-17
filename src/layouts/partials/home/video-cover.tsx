import LogoSvg from "@/components/logo-svg";
import { cn } from "@/lib/utils";

const Video = ({ className, videoSrc }: { className?: string; videoSrc: string }) => {
  return (
    <>
      <div className={cn("video-container h-[40%] w-[62%] absolute top-1/2 left-1/2 -translate-1/2", className)}>
        <div className="isolate w-full h-full absolute inset-0">
          <video
            src={videoSrc}
            muted
            loop
            autoPlay
            className="absolute top-0 left-0 object-cover opacity-50 w-full h-full z-3"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <LogoSvg className="size-64 fill-white opacity-25" />
        </div>
      </div>
    </>
  );
};

export default Video;
