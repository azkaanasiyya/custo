"use client";

import { useParams } from "next/navigation";
import useBlog from "@/lib/hooks/useBlog";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  types: {
    // Tambahkan jika ada custom type (seperti image, code, dsb)
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-grayscale-950">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[20px] lg:text-[24px] font-semibold leading-[140%] text-grayscale-950">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-grayscale-800">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-[16px] md:text-[18px] text-grayscale-600 leading-[160%]">{children}</p>
    ),
  },
};

export default function ContentBlogDetail() {
  const { blog } = useBlog();
  const params = useParams();
  const slug = params?.slug;

  const blogPost = blog.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p className="text-center py-10">Loading or blog not found...</p>;
  }

  return (
    <div className="flex w-full px-6 md:px-12 lg:px-[64px] justify-center">
      <div className="flex flex-col gap-6 lg:gap-[2rem] w-full lg:max-w-[890px]">
        <PortableText value={blogPost.body} components={components} />
      </div>
    </div>
  );
}
