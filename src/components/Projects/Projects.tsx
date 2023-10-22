"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./Projects.data";
import { useState } from "react";
import Image from "next/image";

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string>(dataCards[0].text);
  return (
    <div className="relative px-6 py-20 md:py-64" id="projects">
      <BackgroundRadialRight />
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">
            Some of my most recent
            <span className="block degradedBlue bg-blueLight">projects</span>
          </h2>
        </Reveal>
        <div className="px-5">
          <MotionTransition>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              onSlideChange={(swiper) => {
                const currentSlide = swiper.activeIndex;
                setSelectedImage(dataCards[currentSlide].text);
              }}
            >
              {dataCards.map(({ image, id, link }) => (
                <SwiperSlide key={id}>
                  <a href={link} target="_blank">
                    <img src={image} alt="Projects" width="400" height="300" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            {selectedImage && (
              <div className="image-caption mt-6">{selectedImage}</div>
            )}
          </MotionTransition>
        </div>
      </div>
    </div>
  );
}
