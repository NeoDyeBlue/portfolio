export default function About() {
  return (
    <div id="about" className="flex gap-6">
      <div className="flex flex-col gap-6 leading-7">
        <p>
          Hi there, I&apos;m John Paul Zoleta a passionate web designer and
          developer. During my early years in Computer Science, I practiced
          coding and designing through game development and static web pages.
          Now I&apos;m focused on <span className="font-bold">React</span> and{" "}
          <span className="font-bold">Next.js</span>
          for creating responsive and neat websites.
        </p>
        <p>
          I usually do my exhausting but fun grind in{" "}
          <span className="font-bold italic">Genshin Impact</span> during my
          free time and contemplate my life choices.
        </p>
      </div>
      <div
        className="hidden aspect-square h-full max-h-[400px] min-h-[250px] w-full 
        min-w-[250px] max-w-[400px] rounded-[20px] bg-gray-100 dark:bg-gray-900 md:block"
      ></div>
    </div>
  );
}
