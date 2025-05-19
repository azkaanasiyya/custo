import { blogPosts } from "../data/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogListProps {
  limit?: number;
  data?: typeof blogPosts;
}

export default function BlogList({ limit, data }: BlogListProps) {
  const postToDisplay = data
    ? data
    : limit
    ? blogPosts.slice(0, limit)
    : blogPosts;

  return (
    <div className="blog grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.25rem]">
      {postToDisplay.map((blog, index) => (
        <Link key={index} href={`/blog/${blog.slug}`} passHref>
          <div className="flex flex-col gap-[1.5rem] cursor-pointer hover:opacity-90">
            <Image src={blog.image} alt={blog.type} width={344} height={280} />
            <div className="flex flex-col gap-[1rem]">
              <p className="text-large md:text-xlarge text-grayscale-950 font-medium">
                {blog.title}
              </p>
              <div className="flex flex-row gap-[1rem]">
                <p className="text-medium md:text-large text-grayscale-600">{blog.date}</p>
                <Image src="/divider.svg" alt="divider" width={1} height={1} />
                <p className="text-medium md:text-large text-grayscale-600">{blog.type}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
