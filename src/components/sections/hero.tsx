"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { scrollTo } from "@/lib/scroll";

export function HeroSection() {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="grid min-h-[80dvh] grid-cols-[4fr_5fr] grid-rows-[1fr] border-b"
    >
      <div className="relative border-r">
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
            <h3 className="font-heading text-3xl leading-8 font-semibold">
              Hi, I&apos;m
            </h3>
            <h1 className="font-heading relative max-w-sm text-6xl leading-15 font-bold">
              Triumph
            </h1>
            <h1 className="font-heading relative w-max! max-w-sm text-6xl leading-15 font-bold">
              Aidenojie
              <span className="text-muted-foreground absolute bottom-2 left-full ml-2 w-max text-2xl font-semibold">
                (eye-deh-NO-jay)
              </span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-md text-xl">
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
