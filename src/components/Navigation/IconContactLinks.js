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
      className="mt-10 flex w-full items-center justify-between gap-3 rounded-full border border-gray-300 px-3 py-3 dark:border-cod-gray-800
  320px:gap-6 320px:px-6 md:absolute md:bottom-0 md:right-0 md:w-fit md:justify-normal lg:relative"
    >
      <IconContactLink
        link={links.facebook}
        icon={<FacebookLogo weight="light" size={24} />}
        fillIcon={<FacebookLogo weight="fill" size={24} />}
      />
      <IconContactLink
        link={links.github}
        icon={<GithubLogo weight="light" size={24} />}
        fillIcon={<GithubLogo weight="fill" size={24} />}
      />
      <IconContactLink
        link={links.linkedin}
        icon={<LinkedinLogo weight="light" size={24} />}
        fillIcon={<LinkedinLogo weight="fill" size={24} />}
      />
      <IconContactLink
        link={links.email}
        icon={<Envelope weight="light" size={24} />}
        fillIcon={<Envelope weight="fill" size={24} />}
      />
      <IconContactLink
        link={links.resume}
        icon={<FilePdf weight="light" size={24} />}
        fillIcon={<FilePdf weight="fill" size={24} />}
      />
    </div>
  );
}
