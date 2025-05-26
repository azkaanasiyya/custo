"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SelectorSlideFadeIn {
  selector: string;
  direction?: "x" | "y";
  from?: number;
  duration?: number;
  staggerDelay?: number;
}

interface SlideFadeInProps {
  children: React.ReactNode;
  items: SelectorSlideFadeIn[];
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  className?: string;
}

export default function SlideFadeIn({
  children,
  items,
  delay = 0,
  duration = 0.7,
  staggerDelay = 0.1,
  className = "",
}: SlideFadeInProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, { display: "block" });

    items.forEach((item, index) => {
      const el = containerRef.current?.querySelector(item.selector);
      if (!el) return;

      const direction = item.direction || "y";
      const from = item.from ?? (direction === "x" ? 100 : 70);
      const itemDuration = item.duration ?? duration;
      const itemStaggerDelay = item.staggerDelay ?? staggerDelay;

      gsap.fromTo(
        el,
        {
          [direction]: from,
          opacity: 0,
        },
        {
          [direction]: 0,
          opacity: 1,
          duration: itemDuration,
          delay: delay + index * itemStaggerDelay,
          ease: "power2.out",
        }
      );
    });
  }, [items, delay, duration, staggerDelay]);

  return (
    <div ref={containerRef} className={className} style={{ display: "none" }}>
      {children}
    </div>
  );
}
