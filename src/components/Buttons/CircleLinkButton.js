import Link from "next/link";
import classNames from "classnames";
import { MdArrowRightAlt } from "react-icons/md";

export default function CircleLinkButton({ link = "", size = 40 }) {
  return (
    <Link
      href={link}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={classNames(
        "group flex aspect-square flex-shrink-0 items-center justify-center rounded-full transition-colors",
        "text-white hover:bg-black dark:text-black dark:hover:bg-white",
        "border border-black dark:border-white"
      )}
    >
      {/* <Image
        src={ArrowSVG}
        alt="arrow"
        className="rotate-[-35deg] fill-current group-hover:invert dark:invert"
      /> */}
      <svg
        width="26"
        height="8"
        viewBox="0 0 26 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-[-35deg] fill-current text-black
        transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white dark:text-white dark:group-hover:text-black"
      >
        <path d="M25.1831 4.47062C25.3784 4.27536 25.3784 3.95877 25.1831 3.76351L22.0012 0.581532C21.8059 0.386269 21.4893 0.386269 21.2941 0.581532C21.0988 0.776794 21.0988 1.09338 21.2941 1.28864L24.1225 4.11707L21.2941 6.94549C21.0988 7.14075 21.0988 7.45734 21.2941 7.6526C21.4893 7.84786 21.8059 7.84786 22.0012 7.6526L25.1831 4.47062ZM0.82959 4.61707L24.8296 4.61707V3.61707L0.82959 3.61707V4.61707Z" />
      </svg>
      {/* <MdArrowRightAlt
        className="rotate-[-35deg] text-black transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white dark:text-white dark:group-hover:text-black"
        size={size - 20}
      /> */}
    </Link>
  );
}
