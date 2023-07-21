"use client";

import useActiveSectionStore from "@/stores/useActiveSectionStore";
import DesktopMenuItem from "./DesktopMenuItem";

export default function DesktopMenu() {
  const activeSection = useActiveSectionStore((state) => state.activeSection);
  return (
    <ul className="hidden flex-col gap-4 uppercase lg:flex">
      <DesktopMenuItem
        href="#about"
        isActive={activeSection == "about"}
        name="about"
      />
      <DesktopMenuItem
        href="#works"
        isActive={activeSection == "works"}
        name="works"
      />
      <DesktopMenuItem
        href="#contact"
        isActive={activeSection == "contact"}
        name="contact"
      />
    </ul>
  );
}
