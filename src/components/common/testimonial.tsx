"use client";

import Header from "@/components/common/header";
import Image from "next/image";
import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  return (
    <div className="testimonial-section py-12 px-6 md:py-20 md:px-12 lg:py-[6.5rem] lg:px-[1rem] flex flex-col justify-center items-center overflow-x-hidden">
      <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
        <Header
          title="Real Stories from Real Users"
          description="Hear how Custo has helped businesses close more deals, collaborate better, and stay organized."
        />

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation={true}  
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
        </div>
      </div>
    </div>
  );
}
