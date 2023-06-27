import Link from "next/link";

export default function IconContactLink({ icon = <></>, link = "" }) {
  return (
    <Link href={link} className="text-white dark:text-black">
      {icon}
    </Link>
  );
}
