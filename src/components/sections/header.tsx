"use client";

import {
  IconBrandGithub,
  IconBrandX,
  IconMessage,
  IconSearch,
} from "@tabler/icons-react";
import { useLenis } from "lenis/react";
import Link from "next/link";

export type TablerIcon = typeof IconSearch;
type Social = { icon: TablerIcon; href: string };
const SOCIAL_LINKS: Social[] = [
  { icon: IconSearch, href: "#" },
  { icon: IconMessage, href: "#contact" },
  { icon: IconBrandGithub, href: "https://github.com/webstechne" },
  { icon: IconBrandX, href: "https://x.com/triumph_dev" },
];

export const Icon = ({ icon: IconComponent }: { icon: TablerIcon }) => {
  return <IconComponent size={20} />;
};

export function Header() {
  const lenis = useLenis();

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href);
    }
  };

  return (
    <header className="bg-background flex-between sticky top-0 z-1000 h-12 border-b">
      <section className="flex-center h-full flex-row"></section>
      <section className="flex-center h-full flex-row">
        {SOCIAL_LINKS.map((soc) => (
          <Link
            key={soc.href}
            href={soc.href}
            onClick={(e) => handleHashClick(e, soc.href)}
            replace={!soc.href.startsWith("http")}
            target={soc.href.startsWith("http") ? "_blank" : "_self"}
            className="flex-center hover:bg-primary/10 hover:text-primary text-muted-foreground aspect-square h-full"
          >
            <Icon icon={soc.icon} />
          </Link>
        ))}
      </section>
    </header>
  );
}
