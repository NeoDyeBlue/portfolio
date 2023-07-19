"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { JPText } from "../3dModels";
import { Vector3 } from "three";
import { useState } from "react";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

export default function About() {
  const [hovered, setIsHovered] = useState(false);
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      id="about"
      className="flex flex-col-reverse gap-4 md:flex-row md:gap-8 md:pt-12"
    >
      <div className="flex h-full w-full flex-col gap-6 leading-7">
        <p>
          Hi there, I&apos;m John Paul Zoleta a passionate web developer. During
          my early years in Computer Science, I practiced coding and designing
          through game development and static web pages. I also gained
          experience from an internship and other projects. Now I&apos;m focused
          on <span className="font-bold italic">React</span> and{" "}
          <span className="font-bold italic">Next.js</span> for creating
          responsive and neat websites.
        </p>
        <p>
          I am a nature lover and I usually do my exhausting but fun grind in{" "}
          <span className="font-bold italic">Genshin Impact</span> during my
          free time.
        </p>
      </div>
      <div
        className="relative hidden aspect-square h-full max-h-[240px] w-full max-w-[240px] border-y border-gray-300 before:absolute before:left-0
        before:top-0 before:h-[1px] before:w-[65%] before:bg-gray-300 md:block md:max-h-[320px] md:max-w-[320px] lg:border-t-0"
      >
        <Canvas
          className="h-full w-full"
          onPointerOver={() => setIsHovered(true)}
          onPointerOut={() => setIsHovered(false)}
        >
          <ambientLight intensity={2} />
          {/* <OrbitControls enableZoom={false} /> */}
          {/* <Environment preset="sunset" /> */}
          <JPText isHovered={hovered} />
          {/* <Rig /> */}
        </Canvas>
      </div>
    </div>
  );
}
