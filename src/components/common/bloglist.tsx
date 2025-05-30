"use client";

import useBlog, { blogProps } from "@/lib/hooks/useBlog";
import Image from "next/image";
import Link from "next/link";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";

interface BlogListProps {
  limit?: number;
  data?: blogProps[];
}

export default function BlogList({ limit, data }: BlogListProps) {
  const { blog } = useBlog();
  const postToDisplay = data ? data : limit ? blog.slice(0, limit) : blog;

  return (
    <SlideFadeIn
      items={[
        {
          selector: "[data-animate='blog_detail-1']",
          direction: "y",
          from: 100,
          delay: 0.1,
        },
      ]}
      staggerDelay={0.15}
    >
      <div className="blog grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
        {postToDisplay
          .filter((blog) => blog && blog.slug)
          .map((blog, index) => (
            <Link
              data-animate="blog_detail-1"
              key={index}
              href={`/blog/${blog.slug}`}
              passHref
            >
              <div className="flex flex-col gap-[1.5rem] cursor-pointer hover:opacity-90">
                <div className="relative w-[344px] h-[280px]">
                  <Image
                    src={blog.mainImage?.asset?.url || "/placeholder-image.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 344px"
                  />
                </div>

                <div className="flex flex-col gap-[1rem]">
                  <p className="text-large md:text-xlarge text-grayscale-950 font-medium">
                    {blog.title}
                  </p>
                  <div className="flex flex-row gap-[1rem]">
                    <p className="text-medium md:text-large text-grayscale-600">
                      {blog.date}
                    </p>
                    <Image
                      src="/divider.svg"
                      alt="divider"
                      width={1}
                      height={1}
                    />
                    <p className="text-medium md:text-large text-grayscale-600">
                      {blog.category.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </SlideFadeIn>
  );
}
