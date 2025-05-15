import BlogList from "@/components/common/bloglist";

export default function MoreBlogDetail() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[67rem] py-[6.5rem]">
        <BlogList limit={3} />
      </div>
    </div>
  );
}
