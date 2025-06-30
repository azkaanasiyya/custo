"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { pricingPlans as plansData } from "../data/pricing";
import FadeInSection from "../animation/fadeIn";

export default function PricingHero() {
  const [isAnnually, setIsAnnually] = useState(false);

  const pricingPlans = plansData.map((plan) => {
    const monthly = {
      ...plan,
      price: plan.price,
      note: "/month",
    };

    const annually = {
      ...plan,
      price: `$${parseInt(plan.price.replace("$", "")) * 10}`,
      note: "/year",
    };

    return isAnnually ? annually : monthly;
  });

  return (
    <div className="p-2">
      <div 
        className="hero-section relative bg-[url('/bg-gradients/Background.png')] overflow-hidden bg-center bg-no-repeat rounded-[0.75rem] pt-[120px] md:pt-40 pb-12 md:pb-[6.5rem] px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Image
          src="/background/logo-pricing.png"
          alt="pricing"
          width={1184}
          height={1060}
          className="absolute object-contain overflow-visible w-[1184px] max-w-none top-0 pointer-events-none select-none"
        />
        <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-10">
          <FadeInSection stagger={0.15} variant="bottom-to-top" className="w-full flex flex-col justify-center items-center">
            <div className="header flex flex-col gap-4 justify-center items-center">
              <h1 className="text-[32px] md:text-[48px] lg:text-[56px] leading-[120%] font-semibold text-grayscale-950 text-center max-w-[550px]">
                Designed for Sustainable Growth
              </h1>
              <p className="text-large md:text-xlarge max-w-[41rem] text-center text-gray-600">
                Invest in a solution that scales with precision and purpose.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.1} variant="bottom-to-top">
            <div className="cursor-pointer flex justify-center">
              <div 
                  className="relative cursor-pointer flex items-center bg-[#DDF5E6]/40 rounded-full p-1 w-[280px] h-[48px] border-white/40 backdrop-blur-md"
                  style={{
                    borderImage: 'linear-gradient(90deg, #FFFFFFA3 0%, #9DE2CD 64%, #9DE2CD 94.8%, #FFFFFFCC 100%) 1',
                    boxShadow: `
                      0px 2px 8px rgba(0, 0, 0, 0.06), 
                      inset 0px -1px 18px rgba(255, 255, 255, 0.4)
                    `,
                  }}
              >
                <div
                  className={`absolute top-1 left-1 h-[40px] w-[132px] cursor-pointer rounded-full bg-white shadow transition-all duration-300 ${
                    isAnnually ? "translate-x-[136px]" : "translate-x-0"
                  }`}
                ></div>
                <button
                  aria-label="Monthly"
                  onClick={() => setIsAnnually(false)}
                  className={`z-10 w-[132px] h-[40px] text-sm cursor-pointer font-medium rounded-full transition-colors ${
                    !isAnnually ? "text-grayscale-900" : "text-gray-500"
                  }`}
                >
                  Monthly
                </button>
                <button
                  aria-label="Annually"
                  onClick={() => setIsAnnually(true)}
                  className={`z-10 w-[132px] h-[40px] text-sm font-medium cursor-pointer rounded-full transition-colors ${
                    isAnnually ? "text-grayscale-900" : "text-gray-500"
                  }`}
                >
                  Annually
                </button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection stagger={0.15} variant="bottom-to-top" className="w-full">
            <div className="content grid grid-cols-1 w-full lg:grid-cols-3 items-center gap-5 md:pt-6">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`${
                    plan.popular
                      ? "relative flex flex-col justify-center items-center gap-3 pt-3 px-0.5 pb-0.5 bg-grayscale-950 rounded-[1.25rem]"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <p className="text-medium text-white">Most Popular</p>
                  )}

                  <div className="card flex flex-col gap-5 md:gap-8 w-full rounded-[1.25rem] border p-5 md:p-7 bg-white border-grayscale-200">
                    <div className="flex flex-col gap-1 md:gap-3">
                      <p className="text-[16px] md:text-xlarge font-medium text-grayscale-950">
                        {plan.name}
                      </p>
                      <div className="flex flex-row items-end gap-3">
                        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[140%]">
                          {plan.price}
                        </h2>
                        <p className="text-[16px] md:text-xlarge text-grayscale-600">
                          {plan.note}
                        </p>
                      </div>
                      <p className="text-small md:text-medium text-grayscale-600">
                        {plan.desc}
                      </p>
                    </div>

                    <Button variant={plan.variant} size="pricing">
                      Get Started
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex flex-row gap-2">
                          <Image
                            src="/icon/check.svg"
                            alt="check"
                            width={20}
                            height={20}
                          />
                          <p className="text-small md:text-medium text-grayscale-950">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
