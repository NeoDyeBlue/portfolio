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
      <div
        className="relative h-full w-full max-w-[300px] overflow-visible rounded-[15px] border border-gray-300
        p-3 transition-colors dark:border-cod-gray-700 md:p-4"
      >
        <Tilt
          className="h-full w-full overflow-hidden rounded-[10px] shadow-md transition-all hover:shadow-xl"
          perspective={1500}
          scale={1.02}
        >
          <span
            role="button"
            className="h-full w-full"
            onClick={() => setShowCarousel(true)}
          >
            <Image
              src={image}
              alt="project image"
              width={1250}
              height={720}
              className="h-auto w-full object-cover"
            />
          </span>
        </Tilt>
      </div>
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
