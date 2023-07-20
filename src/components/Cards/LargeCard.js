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
      <div
        className="relative h-full w-full overflow-visible rounded-[20px] border border-gray-300
        p-6 transition-all dark:border-cod-gray-700 md:p-8"
      >
        <Tilt
          className="overflow-hidden rounded-[15px] shadow-md transition-all hover:shadow-xl"
          perspective={2500}
          scale={1.02}
        >
          <Link href={link} target="_blank">
            <Image
              src={image}
              alt="project image"
              width={1250}
              height={720}
              className="h-auto w-full object-cover"
              // fill
            />
          </Link>
        </Tilt>
      </div>
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
