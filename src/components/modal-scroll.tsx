import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogTypes = {
  triggerTitle: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

const ModalScroll = ({ triggerTitle, title, description, children }: DialogTypes) => {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>{triggerTitle}</DialogTrigger>
        <DialogContent className="w-[calc(100%-2rem)">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          <div className="-mx-4 px-4 no-scrollbar max-h-[70vh] overflow-y-auto">{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalScroll;
