import { LargeCard, SmallCard } from "../Cards";
import { deployedWorks, undeployedWorks } from "@/lib/works";

export default function Works() {
  const largeCards = deployedWorks.map((project, index) => (
    <LargeCard
      key={index}
      name={project.name}
      description={project.description}
      image={project.mainImage}
      link={project.link}
      techs={project.techs}
    />
  ));

  const smallCards = undeployedWorks.map((project, index) => (
    <SmallCard
      key={index}
      name={project.name}
      description={project.description}
      image={project.mainImage}
      otherImages={project.images}
      link={project.link}
      techs={project.techs}
    />
  ));

  return (
    <div id="works" className="relative flex flex-col gap-20 py-8 md:py-12">
      <p
        className="absolute -top-[1rem] left-[1.5rem] z-10 bg-white px-1 font-display text-6xl font-extrabold uppercase text-gray-300
       transition-colors dark:bg-cod-gray-950 dark:text-cod-gray-800 md:-top-[0.15rem] md:left-[2.5rem] md:text-[4rem]"
      >
        works
      </p>
      <div className="flex flex-col gap-10 md:gap-20">{largeCards}</div>
      <div className="flex flex-col gap-10">
        <p className="font-display text-3xl font-extrabold uppercase">More</p>
        <div className="flex flex-col gap-10">{smallCards}</div>
      </div>
    </div>
  );
}
