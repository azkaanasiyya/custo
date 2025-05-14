import Image from "next/image";

export default function Features2() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[5rem] w-full max-w-[67rem] py-[6.5rem]">
        <div className="grid grid-cols-2 items-center gap-[1.25rem]">
          <Image src="/features/Image.svg" alt="" width={454} height={440} />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-xl-medium text-prima text-primary-500">
              Analytics & Reporting
            </p>
            <h2 className="font-sans font-semibold text-[2.5rem] leading-[140%] text-grayscale-950">
              Understand Your Business Like Never Before
            </h2>
            <p className="text-xl-regular text-grayscale-600">
              Get real-time insights into sales performance, customer behavior,
              and business growth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-[1.25rem]">
          <Image
            src="/features/Image (1).svg"
            alt=""
            width={454}
            height={440}
          />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-xl-medium text-prima text-primary-500">
              Multi-User Collaboration
            </p>
            <h2 className="font-sans font-semibold text-[2.5rem] leading-[140%] text-grayscale-950">
              Empower Your Team with Real-Time Sync
            </h2>
            <p className="text-xl-regular text-grayscale-600">
              Collaborate effortlessly with your team by sharing information,
              notes, and real-time updates.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-[1.25rem]">
          <Image
            src="/features/Image (2).svg"
            alt=""
            width={454}
            height={440}
          />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-xl-medium text-prima text-primary-500">
              Email Integration
            </p>
            <h2 className="font-sans font-semibold text-[2.5rem] leading-[140%] text-grayscale-950">
              Manage Emails Without Leaving Your CRM
            </h2>
            <p className="text-xl-regular text-grayscale-600">
              Sync with your email to send, receive, and track conversations
              directly from the CRM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
