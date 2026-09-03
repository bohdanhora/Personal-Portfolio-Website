import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const eyebrow = profile.title.toUpperCase();
const lede = profile.intro[0] ?? "";
const handle = profile.links.github.href.replace("https://", "");

/**
 * Pulls the display face used on the site so the share card matches it.
 * Only the glyphs on the card are requested. If the network is unavailable at
 * build time the card still renders with the default face.
 */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  const glyphs = Array.from(new Set([eyebrow, profile.name, lede, profile.location, handle].join(""))).join("");

  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Newsreader:wght@400&text=${encodeURIComponent(glyphs)}`,
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((response) => response.text());

    const url = /src: url\((?<url>[^)]+)\)/.exec(css)?.groups?.url;
    if (!url) return null;

    return await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const displayFont = await loadDisplayFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f3ef",
          color: "#1a1815",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 1, backgroundColor: "#a2593a" }} />
          <div style={{ fontSize: 21, letterSpacing: 4, color: "#736c5e" }}>{eyebrow}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 140, letterSpacing: -4, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 32, fontSize: 32, lineHeight: 1.4, color: "#5f594f" }}>
            {lede}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 23,
            color: "#736c5e",
            borderTop: "1px solid #ded8ce",
            paddingTop: 26,
          }}
        >
          <div>{profile.location}</div>
          <div>{handle}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: displayFont
        ? [{ name: "Newsreader", data: displayFont, style: "normal", weight: 400 }]
        : undefined,
    },
  );
}
