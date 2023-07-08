"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { JPText } from "../3dModels";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse gap-4 md:pt-12 lg:flex-row lg:gap-8"
    >
      <div className="flex h-full w-full flex-col gap-6 leading-7">
        <p>
          Hi there, I&apos;m John Paul Zoleta a passionate web developer. During
          my early years in Computer Science, I practiced coding and designing
          through game development and static web pages. I also gained
          experience from an internship and other projects. Now I&apos;m focused
          on <span className="font-bold">React</span> and{" "}
          <span className="font-bold">Next.js</span> for creating responsive and
          neat websites.
        </p>
        <p>
          I am a nature lover and I usually do my exhausting but fun grind in{" "}
          <span className="font-bold italic">Genshin Impact</span> during my
          free time.
        </p>
      </div>
      <div
        className="aspect-square h-full max-h-[240px] w-full max-w-[240px] 
        xl:max-h-[320px] xl:max-w-[320px]"
      >
        <Canvas className="h-full w-full">
          {/* <ambientLight intensity={0.1} /> */}
          <OrbitControls enableZoom={false} />
          <Environment preset="sunset" />
          <JPText />
        </Canvas>
      </div>
    </div>
  );
}
