"use client";

import Image from "next/image";
import TechBadge from "../TechBadge";
import ImageCarousel from "../ImageCarousel";
import { useState } from "react";

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
        className="group relative box-border h-full w-full max-w-[300px] cursor-pointer overflow-hidden rounded-[15px] border border-gray-100
        transition-all hover:-mb-[3px] hover:border-b-8 hover:border-r-8 hover:border-black dark:border-gray-800 dark:hover:border-white"
      >
        <Image
          src={image}
          alt="project image"
          width={1250}
          height={1250}
          className="h-auto w-full transition-transform group-hover:scale-[1.05]"
        />
      </button>
      <div className="flex flex-col gap-3">
        <p className="font-display text-xl font-bold">{name}</p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <TechBadge key={index} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
