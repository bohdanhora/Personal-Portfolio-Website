/**
 * Downloads the display and text faces used on the site so the PDF is set in
 * the same typography. Falls back to the standard PDF faces when the network
 * is not available, which keeps a build from failing over a cosmetic detail.
 */
const GOOGLE_FONTS = "https://fonts.googleapis.com/css2";

async function fetchFamily(family, weights) {
  const query = `${family}:wght@${weights.join(";")}`;
  const css = await fetch(`${GOOGLE_FONTS}?family=${encodeURIComponent(query)}`, {
    // A plain agent makes Google serve TrueType rather than woff2.
    headers: { "User-Agent": "Mozilla/5.0" },
  }).then((response) => response.text());

  const faces = new Map();

  for (const block of css.split("@font-face")) {
    const weight = /font-weight:\s*(\d+)/.exec(block)?.[1];
    const url = /src:\s*url\(([^)]+)\)/.exec(block)?.[1];
    if (weight && url && !faces.has(weight)) {
      faces.set(weight, Buffer.from(await fetch(url).then((r) => r.arrayBuffer())));
    }
  }

  return weights.map((weight) => {
    const face = faces.get(String(weight));
    if (!face) throw new Error(`Missing ${family} ${weight}`);
    return face;
  });
}

export async function loadFonts() {
  try {
    const [serifRegular, serifBold] = await fetchFamily("Newsreader", [400, 600]);
    const [sansRegular, sansBold] = await fetchFamily("Inter", [400, 600]);

    return {
      Display: {
        normal: serifRegular,
        bold: serifBold,
        italics: serifRegular,
        bolditalics: serifBold,
      },
      Text: {
        normal: sansRegular,
        bold: sansBold,
        italics: sansRegular,
        bolditalics: sansBold,
      },
    };
  } catch (error) {
    console.warn(`Could not download the fonts, keeping the existing CV: ${error.message}`);
    return null;
  }
}
