/**
 * Builds the downloadable CV from the same content the site renders, so the
 * two can never drift apart. Run through `npm run cv`, and automatically
 * before every production build.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import pdfmake from "pdfmake";
import { loadFonts } from "./fonts.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

// The content files are plain TypeScript with type-only imports, which Node
// can run directly. Reading them here is what keeps the CV in step with the site.
const load = (file) => import(pathToFileURL(path.join(root, "src/data", file)).href);

const { profile, cvFileName } = await load("profile.ts");
const { companies, education } = await load("experience.ts");
const { projects } = await load("projects.ts");
const { skillGroups } = await load("skills.ts");

const INK = "#1a1815";
const MUTED = "#4d483f";
const FAINT = "#6b655a";
const ACCENT = "#a2593a";
const RULE = "#ded8cd";

const PAGE_MARGIN = 46;
const CONTENT_WIDTH = 595.28 - PAGE_MARGIN * 2;

const rule = (width = CONTENT_WIDTH, color = RULE, top = 0) => ({
  canvas: [{ type: "line", x1: 0, y1: 0, x2: width, y2: 0, lineWidth: 0.6, lineColor: color }],
  margin: [0, top, 0, 0],
});

const heading = (text) => ({
  stack: [
    { text, font: "Display", fontSize: 12.5, color: INK },
    rule(20, ACCENT, 4),
  ],
  margin: [0, 15, 0, 8],
});

const titledRow = (left, right, options = {}) => ({
  columns: [
    { width: "*", text: left, font: "Text", fontSize: options.size ?? 10, bold: true, color: INK },
    { width: "auto", text: right, font: "Text", fontSize: 8.5, color: FAINT, alignment: "right" },
  ],
  margin: options.margin ?? [0, 0, 0, 0],
});

const meta = (text, margin = [0, 2, 0, 0]) => ({
  text,
  font: "Text",
  fontSize: 8.5,
  color: FAINT,
  margin,
});

const body = (text, margin = [0, 4, 0, 0]) => ({
  text,
  font: "Text",
  fontSize: 8.7,
  color: MUTED,
  lineHeight: 1.28,
  margin,
});

function header() {
  return [
    {
      columns: [
        {
          width: "*",
          stack: [
            { text: profile.name, font: "Display", fontSize: 26, color: INK },
            {
              text: profile.title.toUpperCase(),
              font: "Text",
              fontSize: 8,
              characterSpacing: 1.6,
              color: FAINT,
              margin: [0, 7, 0, 0],
            },
          ],
        },
        {
          width: "auto",
          alignment: "right",
          font: "Text",
          fontSize: 8.5,
          color: MUTED,
          lineHeight: 1.5,
          stack: [
            { text: profile.email, link: `mailto:${profile.email}` },
            { text: profile.links.linkedin.handle, link: profile.links.linkedin.href },
            { text: profile.links.github.handle, link: profile.links.github.href },
            { text: profile.location, color: FAINT },
          ],
        },
      ],
    },
    rule(CONTENT_WIDTH, RULE, 16),
  ];
}

function profileSection() {
  const [lede, , , closing] = profile.about;

  return [
    heading("Profile"),
    body(lede, [0, 0, 0, 0]),
    body(closing, [0, 7, 0, 0]),
    {
      columns: profile.facts.map((fact) => ({
        width: "*",
        stack: [
          {
            text: fact.label.toUpperCase(),
            font: "Text",
            fontSize: 7,
            characterSpacing: 1.1,
            color: FAINT,
          },
          { text: fact.value, font: "Text", fontSize: 8.5, color: INK, margin: [0, 3, 0, 0] },
        ],
      })),
      columnGap: 18,
      margin: [0, 11, 0, 0],
    },
  ];
}

function experienceSection() {
  const content = [heading("Experience")];

  companies.forEach((company, index) => {
    content.push(
      titledRow(company.name, company.period, {
        size: 10.5,
        margin: [0, index === 0 ? 0 : 13, 0, 0],
      }),
      meta(`${company.location} / ${company.arrangement}`),
    );

    company.roles.forEach((role) => {
      content.push({
        margin: [12, 7, 0, 0],
        stack: [
          titledRow(role.title, role.period, { size: 9.5 }),
          body(role.summary, [0, 3, 0, 0]),
          meta(role.tech.join("   /   "), [0, 4, 0, 0]),
        ],
      });
    });
  });

  return content;
}

function projectsSection() {
  // Commercial work is already covered by the roles above, so only the
  // projects that can be looked at in public get their own entry.
  const publicProjects = projects.filter((project) => project.links?.length);
  if (publicProjects.length === 0) return [];

  const content = [heading("Projects")];

  publicProjects.forEach((project, index) => {
    content.push({
      margin: [0, index === 0 ? 0 : 10, 0, 0],
      stack: [
        titledRow(project.title, project.period, { size: 10 }),
        body(project.summary, [0, 4, 0, 0]),
        meta(project.tech.join("   /   "), [0, 4, 0, 0]),
        {
          margin: [0, 4, 0, 0],
          text: project.links.map((link, linkIndex) => [
            linkIndex > 0 ? { text: "   /   ", color: FAINT } : "",
            { text: link.href.replace("https://", ""), link: link.href, color: ACCENT },
          ]),
          font: "Text",
          fontSize: 8.5,
        },
      ],
    });
  });

  return content;
}

function skillsSection() {
  return [
    heading("Skills"),
    ...skillGroups.map((group, index) => ({
      columns: [
        { width: 104, text: group.title, font: "Text", fontSize: 9, bold: true, color: INK },
        {
          width: "*",
          text: group.items.join("   ·   "),
          font: "Text",
          fontSize: 8.7,
          color: MUTED,
          lineHeight: 1.3,
        },
      ],
      margin: [0, index === 0 ? 0 : 6, 0, 0],
    })),
  ];
}

function educationSection() {
  return [
    heading("Education"),
    titledRow(education.institution, education.period, { size: 10 }),
    body(`${education.qualification} / ${education.field}`, [0, 3, 0, 0]),
    meta(education.note),
  ];
}

const fonts = await loadFonts();

if (!fonts) {
  process.exit(0);
}

// pdfmake wants file names rather than buffers, so the downloaded faces are
// registered in its in-memory file system first.
const descriptors = {};

for (const [family, weights] of Object.entries(fonts)) {
  descriptors[family] = {};

  for (const [weight, buffer] of Object.entries(weights)) {
    const name = `${family}-${weight}.ttf`;
    pdfmake.virtualfs.writeFileSync(name, buffer);
    descriptors[family][weight] = name;
  }
}

pdfmake.setFonts(descriptors);
pdfmake.setUrlAccessPolicy(() => false);
pdfmake.setLocalAccessPolicy(() => false);

const outputDirectory = path.join(root, "public");
const outputPath = path.join(outputDirectory, cvFileName);
fs.mkdirSync(outputDirectory, { recursive: true });

const document = pdfmake.createPdf({
  pageSize: "A4",
  pageMargins: [PAGE_MARGIN, PAGE_MARGIN, PAGE_MARGIN, 36],
  info: {
    title: `${profile.name}, ${profile.title}`,
    author: profile.name,
    subject: "Curriculum vitae",
  },
  defaultStyle: { font: "Text", fontSize: 9, color: INK },
  footer: (currentPage, pageCount) => ({
    columns: [
      { width: "*", text: `${profile.name} / ${profile.title}` },
      { width: "auto", text: `${currentPage} of ${pageCount}`, alignment: "right" },
    ],
    fontSize: 7.5,
    color: FAINT,
    margin: [PAGE_MARGIN, 12, PAGE_MARGIN, 0],
  }),
  content: [
    ...header(),
    ...profileSection(),
    ...experienceSection(),
    ...projectsSection(),
    ...skillsSection(),
    ...educationSection(),
  ],
});

await document.write(outputPath);
console.log(`Wrote ${path.relative(root, outputPath)}`);
