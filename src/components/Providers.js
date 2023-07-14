"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

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
        outerSize={35}
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
          border: "2px solid var(--cursor-color)",
          mixBlendMode: "exclusion",
          zIndex: 999,
        }}
      />
      {children}
    </ThemeProvider>
  );
}
