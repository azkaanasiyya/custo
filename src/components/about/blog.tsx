import Header from "@/components/common/header";
import { Button } from "../ui/button";
import BlogList from "../common/bloglist";
import Link from "next/link";

export default function AboutBlog() {
  return (
    <div className="blog-section py-[6.5rem] px-[1rem] flex flex-col justify-center items-center">
      <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
        <Header
          title="The Custo Journal"
          description="Get insights and news to scale your business with confidence."
        />
        <BlogList limit={3} />
        <Link href="/blog">
          <Button variant="Secondary" size="small">
            Explore More
          </Button>
        </Link>
      </div>
    </div>
  );
}
