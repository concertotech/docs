// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Concerto Docs",
	tagline: "Concerto is a research & development initiative to enable Data Protocols - Custom and verifiable data-driven digital asset management.", // INITIAL TODO
	favicon: "img/favicon.ico",

	url: "https://docs.concerto.technology",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",
	trailingSlash: false,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "concertotech",
	projectName: "docs",
	deploymentBranch: "main",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lan g. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},
	plugins: [
		"docusaurus-plugin-sass",
		"@docusaurus/plugin-content-pages",
		"@docusaurus/plugin-debug",
		"@docusaurus/plugin-sitemap",
		[
			"@docusaurus/plugin-content-docs",
			{
				routeBasePath: "/",
				sidebarPath: require.resolve("./sidebars.js"),
				// Please change this to your repo.
				// Remove this to remove the "edit this page" links.
				editUrl:
					// INITIAL TODO change this to your repo. This is where a user will be redirected to if they follow the link on "edit this page"
					"https://github.com/concertotech/docs/tree/main/"
			}
		],
		// This plugin enables tailwind
		async function myPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				}
			};
		}
	],
	// algolia: { // INITIAL TODO to activate algolia search. Fill according to your needs
	//     appId: '',
	//     apiKey: '',
	//     indexName: '',
	//     contextualSearch: true,
	// },

	themes: [
		[
			path.resolve(__dirname, "./node_modules/@docusaurus/theme-classic"),
			{
				customCss: [
					require.resolve(
						"./node_modules/modern-normalize/modern-normalize.css"
					),
					require.resolve("./src/styles/custom.scss")
				]
			}
		]
		// path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'), // INITIAL TODO if needed to activate algolia
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// image: "img/docusaurus-social-card.jpg",
			navbar: {
				hideOnScroll: true,
				logo: {
					alt: "Site Logo", // no need to change, it's the default for accessibility reasons
					src: "/logos/ConcertoLogo.svg",
					srcDark: "/logos/ConcertoLogo_dark.svg", // INITIAL TODO
					target: "_self",
					width: "139",
					height: "44",
					href: "/"
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "log-store-network",
						label: "Logs Store Network",
						position: "left"
					},
					// Right side starts here
					{
						type: "search",
						position: "right"
					},
					{
						label: "Stay tuned",
						position: "right",
						items: [
							// 					{
							// 						type: "custom-iconLink",
							// 						position: "right",
							// 						icon: {
							// 							alt: "twitter logo",
							// 							src: `/logos/twitter.svg`,
							// 							href: "https://twitter.com/usher_web3",
							// 							target: "_blank"
							// 						}
							// 					},
							// 					{
							// 						type: "custom-iconLink",
							// 						position: "right",
							// 						icon: {
							// 							alt: "discord logo",
							// 							src: `/logos/discord.svg`,
							// 							href: "https://go.usher.so/discord",
							// 							target: "_blank"
							// 						}
							// 					},
							{
								href: "https://concerto.technology",
								label: "Our Homepage",
								target: "_blank",
								rel: null
							},
							{
								label: "Follow us",
								href: "https://twitter.com/usher_web3",
								target: "_blank",
								rel: null
							},
							{
								label: "Join our Discord server",
								href: "https://go.usher.so/discord",
								target: "_blank",
								rel: null
							},
							{
								label: "Discover Usher Labs",
								href: "https://linktr.ee/usher.so",
								target: "_blank",
								rel: null
							}
						]
					},
					{
						// INITIAL TODO may change if you would want different action from user
						type: "custom-cta",
						position: "right",
						label: "Return to Docs",
						target: "_blank",
						href: "https://concerto.technology/docs"
					},
					{
						type: "custom-separator",
						position: "right"
					},
					{
						type: "custom-iconLink",
						position: "right",
						icon: {
							alt: "github logo",
							src: `/logos/github.svg`,
							href: "https://github.com/concertotech/",
							target: "_blank"
						}
					},
				]
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
