import Image from "next/image";

export default function ImageBlogDetail() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[67rem]">
        <div className="relative w-full aspect-[5/3]">
          <Image
            src="/blogdetails/effective.svg"
            alt="image"
            fill
            className="object-cover rounded-[1rem]"
          />
        </div>
      </div>
    </div>
  );
}
