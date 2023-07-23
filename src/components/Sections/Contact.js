"use client";

import { ContactLink } from "../Buttons";
import Link from "next/link";
import links from "@/lib/contact-links";
import Tilt from "react-parallax-tilt";
import { ArrowRight } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="md: relative flex h-[calc(100vh-3rem-1px)] flex-col gap-6 md:h-[calc(100vh-1.5rem-1px)] md:pb-6 lg:h-[calc(100vh-2rem-1px)] lg:pb-8 xl:h-[calc(100vh-3rem-1px)] xl:pb-12"
    >
      <div className="flex h-[50px] w-fit flex-shrink-0 items-center border-y border-gray-300 dark:border-cod-gray-800">
        <p className="font-display text-2xl font-extrabold uppercase">
          contact me
        </p>
      </div>
      <div
        className="relative flex h-full w-full flex-col justify-between gap-10 rounded-[15px] bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)50%),url('/nahida-cafe-day.gif')] bg-cover bg-[-60%_center] p-6 text-white dark:bg-[linear-gradient(0deg,rgba(0,0,0,1)0%,rgba(0,0,0,0)50%),url('/nahida-cafe-night.gif')]
      540px:bg-[-103%_center] md:mx-0 md:rounded-[20px] md:bg-[-85%_center] md:p-8 lg:bg-right"
      >
        <div className="flex flex-col gap-6 drop-shadow-lg md:max-w-[400px]">
          <p className="font-display text-xl font-bold italic">
            Something on your mind again? Let&apos;s work through it together.
            Two heads are better than one
          </p>
          <p className="font-display text-xl">— Nahida</p>
        </div>
        <div className="flex flex-col gap-6 drop-shadow-lg md:gap-10 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
            <ContactLink name="Facebook" link={links.facebook} />
            <ContactLink name="GitHub" link={links.github} />
            <ContactLink name="Linkedin" link={links.linkedin} />
            <ContactLink name="Resume" link={links.resume} />
          </ul>
          <Tilt perspective={500} scale={1.02}>
            <Link
              href={links.email}
              className="ml-auto flex h-fit w-fit items-center justify-center 
        gap-2 rounded-full border border-white px-4 py-2 text-center text-lg 
        uppercase shadow-lg transition-colors hover:bg-white hover:text-black"
            >
              Contact <ArrowRight size={24} />
            </Link>
          </Tilt>
        </div>
      </div>
      <div className="flex items-center">
        {/* <p className="text-sm">Built in Next.js and Tailwind</p> */}
        <p className="text-sm">© 2023 John Paul Zoleta</p>
      </div>
    </div>
  );
}
