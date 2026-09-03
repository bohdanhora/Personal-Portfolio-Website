"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { companies } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { TechList } from "@/components/ui/TechList";

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const scaleY = useTransform(progress, (value) => Math.max(value, 0.02));

  return (
    <div ref={ref} className="relative pl-7 md:pl-10">
      <div aria-hidden className="absolute bottom-0 left-0 top-2 w-px bg-rule">
        {reduced ? null : (
          <motion.div className="h-full w-px origin-top bg-accent/60" style={{ scaleY }} />
        )}
      </div>

      {companies.map((company) => (
        <div key={company.name} className="pb-16 last:pb-0">
          <Reveal as="header" className="relative">
            <span
              aria-hidden
              className="absolute -left-7 top-[0.7rem] h-2 w-2 -translate-x-1/2 rounded-full bg-accent md:-left-10"
            />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-serif text-[1.75rem] tracking-tight md:text-3xl">{company.name}</h3>
              <span className="label">{company.arrangement}</span>
            </div>
            <p className="mt-1.5 text-sm text-ink-faint">
              {company.period}
              <span aria-hidden className="px-2 text-rule-strong">
                /
              </span>
              {company.location}
            </p>
          </Reveal>

          <ol className="mt-8">
            {company.roles.map((role) => (
              <li key={`${company.name}-${role.title}-${role.start}`}>
                <Reveal as="article" className="border-t border-rule py-7 first:border-t-0 first:pt-0">
                  <div className="grid gap-x-8 gap-y-3 md:grid-cols-12">
                    <p className="label md:col-span-3 md:pt-1 md:tracking-[0.08em]">{role.period}</p>

                    <div className="md:col-span-9">
                      <h4 className="text-base font-medium text-ink">{role.title}</h4>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{role.summary}</p>

                      {role.focus ? (
                        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                          {role.focus.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-ink-faint">
                              <span aria-hidden className="h-px w-2.5 bg-rule-strong" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <TechList items={role.tech} className="mt-4" />
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
