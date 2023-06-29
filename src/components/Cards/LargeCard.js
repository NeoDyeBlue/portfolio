import Image from "next/image";
import TechBadge from "../TechBadge";
import { CircleLinkButton } from "../Buttons";
import Link from "next/link";

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
        className="relative overflow-hidden rounded-[20px] border border-gray-300 dark:border-gray-900"
      >
        <Image
          src={image}
          alt="project image"
          width={1500}
          height={1500}
          className="h-auto w-full object-cover transition-transform hover:scale-[1.05]"
          // fill
        />
      </Link>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <TechBadge key={index} text={tech} />
        ))}
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-display text-3xl font-bold">{name}</p>
          <p className="leading-7">{description}</p>
        </div>
        <CircleLinkButton link={link} size={60} />
      </div>
    </div>
  );
}
