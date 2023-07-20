"use client";

import { ContactLink } from "../Buttons";
import Link from "next/link";
import links from "@/lib/contact-links";
import Tilt from "react-parallax-tilt";

export default function Contact() {
  return (
    <div
      id="contact"
      className="relative -mx-6 -mb-6 flex h-[calc(100vh-(1.5rem*2))] flex-col justify-between gap-10 rounded-t-[20px] bg-[url('/nahida-cafe-day.gif')] bg-cover bg-[-58%_center] p-6 text-white
      dark:bg-[url('/nahida-cafe-night.gif')] 540px:bg-[-103%_center] md:mx-0 md:mb-0 md:h-[calc(100vh-(3rem))] md:bg-[-80%_center] md:pb-12 lg:bg-right"
    >
      <div className="flex flex-col gap-6 drop-shadow-lg md:max-w-[400px]">
        <p className="font-display text-2xl font-bold italic">
          Something on your mind again? Let&apos;s work through it together. Two
          heads are better than one
        </p>
        <p className="font-display text-2xl">— Nahida</p>
      </div>
      <div className="flex flex-col gap-10 drop-shadow-lg lg:flex-row lg:items-end lg:justify-between">
        <ul className="flex flex-col gap-4">
          <ContactLink name="Facebook" link={links.facebook} />
          <ContactLink name="GitHub" link={links.github} />
          <ContactLink name="Linkedin" link={links.linkedin} />
          <ContactLink name="jhnplzoleta@gmail.com" link={links.email} />
        </ul>
        <Tilt perspective={500} scale={1.02}>
          <Link
            href={links.resume}
            className="flex h-fit w-fit items-center justify-center gap-1 
        rounded-full border border-white px-4 py-2 text-center text-lg uppercase shadow-lg transition-colors 
        hover:bg-white hover:text-black"
          >
            Resume
          </Link>
        </Tilt>
      </div>
    </div>
  );
}
