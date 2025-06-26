"use client";

import useBlog, { blogProps } from "@/lib/hooks/useBlog";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "../animation/fadeIn";
// import useMediaQuery from "@/hooks/useMediaQuery";

interface BlogListProps {
  limit?: number;
  data?: blogProps[];
}

export default function BlogList({ limit, data }: BlogListProps) {
  // const isDesktop = useMediaQuery("(min-width: 1024px)");
  // const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  const { blog } = useBlog();
  const allData = data || blog;

  // let computedLimit = limit;

  // if (computedLimit === undefined) {
  //   computedLimit = isDesktop ? allData.length : 2;
  // }

  const postToDisplay = limit ? allData.slice(0, limit) : allData;

  return (
    <div className="blog grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
      {postToDisplay
        .filter((blog) => blog && blog.slug)
        .map((blog, index) => (
          <FadeInSection key={index} delay={index * 0.1} stagger={0.1}>
            <Link key={index} href={'/blog/${blog.slug}'} passHref>
              <div className="flex flex-col gap-[1.5rem] cursor-pointer hover:opacity-90">
                <div className="relative w-full max-w-[344px] h-[260px] sm:h-[240px] md:h-[280px]">
                  <Image
                    src={blog.mainImage?.asset?.url || "/placeholder-image.jpg"}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-[20px]"
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
          </FadeInSection>
        ))}
    </div>
  );
}