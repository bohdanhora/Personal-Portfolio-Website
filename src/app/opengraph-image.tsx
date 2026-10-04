import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";

const name = t(profile.name, "en");
const lede = t(profile.intro[0] ?? "", "en");
const stack = "TYPESCRIPT / REACT / NEXT.JS / NESTJS / POSTGRESQL";
const handle = profile.links.github.href.replace("https://", "");

export const alt = `${name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  const glyphs = Array.from(new Set(text)).join("");

  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(glyphs)}`,
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
  const [display, mono] = await Promise.all([
    loadFont("Unbounded", 600, name.toUpperCase()),
    loadFont("Martian Mono", 400, [profile.title.toUpperCase(), stack, handle, lede].join("")),
  ]);

  const fonts = [
    display && { name: "Unbounded", data: display, style: "normal" as const, weight: 600 as const },
    mono && { name: "Martian Mono", data: mono, style: "normal" as const, weight: 400 as const },
  ].filter((font) => font !== null);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f0f1ee",
        color: "#0c0d0e",
        padding: "56px 64px",
        fontFamily: "Martian Mono",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          borderTop: "2px solid #0c0d0e",
          borderBottom: "2px solid #0c0d0e",
          padding: "14px 0",
        }}
      >
        <div>{profile.title.toUpperCase()}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#2531e0" }}>
          <div style={{ width: 14, height: 14, backgroundColor: "#2531e0" }} />
          OPEN TO WORK
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", fontFamily: "Unbounded" }}>
        {name
          .toUpperCase()
          .split(" ")
          .map((word, index, words) => (
            <div
              key={word}
              style={{
                display: "flex",
                alignItems: "flex-end",
                fontSize: 150,
                lineHeight: 0.95,
                letterSpacing: -5,
              }}
            >
              {word}
              {index === words.length - 1 ? (
                <div
                  style={{
                    width: 62,
                    height: 106,
                    backgroundColor: "#2531e0",
                    marginLeft: 14,
                    marginBottom: 12,
                  }}
                />
              ) : null}
            </div>
          ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 19,
          color: "#42454a",
          borderTop: "1px solid #cdd0d1",
          paddingTop: 18,
        }}
      >
        <div>{stack}</div>
        <div>{handle}</div>
      </div>
    </div>,
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
