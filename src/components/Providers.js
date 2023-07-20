"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider attribute="class">
      <AnimatedCursor
        innerSize={10}
        outerSize={45}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
          mixBlendMode: "exclusion",
          zIndex: 999,
        }}
        outerStyle={{
          border: "1px solid var(--cursor-color)",
          mixBlendMode: "exclusion",
          zIndex: 999,
        }}
      />
      {children}
    </ThemeProvider>
  );
}
