"use client";

import BlogList from "@/components/common/bloglist";
import { blogPosts } from "@/components/data/blog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MoreBlogDetail() {
  const { slug } = useParams() as { slug: string };
  const index = blogPosts.findIndex((post) => post.slug === slug);

  // Circular slicing: selalu ambil 3 data setelah index
  const nextPosts: typeof blogPosts = [];
  for (let i = 1; i <= 3; i++) {
    const nextIndex = (index + i) % blogPosts.length;
    nextPosts.push(blogPosts[nextIndex]);
  }

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
        <BlogList data={nextPosts} />
      </div>
    </div>
  );
}
