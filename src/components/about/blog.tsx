"use client";

import { useMediaQuery } from "react-responsive";
import Header from "@/components/common/header";
import { Button } from "../ui/button";
import BlogList from "../common/bloglist";
import Link from "next/link";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";

export default function AboutBlog() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" });

  let limit = 3;
  if (isMobile) limit = 1;
  else if (isTablet) limit = 2;

  return (
    <div className="blog-section py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-4 flex flex-col justify-center items-center">
      <SlideFadeIn
        items={[
          { selector: "[data-animate='header']", direction: "y", from: 50 },
          { selector: "[data-animate='bloglist']", direction: "y", from: 50 },
          { selector: "[data-animate='button']", direction: "y", from: 50 },
        ]}
        staggerDelay={0.15}
      >
        <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
          <Header
            title="The Custo Journal"
            description="Get insights and news to scale your business with confidence."
            data-animate="header"
          />

          <div data-animate="bloglist">
            <BlogList limit={limit} />
          </div>

          <div data-animate="button">
            <Link href="/blog">
              <Button variant="Secondary" size="small">
                Explore More
              </Button>
            </Link>
          </div>
        </div>
      </SlideFadeIn>
    </div>
  );
}
