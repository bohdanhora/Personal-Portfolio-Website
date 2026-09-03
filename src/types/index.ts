export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  availability: string;
  intro: string[];
  about: string[];
  facts: Fact[];
  email: string;
  links: {
    linkedin: SocialLink;
    github: SocialLink;
  };
};

export type Role = {
  title: string;
  period: string;
  start: string;
  end: string;
  summary: string;
  focus?: string[];
  tech: string[];
};

export type Company = {
  name: string;
  period: string;
  location: string;
  arrangement: string;
  roles: Role[];
};

export type Education = {
  institution: string;
  qualification: string;
  field: string;
  period: string;
  note: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  kind: string;
  period: string;
  summary: string;
  tech: string[];
  links?: ProjectLink[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ApproachItem = {
  title: string;
  body: string;
};
