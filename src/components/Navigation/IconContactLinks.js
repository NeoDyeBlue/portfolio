"use client";
import { IconContactLink } from "../Buttons";
import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  Envelope,
  FilePdf,
} from "@phosphor-icons/react";
import links from "@/lib/contact-links";

export default function IconContactLinks() {
  return (
    <div
      aria-label="links list"
      className="mt-10 flex h-[44px] w-full items-center justify-between gap-6 rounded-full border border-black
  px-6 dark:border-white md:absolute md:bottom-0 md:right-0 md:w-fit md:justify-normal lg:relative"
    >
      <IconContactLink
        link={links.facebook}
        icon={<FacebookLogo weight="light" size={28} />}
        fillIcon={<FacebookLogo weight="fill" size={28} />}
      />
      <IconContactLink
        link={links.github}
        icon={<GithubLogo weight="light" size={28} />}
        fillIcon={<GithubLogo weight="fill" size={28} />}
      />
      <IconContactLink
        link={links.linkedin}
        icon={<LinkedinLogo weight="light" size={28} />}
        fillIcon={<LinkedinLogo weight="fill" size={28} />}
      />
      <IconContactLink
        link={links.email}
        icon={<Envelope weight="light" size={28} />}
        fillIcon={<Envelope weight="fill" size={28} />}
      />
      <IconContactLink
        link={links.resume}
        icon={<FilePdf weight="light" size={28} />}
        fillIcon={<FilePdf weight="fill" size={28} />}
      />
    </div>
  );
}
