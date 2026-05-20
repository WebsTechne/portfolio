import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { StackMarqueeSection } from "@/components/sections/stack-marquee";
import { WorkSection } from "@/components/sections/work";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <StackMarqueeSection />
      <WorkSection />
      <Footer />
    </>
  );
}
