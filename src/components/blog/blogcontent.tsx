import FadeInSection from "../animation/fadeIn";
import BlogList from "../common/bloglist";

export default function BlogContent() {
  return (
      <div className="flex flex-col w-full justify-center items-center pt-[120px] px-6 md:pt-[160px] pb-12 md:pb-[104px] md:px-12 lg:px-16">
        <div className="flex flex-col gap-[4rem] max-w-mobile md:max-w-tablet lg:max-w-desktop ">
            <FadeInSection>
            <div className="flex flex-col gap-[1rem] items-center">
              <h1 className="font-sans font-semibold text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[120%] text-grayscale-950">
                The Custo Journal
              </h1>
              <p className="text-xl-regular text-[1rem] md:text-[1.125rem] text-grayscale-600 text-center">
                Get insights and news to to scale your business with confidence.
              </p>
            </div>
            </FadeInSection>
            <BlogList />
        </div>
      </div>
  );
}
