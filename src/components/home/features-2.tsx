import Image from "next/image";
import { features2 } from "../data/features-2";

export default function Features2() {
  return (
    <div className="flex w-full justify-center py-[6.5rem]">
      <div className="flex flex-col gap-[4rem] md:gap-[5rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop">
        {features2.map((item, index) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[1.25rem]"
            key={index}
          >
            <Image
              src={item.image}
              alt=""
              width={454}
              height={440}
              className="hidden lg:block"
            />
            <div className="flex flex-col gap-[1rem]">
              <p className="text-xl-medium text-[1rem] md:text-[1.125rem] text-primary-500">
                {item.subTitle}
              </p>
              <h2 className="font-sans font-semibold text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] leading-[140%] text-grayscale-950">
                {item.title}
              </h2>
              <p className="text-xl-regular text-grayscale-600">
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
  );
}
