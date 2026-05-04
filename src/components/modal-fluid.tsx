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

const ModalFluid = ({ triggerTitle, title, description, children }: DialogTypes) => {
  return (
    <>
      <style>{`
        .transparent-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(120, 120, 120, 0.4) transparent;
        }  
      `}</style>
      <div className="flex items-center justify-center">
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>{triggerTitle}</DialogTrigger>
          <DialogContent className="flex max-h-[calc(100vh-3rem)] w-full max-w-[calc(100vw-3rem)] flex-col overflow-hidden p-0">
            <DialogHeader className="bg-background sticky inset-0 z-10 border-b px-6 py-4">
              <DialogTitle>{title}</DialogTitle>
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
            <div className="transparent-scrollbar me-0.5 flex-1 overflow-auto px-6">{children}</div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ModalFluid;
