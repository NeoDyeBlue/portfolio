import Link from "next/link";

export default function MenuItem({ text = "", link = "/", icon = <></> }) {
  return (
    <li>
      <Link
        href={link}
        className="flex w-fit cursor-pointer items-center gap-2 text-right font-body uppercase"
      >
        {icon}
        {text}
      </Link>
    </li>
  );
}
