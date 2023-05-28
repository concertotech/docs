---
sidebar_position: 1
---

# Colors

:::note
If you change the color settings, this doc will be live updated on you local environment for testing purposes
:::

We've simplified color customization in this template by defining three main colors (primary, secondary, emphasis) and some functional ones (info, warning, danger, success).



| Name      | Usage                      | Color                                          |
| --------- | -------------------------- | ---------------------------------------------- |
| Primary   | Main theme color           | <div class="bg-primary inset-0">&nbsp;</div>   |
| Secondary | Supporting theme color     | <div class="bg-secondary inset-0">&nbsp;</div> |
| Emphasis  | Highlighted elements       | <div class="bg-emphasis inset-0">&nbsp;</div>  |
| Info      | Informational elements     | <div class="bg-info inset-0">&nbsp;</div>      |
| Warning   | Warning messages           | <div class="bg-warning inset-0">&nbsp;</div>   |
| Danger    | Error or critical messages | <div class="bg-danger inset-0">&nbsp;</div>    |
| Success   | Success messages           | <div class="bg-success inset-0">&nbsp;</div>   |

You don't need to deal with different shades, as this is handled automatically.

| Lightest                                                | Lighter                                                | Light                                                | Base                                           | Dark                                                | Darker                                                | Darkest                                                |
|---------------------------------------------------------|--------------------------------------------------------|------------------------------------------------------|------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|--------------------------------------------------------|
| <div class="bg-primary-lightest inset-0">&nbsp;</div>   | <div class="bg-primary-lighter inset-0">&nbsp;</div>   | <div class="bg-primary-light inset-0">&nbsp;</div>   | <div class="bg-primary inset-0">&nbsp;</div>   | <div class="bg-primary-dark inset-0">&nbsp;</div>   | <div class="bg-primary-darker inset-0">&nbsp;</div>   | <div class="bg-primary-darkest inset-0">&nbsp;</div>   |
| <div class="bg-secondary-lightest inset-0">&nbsp;</div> | <div class="bg-secondary-lighter inset-0">&nbsp;</div> | <div class="bg-secondary-light inset-0">&nbsp;</div> | <div class="bg-secondary inset-0">&nbsp;</div> | <div class="bg-secondary-dark inset-0">&nbsp;</div> | <div class="bg-secondary-darker inset-0">&nbsp;</div> | <div class="bg-secondary-darkest inset-0">&nbsp;</div> |
| <div class="bg-emphasis-lightest inset-0">&nbsp;</div>  | <div class="bg-emphasis-lighter inset-0">&nbsp;</div>  | <div class="bg-emphasis-light inset-0">&nbsp;</div>  | <div class="bg-emphasis inset-0">&nbsp;</div>  | <div class="bg-emphasis-dark inset-0">&nbsp;</div>  | <div class="bg-emphasis-darker inset-0">&nbsp;</div>  | <div class="bg-emphasis-darkest inset-0">&nbsp;</div>  |
| <div class="bg-info-lightest inset-0">&nbsp;</div>      | <div class="bg-info-lighter inset-0">&nbsp;</div>      | <div class="bg-info-light inset-0">&nbsp;</div>      | <div class="bg-info inset-0">&nbsp;</div>      | <div class="bg-info-dark inset-0">&nbsp;</div>      | <div class="bg-info-darker inset-0">&nbsp;</div>      | <div class="bg-info-darkest inset-0">&nbsp;</div>      |
| <div class="bg-warning-lightest inset-0">&nbsp;</div>   | <div class="bg-warning-lighter inset-0">&nbsp;</div>   | <div class="bg-warning-light inset-0">&nbsp;</div>   | <div class="bg-warning inset-0">&nbsp;</div>   | <div class="bg-warning-dark inset-0">&nbsp;</div>   | <div class="bg-warning-darker inset-0">&nbsp;</div>   | <div class="bg-warning-darkest inset-0">&nbsp;</div>   |
| <div class="bg-danger-lightest inset-0">&nbsp;</div>    | <div class="bg-danger-lighter inset-0">&nbsp;</div>    | <div class="bg-danger-light inset-0">&nbsp;</div>    | <div class="bg-danger inset-0">&nbsp;</div>    | <div class="bg-danger-dark inset-0">&nbsp;</div>    | <div class="bg-danger-darker inset-0">&nbsp;</div>    | <div class="bg-danger-darkest inset-0">&nbsp;</div>    |
| <div class="bg-success-lightest inset-0">&nbsp;</div>   | <div class="bg-success-lighter inset-0">&nbsp;</div>   | <div class="bg-success-light inset-0">&nbsp;</div>   | <div class="bg-success inset-0">&nbsp;</div>   | <div class="bg-success-dark inset-0">&nbsp;</div>   | <div class="bg-success-darker inset-0">&nbsp;</div>   | <div class="bg-success-darkest inset-0">&nbsp;</div>   |

## Color Usage Examples

### Primary

| head1      | head2 | head3 |
| ---------- | ----- | ----- |
| borders of | this  | table |

- Side bar details
- Links as [this one](https://usher.so/)
-

### Secondary

:::note
a note with secondary colors
:::

background of text that are `inside code format` also are secondary

### Emphasis

Hover on that beautiful click-to-action button on navigation bar

### Danger

:::danger
Wait! it's dangerous!
:::

### Info

:::info
Something useful to know
:::

### Success

:::success
Good job!
:::

### Warning

:::caution
Be careful!
:::

## Customizing colors

To customize the main and functional colors, modify the following code block in the tailwind.config.ts file. We recommend using this method to ensure good defaults, but if you need more specific control, refer to the advanced customization guides.

```ts title=/tailwind.config.ts
...
	...generateColorShades("primary", "#0077ff"),
	...generateColorShades("secondary", "#fac900"),
	...generateColorShades("emphasis", "#c24943"),

	...generateColorShades("warning", "#f6c343"),
	...generateColorShades("info", "#3296f3"),
	...generateColorShades("success", "#22c55e"),
	...generateColorShades("danger", "#d23c3c"),
...
```
