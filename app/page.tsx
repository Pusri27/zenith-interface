import { Hero } from "@/components/sections/Hero";
import { InfiniteMarquee } from "@/components/sections/InfiniteMarquee";
import { Features } from "@/components/sections/Features";
import { VisualStory } from "@/components/sections/VisualStory";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { TechSpecs } from "@/components/sections/TechSpecs";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full">
      <Hero />
      <InfiniteMarquee />
      <Features />
      <VisualStory />
      <ProductDemo />
      <TechSpecs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
