import BlogList from "@/components/common/bloglist";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MoreBlogDetail() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[2.5rem] w-full max-w-[67rem] py-[6.5rem]">
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-sans font-semibold text-[2.5rem] leading-[140%] text-grayscale-950">
            More Insights & Tips
          </h2>
          <Link href={"/blog"}>
            <Button variant={"Secondary"} size={"small"}>
              Explore More
            </Button>
          </Link>
        </div>
        <BlogList limit={3} />
      </div>
    </div>
  );
}
