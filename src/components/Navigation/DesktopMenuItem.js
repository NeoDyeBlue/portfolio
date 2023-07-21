import Link from "next/link";
import classNames from "classnames";

export default function DesktopMenuItem({
  isActive = false,
  href = "",
  name = "",
}) {
  return (
    <li className="w-fit">
      <Link
        href={href}
        className={classNames(
          "flex w-fit items-center text-sm transition-colors",
          {
            "gap-3 font-bold italic text-black dark:text-white": isActive,
          },
          {
            "text-gray-500 hover:text-black dark:text-cod-gray-400 dark:hover:text-white":
              !isActive,
          }
        )}
      >
        <div
          className={classNames(
            "w-16 origin-left border-t border-black transition-all dark:border-white",
            {
              "-mr-16 scale-x-0": !isActive,
              "scale-x-100": isActive,
            }
          )}
        />
        <p>{name}</p>
      </Link>
    </li>
  );
}
