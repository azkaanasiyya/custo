import BlogList from "../common/bloglist";

export default function BlogContent() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[4rem] w-full max-w-[67rem] py-[6.5rem]">
        <div className="flex flex-col gap-[1rem] items-center">
          <h1 className="font-sans font-semibold text-[3.5rem] leading-[120%] text-grayscale-950">
            The Custo Journal
          </h1>
          <p className="text-xl-regular text-grayscale-600">
            Get insights and news to to scale your business with confidence.
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  );
}
