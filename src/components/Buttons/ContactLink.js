import Link from "next/link";

export default function ContactLink({ name = "", link = "" }) {
  return (
    <li>
      <Link href={link} type="type" className="text-xl hover:underline">
        {name}
      </Link>
    </li>
  );
}
