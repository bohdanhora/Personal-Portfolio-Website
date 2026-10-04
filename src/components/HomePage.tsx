import { SiteFooter } from "@/components/layout/SiteFooter";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";
import type { Locale } from "@/types";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <div className="sheet">
      <main id="main">
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <SelectedWork locale={locale} />
        <Skills locale={locale} />
        <Approach locale={locale} />
        <Contact locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
