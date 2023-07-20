"use client";

import { Sun, Moon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  //   const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[64px]"></div>;
  }

  function handleCheck() {
    // setChecked((prev) => !prev);
    theme == "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div>
      <label className="relative flex cursor-pointer">
        <span className="hidden">Switch theme</span>
        <span className="z-10 flex aspect-square w-[32px] items-center justify-center">
          {theme == "light" ? (
            <Sun weight="fill" size={20} className={classNames("text-white")} />
          ) : (
            <Sun
              weight="light"
              size={20}
              className={classNames("text-white")}
            />
          )}
        </span>
        <span className="z-10 flex aspect-square w-[32px] items-center justify-center">
          {theme == "dark" ? (
            <Moon
              weight="fill"
              size={20}
              className={classNames("text-cod-gray-950")}
            />
          ) : (
            <Moon
              weight="light"
              size={20}
              className={classNames("text-black")}
            />
          )}
          {/* <MdDarkMode size={20} className={classNames("text-black")} /> */}
        </span>
        <span
          className={classNames(
            "absolute aspect-square w-[32px] rounded-full bg-black transition-all dark:bg-white",
            {
              "translate-x-0": theme == "light",
              "translate-x-full": theme == "dark",
            }
          )}
        ></span>
        <input
          type="checkbox"
          checked={theme == "light"}
          onChange={handleCheck}
          className="hidden"
        ></input>
      </label>
    </div>
  );
}
