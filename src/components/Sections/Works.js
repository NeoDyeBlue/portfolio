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
    <div id="works" className="relative flex flex-col gap-20">
      <div>
        <p
          className="relative z-10 ml-6 w-fit bg-white pl-1 pr-2 font-display text-3xl font-extrabold uppercase leading-none text-gray-300
       transition-colors dark:bg-cod-gray-950 dark:text-cod-gray-800 320px:text-6xl md:ml-8 md:text-[4rem]"
        >
          works
        </p>
        <div className="relative -mt-3 flex flex-col gap-10 md:-mt-4 md:gap-16">
          {largeCards}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="font-display text-3xl font-extrabold uppercase">More</p>
        <div className="flex flex-col gap-10">{smallCards}</div>
      </div>
    </div>
  );
}
