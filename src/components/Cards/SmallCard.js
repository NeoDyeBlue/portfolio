import Image from "next/image";
import TechBadge from "../TechBadge";

export default function SmallCard({ name = "", image = "", techs = [] }) {
  return (
    <div className="flex gap-4">
      <div>
        <Image
          src={image}
          alt="project image"
          width={200}
          height={150}
          className="h-auto w-full rounded-[10px] border border-gray-300 dark:border-gray-900"
        />
      </div>
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
