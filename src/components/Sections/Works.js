import { LargeCard } from "../Cards";
import eBarterYanPic from "../../../public/project_images/ebarteryan.png";

export default function Works() {
  const mainProjects = [
    {
      name: "eBarterYan",
      description: "An online bartering system",
      image: eBarterYanPic,
      link: "https://ebarteryan.onrender.com",
      techs: ["React", "Next.js", "MongoDB"],
    },
  ];

  const largeCards = mainProjects.map((project, index) => (
    <LargeCard
      key={index}
      name={project.name}
      description={project.description}
      image={project.image}
      link={project.link}
      techs={project.techs}
    />
  ));

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">{largeCards}</div>
    </div>
  );
}
