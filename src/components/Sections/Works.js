import { LargeCard } from "../Cards";
import eBarterYanPic from "../../../public/project_images/ebarteryan.png";
import quickLotteryPic from "../../../public/project_images/quick-lottery.png";
import simplyWeatherPic from "../../../public/project_images/simply-weather.png";

export default function Works() {
  const mainProjects = [
    {
      name: "eBarterYan",
      description: "An online bartering system",
      image: eBarterYanPic,
      link: "https://ebarteryan.onrender.com",
      techs: ["React", "Next.js", "Tailwindcss", "MongoDB"],
    },
    {
      name: "Quick Lottery",
      description: "A retro styled lottery with websocket",
      image: quickLotteryPic,
      link: "https://quicklottery.neodyeblue.repl.co/",
      techs: ["React", "Next.js", "CSS/SCSS"],
    },
    {
      name: "Simply Weather",
      description: "Display current weather on a location with visualization",
      image: simplyWeatherPic,
      link: "https://openweather-api-simple-weather-app.neodyeblue.repl.co/",
      techs: ["HTML", "CSS/SCSS", "JavaScript"],
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
    <div id="works" className="flex flex-col gap-10 md:py-12">
      <div className="flex flex-col gap-10 md:gap-20">{largeCards}</div>
    </div>
  );
}
