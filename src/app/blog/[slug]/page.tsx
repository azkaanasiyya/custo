"use client";

import ContentBlogDetail from "@/components/blog/blogdetail/contentblogdetail";
import HeaderBlogDetail from "@/components/blog/blogdetail/headerblogdetail";
import ImageBlogDetail from "@/components/blog/blogdetail/imageblogdetail";
import MoreBlogDetail from "@/components/blog/blogdetail/moreblogdetail";
import { useParams } from "next/navigation";

export default function Blogs() {
  const params = useParams();
  const slug = params?.slug; // slug dari dynamic route

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-[67rem]">
        <HeaderBlogDetail slug={slug} />
        <ImageBlogDetail />
        <ContentBlogDetail />
        <MoreBlogDetail />
      </div>
    </div>
  );
}
