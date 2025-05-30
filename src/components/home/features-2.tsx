import Image from "next/image";
import { features2 } from "../data/features-2";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";

export default function Features2() {
  return (
    <SlideFadeIn
      items={[
        {
          selector: "[data-animate='ft-1']",
          direction: "x",
          from: -100,
        },
        {
          selector: "[data-animate='ft-2']",
          direction: "x",
          from: -100,
          delay: 0.1,
        },
      ]}
      staggerDelay={0.15}
    >
      <div className="flex w-full justify-center py-[6.5rem]">
        <div className="flex flex-col gap-[4rem] md:gap-[5rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop">
          {features2.map((item, index) => (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1.25rem]"
              key={index}
            >
              <div data-animate="ft-1">
                <Image
                  src={item.image}
                  alt=""
                  width={454}
                  height={440}
                  className="hidden lg:block"
                />
              </div>
              <div className="flex flex-col gap-[1rem]">
                <p
                  data-animate="ft-2"
                  className="text-xl-medium text-[1rem] md:text-[1.125rem] text-primary-500"
                >
                  {item.subTitle}
                </p>
                <h2
                  data-animate="ft-1"
                  className="font-sans font-semibold text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[140%] text-grayscale-950"
                >
                  {item.title}
                </h2>
                <p
                  data-animate="ft-1"
                  className="text-xl-regular text-grayscale-600"
                >
                  {item.description}
                </p>
              </div>
              <div className="w-full h-[317px] md:h-[667px] relative lg:hidden block">
                <Image src={item.image} alt="" fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFadeIn>
  );
}
