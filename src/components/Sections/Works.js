import { LargeCard, SmallCard } from "../Cards";
import eBarterYanPic from "../../../public/project_images/ebarteryan.png";
import quickLotteryPic from "../../../public/project_images/quick-lottery.png";
import simplyWeatherPic from "../../../public/project_images/simply-weather.png";
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
    <div id="works" className="flex flex-col gap-20 md:py-12">
      <div className="flex flex-col gap-10 md:gap-20">{largeCards}</div>
      <div className="flex flex-col gap-10">
        <p className="font-display text-3xl font-bold">Others</p>
        <div className="flex flex-col gap-10">{smallCards}</div>
      </div>
    </div>
  );
}
