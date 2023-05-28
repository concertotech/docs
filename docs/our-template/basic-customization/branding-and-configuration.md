---
sidebar_position: 3
---

# Branding & Configuration

## Project specific updates

Search for **`INITIAL TODO`** comments in your project files to quickly locate and edit the configuration appropriately

Example:
```ts docusaurus.config.js
...
	title: "My Usher Site", // INITIAL TODO
	tagline: "My project will solve this the best way possible.", // INITIAL TODO
	favicon: "img/favicon.ico" // INITIAL TODO don't forget to change your favicon for this project, if needed
...

```

## Logo

It is recommended to use an SVG file for the logo, as it scales better on different screen sizes. Providing a dark version of the logo is also suggested for better visibility on dark-themed layouts. Store them at `static` folder.

For generating a favicon, use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/) to create optimized icons for various platforms and devices.

## Project links

Configure links to your project's GitHub repository and other relevant resources in the **`docusaurus.config.js`** file. This helps users quickly access your project's source code and other important information.

## Sidebar

To configure the sidebar, edit the **`sidebars.js`** file. You can find more details on how to customize the sidebar in the **[Docusaurus official documentation](https://docusaurus.io/docs/sidebar)**.

## Navigation Bar

Customize the navigation bar by editing the **`navbar`** object in the **`themeConfig`** section of **`docusaurus.config.js`**. Include links to your GitHub repository, Twitter, and other relevant resources. For more information, refer to the [official Docusaurus documentation on Navbar](https://docusaurus.io/docs/api/themes/configuration#navbar).

## Search feature

To enable the search feature, activate the Algolia Docsearch plugin by uncommenting the **`algolia`** object in **`docusaurus.config.js`** and filling in the required `appId`, `apiKey`, and `indexName` fields. The search feature is free for open-source projects. You can learn more about setting up Algolia Docsearch in the **[Docusaurus official documentation](https://docusaurus.io/docs/search#using-algolia-docsearch)**.
