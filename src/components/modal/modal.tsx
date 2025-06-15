import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Modal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <button className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 bg-white opacity-40 rounded-full hover:bg-grayscale-200 transition">
                <i className="ri-play-fill text-white text-[24px]"></i>
            </button>
        </DialogTrigger>
        <DialogContent className="w-[80vw] h-[80vh] aspect-video max-w-none max-h-none">
          <video 
            autoPlay 
            muted 
            className="w-[80vw] h-[80vh] aspect-video object-cover rounded-[20px]"
            >
              <source src="/modal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </form>
    </Dialog>
  )
}
