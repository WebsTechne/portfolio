import Link from "next/link";
import { Button } from "../ui/button";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import { siGsap, siNextdotjs, siReactquery, siTypescript } from "simple-icons";
import { TechIcon } from "./stack-marquee";

const PROJECTS = [
  {
    title: "Monicx",
    description:
      "A modern, sleek and responsive e-commerce website. It has features like categories, collections, zustand state management for carts, product details and more.",
    src: "/monicx-screenshot.png",
    href: "https://monicxed.vercel.app",
    detailsHref: "/work/monicx",
    icons: [siTypescript, siNextdotjs],
  },
  {
    title: "Jottar",
    description:
      "Jottar is a simple, yet powerful notes app, complete with a very user-friendly interface and proper organization with folders and spaces",
    src: "/jottar-screenshot.png",
    href: "https://jottar.vercel.app",
    detailsHref: "/work/jottar",
    icons: [siTypescript, siNextdotjs],
  },
  {
    title: "Repolens",
    description: "",
    src: "/repolens-screenshot.png",
    href: "https://repolens.vercel.app",
    detailsHref: "/work/repolens",
    icons: [siTypescript, siNextdotjs, siReactquery],
  },
  {
    title: "Ciao",
    description: "",
    src: "/ciao-screenshot.png",
    href: "https://ciao-hey.vercel.app",
    detailsHref: "/work/ciao",
    icons: [siTypescript, siNextdotjs, siGsap],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="bg-background">
      <div className="px-4 py-6">
        <h2 className="font-heading text-4xl font-semibold">Projects</h2>
        <p className="text-muted-foreground max-w-prose text-lg">
          These are some of the projects I&apos;ve worked on. All the projects
          here are open-source and hosted on Vercel. They&apos;re all built with{" "}
          <a href="https://nextjs.org" target="_blank" className="text-primary">
            Next.js
          </a>
          .
        </p>
      </div>

      <div className="bg-border dark:bg-primary/30 dark:border-primary/30 grid grid-cols-2 grid-rows-2 gap-px border-b pt-px">
        {/*{PROJECTS.map((project, index) => (
          <div key={`${project.title}-${index}`} className="bg-card p-4">
            <div className="bg-muted relative mb-2 aspect-video w-full">
              <Image
                src={project.src}
                alt={`${project.title} screenshot`}
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
              />
            </div>

            <div className="bg-card flex flex-col gap-2">
              <h3 className="font-heading text-2xl leading-8 font-semibold">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <p className="line-clamp-2 max-w-100 flex-1">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    render={<Link href={project.href} target="_blank" />}
                    nativeButton={false}
                    size="lg"
                    className="mr-2 w-max! text-sm font-medium"
                  >
                    Visit site <IconArrowUpRight />
                  </Button>
                  <Button
                    render={<Link href={project.detailsHref} />}
                    nativeButton={false}
                    size="lg"
                    variant="outline"
                    className="w-max! text-sm font-medium"
                  >
                    Details <IconArrowRight />
                  </Button>
                </div>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                {project.icons.map((ic) => (
                  <TechIcon key={ic.title} icon={ic} size={24} />
                ))}
              </div>
            </div>
          </div>
        ))}*/}
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-card relative flex flex-col justify-between gap-4 p-4"
          >
            <div>
              <h3 className="font-heading mb-2 text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="line-clamp-2 max-w-100">{project.description}</p>
            </div>

            <div className="bg-muted relative aspect-video w-8/10 border">
              <Image
                src={project.src}
                alt={project.title}
                className="object-cover"
                fill
              />
            </div>

						<div className="flex-between gap-2">
							<div className="text-muted-foreground flex items-center gap-3">
                {project.icons.map((ic) => (
                  <TechIcon key={ic.title} icon={ic} size={24} />
                ))}
							</div>

              <div className="flex items-center gap-2"><Button
                render={<Link href={project.href} target="_blank" />}
                nativeButton={false}
                size="lg"
                className="mr-2 w-max! text-sm font-medium"
              >
                Visit site <IconArrowUpRight />
              </Button>
              <Button
                render={<Link href={project.detailsHref} />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="w-max! text-sm font-medium"
              >
                Details <IconArrowRight />
              </Button></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
