"use client";

import { useCallback, useEffect, useState } from "react";
import { cn, sanitizedData } from "@/lib/utils";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  anchor,
  blockquote,
  dark_anchor,
  dark_blockquote,
  dark_h2,
  dark_hr,
  dark_lists,
  dark_ol_footnotes,
  dark_p,
  dark_selection,
  dark_table,
  figcaption,
  figure,
  wp_gallery,
  general,
  headingH2,
  horizontal_video,
  hr,
  image,
  image_media_block,
  lists,
  ol_footnotes,
  paragraph,
  table,
  vertical_video,
} from "@/lib/tw-class-article";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const Article = ({ className, content }: { className?: string; content: string }) => {
  const [gallery, setGallery] = useState<string[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseImage = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const getAllImages = document.querySelectorAll<HTMLImageElement>(".wp-block-gallery img");

    getAllImages.forEach((imageElement) => {
      imageElement.addEventListener("click", () => {
        setIsOpenModal(true);
      });
    });
  });

  const galleryRef = useCallback((node: HTMLElement) => {
    if (node !== null) {
      const getAllImages = node.querySelectorAll<HTMLImageElement>(".wp-block-gallery img");
      getAllImages.forEach((imageElement) => {
        setGallery((prev) => [...prev, imageElement.src]);
      });
    }
  }, []);

  return (
    <>
      <article
        className={cn(
          general,
          paragraph,
          headingH2,
          figure,
          image,
          figcaption,
          blockquote,
          hr,
          ol_footnotes,
          anchor,
          wp_gallery,
          vertical_video,
          horizontal_video,
          image_media_block,
          image_media_block,
          table,
          lists,
          dark_selection,
          dark_p,
          dark_h2,
          dark_anchor,
          dark_ol_footnotes,
          dark_hr,
          dark_table,
          dark_lists,
          dark_blockquote,
          className,
        )}
        dangerouslySetInnerHTML={sanitizedData(content)}
        ref={galleryRef}
      />
      {isOpenModal && (
        <Dialog open={isOpenModal} onOpenChange={handleCloseImage}>
          <DialogContent
            className={cn(
              "sm:max-w-155 rounded-2xl p-2 [&>button]:rounded-full [&_button]:grid [&>button]:place-content-center",
              "[&>button]:size-7 [&>button]:bg-bege-50! [&>button]:cursor-pointer [&>button]:ring-0!",
              "[&>button]:text-black [&_div:nth-child(2)_button]:cursor-pointer",
            )}
          >
            <DialogHeader className="hidden">
              <DialogTitle className="text-sm text-black/35 font-medium">Caminhos do Brasil Central</DialogTitle>
            </DialogHeader>
            <Carousel>
              <CarouselContent>
                {gallery.map((sourceUrl, index) => (
                  <CarouselItem key={index}>
                    <img src={sourceUrl} alt="Galeria" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Article;
