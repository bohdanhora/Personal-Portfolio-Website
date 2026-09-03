import { SiteFooter } from "@/components/layout/SiteFooter";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <SelectedWork />
        <Skills />
        <Approach />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
