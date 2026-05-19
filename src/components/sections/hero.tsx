"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroSection() {
  const year = new Date().getFullYear();
  const age = year - 2008;

  return (
    <section
      id="hero"
      className="grid min-h-[80dvh] grid-cols-[4fr_5fr] border-b"
    >
      <div className="relative h-full border-r">
        <Image
          src="/stephen-tettey-atsu-Bg6ob-DYdfg-unsplash.jpg"
          alt="Stephen Tettey Atsu from Unsplash"
          className="object-cover"
          fill
        />
      </div>

      <div className="card-bg flex-between h-full flex-col gap-5 px-5 pt-6 pb-4">
        <div className="flex flex-col gap-5">
          <h1 className="font-heading max-w-sm text-6xl leading-15 font-bold">
            Triumph Aidenojie
          </h1>
          <p className="text-muted-foreground text-xl">
            {/*Hi. I&apos;m <span className="text-foreground font-medium">Triumph Aidenojie.</span>*/}
            Computer Science student at{" "}
            <Button
              variant="link"
              className="h-max! p-0!"
              render={<Link href="https://uniben.edu" />}
            >
              UNIBEN
            </Button>
            . <br />
            Full-stack JavaScript developer. I code sleek and responsive web
            applications.
            {/*I&apos;m a full-stack developer with a passion for creating sleek and responsive web applications. I design websites and mobile apps. I particularly love dynamic and interactive user experiences.*/}
          </p>
        </div>

        <div className="w-full">
          <Button
            size="lg"
            className="h-11 px-5 text-lg"
            render={<Link href="#work" />}
            nativeButton={false}
          >
            My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
