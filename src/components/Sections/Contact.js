import { ContactLink } from "../Buttons";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="contact"
      className="-mx-6 -mb-6 flex h-[calc(100vh-(1.5rem*2))] flex-col justify-between gap-10 rounded-t-[20px] bg-[url('/nahida-cafe-day.gif')] bg-cover bg-right
      p-6 text-white dark:bg-[url('/nahida-cafe-night.gif')] md:mx-0 md:mb-0 md:h-[calc(100vh-(3rem))] md:pb-12"
    >
      <div className="flex flex-col gap-6 drop-shadow-lg md:max-w-[400px]">
        <p className="font-display text-2xl font-bold">
          Something on your mind again? Let&apos;s work through it together. Two
          heads are better than one
        </p>
        <p className="font-display text-2xl">— Nahida</p>
      </div>
      <div className="flex flex-col gap-10 drop-shadow-lg lg:flex-row lg:items-end lg:justify-between">
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
        rounded-full border border-white px-4 py-2 text-center text-lg uppercase shadow-lg transition-colors 
        hover:bg-white hover:text-black"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
