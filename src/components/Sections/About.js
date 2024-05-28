"use client";

import { Canvas } from "@react-three/fiber";
import { JPText } from "../3dModels";
import { useState } from "react";

export default function About() {
  const [hovered, setIsHovered] = useState(false);

  return (
    <div
      id="about"
      className="flex flex-col-reverse gap-4 md:flex-row md:gap-6 md:pt-0 lg:gap-8 lg:pt-8 xl:pt-12"
    >
      <div className="flex h-full w-full flex-col gap-6 leading-7">
        <p>
          Hi there, I&apos;m John Paul Zoleta a passionate web developer. During
          my early years in Computer Science, I practiced coding and designing
          through game development and static web pages. Experienced with web
          technologies such as <span className="font-bold italic">Laravel</span>{" "}
          and <span className="font-bold italic">Next.js</span>. focused on{" "}
          <span className="font-bold italic">React</span> for the frontend and{" "}
          <span className="font-bold italic">relational databases</span> for
          data persistence.
        </p>
        <p>
          I love open-world games as a past time and I usually do my exhausting
          but fun grind in{" "}
          <span className="font-bold italic">Genshin Impact</span>.
        </p>
      </div>
      <div
        className="relative flex w-full items-center justify-center border-y border-gray-300 before:absolute before:left-0
        before:top-0 before:hidden before:w-[65%] before:border-t before:border-gray-300 dark:border-cod-gray-700 before:dark:border-cod-gray-700 lg:border-t-0 lg:before:block"
      >
        <Canvas
          className="aspect-square h-full w-full 540px:max-h-[320px] 540px:max-w-[320px]"
          onPointerOver={() => setIsHovered(true)}
          onPointerOut={() => setIsHovered(false)}
        >
          <ambientLight intensity={2} />

          <JPText isHovered={hovered} />
        </Canvas>
      </div>
    </div>
  );
}
