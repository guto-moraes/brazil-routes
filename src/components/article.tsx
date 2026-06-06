"use client";

import { useEffect, useState } from "react";
import { cn, sanitizedData } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
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
  gallery,
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

const Article = ({ className, content }: { className?: string; content: string }) => {
  const [srcImage, setSrcImage] = useState<string | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const getAllImages = document.querySelectorAll<HTMLImageElement>(".wp-block-gallery img");

    getAllImages.forEach((imageElement) => {
      imageElement.addEventListener("click", () => {
        setSrcImage(imageElement.src);
        setIsOpenModal(true);
      });
    });
  });

  const handleCloseImage = () => {
    setIsOpenModal(false);
    setSrcImage(null);
  };

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
          gallery,
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
      />
      {isOpenModal && srcImage && (
        <Dialog open={isOpenModal} onOpenChange={handleCloseImage}>
          <DialogContent className="rounded-2xl p-2 overflow-hidden [&_button]:rounded-full [&_button]:bg-white [&_button]:cursor-pointer">
            <DialogHeader className="hidden">
              <DialogTitle className="text-sm text-black/35 font-medium">Caminhos do Brasil Central</DialogTitle>
            </DialogHeader>
            <img className="rounded-lg h-full w-full object-cover object-center" src={srcImage} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Article;
