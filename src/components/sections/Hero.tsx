"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile } from "@/data/profile";

const nameWords = profile.name.split(" ");

const links = [
  { label: profile.links.linkedin.label, href: profile.links.linkedin.href, external: true },
  { label: profile.links.github.label, href: profile.links.github.href, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
];

/**
 * The entrance is done with CSS animations so the first screen always settles,
 * even if the animation frame loop is paused. Only the parallax, which is an
 * enhancement and defaults to no offset, runs through Motion.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[92svh] items-center pt-28 pb-20">
      <motion.div className="shell w-full" style={reduced ? undefined : { y, opacity }}>
        <p className="label animate-fade-up">{profile.title}</p>

        <h1 className="mt-6 font-serif text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.9] tracking-[-0.035em]">
          {nameWords.map((word, index) => (
            <span
              key={word}
              className="mr-[0.22em] inline-block overflow-hidden pb-[0.06em] last:mr-0"
            >
              <span
                className="animate-rise inline-block"
                style={{ animationDelay: `${0.08 + index * 0.09}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div
          className="animate-fade-up mt-12 grid gap-10 md:mt-16 md:grid-cols-12"
          style={{ animationDelay: "0.45s" }}
        >
          <p className="max-w-xl text-lg leading-relaxed text-balance md:col-span-7 md:text-xl">
            {profile.intro[0]} <span className="text-ink-muted">{profile.intro[1]}</span>
          </p>

          <dl className="grid grid-cols-2 gap-6 self-end md:col-span-4 md:col-start-9 md:grid-cols-1 md:gap-5">
            <div>
              <dt className="label">Based in</dt>
              <dd className="mt-1.5 text-sm text-ink-muted">{profile.location}</dd>
            </div>
            <div>
              <dt className="label">Status</dt>
              <dd className="mt-1.5 text-sm text-ink-muted">{profile.availability}</dd>
            </div>
          </dl>
        </div>

        <ul
          className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
          style={{ animationDelay: "0.6s" }}
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="link-underline text-sm text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <div
        aria-hidden
        className="animate-fade-up absolute bottom-8 left-0 hidden w-full md:block"
        style={{ animationDelay: "0.9s" }}
      >
        <div className="shell flex items-center gap-4">
          <span className="h-px w-16 bg-rule-strong" />
          <span className="label">Scroll</span>
        </div>
      </div>
    </section>
  );
}
