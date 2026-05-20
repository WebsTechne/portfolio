"use client";

import { scrollTo } from "@/lib/scroll";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrightness,
  IconMessage,
  IconSearch,
} from "@tabler/icons-react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export type TablerIcon = typeof IconSearch;
type Social = { icon: TablerIcon; href?: string; scrollTo?: string };
const SOCIAL_LINKS: Social[] = [
  { icon: IconSearch, href: "#" },
  { icon: IconMessage, scrollTo: "contact" },
  { icon: IconBrandGithub, href: "https://github.com/webstechne" },
  { icon: IconBrandX, href: "https://x.com/triumph_dev" },
];

export const Icon = ({ icon: IconComponent }: { icon: TablerIcon }) => {
  return <IconComponent size={20} />;
};

export function Header() {
  const lenis = useLenis();
  const { resolvedTheme: theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="bg-background flex-between sticky top-0 z-1000 h-12 border-b">
      <section className="flex-center h-full flex-row"></section>
      <section className="flex-center h-full flex-row">
        {SOCIAL_LINKS.map((soc) => {
          return soc.scrollTo ? (
            <button
              key={soc.scrollTo!}
              onClick={() => scrollTo(lenis, soc.scrollTo!)}
              className="flex-center hover:bg-primary/10 hover:text-primary text-muted-foreground aspect-square h-full"
            >
              <Icon icon={soc.icon} />
            </button>
          ) : soc.href ? (
            <Link
              key={soc.href}
              href={soc.href!}
              onClick={() => scrollTo(lenis, soc.href!)}
              replace={!soc.href?.startsWith("http")}
              target={soc.href?.startsWith("http") ? "_blank" : "_self"}
              className="flex-center hover:bg-primary/10 hover:text-primary text-muted-foreground aspect-square h-full"
            >
              <Icon icon={soc.icon} />
            </Link>
          ) : null;
        })}

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="flex-center hover:bg-primary/10 hover:text-primary text-muted-foreground aspect-square h-full"
        >
          <IconBrightness />
        </button>
      </section>
    </header>
  );
}
