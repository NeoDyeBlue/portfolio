import { ContactLink } from "../Buttons";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex h-[calc(100vh-(1.5rem*2))] flex-col justify-between gap-10 md:h-[calc(100vh-(3rem))] md:pb-12"
    >
      <div className="flex flex-col gap-6 md:max-w-[400px]">
        <p className="font-display text-2xl font-bold">
          Something on your mind again? Let&apos;s work through it together. Two
          heads are better than one
        </p>
        <p className="font-display text-2xl">— Nahida</p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <ul className="flex flex-col gap-4">
          <ContactLink name="Facebook" link="https://facebook.com/neodyeblue" />
          <ContactLink name="GitHub" link="https://github.com/neodyeblue" />
          <ContactLink
            name="Linkedin"
            link="https://www.linkedin.com/in/john-paul-zoleta-63a476261/"
          />
          <ContactLink
            name="jhnplzoleta@gmail.com"
            link="mailto:jhnplzoleta@gmail.com"
          />
        </ul>
        <Link
          href={"John_Paul_Zoleta-Resume.pdf"}
          className="flex h-fit w-fit items-center justify-center gap-1 
        rounded-full border border-black px-4 py-2 text-center text-xl uppercase transition-colors hover:bg-black 
        hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
