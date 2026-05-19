"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/theme-provider";
import LenisProvider from "@/context/lenis-provider";

export function LayoutContent({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}
