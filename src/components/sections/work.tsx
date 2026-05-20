import Link from "next/link";
import { Button } from "../ui/button";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Monicx",
    description:
      "A modern, sleek and responsive e-commerce website. It has features like categories, collections, zustand state management for carts, product details and more.",
    src: "/monicx-screenshot.png",
    href: "https://monicxed.vercel.app",
    detailsHref: "/work/monicx",
  },
  {
    title: "Jottar",
    description:
      "Jottar is a simple, yet powerful notes app, complete with a very user-friendly interface and proper organization with folders and spaces",
    src: "/jottar-screenshot.png",
    href: "https://jottar.vercel.app",
    detailsHref: "/work/jottar",
  },
  {
    title: "Repolens",
    description: "",
    src: "/repolens-screenshot.png",
    href: "https://repolens.vercel.app",
    detailsHref: "/work/repolens",
  },
  {
    title: "Ciao",
    description: "",
    src: "/ciao-screenshot.png",
    href: "https://ciao-hey.vercel.app",
    detailsHref: "/work/ciao",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="bg-background">
      <div className="px-2 py-4">
        <h1 className="font-heading text-3xl font-semibold">Projects</h1>
        <p className="text-muted-foreground max-w-prose text-lg">
          These are some of the projects I&apos;ve worked on. All the projects
          here are open-source and hosted on Vercel. They&apos;re all built with{" "}
          <a href="https://nextjs.org" target="_blank" className="text-primary">
            Next.js
          </a>
          .
        </p>
      </div>

      <div className="bg-border dark:bg-primary/30 dark:border-primary/30 grid min-h-[85vh] grid-cols-2 grid-rows-2 gap-px border-b">
        {PROJECTS.map((project, index) => (
          <div key={`${project.title}-${index}`} className="card-bg">
            <div className="bg-muted relative aspect-video w-full">
              <Image
                src={project.src}
                alt={`${project.title} screenshot`}
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                fill
              />
            </div>

            <div className="bg-card p-4">
              <h3 className="font-heading mb-1 text-2xl font-semibold">
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
            </div>
          </div>
        ))}
        {/*{PROJECTS.map((project, index) => (
          <div
            key={index}
            className="card-bg relative flex flex-col justify-between gap-4 p-4 pb-0"
          >
            <div>
              <h3 className="font-heading mb-2 text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="line-clamp-2 max-w-100">{project.description}</p>
            </div>

            <div className="bg-muted h-full w-8/10"></div>

            <div className="absolute right-4 bottom-4 flex items-center gap-2">
              <Button
                render={<Link href={project.href} target="_blank" />}
                size="lg"
                className="mr-2 w-max! text-sm font-medium"
              >
                Visit site <IconArrowUpRight />
              </Button>
              <Button
                render={<Link href={project.detailsHref} />}
                size="lg"
                variant="outline"
                className="w-max! text-sm font-medium"
              >
                Details <IconArrowRight />
              </Button>
            </div>
          </div>
        ))}*/}
      </div>
    </section>
  );
}
