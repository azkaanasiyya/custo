import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";
import { stats } from "../data/stats";

export default function HomeStats() {
  return (
    <div className="flex w-full justify-center">
      <SlideFadeIn
        items={[
          { selector: "[data-animate='stats-1']", direction: "y", from: 70 },
        ]}
      >
        <div className="flex flex-col md:flex-row md:gap-[1.25rem] lg:gap-[3rem] w-full max-w-mobile md:max-w-tablet lg:max-w-desktop py-[1.25rem] md:py-[4rem]">
          {stats.map((stat, index) => (
            <div
              className="flex flex-col gap-[1.25rem] items-center py-[1.25rem] md:py-0"
              key={index}
            >
              <h2
                data-animate="stats-1"
                className="font-sans font-semibold leading-[140%] text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] text-primary-500"
              >
                {stat.value}
              </h2>
              <div className="flex flex-col gap-2 items-center">
                <h4
                  data-animate="stats-1"
                  className="font-sans font-semibold leading-[140%] text-[1.25rem] lg:text-[1.5rem]"
                >
                  {stat.title}
                </h4>
                <p
                  data-animate="stats-1"
                  className="text-m-regular text-[0.75rem] md:text-[0.875rem] text-grayscale-600 text-center"
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SlideFadeIn>
    </div>
  );
}
