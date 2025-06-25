"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
};

export default function Marquee({ children, duration = 20 }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        x: "-50%",
        ease: "none",
        duration: duration,
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, [duration]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={marqueeRef}
        className="flex flex-row gap-16 opacity-40 whitespace-nowrap"
      >
        {children}
        {children}
      </div>
    </div>
  );
}
