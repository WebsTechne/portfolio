"use client";

import { useLenis } from "lenis/react";
import { Button } from "../ui/button";
import { IconArrowUp } from "@tabler/icons-react";

export function Footer() {
  const lenis = useLenis();

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href);
    }
  };

  return (
    <footer id="contact" className="bg-background relative min-h-100">
      <form className="card-bg min-h-50 border-b p-4">
        <h2 className="font-heading text-4xl font-semibold">Contact me</h2>
      </form>

      <Button
        className="absolute right-4 bottom-4 h-10"
        onClick={(e) => handleHashClick(e, "#hero")}
      >
        <IconArrowUp size={20} /> Scroll to Top
      </Button>
    </footer>
  );
}
