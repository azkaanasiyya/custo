"use client";

import Header from "@/components/common/header";
import Image from "next/image";
import { useRef } from "react";
import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="testimonial-section py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-[1rem] flex flex-col justify-center items-center overflow-x-hidden">
      <div className=" container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
        <Header
          title="Real Stories from Real Users"
          description="Hear how Custo has helped businesses close more deals, collaborate better, and stay organized."
        />

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation === "object"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            className="!overflow-visible"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="px-4">
                <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center mx-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={294}
                    height={305}
                    className="w-full md:h-[305px] md:w-[294px] h-auto object-cover rounded-xl"
                  />
                  <div className="flex flex-col gap-8 p-6 md:p-8 max-w-[36.25rem] rounded-[20px] border border-grayscale-200 shadow">
                    <Image
                      src={item.stars}
                      alt="stars"
                      width={116}
                      height={20}
                    />
                    <p className="text-medium md:text-large text-grayscale-600">
                      “{item.quote}”
                    </p>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-large md:text-xlarge text-grayscale-950 font-medium">
                        {item.name}
                      </p>
                      <p className="text-small md:text-medium text-grayscale-600">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
              aria-label="Next slide"
              ref={prevRef}
              className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
            >
              <Image src="/icon/arrow-left.png" alt="Previous" width={20} height={20} />
          </button>
          <button
              aria-label="Next slide"
              ref={nextRef}
              className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
            >
              <Image src="/icon/arrow-right.png" alt="Next" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
