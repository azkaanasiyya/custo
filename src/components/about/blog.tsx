"use client";
import { useMediaQuery } from "react-responsive";
import Header from "@/components/common/header";
import { Button } from "../ui/button";
import BlogList from "../common/bloglist";
import Link from "next/link";

export default function AboutBlog() {
  const isTabletOrBelow = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="blog-section py-20 px-12 lg:py-[6.5rem] lg:px-[1rem] flex flex-col justify-center items-center">
      <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
        <Header
          title="The Custo Journal"
          description="Get insights and news to scale your business with confidence."
        />
        <BlogList limit={isTabletOrBelow ? 2 : 3} />
        <Link href="/blog">
          <Button variant="Secondary" size="small">
            Explore More
          </Button>
        </Link>
      </div>
    </div>
  );
}
