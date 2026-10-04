import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import pdfmake from "pdfmake";
import { loadFonts } from "./fonts.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const load = (file) => import(pathToFileURL(path.join(root, "src/data", file)).href);

const { profile, cvFileName, siteUrl } = await load("profile.ts");
const { companies, education, courses } = await load("experience.ts");
const { projects } = await load("projects.ts");
const { skillGroups } = await load("skills.ts");
const { dictionaries } = await load("dictionary.ts");

const INK = "#0c0d0e";
const MUTED = "#3d4045";
const FAINT = "#64686e";
const ACCENT = "#2531e0";
const RULE = "#cdd0d1";

const PAGE_MARGIN = 42;
const CONTENT_WIDTH = 595.28 - PAGE_MARGIN * 2;
const KEY_WIDTH = 92;

const hasPublicUrl = !siteUrl.includes("localhost");

function build(locale) {
  const tr = (value) => (typeof value === "string" ? value : value[locale]);
  const dict = dictionaries[locale];

  const line = (width = CONTENT_WIDTH, color = RULE, weight = 0.6, top = 0) => ({
    canvas: [{ type: "line", x1: 0, y1: 0, x2: width, y2: 0, lineWidth: weight, lineColor: color }],
    margin: [0, top, 0, 0],
  });

  const mono = (text, options = {}) => ({
    text,
    font: "Mono",
    fontSize: options.size ?? 6.8,
    color: options.color ?? FAINT,
    characterSpacing: options.spacing ?? 0.2,
    margin: options.margin ?? [0, 0, 0, 0],
    ...(options.link ? { link: options.link } : {}),
    ...(options.alignment ? { alignment: options.alignment } : {}),
  });

  const body = (text, margin = [0, 3, 0, 0], color = MUTED) => ({
    text,
    font: "Text",
    fontSize: 8.6,
    color,
    lineHeight: 1.24,
    margin,
  });

  let sectionIndex = 0;

  const heading = (text) => {
    sectionIndex += 1;
    return {
      stack: [
        line(CONTENT_WIDTH, INK, 1.1),
        {
          columns: [
            {
              width: KEY_WIDTH + 10,
              ...mono(`§${String(sectionIndex).padStart(2, "0")}`, { color: ACCENT, size: 7, margin: [0, 1.5, 0, 0] }),
            },
            {
              width: "*",
              text: text.toUpperCase(),
              font: "Display",
              bold: true,
              fontSize: 9,
              color: INK,
              characterSpacing: 0.4,
            },
          ],
          columnGap: 0,
          margin: [0, 5, 0, 0],
        },
      ],
      margin: [0, 16, 0, 9],
    };
  };

  const section = (title, [first, ...rest]) => [
    { unbreakable: true, stack: [heading(title), first] },
    ...rest,
  ];

  const keyed = (key, content, margin = [0, 0, 0, 0]) => ({
    columns: [
      { width: KEY_WIDTH, ...mono(key.toUpperCase(), { margin: [0, 1.6, 0, 0] }) },
      { width: "*", stack: Array.isArray(content) ? content : [content] },
    ],
    columnGap: 10,
    margin,
  });

  const bullets = (items) => ({
    margin: [0, 4, 0, 0],
    stack: items.map((item) => ({
      columns: [
        { width: 10, text: "→", font: "Mono", fontSize: 6.8, color: ACCENT, margin: [0, 1.2, 0, 0] },
        { width: "*", text: tr(item), font: "Text", fontSize: 8.6, color: INK, lineHeight: 1.25 },
      ],
      margin: [0, 1.2, 0, 0],
    })),
  });

  const stack = (items, margin = [0, 4, 0, 0]) => ({
    ...mono(items.join(" / "), { color: MUTED, margin, spacing: 0 }),
    lineHeight: 1.35,
  });

  const yearMonth = (value) => (value === "present" ? dict.now : value.replace("-", "."));

  function header() {
    const name = tr(profile.name).toUpperCase();
    const contacts = [
      [dict.location, tr(profile.location)],
      [dict.email, profile.email, `mailto:${profile.email}`],
      ...(profile.phone
        ? [
            [
              dict.phone,
              `${profile.phone.display}${profile.phone.messengers.length ? ` (${profile.phone.messengers.join(", ")})` : ""}`,
              profile.phone.href,
            ],
          ]
        : []),
      ["LinkedIn", profile.links.linkedin.href.replace("https://www.", ""), profile.links.linkedin.href],
      ["GitHub", profile.links.github.href.replace("https://", ""), profile.links.github.href],
      ["Telegram", profile.links.telegram.handle, profile.links.telegram.href],
      ...(hasPublicUrl ? [[dict.cv.portfolio, siteUrl.replace("https://", ""), siteUrl]] : []),
    ];

    return [
      {
        columns: [
          {
            width: "*",
            stack: [
              {
                columns: [
                  {
                    width: "auto",
                    text: name,
                    font: "Display",
                    bold: true,
                    fontSize: 24,
                    color: INK,
                    characterSpacing: -0.4,
                  },
                  { width: 12, canvas: [{ type: "rect", x: 0, y: 6, w: 12, h: 17, color: ACCENT }] },
                ],
                columnGap: 5,
              },
              mono(dict.cv.desiredPosition.toUpperCase(), { margin: [0, 12, 0, 0] }),
              {
                text: tr(profile.position),
                font: "Text",
                bold: true,
                fontSize: 11,
                color: INK,
                margin: [0, 2, 0, 0],
              },
              {
                text: tr(profile.availability),
                font: "Text",
                fontSize: 8.6,
                color: MUTED,
                margin: [0, 2, 0, 0],
              },
            ],
          },
          {
            width: 190,
            stack: contacts.map(([key, value, link]) => ({
              columns: [
                { width: 52, ...mono(key.toUpperCase(), { margin: [0, 1.4, 0, 0] }) },
                {
                  width: "*",
                  text: value,
                  font: "Text",
                  fontSize: 8.2,
                  color: link ? INK : MUTED,
                  ...(link ? { link } : {}),
                },
              ],
              columnGap: 6,
              margin: [0, 0, 0, 3],
            })),
          },
        ],
        columnGap: 20,
      },
    ];
  }

  function summary() {
    const paragraphs = profile.about.map(tr);
    const [lede] = paragraphs;
    const [product, closing] = paragraphs.slice(-2);
    return section(dict.cv.summary, [
      body(`${profile.intro.map(tr).join(" ")} ${lede}`, [0, 0, 0, 0], INK),
      body(product, [0, 5, 0, 0]),
      body(closing, [0, 5, 0, 0]),
    ]);
  }

  function skills() {
    const rows = [
      ...skillGroups.map((group) => [tr(group.title), group.items.map(tr).join("  ·  ")]),
      [
        dict.cv.languages,
        profile.languages.map((language) => `${tr(language.name)}: ${tr(language.level)}`).join("  ·  "),
      ],
    ];

    return section(
      dict.cv.skills,
      rows.map(([title, items], index) =>
        keyed(title, body(items, [0, 0, 0, 0], INK), [0, index === 0 ? 0 : 4.5, 0, 0]),
      ),
    );
  }

  function experience() {
    const content = [];

    companies.forEach((company, companyIndex) => {
      content.push({
        margin: [0, companyIndex === 0 ? 0 : 12, 0, 0],
        stack: [
          {
            columns: [
              {
                width: "*",
                text: tr(company.name),
                font: "Display",
                bold: true,
                fontSize: 10.5,
                color: INK,
              },
              {
                width: "auto",
                ...mono(
                  `${tr(company.period)}  ·  ${tr(company.location)}  ·  ${tr(company.arrangement)}`.toUpperCase(),
                  { margin: [0, 2.5, 0, 0] },
                ),
              },
            ],
          },
          line(CONTENT_WIDTH, INK, 0.6, 4),
        ],
      });

      company.roles.forEach((role, roleIndex) => {
        content.push({
          margin: [0, 7, 0, 0],
          unbreakable: role.duties.length < 5,
          stack: [
            ...(roleIndex > 0 ? [line(CONTENT_WIDTH - KEY_WIDTH - 10, RULE, 0.5)] : []).map((rule) => ({
              ...rule,
              margin: [KEY_WIDTH + 10, 0, 0, 7],
            })),
            keyed(`${yearMonth(role.start)} → ${yearMonth(role.end)}`, [
              { text: role.title, font: "Text", bold: true, fontSize: 9.6, color: INK },
              body(tr(role.summary), [0, 2, 0, 0]),
              bullets(role.duties),
              stack(role.tech),
            ]),
          ],
        });
      });
    });

    const [companyHeader, firstRole, ...rest] = content;
    return section(dict.cv.experience, [{ stack: [companyHeader, firstRole] }, ...rest]);
  }

  function personalProjects() {
    const items = projects.filter((project) => project.personal);
    if (items.length === 0) return [];

    return section(
      dict.cv.projects,
      items.map((project, index) => ({
        margin: [0, index === 0 ? 0 : 9, 0, 0],
        unbreakable: true,
        stack: [
          keyed(tr(project.period), [
            { text: tr(project.title), font: "Text", bold: true, fontSize: 9.6, color: INK },
            body(tr(project.summary), [0, 2, 0, 0]),
            stack(project.tech),
            {
              margin: [0, 3, 0, 0],
              text: (project.links ?? []).flatMap((link, linkIndex) => [
                linkIndex > 0 ? { text: "   ", color: FAINT } : "",
                { text: `${tr(link.label)}: `, color: FAINT },
                { text: link.href.replace("https://", ""), link: link.href, color: ACCENT },
              ]),
              font: "Text",
              fontSize: 7.8,
            },
          ]),
        ],
      })),
    );
  }

  function educationAndCourses() {
    return section(`${dict.cv.education} / ${dict.cv.courses}`, [
      {
        unbreakable: true,
        stack: [
          keyed(tr(education.period), [
            { text: tr(education.institution), font: "Text", bold: true, fontSize: 9.6, color: INK },
            body(`${tr(education.field)}. ${tr(education.qualification)}. ${tr(education.note)}`, [0, 2, 0, 0]),
          ]),
          ...courses.map((course) =>
            keyed(
              tr(course.period),
              [
                {
                  text: `${tr(course.title)}, ${course.provider}`,
                  font: "Text",
                  bold: true,
                  fontSize: 9.6,
                  color: INK,
                },
                body(tr(course.note), [0, 2, 0, 0]),
              ],
              [0, 8, 0, 0],
            ),
          ),
        ],
      },
    ]);
  }

  return {
    pageSize: "A4",
    pageMargins: [PAGE_MARGIN, PAGE_MARGIN, PAGE_MARGIN, 40],
    info: {
      title: `${tr(profile.name)}, ${profile.title}`,
      author: tr(profile.name),
      subject: dict.cv.subject,
    },
    defaultStyle: { font: "Text", fontSize: 8.6, color: INK },
    footer: (currentPage, pageCount) => ({
      columns: [
        { width: "*", text: `${tr(profile.name).toUpperCase()}  ·  ${profile.title.toUpperCase()}` },
        {
          width: "auto",
          text: `${currentPage} ${dict.cv.of} ${pageCount}`,
          alignment: "right",
        },
      ],
      font: "Mono",
      fontSize: 6.4,
      color: FAINT,
      margin: [PAGE_MARGIN, 16, PAGE_MARGIN, 0],
    }),
    content: [
      ...header(),
      ...summary(),
      ...skills(),
      ...experience(),
      ...personalProjects(),
      ...educationAndCourses(),
    ],
  };
}

const fonts = await loadFonts();

if (!fonts) {
  process.exit(0);
}

const descriptors = {};

for (const [family, styles] of Object.entries(fonts)) {
  descriptors[family] = {};

  for (const [style, buffer] of Object.entries(styles)) {
    const name = `${family}-${style}.ttf`;
    pdfmake.virtualfs.writeFileSync(name, buffer);
    descriptors[family][style] = name;
  }
}

pdfmake.setFonts(descriptors);
pdfmake.setUrlAccessPolicy(() => false);
pdfmake.setLocalAccessPolicy(() => false);

const outputDirectory = path.join(root, "public");
fs.mkdirSync(outputDirectory, { recursive: true });

for (const [locale, fileName] of Object.entries(cvFileName)) {
  const outputPath = path.join(outputDirectory, fileName);
  await pdfmake.createPdf(build(locale)).write(outputPath);
  console.log(`Wrote ${path.relative(root, outputPath)}`);
}
