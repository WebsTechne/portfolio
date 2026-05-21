import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { StackMarqueeSection } from "@/components/sections/stack-marquee";
import { WorkSection } from "@/components/sections/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triumph Aidenojie",
  description: "Teen web and app developer. This is my portfolio website.",
};

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
