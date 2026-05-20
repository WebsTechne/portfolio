import Image from "next/image";
import {
  siJavascript,
  siReact,
  siHtml5,
  siCss,
  siNodedotjs,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siAndroid,
} from "simple-icons";

export type SimpleIcon = typeof siCss;
function TechIcon({ icon, size = 32 }: { icon: SimpleIcon; size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function StackMarqueeSection() {
  const icons = [
    siHtml5,
    siCss,
    siTailwindcss,
    siJavascript,
    siTypescript,
    siReact,
    siAndroid,
    siNextdotjs,
    siNodedotjs,
  ];

  return (
    <section
      id="stack-marquee"
      className="flex h-14 items-center overflow-x-clip border-b"
    >
      <div className="relative h-full flex-1">
        <Image
          src="/stephen-tettey-atsu-Bg6ob-DYdfg-unsplash.jpg"
          alt="Stephen Tettey Atsu from Unsplash"
          className="object-cover object-bottom md:w-[44vw]!"
          sizes="(max-width: 768px) 100vw, 44vw"
          fill
          priority
        />
      </div>
      <div className="flex-center relative h-full w-full max-w-109 overflow-clip border-x">
        <div className="marquee-track">
          {/* Strip 1 */}
          <div className="marquee-strip">
            {icons.map((icon) => (
              <TechIcon key={icon.slug} icon={icon} />
            ))}
          </div>
          {/* Strip 2 — identical clone */}
          <div className="marquee-strip" aria-hidden="true">
            {icons.map((icon) => (
              <TechIcon key={icon.slug} icon={icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-full flex-1">
        <Image
          src="/stephen-tettey-atsu-Bg6ob-DYdfg-unsplash.jpg"
          alt="Stephen Tettey Atsu from Unsplash"
          className="object-cover object-bottom md:w-[44vw]!"
          sizes="(max-width: 768px) 100vw, 44vw"
          fill
          priority
        />
      </div>
    </section>
  );
}
