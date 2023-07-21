import Link from "next/link";
import classNames from "classnames";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function CircleLinkButton({ link = "" }) {
  return (
    <Link
      href={link}
      target="_blank"
      // style={{ width: `${size}px`, height: `${size}px` }}
      className={classNames(
        "h-[50px] w-[50px] flex-shrink-0 md:h-[60px] md:w-[60px]",
        "group flex aspect-square flex-shrink-0 items-center justify-center rounded-full transition-colors",
        "text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-cod-gray-950",
        "border border-black dark:border-white"
      )}
    >
      <ArrowUpRight
        size={36}
        weight="thin"
        className="scale-75 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:scale-100"
      />
    </Link>
  );
}
