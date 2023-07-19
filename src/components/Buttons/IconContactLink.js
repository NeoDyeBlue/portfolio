import Link from "next/link";

export default function IconContactLink({
  icon = <></>,
  fillIcon = <></>,
  link = "",
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative text-black dark:text-white"
    >
      <span className="transition-opacity group-hover:opacity-0">{icon}</span>
      <span className="absolute left-0 top-0 opacity-0 transition-opacity group-hover:opacity-100">
        {fillIcon}
      </span>
    </Link>
  );
}
