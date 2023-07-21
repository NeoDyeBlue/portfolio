import Link from "next/link";

export default function ContactLink({ name = "", link = "" }) {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        type="type"
        className="text-lg hover:underline"
      >
        {name}
      </Link>
    </li>
  );
}
