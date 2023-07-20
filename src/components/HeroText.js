"use client";

import classNames from "classnames";
import { useTheme } from "next-themes";

export default function HeroText() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col font-display text-6xl font-extrabold uppercase leading-none 540px:text-8xl lg:text-[4rem]">
          <p className="lg:max-w-[50vw]">John Paul</p>
          <p
            className={classNames("text-transparent", {
              "text-stroke-dark": theme == "dark",
              "text-stroke-light": theme !== "dark",
            })}
          >
            Zoleta
          </p>
        </div>
        <p className="font-display text-3xl font-bold italic">Web Developer</p>
      </div>
    </div>
  );
}
