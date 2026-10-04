const GOOGLE_FONTS = "https://fonts.googleapis.com/css2";

async function fetchFamily(family, weights) {
  const query = `${family}:wght@${weights.join(";")}`;
  const css = await fetch(`${GOOGLE_FONTS}?family=${encodeURIComponent(query)}`, {
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

const family = (normal, bold = normal) => ({
  normal,
  bold,
  italics: normal,
  bolditalics: bold,
});

export async function loadFonts() {
  try {
    const [displayRegular, displayBold] = await fetchFamily("Unbounded", [400, 600]);
    const [textRegular, textBold] = await fetchFamily("IBM Plex Sans", [400, 600]);
    const [mono] = await fetchFamily("Martian Mono", [400]);

    return {
      Display: family(displayRegular, displayBold),
      Text: family(textRegular, textBold),
      Mono: family(mono),
    };
  } catch (error) {
    console.warn(`Could not download the fonts, keeping the existing CV: ${error.message}`);
    return null;
  }
}
