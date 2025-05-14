import HeaderBlogDetail from "@/components/blog/blogdetail/header";

export default function Blogs() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[3rem] w-full max-w-[67rem] py-[6.5rem]">
       <HeaderBlogDetail />
      </div>
    </div>
  );
}