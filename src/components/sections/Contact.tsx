import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const channels = [
    { label: "LinkedIn", value: profile.links.linkedin.handle, href: profile.links.linkedin.href },
    { label: "GitHub", value: profile.links.github.handle, href: profile.links.github.href },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-rule py-20 md:py-32"
    >
      <div className="shell">
        <Reveal>
          <span className="label">06</span>
          <h2 id="contact-heading" className="mt-4 font-sans text-sm text-ink-muted">
            Contact
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-balance md:text-3xl">
            {profile.availability}. Email is the quickest way to reach me.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline mt-10 inline-block font-serif text-[clamp(1.5rem,5.5vw,3.25rem)] leading-none tracking-tight transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mt-14 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel.label}>
                <dt className="label">{channel.label}</dt>
                <dd className="mt-1.5">
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline text-sm text-ink transition-colors hover:text-accent"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt className="label">Location</dt>
              <dd className="mt-1.5 text-sm text-ink-muted">{profile.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
