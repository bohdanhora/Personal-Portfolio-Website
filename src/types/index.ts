export type Locale = "en" | "uk" | "ru";

export type Localized = string | Record<Locale, string>;

export type NavItem = {
  id: string;
  label: Localized;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Fact = {
  label: Localized;
  value: Localized;
};

export type Phone = {
  display: string;
  href: string;
  messengers: string[];
};

export type Language = {
  name: Localized;
  level: Localized;
};

export type Profile = {
  name: Localized;
  title: string;
  position: Localized;
  location: Localized;
  availability: Localized;
  intro: Localized[];
  about: Localized[];
  facts: Fact[];
  email: string;
  phone?: Phone;
  languages: Language[];
  links: {
    linkedin: SocialLink;
    github: SocialLink;
    telegram: SocialLink;
  };
};

export type Role = {
  title: string;
  period: Localized;
  start: string;
  end: string;
  summary: Localized;
  duties: Localized[];
  tech: string[];
};

export type Company = {
  name: Localized;
  period: Localized;
  location: Localized;
  arrangement: Localized;
  roles: Role[];
};

export type Education = {
  institution: Localized;
  qualification: Localized;
  field: Localized;
  period: Localized;
  note: Localized;
};

export type Course = {
  title: Localized;
  provider: string;
  period: Localized;
  note: Localized;
};

export type ProjectLink = {
  label: Localized;
  href: string;
};

export type Project = {
  title: Localized;
  kind: Localized;
  period: Localized;
  summary: Localized;
  tech: string[];
  personal?: boolean;
  links?: ProjectLink[];
};

export type SkillGroup = {
  title: Localized;
  items: Localized[];
};

export type ApproachItem = {
  title: Localized;
  body: Localized;
};
