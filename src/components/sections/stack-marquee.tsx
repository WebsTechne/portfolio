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
  siPrisma,
  siPostgresql,
  siTanstack,
} from "simple-icons";

type SimpleIcon = typeof siCss;
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

function StackMarqueeSection() {
  const icons = [
    siHtml5,
    siCss,
    siTailwindcss,
    siJavascript,
    siTypescript,
    siReact,
    siAndroid,
    siNextdotjs,
    siTanstack,
    siNodedotjs,
    siPrisma,
    siPostgresql,
  ];

  return (
    <section
      id="stack-marquee"
      className="flex h-14 items-center overflow-x-clip border-b"
    >
      <div className="relative h-full flex-1 not-sm:hidden">
        <Image
          src="/stephen-tettey-atsu-Bg6ob-DYdfg-unsplash.jpg"
          alt="Stephen Tettey Atsu from Unsplash"
          className="object-cover object-bottom md:w-[44vw]!"
          sizes="(max-width: 768px) 100vw, 44vw"
          fill
          priority
        />
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">
          <div className="marquee-strip">
            {icons.map((icon) => (
              <TechIcon key={icon.slug} icon={icon} />
            ))}
          </div>
          <div className="marquee-strip" aria-hidden="true">
            {icons.map((icon) => (
              <span key={icon.slug} className="shrink-0">
                <TechIcon icon={icon} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-full flex-1 not-sm:hidden">
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

export { type SimpleIcon, TechIcon, StackMarqueeSection };
