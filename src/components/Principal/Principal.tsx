"use client";

import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./Principal.data";
import Image from "next/image";

export function Principal() {
  return (
    <div className="relative px-6 py-20 md:py-64" id="AboutMe">
      <BackgroundRadialLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">About me</span>
              and my work values
              <br />
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Hi, I'm Gerardo Sanchez, a software developer with a passion for
              creating and learning backend and frontend. I specialize in
              building robust and efficient web applications that deliver a
              seamless user experience. With a foundation in both backend and
              frontend development, I bring a holistic approach to software
              engineering, ensuring that every component of an application works
              together harmoniously.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8"></div>
          </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="text-primary">{title}</h4>
                  <p className="text-primaryDark">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
