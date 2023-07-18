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
        className="group relative box-border overflow-visible rounded-[20px] border border-b-8 border-r-8 border-gray-100
        bg-gray-100 p-8 transition-all hover:border-black dark:border-gray-800 dark:bg-gray-800 dark:hover:border-white"
      >
        <Image
          src={image}
          alt="project image"
          width={1250}
          height={720}
          className="h-auto w-full -rotate-6 rounded-[15px] object-cover shadow-lg transition-transform group-hover:rotate-0"
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
