"use client";

import Image from "next/image";
import TechBadge from "../TechBadge";
import { CircleLinkButton } from "../Buttons";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
// import "./ParallaxEffectGlareScale.demozap.scss";

export default function LargeCard({
  name = "",
  description = "",
  image = "",
  techs = [],
  link = "",
}) {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href={link}
        target="_blank"
        className="group relative box-border overflow-visible rounded-[20px] border border-gray-300
        bg-clip-padding p-6 transition-all hover:border-black dark:border-cod-gray-700 dark:hover:border-white md:p-8"
      >
        <Tilt
          // className="parallax-effect-glare-scale"
          perspective={1500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <Image
            src={image}
            alt="project image"
            width={1250}
            height={720}
            className="z-20 h-auto w-full -rotate-6 rounded-[15px] object-cover shadow-lg transition-transform group-hover:rotate-0"
            // fill
          />
        </Tilt>
      </Link>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <TechBadge key={index} text={tech} />
        ))}
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-display text-3xl font-bold italic">{name}</p>
          <p className="leading-7">{description}</p>
        </div>
        <CircleLinkButton link={link} size={60} />
      </div>
    </div>
  );
}
