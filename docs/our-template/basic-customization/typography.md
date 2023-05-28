---
sidebar_position: 2
---

# Typography

## How to change the typography

### Change tailwind configuration

In order to change the typography, you need to update the **`tailwind.config.ts`** file. Update the font arrays (sansFonts, serifFonts, monoFonts, etc.) with your preferred fonts.

```ts title="tailwind.config.ts"
/**
 * Control the fonts
 * If you include any Google fonts, you need to check
 */

// array means that is in order of preference (if not available, go to next)
const sansFonts = ["DM Sans", "Helvetica Neue", "sans-serif"];
const serifFonts = ["Liberation Serif", "Georgia", "serif"];
const monoFonts = ["Liberation Mono", "Courier New", "monospace", "monospace"];
const fonts = {
  title: ["Basier Circle", ...sansFonts],
  body: sansFonts,
  sans: sansFonts,
  serif: serifFonts,
  mono: monoFonts
};

```

### Make fonts available

**Using fonts available on the Google Fonts list**

1. Visit the **[Google Fonts website](https://fonts.google.com/)**.
2. Select the fonts you want to use and follow the instructions to obtain the URL for the selected fonts.
3. Include the URL in the **`src/styles/typography.scss`** file.

Example:

```scss title="src/styles/typography.scss"
/**
  INITIAL TODO - If you included some different fonts on tailwind.config.ts,
  you may need to add them here.
 */

// include fonts available on Google Fonts or other sources
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap");

```

**Using fonts unavailable on the Google Fonts list**

:::warning
This is an advanced customization. Skip this section if you don't need it.
:::

1. Download the font files you want to use.
2. Add the font files to the **`static/fonts/`** folder.
3. Include the fonts in the **`src/styles/typography.scss`** file.

Example:

```scss title="src/styles/typography.scss"
// Fonts that were included directly in the project assets
// i.e.: not available on Google Fonts, so we had to download it
// You first need to include them there, then add them here to be available to css
// Recommended path: /static/fonts/<...>

@font-face {
  font-family: "Basier Circle";
  src: url("/static/fonts/BasierCircle/Basier_Circle_Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}
// one of this for each family and style to be included

```

:::info
You may want to fine-tune the typography of your site, tweaking directly to styles and components. This is an advanced feature. Refer to the **[Docusaurus theme customization documentation](https://docusaurus.io/docs/styling-layout#styling-your-site-with-css)** for more information.
:::

## Typography examples

There are not many families of typography used in the documentation. One for headings, another for paragraphs and other texts, and one for code.

# This is a heading 1

## This is a heading 2

### This is a heading 3

This is a paragraph

Another paragraph with **bold**, *italics*, and **`monospace/code`** examples