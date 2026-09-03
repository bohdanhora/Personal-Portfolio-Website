import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const channels = [
    { label: "LinkedIn", value: profile.links.linkedin.handle, href: profile.links.linkedin.href },
    { label: "GitHub", value: profile.links.github.handle, href: profile.links.github.href },
  ];

  return (
    <Section id="contact" index="06" title="Contact">
      <Reveal>
        <p className="max-w-xl font-serif text-2xl leading-snug md:text-[2rem] md:leading-[1.25]">
          {profile.availability}. Email is the quickest way to reach me.
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-9 inline-block font-serif text-[clamp(1.4rem,4.6vw,2.75rem)] leading-none tracking-tight transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.12}>
        <dl className="mt-14 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
          {channels.map((channel) => (
            <div key={channel.label}>
              <dt className="label">{channel.label}</dt>
              <dd className="mt-2">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-[0.9375rem] text-ink transition-colors hover:text-accent"
                >
                  {channel.value}
                </a>
              </dd>
            </div>
          ))}
          <div>
            <dt className="label">Location</dt>
            <dd className="mt-2 text-[0.9375rem] text-ink-muted">{profile.location}</dd>
          </div>
        </dl>
      </Reveal>
    </Section>
  );
}
