"use client";

import { useEffect, useState } from "react";

import Testimonial from "@/components/common/testimonial";
import FAQs from "@/components/common/faqs";
import Features1 from "@/components/home/features-1";
import Features2 from "@/components/home/features-2";
import HomeHero from "@/components/home/hero";
import HomeStats from "@/components/home/stats";
import CTA from "@/components/layout/cta";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
  if (!window.location.hash) return;

  const scrollToHash = () => {
    const el = document.querySelector(window.location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setTimeout(scrollToHash, 100); 
    }
  } ;

  scrollToHash();
}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <HomeHero />
      <HomeStats />
      <Features1 />
      <Features2 />
      <Testimonial />
      <FAQs />
      <CTA />
    </div>
  );
}
