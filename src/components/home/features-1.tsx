import FadeInSection from "../animation/fadeIn";
import Header from "../common/header";
import Image from "next/image";

export default function Features1() {
  return (
    <div className="flex justify-center py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-16">
      <div className="flex flex-col gap-16 max-w-mobile md:max-w-tablet lg:max-w-desktop">
        <div className="mx-auto">
          <Header
            title="Elevate Business Growth"
            description="Scale your business effortlessly with a powerful and intuitive CRM solutions."
          />
        </div>
        <FadeInSection delay={0.5} className="flex flex-col lg:flex-row justify-between items-center p-[1.25rem] md:p-[2rem] lg:p-[2.5rem] rounded-[1.25rem] border border-gray-200 shadow-[0_0_8px_rgba(0,0,0,0.10)] gap-8 lg:gap-[2.5rem]">
          <div className="flex flex-col gap-[2rem] pr-0 pb-5 md:pb-8 lg:pb-0 lg:pr-[2.5rem] border-b lg:border-b-0 lg:border-r border-grayscale-200">
            <Image
              src="/image/Image.svg"
              alt="Description of the image"
              width={500}
              height={300}
              className="w-[287px] h-[196.56px] md:w-[608px] md:h-[416.46px] lg:w-[500px] lg:h-[300px]"
            />
            <div className="flex flex-row gap-[1.5rem] items-start md:items-center">
              <Image
                  src="/icon/task.png"
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              <div className="flex flex-col gap-[0.5rem]">
                <h4 className="font-sans font-semibold text-[1.25rem] lg:text-[1.5rem] leading-[140%] text-gray-950">
                  Task Automation
                </h4>
                <p className="text-l-regular text-[0.875rem] md:text-[1rem] text-gray-600">
                  Automate follow-ups to reduce manual work.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2rem]">
            <Image
              src="/image/Image (1).svg"
              alt="Description of the image"
              width={500}
              height={300}
              className="w-[287px] h-[196.56px] md:w-[608px] md:h-[416.46px] lg:w-[500px] lg:h-[300px]"
            />
            <div className="flex flex-row gap-[1.5rem] items-start md:items-center">
              <Image
                  src="/icon/meeting.png"
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              <div className="flex flex-col gap-[0.5rem]">
                <h4 className="font-sans font-semibold  text-[1.25rem] lg:text-[1.5rem] leading-[140%] text-gray-950">
                  Meeting Organizer
                </h4>
                <p className="text-l-regular text-[0.875rem] md:text-[1rem] text-gray-600">
                  Manage deals at every stage faster.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
