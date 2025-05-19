import Header from "../common/header";
import Image from "next/image";

export default function Features1() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[3rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop py-[3rem] md:py-[5rem] lg:py-[6.5rem]">
        <div className="mx-auto">
          <Header
            title="Elevate Business Growth"
            description="Scale your business effortlessly with a powerful and intuitive CRM solutions."
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center p-[1.25rem] md:p-[2rem] lg:p-[2.5rem] rounded-[1.25rem] border border-gray-200 shadow-[0_0_8px_rgba(0,0,0,0.10)] gap-[2.5rem]">
          <div className="flex flex-col gap-[2rem]">
            <Image
              src="/image/Image.svg"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <div className="flex flex-row gap-[1.5rem] items-center">
              <div className="hidden md:block p-[0.75rem] rounded-full h-[3rem] bg-radial-[at_50%_100%] from-[#6D7A97] to-grayscale-950 to-50%">
                <Image
                  src="/icon/AlignLeft-Bulk.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
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
          <div className="w-px h-full bg-grayscale-200" />
          <div className="flex flex-col gap-[2rem]">
            <Image
              src="/image/Image (1).svg"
              alt="Description of the image"
              width={500}
              height={300}
            />
            <div className="flex flex-row gap-[1.5rem] items-center">
              <div className="hidden md:block p-[0.75rem] rounded-full h-[3rem] bg-radial-[at_50%_100%] from-[#6D7A97] to-grayscale-950 to-50%">
                <Image
                  src="/icon/CalendarBlank-Bulk.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
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
        </div>
      </div>
    </div>
  );
}
