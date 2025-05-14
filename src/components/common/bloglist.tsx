import { blogPosts } from "../data/blog";
import Image from "next/image";

export default function BlogList() {
  return (
    <>
      <div className="blog grid grid-cols-3 gap-[1.25rem]">
        {blogPosts.map((blog, index) => (
          <div key={index} className="flex flex-col gap-[1.5rem]">
            <Image src={blog.image} alt={blog.type} width={344} height={280} />
            <div className="flex flex-col gap-[1rem]">
              <p className="text-xlarge text-grayscale-950 font-medium">
                {blog.description}
              </p>
              <div className="flex flex-row gap-[1rem]">
                <p className="text-large text-grayscale-600">{blog.date}</p>
                <Image src="/divider.svg" alt="divider" width={1} height={1} />
                <p className="text-large text-grayscale-600">{blog.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
