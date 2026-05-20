import type Lenis from "lenis";

export function scrollTo(lenis: Lenis | undefined, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const distance = Math.abs(target.getBoundingClientRect().top);
  const duration = Math.min(Math.max(distance / 1000, 0.4), 1.2);
  lenis?.scrollTo(`#${id}`, { duration });
}
