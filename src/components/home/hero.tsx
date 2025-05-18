import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="relative bg-[url(/bg-gradients/Background.svg)] bg-cover flex justify-center">
      <div className="flex flex-col gap-[3rem] w-full max-w-[67rem] pt-[9.5rem]">
        <div className="flex flex-col gap-[2rem] items-center">
          <button className="inline-flex items-center gap-[0.5rem] rounded-[5rem] bg-radial-[at_0%_0%] from-success-700 to-success-700/50 to-99% px-[1rem] py-[2,8125rem] border-[0.5px] border-white/40">
            <span className="text-s-medium text-gray-950">
              Introducing Custo
            </span>
            <ArrowRight size="0.75rem" />
          </button>
          <div className="flex flex-col gap-[1rem] text-center max-w-[55.75rem] mx-auto">
            <h1 className="text-h1 text-[2rem] md:text-[3rem]">
              Powerful CRM Solutions for Growing Businesses
            </h1>
            <p className="text-xl-regular text-[1rem] md:text-[1.125rem] max-w-[41rem] mx-auto text-grayscale-600">
              Streamline your customer relationships with an intuitive CRM
              platform. Optimize workflows, and drive business growth with ease.
            </p>
          </div>
          <div>
            <Button variant="primary" size="base" className="cursor-pointer">
              Start for Free
            </Button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-[1rem]">
            <Image src="/icon/List.svg" alt="list" width={72} height={32} />
            <div className="w-full max-w-[12.625rem]">
              <p className="text-l-regular text-grayscale-600">
                Trusted by 3K+ companies around the world
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[1.5rem] items-center">
            <div className="typography">
              <h2 className="text-shadow-gray-900">4.9</h2>
            </div>
            <div className="flex flex-col gap-1">
              <Image
                src="/icon/Stars.svg"
                alt="star"
                width={116}
                height={20}
              ></Image>
              <p className="text-l-regular text-grayscale-600">
                Based on 200+ reviews
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] w-full max-w-[1072px] mx-auto">
          <Image
            src="/image/Dashboard.svg"
            alt="hero"
            fill
            className="object-cover object-left"
          />
          <Image
            src="/image/Floating.svg"
            alt="Floating"
            width={233.2549285888672}
            height={182.02293395996094}
            className="absolute hidden lg:block top-[7.75rem] right-[-0.09rem] xl:right-[-1.875rem]"
          />
          <div className="absolute z-1 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
      <div className="absolute  bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
}
