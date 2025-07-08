'use client';

import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../data/stats";
import FadeInSection from "../animation/fadeIn";

export default function HomeStats() {
  return (
    <div className="flex justify-center px-6 py-12 md:px-12 md:py-16 lg:p-16">
      <div className="flex flex-col md:flex-row md:gap-[1.25rem] lg:gap-[40px] items-strech max-w-mobile md:max-w-tablet lg:max-w-desktop">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} delay={0.5} />
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ stat, delay }: { stat: any; delay: number }) {
  const numericValue = parseFloat(stat.value.replace(/[^\d.]/g, ""));
  const suffix = stat.value.match(/[^\d.]+$/)?.[0] || "";

  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <FadeInSection delay={delay}>
      <div
        ref={ref}
        className="flex flex-col gap-[1.25rem] h-full border-b-[1px] border-b-grayscale-200 items-center py-[1.25rem] md:py-0"
      >
        <h2 className="font-sans font-semibold leading-[140%] text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] md:pt-10 text-primary-500">
          {inView && !hasAnimated ? (
            <CountUp
              start={0}
              end={numericValue}
              duration={1.5}
              separator=","
              suffix={suffix}
              onEnd={() => setHasAnimated(true)}
            />
          ) : (
            <>
              {numericValue.toLocaleString()}
              {suffix}
            </>
          )}
        </h2>
        <div className="flex flex-col gap-2 items-center">
          <h4 className="font-sans font-semibold leading-[140%] text-[1.25rem] lg:text-[1.5rem]">
            {stat.title}
          </h4>
          <p className="text-m-regular md:pb-10 text-[0.75rem] md:text-[0.875rem] text-grayscale-600 text-center">
            {stat.description}
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}
