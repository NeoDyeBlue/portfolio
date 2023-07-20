"use client";

import classNames from "classnames";
import { useTheme } from "next-themes";

export default function Logo() {
  const { theme } = useTheme();
  return (
    <div className="flex h-[50px] items-center lg:h-fit">
      <p className="font-display text-2xl font-extrabold">
        {/* <span className="font-light text-gray-300 dark:text-cod-gray-800">
          /
        </span> */}
        JP
        <span
          className={classNames("text-[calc(1.5rem-0.75px)] text-transparent", {
            "text-stroke-dark-thin": theme == "dark",
            "text-stroke-light-thin": theme !== "dark",
          })}
        >
          Z
        </span>
      </p>
    </div>
  );
}
