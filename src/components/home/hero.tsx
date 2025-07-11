"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeInSection from "../animation/fadeIn";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="px-[0.5rem] pt-[0.5rem]">
      <div
        className="relative bg-[url(/bg-gradients/Background.png)] overflow-hidden bg-center bg-no-repeat flex justify-center items-center rounded-[0.75rem]"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Image
            src="/bg-gradients/logo-home.png"
            alt="hero"
            width={1184}
            height={1060}
            className="absolute object-contain overflow-visible w-[1184px] max-w-none top-0 pointer-events-none select-none"
        /> 
        <div className="flex flex-col gap-[3rem] w-full pt-[112px] md:pt-[9.5rem] overflow-hidden">
          <div className="flex flex-col gap-[3rem] mx-auto max-w-mobile md:max-w-tablet lg:max-w-desktop items-stretch">
            <FadeInSection
              stagger={0.3}
              className="flex flex-col gap-[2rem] items-center"
            >
              <div>
                <Link href="/about">
                  <button
                    className="inline-flex cursor-pointer items-center gap-2 h-7 rounded-full px-4 transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      backgroundColor: "#FFFFFF3D",
                      boxShadow: `0px 2px 8px rgba(0, 0, 0, 0.06),
                                  inset 0px -1px 18px rgba(255, 255, 255, 0.4)`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff5c";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0px 4px 12px rgba(0, 0, 0, 0.1), inset 0px -1px 20px rgba(255, 255, 255, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FFFFFF3D";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0px 2px 8px rgba(0, 0, 0, 0.06), inset 0px -1px 18px rgba(255, 255, 255, 0.4)";
                    }}
                  >
                    <span className="text-s-medium cursor-pointer text-gray-950">
                      Introducing Custo
                    </span>
                    <ArrowRight size="0.75rem" />
                  </button>
                </Link>
              </div>
              <div className="flex flex-col gap-[1rem] text-center max-w-[55.75rem] mx-auto">
                <div>
                  <h1 className="text-[2rem] leading-[1.2] tracking-tight md:text-[3rem] lg:text-[56px] font-semibold text-grayscale-950">
                    Powerful CRM Solutions for Growing Businesses
                  </h1>
                </div>
                <div>
                  <p className="text-xl-regular text-[1rem] md:text-[1.125rem] max-w-[41rem] mx-auto text-grayscale-600">
                    Streamline your customer relationships with an intuitive CRM
                    platform. Optimize workflows, and drive business growth with
                    ease.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <Link href="/contact">
                  <Button
                  variant="primary"
                  size="base"
                  className="cursor-pointer w-full"
                >
                  Start for Free
                </Button>
                </Link>
              </div>
            </FadeInSection>
            <FadeInSection
              delay={0}
              className="flex flex-col gap-[1.5rem] md:flex-row items-center justify-between"
            >
              <div className="flex flex-row gap-[1rem]">
                <Image src="/icon/List.svg" alt="list" width={72} height={32} />
                <div className="w-full max-w-[12.625rem]">
                  <p className="text-[14px] md:text-l-regular text-grayscale-600">
                    Trusted by 3K+ companies around the world
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[1.5rem] items-center">
                <div className="typography">
                  <h2 className="text-[28px] md:text-[36px] lg:text-[40px] text-[#181b25] font-semibold">4.9</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <Image
                    src="/icon/Stars.svg"
                    alt="star"
                    width={116}
                    height={20}
                  ></Image>
                  <p className="text-[14px] md:text-l-regular text-grayscale-600">
                    Based on 200+ reviews
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
          <FadeInSection className="relative h-[400px] w-full md:min-w-[1072px] max-w-[1072px] ml-[1rem] md:ml-[40px] lg:mx-auto">
            <Image
              src="/image/Dashboard.svg"
              alt="hero"
              fill
              priority
              className="object-cover object-left"
            />
            <Image
              src="/image/Floating.svg"
              alt="Floating"
              width={233.2549285888672}
              height={182.02293395996094}
              className="absolute hidden lg:block top-[7.75rem] right-[-1.875rem]"
            />
            <div className="absolute z-1 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </FadeInSection>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[32px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
