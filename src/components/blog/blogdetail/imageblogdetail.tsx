import Image from "next/image";

export default function ImageBlogDetail() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[67rem]">
        <div className="relative w-full h-[30.125rem]">
          <Image
            src="/blogdetails/effective.svg"
            alt="image"
            fill
            className="object-cover rounded-[1rem]"
            sizes="(max-width: 67rem) 100vw, 67rem"
          />
        </div>
      </div>
    </div>
  );
}
