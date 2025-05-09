import Header from "@/components/common/header";
import Image from "next/image";
import { blogPosts } from "@/components/data/blog";
import { Button } from "../ui/button";

export default function AboutBlog() {
    return (
        <div className="blog-section py-[6.5rem] px-[1rem] flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
                <Header title="The Custo Journal" description="Get insights and news to scale your business with confidence." />
                <div className="blog grid grid-cols-3 gap-[1.25rem]">
                    {blogPosts.map((blog, index) => (
                        <div key={index} className="flex flex-col gap-[1.5rem]">
                            <Image src={blog.image} alt={blog.type} width={344} height={280} />
                            <div className="flex flex-col gap-[1rem]">
                                <p className="text-xlarge text-grayscale-950 font-medium">{blog.description}</p>
                                <div className="flex flex-row gap-[1rem]">
                                    <p className="text-large text-grayscale-600">{blog.date}</p>
                                    <Image src="/divider.svg" alt="divider" width={1} height={1} />
                                    <p className="text-large text-grayscale-600">{blog.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button variant="Secondary" size="small">Explore More</Button>
            </div>
        </div>
    );
}
