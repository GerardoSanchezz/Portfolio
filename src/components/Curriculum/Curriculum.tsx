"use client";
import "swiper/css";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { CtaDark } from "../CtaDark";

export function Curriculum() {
  return (
    <div className="relative py-20 md:py-64" id="contact">
      <BackgroundRadialRight />
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          speed={2000}
        ></Swiper>
      </div>

      <CtaDark />
    </div>
  );
}
