"use client";

import { Works, About, Contact } from "@/components/Sections";
import useActiveSectionStore from "@/stores/useActiveSectionStore";
import useScrollSpy from "react-use-scrollspy";
import { useEffect, useRef, useMemo } from "react";

export default function Main() {
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );
  const sections = useMemo(() => ["about", "works", "contact"], []);

  const sectionElementRefs = [useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({ sectionElementRefs, offsetPx: -80 });

  useEffect(
    () => setActiveSection(sections[activeSection]),
    [activeSection, sections, setActiveSection]
  );

  return (
    <main className="relative flex min-h-[200vh] w-full flex-col gap-20">
      <div ref={sectionElementRefs[0]}>
        <About />
      </div>
      <div ref={sectionElementRefs[1]}>
        <Works />
      </div>
      <div ref={sectionElementRefs[2]}>
        <Contact />
      </div>
    </main>
  );
}
