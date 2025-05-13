import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="hero-section pt-[9.5rem] pb-[6rem] px-[3.5rem] flex flex-col bg-grayscale-50 items-center">
        <div className="container max-w-[67rem] flex flex-col gap-[4rem] items-center justify-center">
            <div className="header flex flex-col gap-[1rem] items-center">
                <div className="typography text-grayscale-950">
                  <h1>About Custo</h1>
                </div>
                <p className="text-xlarge max-w-[41rem] text-center text-gray-600">Custo is a team of passionate makers dedicated to building tools that empower businesses to grow.</p>
            </div>
            <div className="content grid grid-cols-3 gap-[1.25rem]">
              <div className="flex flex-col gap-[1.25rem]">
                <Image src="content/content1.svg" alt="content" width={344} height={198} />
                <Image src="content/content2.svg" alt="content" width={344} height={198} />
              </div>
              <div>
                <Image src="content/content3.svg" alt="content" width={344} height={416} />
              </div>
              <div className="flex flex-col gap-[1.25rem]">
                <Image src="content/content4.svg" alt="content" width={344} height={198} />
                <Image src="content/content5.svg" alt="content" width={344} height={198} />
              </div>
            </div>
            <div className="clients flex flex-col gap-[2rem] pt-[0.5rem] justify-center items-center">
              <p className="text-xlarge text-grayscale-600">Trusted by companies around the world</p>
              <div className="flex flex-row opacity-40 gap-[4rem]">
                <Image src="client/client1.svg" alt="client" width={154} height={28} />
                <Image src="client/client2.svg" alt="client" width={154} height={28} />
                <Image src="client/client3.svg" alt="client" width={154} height={28} />
                <Image src="client/client4.svg" alt="client" width={154} height={28} />
                <Image src="client/client5.svg" alt="client" width={154} height={28} />
                <Image src="client/client6.svg" alt="client" width={154} height={28} />
              </div>
            </div>
        </div>
    </div>
  );
}
