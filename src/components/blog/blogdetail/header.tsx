import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HeaderBlogDetail() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[3rem] w-full max-w-[67rem] py-[6.5rem]">
        <div className="">
          <Link href="/blogs">
            <ArrowLeft />
          </Link>
        </div>
      </div>
    </div>
  );
}
