import Link from "next/link";

export default function IconContactLink({ icon = <></>, link = "" }) {
  return (
    <Link
      href={link}
      className="text-white transition-colors hover:text-cerulean-blue-500 dark:text-black dark:hover:text-cerulean-blue-500"
    >
      {icon}
    </Link>
  );
}
