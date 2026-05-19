import { ContactSection } from "@/components/sections/contact";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { StackMarqueeSection } from "@/components/sections/stack-marquee";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <StackMarqueeSection />
      <ContactSection />
    </>
  );
}
