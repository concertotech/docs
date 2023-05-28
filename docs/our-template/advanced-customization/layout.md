---
sidebar_position: 2
---

# Layout

## Custom Layout Overview

Our custom layout provides improvements in the following areas:

- Navigation Bar
- Side Bar
- Page Structure
- Table of Contents

While our provided default layout doesn't include a footer, we've provided instructions below on how to add one if needed. 

Our customizations utilize the Docusaurus "swizzling" feature, which allows you to override default components with custom ones. Our modifications are located in **`src/theme/*`** and **`src/styles/components/*`**. For more information on swizzling, refer to the **[Docusaurus documentation](https://docusaurus.io/docs/using-themes#swizzling-theme-components)**.

## Adding Components

### Footer

To add a footer to your project, follow the instructions in the **[Docusaurus documentation](https://docusaurus.io/docs/theme-classic#footer)**. To do so, update the **`docusaurus.config.js`** file with the necessary configurations for the footer component.

## Content Types

### Docs

To create a new documentation page in your project, use the **`docs`** folder. For more information about the difference between docs and pages, check out the **[Docusaurus documentation](https://docusaurus.io/docs/creating-pages#content-types)**.

### Pages

To create a new page in your project, refer to the **[Docusaurus documentation](https://docusaurus.io/docs/creating-pages)**. Pages are more suited for standalone content, such as landing pages or contact forms, whereas docs are better for organizing technical documentation.

### Blog and posts

To create a blog and add posts to it, follow the guide in the **[Docusaurus documentation](https://docusaurus.io/docs/blog)**.