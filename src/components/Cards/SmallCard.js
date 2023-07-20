"use client";

import Image from "next/image";
import TechBadge from "../TechBadge";
import ImageCarousel from "../ImageCarousel";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function SmallCard({
  name = "",
  image = "",
  techs = [],
  otherImages = [],
}) {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="flex gap-4">
      {showCarousel ? (
        <ImageCarousel
          title={name}
          onClose={() => setShowCarousel(false)}
          images={otherImages}
        />
      ) : null}
      <button
        onClick={() => setShowCarousel(true)}
        className="group relative box-border h-full w-full max-w-[300px] cursor-pointer overflow-visible rounded-[15px] border border-gray-300 bg-clip-padding
        p-3 transition-all hover:border-black dark:border-cod-gray-700 dark:hover:border-white"
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
            className="h-auto w-full rounded-[10px] shadow-md transition-transform group-hover:scale-[1.05]"
          />
        </Tilt>
      </button>
      <div className="flex flex-col gap-3">
        <p className="font-display text-xl font-bold italic">{name}</p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <TechBadge key={index} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
