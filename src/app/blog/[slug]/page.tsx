"use client";

import ContentBlogDetail from "@/components/blog/blogdetail/contentblogdetail";
import HeaderBlogDetail from "@/components/blog/blogdetail/headerblogdetail";
import ImageBlogDetail from "@/components/blog/blogdetail/imageblogdetail";
import MoreBlogDetail from "@/components/blog/blogdetail/moreblogdetail";
import CTA from "@/components/layout/cta";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blogs() {
  const params = useParams();
  const slug = params?.slug; // slug dari dynamic route
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loading selesai setelah komponen di-mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0); // Bisa tambahkan delay jika diperlukan

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-[3rem]">
          <HeaderBlogDetail slug={slug} />
          <ImageBlogDetail slug={slug} />
          <ContentBlogDetail />
        </div>
        <MoreBlogDetail />
        <CTA />
      </div>
    </div>
  );
}
