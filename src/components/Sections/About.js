"use client";

import { Canvas } from "@react-three/fiber";
import { motion as motion3d } from "framer-motion-3d";
import { Environment, OrbitControls } from "@react-three/drei";
import { JPText } from "../3dModels";
import { useState } from "react";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-8"
    >
      <div className="flex flex-col gap-6 leading-7">
        <p>
          Hi there, I&apos;m John Paul Zoleta a passionate web developer. During
          my early years in Computer Science, I practiced coding and designing
          through game development and static web pages. I also gained
          experience from an internship and other projects. Now I&apos;m focused
          on <span className="font-bold">React</span> and{" "}
          <span className="font-bold">Next.js</span>
          for creating responsive and neat websites.
        </p>
        <p>
          I usually do my exhausting but fun grind in{" "}
          <span className="font-bold italic">Genshin Impact</span> during my
          free time and contemplate my life choices.
        </p>
      </div>
      <div
        className="aspect-square h-full max-h-[200px] w-full max-w-[200px] 
        md:max-h-[420px] md:max-w-[420px]"
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
