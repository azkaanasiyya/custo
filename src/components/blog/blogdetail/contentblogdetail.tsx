"use client";

import { useParams } from "next/navigation";
import useBlog from "@/lib/hooks/useBlog";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset?.url;

      if (!imageUrl) {
        console.warn("Image not found:", value);
        return null;
      }
        
      return (
        <div className="my-0">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog Image"}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      );
    },
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
      <p className="text-[16px] md:text-[18px] text-grayscale-600">{children}</p>
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
    <div className="flex w-full px-6 md:px-12 lg:px-[64px] justify-center pb-12 md:pb-20">
      <div className="flex flex-col w-full gap-8 lg:max-w-[890px]">
        <PortableText value={blogPost.body} components={components} />
      </div>
    </div>
  );
}

// gap-6 lg:gap-[2rem]