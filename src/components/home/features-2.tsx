import Image from "next/image";
import FadeInSection from "../animation/fadeIn";

export default function Features2() {
  return (
    <div id="features-2" className=" py-12 md:py-20 lg:py-[104px] px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
      <div className="container max-w-[1072px] flex flex-col gap-16 md:gap-20 justify-center items-center">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[454px_1fr] gap-10 lg:gap-[92px] overflow-hidden justify-center items-start lg:items-center">
          <FadeInSection className="relative overflow-hidden lg:w-full lg:max-h-[440px]">
            <Image
              src="/features/Background.png"
              alt=""
              width={454}
              height={440}
              unoptimized
              className="overflow-hidden w-full h-full"
            />
            <FadeInSection className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row gap-4 justify-center items-center">
              <Image
                  src="/features/img-1/Component-2.png"
                  alt=""
                  width={168}
                  height={122}
                  unoptimized
                  className="w-[112px] h-[81px] md:w-[230px] md:h-[167px] lg:w-[168px] lg:h-[122px]"
                />
              <Image
                  src="/features/img-1/Component-1.png"
                  alt=""
                  width={240}
                  height={282}
                  unoptimized
                  className="w-[160px] h-[189px] md:w-[329px] md:h-[389px] lg:w-[240px] lg:h-[282px]"
                />
              <Image
                  src="/features/img-1/Component-3.png"
                  alt=""
                  width={168}
                  height={122}
                  unoptimized
                  className="w-[112px] h-[81px] md:w-[230px] md:h-[167px] lg:w-[168px] lg:h-[122px]"
                />
            </FadeInSection>
          </FadeInSection>

          <FadeInSection className="flex flex-col gap-4 items-start max-w-[526px] lg:w-full">
            <p className="text-[16px] md:text-[18px] leading-[160%] font-medium text-primary-500">Analytics & Reporting</p>
            <p className="text-[28px] md:text-[36px] lg:text-[40px] leading-[140%] tracking-tight font-semibold text-grayscale-950">Understand Your Business Like Never Before</p>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-grayscale-600">Get real-time insights into sales performance, customer behavior, and business growth.</p>
          </FadeInSection>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[454px_1fr] gap-10 lg:gap-[92px] overflow-hidden justify-center items-start lg:items-center">
          <FadeInSection className="relative overflow-hidden lg:w-full lg:max-h-[440px]">
            <Image
              src="/features/Background.png"
              alt=""
              width={454}
              height={440}
              unoptimized
              className="overflow-hidden w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center">
              <div className="relative">
                <FadeInSection delay={0.1}>
                  <Image
                    src="/features/img-2/Component-4.png"
                    alt=""
                    width={240}
                    height={60}
                    unoptimized
                    className="w-[160px] h-[40px] md:w-[329px] md:h-[82px] lg:w-[240px] lg:h-[60px]"
                  />
                  <div className="absolute -right-7 -bottom-3.5 md:-right-11 md:-bottom-3">
                    <FadeInSection delay={0.2}>
                      <Image
                        src="/features/img-2/Cursor-1.png"
                        alt=""
                        width={75}
                        height={40}
                        unoptimized
                        className="w-[50px] h-[31px] md:w-[103px] md:h-[62px] lg:w-[75px] lg:h-[40px]"
                      />
                    </FadeInSection>
                  </div>
                </FadeInSection>
              </div>
              <div className="relative">
                <FadeInSection delay={0.3}>
                  <Image
                    src="/features/img-2/Component-5.png"
                    alt=""
                    width={240}
                    height={232}
                    unoptimized
                    className="w-[160px] h-[155px] md:w-[329px] md:h-[318px] lg:w-[240px] lg:h-[232px]"
                  />
                  <div className="absolute right-7 bottom-6 lg:right-9 lg:bottom-9">
                    <FadeInSection delay={0.4}>
                      <Image
                        src="/features/img-2/Cursor-2.png"
                        alt=""
                        width={68}
                        height={40}
                        unoptimized
                        className="w-[45px] h-[30px] md:w-[93px] md:h-[62px] lg:w-[68px] lg:h-[40px]"
                      />
                    </FadeInSection>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="flex flex-col gap-4 items-start max-w-[526px] lg:w-full">
            <p className="text-[16px] md:text-[18px] leading-[160%] font-medium text-primary-500">Multi-User Collaboration</p>
            <p className="text-[28px] md:text-[36px] lg:text-[40px] leading-[140%] tracking-tighter md:tracking-tight font-semibold text-grayscale-950">Empower Your Team with Real-Time Sync</p>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-grayscale-600">Collaborate effortlessly with your team by sharing information, notes, and real-time updates.</p>
          </FadeInSection>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[454px_1fr] gap-10 lg:gap-[92px] overflow-hidden justify-center items-start lg:items-center">
          <FadeInSection className="relative overflow-hidden lg:w-full lg:max-h-[440px]">
            <Image
              src="/features/Background.png"
              alt=""
              width={454}
              height={440}
              unoptimized
              className="overflow-hidden w-full h-full"
            />
            <div className="absolute top-1/2 -translate-y-1/2 flex flex-row gap-4 justify-center items-center">
              <FadeInSection delay={0.2}>
                <Image
                  src="/features/img-3/Component-6.png"
                  alt=""
                  width={688}
                  height={360}
                  unoptimized
                />
              </FadeInSection>
            </div>
          </FadeInSection>

          <FadeInSection className="flex flex-col gap-4 items-start max-w-[526px] lg:w-full">
            <p className="text-[16px] md:text-[18px] leading-[160%] font-medium text-primary-500">Email Integration</p>
            <p className="text-[28px] md:text-[36px] lg:text-[40px] leading-[140%] tracking-tighter font-semibold text-grayscale-950">Manage Emails Without Leaving Your CRM</p>
            <p className="text-[16px] md:text-[18px] leading-[160%] text-grayscale-600">Sync with your email to send, receive, and track conversations directly from the CRM.</p>
          </FadeInSection>
        </div>

      </div>
    </div>
  );
}
