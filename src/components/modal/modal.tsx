// import { Button } from "@/components/ui/button"
import {
  Dialog,
  // DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export function Modal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <button className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 bg-white opacity-40 rounded-full hover:bg-grayscale-200 transition">
                <i className="ri-play-fill text-white text-[24px]"></i>
            </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1125px]">
          {/* <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader> */}
          <video autoPlay muted className="w-full h-full object-cover rounded-[20px]">
            <source src="/modal.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div> */}
          {/* <DialogFooter>
            <DialogClose asChild>
              <Button variant="primary">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
      </form>
    </Dialog>
  )
}
