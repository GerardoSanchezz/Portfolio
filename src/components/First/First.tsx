"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function First() {
  return (
    <div className="relative p-4 md:py-40">
      <BackgroundRadialRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              Hi! I am
              <span className="block degradedBlue bg-blueLight">
                Gerardo Sanchez
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              I am a software developer with a passion for creating and learning
              new things. Additionally, I am a student at Tecnologico de
              Monterrey.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blueRadial"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "8px" }}>
                  <img
                    src="/assets/descargas.png"
                    alt="Download Icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                </span>
                Download Resume
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image
            src="/assets/Gerardo_circular_photo.png"
            alt="Me"
            width={450}
            height={450}
            className="h-auto w-72 md:w-full"
          />
        </MotionTransition>
      </div>
    </div>
  );
}
