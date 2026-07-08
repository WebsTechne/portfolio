"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { scrollTo } from "@/lib/scroll";
import { useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const lenis = useLenis();

  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="hero"
      className="grid min-h-[80vh] border-b sm:grid-cols-[4fr_5fr] sm:grid-rows-[1fr]"
    >
      <div className="relative border-r not-sm:min-h-[60vh]">
        <div
          className={cn(
            "absolute top-4 left-4 z-2 cursor-pointer rounded-full text-white/90",
            "hover:[&>div]:scale-100 hover:[&>div]:opacity-100",
            expanded && "text-white [&>div]:scale-100 [&>div]:opacity-100",
          )}
          onClick={() => setExpanded((v) => !v)}
        >
          <IconInfoCircle size={24} strokeWidth={1.5} />

          <div className="pointer-events-none absolute top-0 left-125/100 w-max scale-80 rounded-full bg-white p-1 px-2 text-sm text-black/90 opacity-0 duration-250">
            This is not me!
          </div>
        </div>

        <Image
          src="/stephen-tettey-atsu-Bg6ob-DYdfg-unsplash.jpg"
          alt="Stephen Tettey Atsu from Unsplash"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 44vw"
          fill
          priority
        />
      </div>

      <div className="card-bg flex-between h-full flex-col gap-5 px-5 pt-6 pb-4">
        <div className="flex w-full flex-col items-start gap-5">
          <div>
            <h3 className="font-heading text-xl leading-8 font-semibold md:text-3xl">
              Hi, I&apos;m
            </h3>
            <h1 className="font-heading relative max-w-sm text-3xl leading-8 font-bold md:text-6xl md:leading-15">
              Triumph
            </h1>
            <h1 className="font-heading relative w-max! max-w-sm text-3xl leading-8 font-bold md:text-6xl md:leading-15">
              Aidenojie
              <span className="text-muted-foreground absolute left-full ml-2 w-max text-lg font-semibold not-sm:top-1/2 not-sm:-translate-y-1/2 md:bottom-2 md:text-2xl">
                (eye-deh-NO-jay)
              </span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-md text-lg md:text-xl">
            Computer Science student at{" "}
            <Link
              href="https://uniben.edu"
              target="_blank"
              className="text-primary font-heading underline-offset-3 hover:underline"
            >
              UNIBEN
            </Link>
            . <br />
            Full-stack JavaScript developer. I build sleek and responsive web
            applications.
            {/*I&apos;m a full-stack developer with a passion for creating sleek and responsive web applications. I design websites and mobile apps. I particularly love dynamic and interactive user experiences.*/}
          </p>
        </div>

        <div className="w-full">
          <Button
            size="lg"
            className="h-11 px-5 text-lg"
            onClick={() => scrollTo(lenis, "work")}
          >
            See My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
