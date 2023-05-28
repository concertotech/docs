---
sidebar_position: 1
---

# Routes & Content

Before proceeding, make sure you have read the content of [Basic Docusaurus tutorial](/category/tutorial---basics), as this document only provides a concise summary.

This guide will help you quickly add new routes, pages, and modify the sidebar for your documentation template.

### Frontmatter, Markdown, and MDX

Each Markdown (**`.md`**) or MDX (**`.mdx`**) file has a set of properties enclosed in **`---`** called **frontmatter** that contains metadata about the file. MDX extends Markdown and allows you to use JSX within your content.

For more information about frontmatter properties and MDX, refer to Docusaurus' **[official documentation](https://docusaurus.io/docs/markdown-features/frontmatter)**.

### Useful Frontmatter Properties

- **`sidebar_position`**: Sets the position of the page within the sidebar.
- **`title`**: Specifies the title of the page. If not provided, the first heading level 1 (e.g., **`# My Title`**) will be used as the title.
- **`slug`**: Defines the URL path of the page. When omitted, the folder path relative to **`docs`** or **`src/pages`** is used.

### Repository Structure

Your documentation's main content resides in the **`docs`** directory, while static pages like custom error pages or landing pages can be found in the **`src/pages`** directory (although our default template doesn't include any pages).

### Sidebar and Navigation

The **`sidebars.js`** file controls the sidebar, determining the structure and order of your documentation pages. Ensure you add new sidebars to the navigation bar in **`docusaurus.config.js`**.

### Titles and Slugs Relation

Use the **`title`** property in the frontmatter to define titles. If not provided, the first heading level 1 (e.g., **`# My Title`**) will be used as the title.

To customize a page's URL, use the **`slug`** property. For example, to make a page the homepage, set **`slug: /`**. When omitted, the folder path relative to **`docs`** or **`src/pages`** is used.