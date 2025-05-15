import ContentBlogDetail from "@/components/blog/blogdetail/contentblogdetail";
import HeaderBlogDetail from "@/components/blog/blogdetail/headerblogdetail";
import ImageBlogDetail from "@/components/blog/blogdetail/imageblogdetail";
import MoreBlogDetail from "@/components/blog/blogdetail/moreblogdetail";

export default function Blogs() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-full max-w-[67rem]">
        <HeaderBlogDetail />
        <ImageBlogDetail />
        <ContentBlogDetail />
        <MoreBlogDetail />
      </div>
    </div>
  );
}
