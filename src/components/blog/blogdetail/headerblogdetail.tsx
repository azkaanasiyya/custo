import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/components/data/blog";

interface HeaderBlogDetailProps {
  slug: string | string[] | undefined;
}

export default function HeaderBlogDetail({ slug }: HeaderBlogDetailProps) {
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[2rem] w-full max-w-[67rem] pt-[9rem] pb-[3rem]">
        <Link href="/blog">
          <div className="flex flex-row gap-[0.5rem] items-center">
            <ArrowLeft height={20} width={20} />
            <p className="font-sans font-medium text-[0.875rem] leading-[160%] text-grayscale-900">
              Back to Blogs
            </p>
          </div>
        </Link>
        <h2 className="font-sans font-semibold text-[2.5rem] leading-[140%] text-gray-950">
          {blog.title}
        </h2>
        <div className="flex flex-row items-center gap-[1rem]">
          <div className="flex flex-row items-center gap-[1rem]">
            <Image
              src="/autor/johnadeson.svg"
              alt="autor"
              width={32}
              height={32}
            />
            <p className="text-l-regular text-gray-600">John Adeson</p>
          </div>
          <div className="h-[0.375rem] w-[0.375rem] rounded-full bg-gray-300"></div>
          <div>
            <p className="text-l-regular text-gray-600">{blog.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
