"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./Projects.data";
import Image from "next/image";

export function Projects() {
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
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
              {dataCards.map(({ image, id, link }) => (
                <SwiperSlide key={id}>
                  <a href={link} target="_blank">
                    <img src={image} alt="Projects" width="400" height="300" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  );
}
